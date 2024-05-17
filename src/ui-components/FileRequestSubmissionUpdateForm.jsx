/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getFileRequestSubmission } from "../graphql/queries";
import { updateFileRequestSubmission } from "../graphql/mutations";
export default function FileRequestSubmissionUpdateForm(props) {
  const {
    id: idProp,
    fileRequestSubmission: fileRequestSubmissionModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    artist: "",
    name: "",
    fileId: "",
    fileExtension: "",
    rating: "",
    lyrics: "",
    requestFeedback: false,
    duration: "",
  };
  const [artist, setArtist] = React.useState(initialValues.artist);
  const [name, setName] = React.useState(initialValues.name);
  const [fileId, setFileId] = React.useState(initialValues.fileId);
  const [fileExtension, setFileExtension] = React.useState(
    initialValues.fileExtension
  );
  const [rating, setRating] = React.useState(initialValues.rating);
  const [lyrics, setLyrics] = React.useState(initialValues.lyrics);
  const [requestFeedback, setRequestFeedback] = React.useState(
    initialValues.requestFeedback
  );
  const [duration, setDuration] = React.useState(initialValues.duration);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = fileRequestSubmissionRecord
      ? { ...initialValues, ...fileRequestSubmissionRecord }
      : initialValues;
    setArtist(cleanValues.artist);
    setName(cleanValues.name);
    setFileId(cleanValues.fileId);
    setFileExtension(cleanValues.fileExtension);
    setRating(cleanValues.rating);
    setLyrics(cleanValues.lyrics);
    setRequestFeedback(cleanValues.requestFeedback);
    setDuration(cleanValues.duration);
    setErrors({});
  };
  const [fileRequestSubmissionRecord, setFileRequestSubmissionRecord] =
    React.useState(fileRequestSubmissionModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
          await API.graphql({
            query: getFileRequestSubmission.replaceAll("__typename", ""),
            variables: { id: idProp },
          })
        )?.data?.getFileRequestSubmission
        : fileRequestSubmissionModelProp;
      setFileRequestSubmissionRecord(record);
    };
    queryData();
  }, [idProp, fileRequestSubmissionModelProp]);
  React.useEffect(resetStateValues, [fileRequestSubmissionRecord]);
  const validations = {
    artist: [],
    name: [],
    fileId: [],
    fileExtension: [],
    rating: [],
    lyrics: [],
    requestFeedback: [],
    duration: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          artist: artist ?? null,
          name: name ?? null,
          fileId: fileId ?? null,
          fileExtension: fileExtension ?? null,
          rating: rating ?? null,
          lyrics: lyrics ?? null,
          requestFeedback: requestFeedback ?? null,
          duration: duration ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateFileRequestSubmission.replaceAll("__typename", ""),
            variables: {
              input: {
                id: fileRequestSubmissionRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "FileRequestSubmissionUpdateForm")}
      {...rest}
    >
      <TextField
        label="Artist"
        isRequired={false}
        isReadOnly={false}
        value={artist}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              artist: value,
              name,
              fileId,
              fileExtension,
              rating,
              lyrics,
              requestFeedback,
              duration,
            };
            const result = onChange(modelFields);
            value = result?.artist ?? value;
          }
          if (errors.artist?.hasError) {
            runValidationTasks("artist", value);
          }
          setArtist(value);
        }}
        onBlur={() => runValidationTasks("artist", artist)}
        errorMessage={errors.artist?.errorMessage}
        hasError={errors.artist?.hasError}
        {...getOverrideProps(overrides, "artist")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              artist,
              name: value,
              fileId,
              fileExtension,
              rating,
              lyrics,
              requestFeedback,
              duration,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="File id"
        isRequired={false}
        isReadOnly={false}
        value={fileId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              artist,
              name,
              fileId: value,
              fileExtension,
              rating,
              lyrics,
              requestFeedback,
              duration,
            };
            const result = onChange(modelFields);
            value = result?.fileId ?? value;
          }
          if (errors.fileId?.hasError) {
            runValidationTasks("fileId", value);
          }
          setFileId(value);
        }}
        onBlur={() => runValidationTasks("fileId", fileId)}
        errorMessage={errors.fileId?.errorMessage}
        hasError={errors.fileId?.hasError}
        {...getOverrideProps(overrides, "fileId")}
      ></TextField>
      <TextField
        label="File extension"
        isRequired={false}
        isReadOnly={false}
        value={fileExtension}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              artist,
              name,
              fileId,
              fileExtension: value,
              rating,
              lyrics,
              requestFeedback,
              duration,
            };
            const result = onChange(modelFields);
            value = result?.fileExtension ?? value;
          }
          if (errors.fileExtension?.hasError) {
            runValidationTasks("fileExtension", value);
          }
          setFileExtension(value);
        }}
        onBlur={() => runValidationTasks("fileExtension", fileExtension)}
        errorMessage={errors.fileExtension?.errorMessage}
        hasError={errors.fileExtension?.hasError}
        {...getOverrideProps(overrides, "fileExtension")}
      ></TextField>
      <TextField
        label="Rating"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rating}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              artist,
              name,
              fileId,
              fileExtension,
              rating: value,
              lyrics,
              requestFeedback,
              duration,
            };
            const result = onChange(modelFields);
            value = result?.rating ?? value;
          }
          if (errors.rating?.hasError) {
            runValidationTasks("rating", value);
          }
          setRating(value);
        }}
        onBlur={() => runValidationTasks("rating", rating)}
        errorMessage={errors.rating?.errorMessage}
        hasError={errors.rating?.hasError}
        {...getOverrideProps(overrides, "rating")}
      ></TextField>
      <TextField
        label="Liner Notes"
        isRequired={false}
        isReadOnly={false}
        value={lyrics}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              artist,
              name,
              fileId,
              fileExtension,
              rating,
              lyrics: value,
              requestFeedback,
              duration,
            };
            const result = onChange(modelFields);
            value = result?.lyrics ?? value;
          }
          if (errors.lyrics?.hasError) {
            runValidationTasks("lyrics", value);
          }
          setLyrics(value);
        }}
        onBlur={() => runValidationTasks("lyrics", lyrics)}
        errorMessage={errors.lyrics?.errorMessage}
        hasError={errors.lyrics?.hasError}
        {...getOverrideProps(overrides, "lyrics")}
      ></TextField>
      <SwitchField
        label="Request feedback"
        defaultChecked={false}
        isDisabled={false}
        isChecked={requestFeedback}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              artist,
              name,
              fileId,
              fileExtension,
              rating,
              lyrics,
              requestFeedback: value,
              duration,
            };
            const result = onChange(modelFields);
            value = result?.requestFeedback ?? value;
          }
          if (errors.requestFeedback?.hasError) {
            runValidationTasks("requestFeedback", value);
          }
          setRequestFeedback(value);
        }}
        onBlur={() => runValidationTasks("requestFeedback", requestFeedback)}
        errorMessage={errors.requestFeedback?.errorMessage}
        hasError={errors.requestFeedback?.hasError}
        {...getOverrideProps(overrides, "requestFeedback")}
      ></SwitchField>
      <TextField
        label="Duration"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={duration}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              artist,
              name,
              fileId,
              fileExtension,
              rating,
              lyrics,
              requestFeedback,
              duration: value,
            };
            const result = onChange(modelFields);
            value = result?.duration ?? value;
          }
          if (errors.duration?.hasError) {
            runValidationTasks("duration", value);
          }
          setDuration(value);
        }}
        onBlur={() => runValidationTasks("duration", duration)}
        errorMessage={errors.duration?.errorMessage}
        hasError={errors.duration?.hasError}
        {...getOverrideProps(overrides, "duration")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || fileRequestSubmissionModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || fileRequestSubmissionModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
