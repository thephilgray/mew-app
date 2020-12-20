import React from 'react'
import { IconButton, Tooltip } from '@material-ui/core'
import { PhotoCamera, Close } from '@material-ui/icons'

const ImageUploader = ({
    inputImg,
    setInputImg,
}: {
    inputImg: string | undefined
    setInputImg: React.Dispatch<React.SetStateAction<string | undefined>>
}): JSX.Element => {
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!(e.target as HTMLInputElement).files && !(e.target as HTMLInputElement).files?.length) return
        // convert image file to base64 string
        const file = (e.target as HTMLInputElement).files?.[0]
        const reader: FileReader = new FileReader()

        reader.addEventListener(
            'load',
            () => {
                if (reader.result) {
                    setInputImg(reader.result.toString())
                }
            },
            false,
        )

        if (file) {
            reader.readAsDataURL(file)
        }
    }

    return (
        <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'flex-end' }}>
            <input id="imagePicker" type="file" accept="image/*" onChange={onInputChange} hidden />
            {inputImg ? (
                <Tooltip title="Close">
                    <span>
                        Don&apos;t Add Header Image
                        <IconButton
                            color="secondary"
                            aria-label="Close"
                            component="span"
                            onClick={() => setInputImg(undefined)}
                        >
                            <Close fontSize="large" />
                        </IconButton>
                    </span>
                </Tooltip>
            ) : (
                <Tooltip title="Select Image">
                    <label htmlFor="imagePicker">
                        Add Header Image
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera fontSize="large" />
                        </IconButton>
                    </label>
                </Tooltip>
            )}
        </div>
    )
}

export default ImageUploader
