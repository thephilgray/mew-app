import React, { useEffect, useState } from 'react'
import { Button, TextField, Grid } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers'
import { Editor } from '@tinymce/tinymce-react'
import { add } from 'date-fns'

type Inputs = {
    title: string
    description: string
    startDate: Date
    endDate: Date
}

export default function NewWorkshop(): JSX.Element {
    const { register, handleSubmit, errors, setValue } = useForm<Inputs>()
    const [description, setDescription] = useState<string | null>('')
    const [startDate, setStartDate] = useState<Date | null>(new Date())
    const [endDate, setEndDate] = useState<Date | null>(add(new Date(), { weeks: 1 }))

    const onSubmit = async (inputData: Inputs) => {
        console.log(inputData)
    }

    useEffect(() => {
        setValue('description', description)
        register({ name: 'description' })
    }, [description])

    useEffect(() => {
        setValue('startDate', startDate)
        register({ name: 'startDate' }, { required: true })
    }, [startDate])

    useEffect(() => {
        setValue('endDate', endDate)
        register({ name: 'endDate' }, { required: true })
    }, [endDate])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1>New Workshop</h1>
                </Grid>
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
                <Grid item xs={12}>
                    <Editor
                        initialValue="<p>Workshop Details</p>"
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
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" style={{ float: 'right' }}>
                        Create
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}
