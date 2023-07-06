import React, { useEffect } from 'react';
import { useSimplePlayer } from './audio-player.context';
import { IconButton } from '@mui/material';
import { Pause, PlayArrowTwoTone } from '@mui/icons-material';
import If from '../If';

type SimplePlayerProps = {};

const SimplePlayer: React.FC<SimplePlayerProps> = () => {
  const { audioSrc, playerRef, onEnded, pauseAudio } = useSimplePlayer()
  useEffect(() => () => pauseAudio(), [])
  return <If condition={!!audioSrc}>
    <audio hidden src={audioSrc} ref={playerRef} onEnded={onEnded} />
  </If>
}
export default SimplePlayer;

type SimplePlayerButtonProps = {
  audioPath: string
};

export const SimplePlayerButton: React.FC<SimplePlayerButtonProps> = ({ audioPath }) => {
  const { isPlaying, audioSrc, pauseAudio, playAudio } = useSimplePlayer()
  const showPause = isPlaying && audioSrc?.includes(audioPath);
  return <IconButton onClick={() => showPause ? pauseAudio() : playAudio(audioPath)}>
    {showPause ? <Pause /> : <PlayArrowTwoTone />}
  </IconButton>
}