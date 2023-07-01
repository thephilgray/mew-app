import React from 'react';
import { CircularProgress } from '@mui/material'

type LoadingProps = {

};

const Loading: React.FC<LoadingProps> = () => {

  return <CircularProgress sx={{
    position: 'absolute',
    top: '50%',
    left: '50%'
  }} />
}
export default Loading;