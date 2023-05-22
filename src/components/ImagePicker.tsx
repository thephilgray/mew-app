import React, { useEffect, useState } from 'react'
import Resizer from "react-image-file-resizer";
import { useProfile } from '../auth/hooks';
import { Storage } from 'aws-amplify';
import { Avatar, Box, IconButton, Skeleton } from '@mui/material';
import { Close } from '@mui/icons-material';

export const uploadImage = async ({ uploadPath, filename, uploadLevel = 'public', image }) => {
  Storage.configure({ level: uploadLevel })
  try {

    const imageResult = await fetch(image)
    const blob = await imageResult.blob()
    const file = new File([blob], filename)
    await Storage.put(uploadPath, file, {
      contentType: "image/jpeg",
    })
  } catch (error) {
    console.log(error)
  }
}



function ImagePicker({ imageURL = '', width, height, maxWidth, maxHeight, onChange, isAvatar = false }) {
  const [image, setImage] = useState<string>('')

  useEffect(() => {
    if (imageURL) {
      setImage(imageURL)
    }
  }, [imageURL])

  useEffect(() => {
    onChange({ image })
  }, [image])

  let fileInput = React.createRef();

  const onOpenFileDialog = () => {
    fileInput.current.click();
  };

  const resizeImage = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        maxWidth,
        maxHeight,
        "JPEG",
        100,
        0,
        (uri) => {
          setImage(uri)
        },
        "base64"
      );
    });



  const onProcessFile = async (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    try {
      await resizeImage(file);
    } catch (error) {
      console.log(error)
      onChange({ error })
    }
  };


  const onClear = e => {
    e.preventDefault()
    e.stopPropagation()
    setImage('')
  }

  const avatarDisplay = <Avatar
    src={image}
    sx={{
      width,
      height
    }
    }
  />

  const rectangularDisplay = image ? <img
    src={image}
    style={{
      width: '100%',
      height,
      maxWidth,
      maxHeight,
      margin: '0 auto'
    }
    } >
  </img > : <Skeleton variant="rectangular" width={width} height={height} animation={false} />


  return (
    <a onClick={onOpenFileDialog} style={{ cursor: 'pointer' }}>
      <Box sx={{ pt: 2, pb: 2, position: 'relative', width: 'fit-content', margin: '0 auto' }}>
        {image ? <IconButton sx={{ position: 'absolute', right: 0, m: 1, background: 'rgba(0, 0, 0, .5)', zIndex: '1000' }} onClick={onClear}>
          <Close htmlColor='#fff' />
        </IconButton> : null}
        {isAvatar ? avatarDisplay : rectangularDisplay}
        <input
          type="file"
          onChange={onProcessFile}
          ref={fileInput}
          hidden={true}
          accept="image/*"
        />
      </Box>
    </a >
  )
}

export default ImagePicker