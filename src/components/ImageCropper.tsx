import React, { useState } from 'react'
import Cropper from 'react-easy-crop'
import { getCroppedImg } from '../utils/cropImage'

const ImageCropper = ({
    getBlob,
    inputImg,
}: {
    getBlob: (b: Blob) => void
    inputImg: string | undefined
}): JSX.Element => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(2)

    /* onCropComplete() will occur each time the user modifies the cropped area, 
    which isn't ideal. A better implementation would be getting the blob 
    only when the user hits the submit button, but this works for now  */
    const onCropComplete = async (
        _croppedArea: unknown,
        croppedAreaPixels: { x: number; y: number; width: number; height: number },
    ) => {
        if (!inputImg) return
        const croppedImage = await getCroppedImg(inputImg, croppedAreaPixels)
        getBlob(croppedImage)
    }

    return (
        /* need to have a parent with `position: relative` 
    to prevent cropper taking up whole page */
        <div>
            <Cropper
                image={inputImg}
                crop={crop}
                zoom={zoom}
                aspect={3}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                style={{
                    containerStyle: {
                        position: 'relative',
                        height: '300px',
                        width: '100%',
                    },
                }}
            />
        </div>
    )
}

export default ImageCropper
