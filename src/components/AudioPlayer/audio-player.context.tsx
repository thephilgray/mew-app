
import React, { createContext, useContext, useRef, useState } from 'react'
import { ReactJkMusicPlayerAudioListProps } from 'react-jinke-music-player'
import { getCloudFrontURL } from '../../utils'
import { EXTENSIONS_BY_FILETYPE } from '../../constants'

export function useAudioPlayerContextState() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioLists, setAudioLists] = useState<Array<ReactJkMusicPlayerAudioListProps>>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const playerRef = useRef()

  return {
    isPlaying,
    setIsPlaying,
    audioLists,
    setAudioLists,
    currentIndex,
    setCurrentIndex,
    playerRef
  }
}

interface AudioPlayerContextState {
  isPlaying: Boolean
  setIsPlaying: React.Dispatch<React.SetStateAction<Boolean>>
  audioLists: Array<ReactJkMusicPlayerAudioListProps>
  setAudioLists: React.Dispatch<React.SetStateAction<Array<ReactJkMusicPlayerAudioListProps>>>
  currentIndex: number
  setCurrentIndex: React.Dispatch<React.SetStateAction<Number>>
  playerRef: React.RefObject<HTMLAudioElement>
}

export const AudioPlayerContext = createContext<AudioPlayerContextState>({
  isPlaying: false,
  setIsPlaying: () => { },
  audioLists: [],
  setAudioLists: () => { },
  currentIndex: 0,
  setCurrentIndex: () => { },
  playerRef: { current: null }
})

interface AudioPlayerProps {
  children: React.ReactNode
}

export const AudioPlayerProvider = ({ children }: AudioPlayerProps) => {
  const audioPlayerContextState = useAudioPlayerContextState()

  return <AudioPlayerContext.Provider value={audioPlayerContextState}>
    {children}
  </AudioPlayerContext.Provider>
}

// hooks

export const usePlayingState = () => {
  const { isPlaying, setIsPlaying } = useContext(AudioPlayerContext);
  return [isPlaying, setIsPlaying];
}

export const useDownload = ({ assignmentId }) => async () => {
  const { audioLists, currentIndex } = useContext(AudioPlayerContext);
  const metaData = audioLists[currentIndex]
  if (!metaData.fileId) return
  const songFilePath = `${assignmentId}/${metaData.fileId}`
  // const result = await Storage.get(songFilePath, { download: true })
  // @ts-ignore
  // const url = window.URL.createObjectURL(result.Body)
  const cloudFrontURL = getCloudFrontURL(songFilePath)
  const result = await fetch(cloudFrontURL, { mode: 'no-cors' })
  // TODO: no-cors is not ideal because we won't be able to access ContentType headers to determine extension
  // const result = await fetch(cloudFrontURL)
  const blob = await result.blob()
  const url = window.URL.createObjectURL(blob)
  // @ts-ignore
  // const contentType = result.ContentType
  const contentType = result.headers.get('ContentType')
  // @ts-ignore
  const extension = EXTENSIONS_BY_FILETYPE[contentType || 'audio/mpeg']
  const a = document.createElement('a')
  a.href = url
  a.download = `${metaData.name} - ${metaData.singer}${extension}`
  const clickHandler = () => {
    setTimeout(() => {
      URL.revokeObjectURL(url)
      a.removeEventListener('click', clickHandler)
    }, 150)
  }
  a.addEventListener('click', clickHandler, false)
  a.click()
}