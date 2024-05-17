
import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { ReactJkMusicPlayerAudioListProps } from 'react-jinke-music-player'
import { getCloudFrontURL } from '../../utils'
import { EXTENSIONS_BY_FILETYPE } from '../../constants'
import { usePrevious } from 'react-use'
import { Track } from '../../API'

export function useAudioPlayerContextState() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioLists, setAudioLists] = useState<Array<ReactJkMusicPlayerAudioListProps>>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const playerRef = useRef(null)
  const [audioSrc, setAudioSrc] = useState(null)
  const [clonedPlaylistItems, setClonedPlaylistItems] = useState([])
  const [isWriting, setIsWriting] = useState(false)
  const [playlistId, setPlaylistId] = useState(null)
  const [assignmentId, setAssignmentId] = useState(null)
  const previousAssignmentId = usePrevious(assignmentId)
  const previousPlaylistId = usePrevious(playlistId)

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
    setClonedPlaylistItems,
    isWriting,
    setIsWriting,
    playlistId,
    setPlaylistId,
    assignmentId,
    setAssignmentId,
    previousAssignmentId,
    previousPlaylistId
  }
}

interface AudioPlayerContextState {
  isPlaying: boolean
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
  audioLists: Array<ReactJkMusicPlayerAudioListProps> | []
  setAudioLists: React.Dispatch<React.SetStateAction<Array<ReactJkMusicPlayerAudioListProps> | []>>
  currentIndex: number
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
  playerRef: React.RefObject<HTMLAudioElement>
  audioSrc: string | null
  setAudioSrc: React.Dispatch<React.SetStateAction<any>>
  clonedPlaylistItems: Array<Track> | []
  setClonedPlaylistItems: React.Dispatch<React.SetStateAction<Array<Track> | []>>
  isWriting: boolean
  setIsWriting: React.Dispatch<React.SetStateAction<boolean>>
  playlistId: string | null
  setPlaylistId: React.Dispatch<React.SetStateAction<string | null>>
  assignmentId: string | null
  setAssignmentId: React.Dispatch<React.SetStateAction<string | null>>
  previousAssignmentId: string | null
}

export const AudioPlayerContext = createContext<AudioPlayerContextState>({
  isPlaying: false,
  setIsPlaying: () => { },
  audioLists: [],
  setAudioLists: () => { },
  currentIndex: 0,
  setCurrentIndex: () => 0,
  playerRef: { current: null },
  audioSrc: null,
  setAudioSrc: () => null,
  clonedPlaylistItems: [],
  setClonedPlaylistItems: () => [],
  // connection to feedback, whether a user is writing a comment
  isWriting: false,
  setIsWriting: () => { },
  playlistId: null,
  setPlaylistId: () => { },
  assignmentId: null,
  setAssignmentId: () => { },
  previousAssignmentId: null
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

export const useDownload = ({ filePath, filename }: { filePath: string, filename: string }) => async () => {
  // const result = await Storage.get(songFilePath, { download: true })
  // @ts-ignore
  // const url = window.URL.createObjectURL(result.Body)
  const cloudFrontURL = getCloudFrontURL(filePath)
  const result = await fetch(cloudFrontURL)
  // TODO: no-cors is not ideal because we won't be able to access ContentType headers to determine extension
  // const result = await fetch(cloudFrontURL)
  const blob = await result.blob()
  const url = window.URL.createObjectURL(blob)
  // @ts-ignore
  // const contentType = result.ContentType
  const contentType = result.headers.get('Content-Type')
  // @ts-ignore
  const extension = EXTENSIONS_BY_FILETYPE[contentType || 'audio/mpeg']
  const a = document.createElement('a')
  a.href = url
  a.download = `${filename}${extension}`
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

  const playAudio = (audioPath: string | null) => {
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

// probably doesn't need to live in audio player context but this is fine for now
export const useWritingState = () => {
  const { isWriting, setIsWriting } = useContext(AudioPlayerContext)
  return [isWriting, setIsWriting]
}