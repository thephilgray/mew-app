import React, { useState } from 'react'
import Cropper from 'react-easy-crop'
import { getCroppedImg } from './cropImage'

const ImageCropper = ({
    getBlob,
    inputImg,
    height = '300px',
    width = '100%',
    cropShape = 'rect',
    aspect = 3
}: {
    getBlob: (b: Blob) => void
    inputImg: string | undefined,
    height: string | undefined,
    width: string | undefined
    cropShape: 'rect' | 'round',
    aspect: number | undefined
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
                restrictPosition={false}
                minZoom={0}
                cropShape={cropShape}
                image={inputImg}
                crop={crop}
                zoom={zoom}
                aspect={aspect}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                style={{
                    containerStyle: {
                        position: 'relative',
                        height,
                        width,
                    },
                }}
            />
        </div>
    )
}

export default ImageCropper
