import React, { useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import { Autocomplete, Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Slider, TextField, Typography } from '@mui/material';
import sumBy from 'lodash/sumBy'
import { Close, UploadFile } from '@mui/icons-material';
import { EXTENSIONS_BY_FILETYPE, INSTRUMENTS, KEYS, ROUTES, SCALES } from '../../constants';
import uniq from 'lodash/uniq'
import { API, Storage, graphqlOperation } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid'
import { useProfile } from '../../auth/hooks';
import { navigate } from 'gatsby';

type StemFormProps = {

};

const maxSize = 10000000;

const StemForm: React.FC<StemFormProps> = () => {
  const [myFiles, setMyFiles] = useState([])
  const { profile } = useProfile()

  function totalSizeValidator(file) {
    const fileSizeSum = sumBy([...myFiles, file], 'size')

    if (fileSizeSum > maxSize) {
      return {
        code: "upload-limit-exceeded",
        message: `Total size of files is greater than ${maxSize / 1000000}MB limit.`
      };
    }

    return null
  }

  const { acceptedFiles, fileRejections, getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: true,
    onDrop(acceptedFiles, fileRejections, event) {
      if (acceptedFiles.length === 0) return
      setMyFiles([...myFiles.concat(acceptedFiles)])
    },
    validator: totalSizeValidator,
    accept: { 'audio/*': ['.mid', '.mp3', '.ogg', '.wav'] }
  });
  const { register, control, handleSubmit, reset, trigger, setError, formState: { errors } } = useForm({
    // defaultValues: {}; you can populate the fields by this attribute 
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "stems"
  });

  const fileRejectionItems = fileRejections.map(({ file, errors }) =>
    errors.map(e => (
      <Box key={file.path + e}>
        <>
          <Typography color='error' key={e.code}>Cannot upload {file.path}</Typography>
          <Typography color='error' key={e.code}>{e.message}</Typography>
        </>
      </Box>
    ))
  );

  const submitHandler = async ({ stems = [] }) => {
    const stemGroupId = uuidv4()
    const stemMutations = []

    // TODO: handle errors
    for (let i = 0; i < myFiles.length; i++) {
      const file = myFiles[i]
      const stemId = uuidv4()
      const storageKey = `stems/${stemGroupId}/${stemId}`
      await Storage.put(storageKey, file, {
        contentType: file?.type
      })

      stemMutations.push(`mutation${i}: createStem(input: {
      id: "${stemId}",
      title: "${stems[i].title}",
      creatorEmail: "${profile?.email}",
      stemGroupId: "${stemGroupId}",
      filePath:  "${storageKey}",
      fileSize: ${myFiles[i].size},
      fileExtension: "${myFiles[i].type}",
      ${stems[i].bpm ? `bpm: ${stems[i].bpm},` : ""}
      ${stems[i].key ? `key: "${stems[i].key}",` : ""}
      ${stems[i].scale ? `scale: "${stems[i].scale}",` : ""}
      ${stems[i].instruments && stems[i].instruments.length ? `instruments: [${stems[i].instruments.map(instrument => `"${instrument}"`)}],` : ""}
      ${stems[i].notes ? `notes: """${stems[i].notes}""",` : ""}
    }) { id }`)
    }

    try {
      await API.graphql(graphqlOperation(`mutation createStems { ${stemMutations}}`))
      navigate(ROUTES.stems.path)

    } catch (error) {
      console.log({ error })
    }

  }

  return <Grid container className="container" justifyContent='center'>
    <Grid item xs={12}>
      <Grid container {...getRootProps({ className: 'dropzone' })} sx={{
        minHeight: 100,
        width: '100%',
        backgroundColor: isDragActive ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0.05)',
        border: '1px dashed black',
        display: 'flex',
        justifyContent: 'center',
        p: 2,
        mb: 3
      }}>
        <input {...getInputProps()} />
        <Grid item xs={12} textAlign='center'>
          <IconButton color="primary" aria-label="audio upload" component="span" size="large">
            <UploadFile fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item xs={12} textAlign='center'>
          {isDragActive ? <Typography>Drop....</Typography> :
            (<>
              <Typography>Drop stems here, up to <em>{maxSize / 1000000}MB</em> total.</Typography>
              <Typography>The following extensions are supported: {uniq(Object.values(EXTENSIONS_BY_FILETYPE)).sort().join(', ')}</Typography>
            </>)
          }
          <ul>{fileRejectionItems}</ul>

        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} md={10}>
      <form onSubmit={handleSubmit(submitHandler)}>
        {myFiles.map((item, index) => (
          <Grid container spacing={2} key={item.id} sx={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px', px: 1, py: 4, position: 'relative', mb: 4 }}>
            <IconButton type="button" sx={{ position: 'absolute', float: 'right', top: 1, right: 1 }} onClick={() => {
              setMyFiles([...myFiles.slice(0, index), ...myFiles.slice(index + 1)])
              remove(index)
            }}>{<Close />}</IconButton>
            <Grid item xs={9}>
              <TextField
                fullWidth
                label='Title'
                required
                {...register(`stems.${index}.title`, { required: true })}
                defaultValue={item?.name?.split('.')[0]}
                helperText={!!errors.title && 'Title is required'}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField disabled fullWidth label='Format' value={EXTENSIONS_BY_FILETYPE[item?.type]}></TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label='BPM'
                type='number'
                defaultValue={120}
                inputProps={{ min: 20, max: 300 }}
                {...register(`stems.${index}.bpm`)}
              />
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="key-select-label">Key</InputLabel>
                <Controller
                  control={control}
                  name={`stems.${index}.key`}
                  render={({ field }) =>
                    <Select
                      labelId="key-select-label"
                      label="Key"
                      fullWidth
                      defaultValue=''
                      {...field}
                    >
                      <MenuItem value=''>None</MenuItem>
                      {KEYS.map(key => <MenuItem key={key} value={key}>{key}</MenuItem>)}

                    </Select>

                  }
                ></Controller>
              </FormControl>

            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <Controller
                  control={control}
                  name={`stems.${index}.scale`}
                  render={({ field: { onChange, value } }) =>
                    <Autocomplete
                      freeSolo
                      fullWidth
                      options={SCALES}
                      onChange={(event, item) => onChange(item)}
                      value={value || null}
                      renderInput={(params) => <TextField {...params} label="Scale" />}
                    />
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <Controller
                  control={control}
                  name={`stems.${index}.instruments`}
                  render={({ field: { onChange, value = [] } }) =>
                    <Autocomplete
                      freeSolo
                      multiple
                      fullWidth
                      options={INSTRUMENTS}
                      onChange={(event, item) => onChange(item)}
                      value={value}
                      renderInput={(params) => <TextField {...params} label="Instruments" />}
                    />
                  }
                ></Controller>
              </FormControl>
            </Grid>
            <Grid item xs={9}>
              <Controller
                render={({ field }) => <TextField label="Notes" {...field} multiline rows={2} fullWidth />}
                name={`stems.${index}.notes`}
                control={control}
              />
            </Grid>
            <Grid item xs={3} alignSelf='center'>
              <TextField disabled fullWidth label='Size' value={item?.size >= 1000000 ? `${(item?.size / 1000000).toFixed(1)} MB` : `${(item.size / 1000).toFixed(1)} KB`}></TextField>
            </Grid>

          </Grid>
        ))}
        <Button
          type='submit'
          fullWidth
          size='large'
          variant='contained'
          disabled={(!myFiles.length)}>
          Upload
        </Button>
      </form>

    </Grid>
  </Grid>
}
export default StemForm;