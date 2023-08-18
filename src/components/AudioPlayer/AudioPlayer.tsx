import React, { useContext } from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import { AudioPlayerContext, useDownload } from './audio-player.context';


type AudioPlayerProps = {
};

const AudioPlayer: React.FC<AudioPlayerProps> = () => {
  const { playerRef, audioLists, setCurrentIndex, currentIndex, setIsPlaying, isWriting, setIsWriting } = useContext(AudioPlayerContext)
  const metaData = audioLists[currentIndex]
  const download = useDownload({
    filePath: `${metaData?.assignmentId}/${metaData?.fileId}`,
    filename: `${metaData?.name} - ${metaData?.singer}`
  })

  return <ReactJkMusicPlayer
    getAudioInstance={(instance) => {
      playerRef.current = instance
    }}
    mode={audioLists.length ? 'full' : 'mini'}
    sortableOptions={{
      delay: 300,
      delayOnTouchOnly: true
    }}
    // mobileMediaQuery="(max-width: 2000px)"
    preload
    audioLists={audioLists}
    autoPlay={true}
    autoPlayInitLoadPlayList={false}
    quietUpdate
    spaceBar
    playIndex={currentIndex}
    onPlayIndexChange={(playIndex) => {
      if (isWriting) {
        setIsWriting(false)
      }
      setCurrentIndex(playIndex)
    }}
    showMediaSession
    showThemeSwitch={false}
    showPlayMode={true}
    defaultVolume={1}
    defaultPosition={{ bottom: 16, right: 16 }}
    // volumeFade={{ fadeIn: 0, fadeOut: 0 }}
    showMiniProcessBar={false}
    showDownload={true}
    // showLyric={true}
    // @ts-ignore
    customDownloader={download}
    // drag={false}
    remove={false}
    onAudioPlay={() => {
      setIsPlaying(true)
    }}
    onAudioPause={() => {
      setIsPlaying(false)
    }}
    onAudioEnded={() => {
      setIsPlaying(false)
    }}
    onAudioProgress={(audioInfo) => {
      // pause write before the end of a track if user is writing a comment
      if (isWriting && audioInfo.currentTime > audioInfo.duration - .25) {
        playerRef.current?.pause()
      }
    }}
    onAudioAbort={() => {
      setIsPlaying(false)
    }}
    onAudioError={() => {
      setIsPlaying(false)
    }}
  />
}
export default AudioPlayer;