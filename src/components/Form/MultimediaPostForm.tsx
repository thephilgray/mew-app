import React, { useEffect, useState } from 'react'
import { Button, TextField, Grid } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers'
import { Editor } from '@tinymce/tinymce-react'
import { add } from 'date-fns'
import ImageUploader from '../lib/ImageUploader/ImageUploader'
import ImageCropper from '../lib/ImageUploader/ImageCropper'

// TODO: dynamically include field types based on props
export type Inputs = {
    title: string
    description: string
    startDate: Date
    endDate: Date
    required: boolean
    imageBlob?: Blob
    imageUrl?: string
}

export default function MultimediaPostForm({
    dateInputs,
    headerImage,
    editor,
    callback,
}: {
    dateInputs?: boolean
    headerImage?: boolean
    editor?: boolean
    callback: (inputData: Inputs) => Promise<void>
}): JSX.Element {
    const { register, handleSubmit, errors, setValue } = useForm<Inputs>()
    const [description, setDescription] = useState<string | null>('')
    const [startDate, setStartDate] = useState<Date | null>(new Date())
    const [endDate, setEndDate] = useState<Date | null>(add(new Date(), { weeks: 1 }))
    const [imageBlob, setImageBlob] = useState<Blob | null>(null)
    const [inputImg, setInputImg] = useState<string | undefined>()

    const onSubmit = async (inputData: Inputs) => {
        const payload = {
            ...inputData,
            startDate: startDate?.toISOString(),
            endDate: endDate?.toISOString(),
        }

        if (!dateInputs) {
            delete payload.startDate
            delete payload.endDate
        }
        // if image, upload image and then add url to payload
        if (imageBlob) {
            console.log(imageBlob)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const mockUploadFn = (b: Blob): Promise<string> =>
                new Promise((resolve) =>
                    resolve('https://worldstrides.com/wp-content/uploads/2015/12/iStock_000018118175_Large.jpg'),
                )

            if (imageBlob) {
                payload.imageUrl = await mockUploadFn(imageBlob)
            }
        }
        callback(payload)
    }

    useEffect(() => {
        setValue('startDate', startDate)
        register({ name: 'startDate' }, { required: true })
    }, [startDate])

    useEffect(() => {
        setValue('endDate', endDate)
        register({ name: 'endDate' }, { required: true })
    }, [endDate])

    useEffect(() => {
        setValue('description', description)
        register({ name: 'description' })
    }, [description])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={9}>
                    <TextField
                        fullWidth
                        label="Title"
                        name="title"
                        inputRef={register({ required: true })}
                        error={!!errors.title}
                        helperText={!!errors.title && <>Title is required</>}
                    />
                </Grid>
                {headerImage && (
                    <>
                        <Grid item xs={12} md={3}>
                            <ImageUploader setInputImg={setInputImg} inputImg={inputImg} />
                        </Grid>
                        {inputImg && (
                            <Grid item xs={12}>
                                <ImageCropper getBlob={setImageBlob} inputImg={inputImg} />
                            </Grid>
                        )}
                    </>
                )}
                {editor && (
                    <Grid item xs={12}>
                        <Editor
                            initialValue="<p>Details....</p>"
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount',
                                ],
                                toolbar:
                                    'undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | image | media | help',
                            }}
                            onEditorChange={setDescription}
                            apiKey="7n5kyei3ttoxuo2wna1yhi1558x6b4e9k4jpuwrusi1ce416"
                        />
                    </Grid>
                )}
                {dateInputs && (
                    <>
                        <Grid item xs={6}>
                            <KeyboardDatePicker
                                fullWidth
                                autoOk
                                error={!!errors.startDate}
                                inputVariant="outlined"
                                variant="inline"
                                format="MM/dd/yyyy"
                                label="Start date"
                                helperText={!!errors.startDate && <>Start date is required</>}
                                onChange={(date) => setStartDate(date)}
                                value={startDate}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <KeyboardTimePicker
                                id="start-time-picker"
                                label="Time"
                                fullWidth
                                value={startDate}
                                inputVariant="outlined"
                                autoOk
                                variant="inline"
                                onChange={setStartDate}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <KeyboardDatePicker
                                fullWidth
                                autoOk
                                error={!!errors.endDate}
                                inputVariant="outlined"
                                variant="inline"
                                format="MM/dd/yyyy"
                                label="End date"
                                helperText={!!errors.endDate && <>Start date is required</>}
                                onChange={(date) => setEndDate(date)}
                                value={endDate}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <KeyboardTimePicker
                                id="due-time-picker"
                                fullWidth
                                label="Time"
                                value={endDate}
                                inputVariant="outlined"
                                autoOk
                                variant="inline"
                                onChange={setEndDate}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>
                    </>
                )}

                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" style={{ float: 'right' }}>
                        Create
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}
