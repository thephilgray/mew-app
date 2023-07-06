
import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { ReactJkMusicPlayerAudioListProps } from 'react-jinke-music-player'
import { getCloudFrontURL } from '../../utils'
import { EXTENSIONS_BY_FILETYPE } from '../../constants'
import { usePrevious } from 'react-use'

export function useAudioPlayerContextState() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioLists, setAudioLists] = useState<Array<ReactJkMusicPlayerAudioListProps>>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const playerRef = useRef()
  const [audioSrc, setAudioSrc] = useState(null)
  const [clonedPlaylistItems, setClonedPlaylistItems] = useState([])

  return {
    isPlaying,
    setIsPlaying,
    audioLists,
    setAudioLists,
    currentIndex,
    setCurrentIndex,
    playerRef,
    audioSrc,
    setAudioSrc,
    clonedPlaylistItems,
    setClonedPlaylistItems
  }
}

interface AudioPlayerContextState {
  isPlaying: Boolean
  setIsPlaying: React.Dispatch<React.SetStateAction<Boolean>>
  audioLists: Array<ReactJkMusicPlayerAudioListProps>
  setAudioLists: React.Dispatch<React.SetStateAction<Array<ReactJkMusicPlayerAudioListProps>>>
  currentIndex: number
  setCurrentIndex: React.Dispatch<React.SetStateAction<Number>>
  playerRef: React.RefObject<HTMLAudioElement>,
  audioSrc: String | null,
  setAudioSrc: React.Dispatch<React.SetStateAction<String>>
  // clonedPlaylistItems: Array<> TODO: once src/models is re-generated
  // setClonedPlaylistItems TODO: once src/models is re-generated
}

export const AudioPlayerContext = createContext<AudioPlayerContextState>({
  isPlaying: false,
  setIsPlaying: () => { },
  audioLists: [],
  setAudioLists: () => { },
  currentIndex: 0,
  setCurrentIndex: () => { },
  playerRef: { current: null },
  audioSrc: null,
  setAudioSrc: () => { },
  clonedPlaylistItems: [],
  setClonedPlaylistItems: () => { }
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

export const useSimplePlayer = () => {
  const { playerRef, isPlaying, setIsPlaying, audioSrc, setAudioSrc } = useContext(AudioPlayerContext);
  const previousIsPlaying = usePrevious(isPlaying)
  const previousAudioSrc = usePrevious(audioSrc)

  const onEnded = () => {
    setIsPlaying(false)
    setAudioSrc(null)
  }

  const pauseAudio = () => {
    setIsPlaying(false)
    playerRef?.current?.pause()
  }

  const playAudio = (audioPath) => {
    pauseAudio()
    if (audioPath) {
      const src = getCloudFrontURL(audioPath)
      setAudioSrc(src)
      setIsPlaying(true)
    }
  }

  useEffect(() => {
    const trackChanged = audioSrc !== previousAudioSrc
    if (isPlaying && audioSrc && (!previousIsPlaying || trackChanged)) {
      playerRef?.current?.play()

    }
  }, [audioSrc, isPlaying, previousIsPlaying, previousAudioSrc])

  return {
    onEnded,
    isPlaying,
    pauseAudio,
    playAudio,
    playerRef,
    audioSrc
  }
}

export const useClonePlaylist = () => {
  const { clonedPlaylistItems, setClonedPlaylistItems } = useContext(AudioPlayerContext)
  const resetClonedPlaylistItems = () => setClonedPlaylistItems([])
  return { clonedPlaylistItems, setClonedPlaylistItems, resetClonedPlaylistItems }
}