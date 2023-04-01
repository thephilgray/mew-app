/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { FileRequestSubmission } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function FileRequestSubmissionCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    comments: "",
  };
  const [artist, setArtist] = React.useState(initialValues.artist);
  const [name, setName] = React.useState(initialValues.name);
  const [fileId, setFileId] = React.useState(initialValues.fileId);
  const [fileExtension, setFileExtension] = React.useState(
    initialValues.fileExtension
  );
  const [rating, setRating] = React.useState(initialValues.rating);
  const [comments, setComments] = React.useState(initialValues.comments);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setArtist(initialValues.artist);
    setName(initialValues.name);
    setFileId(initialValues.fileId);
    setFileExtension(initialValues.fileExtension);
    setRating(initialValues.rating);
    setComments(initialValues.comments);
    setErrors({});
  };
  const validations = {
    artist: [],
    name: [],
    fileId: [],
    fileExtension: [],
    rating: [],
    comments: [],
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
          artist,
          name,
          fileId,
          fileExtension,
          rating,
          comments,
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
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new FileRequestSubmission(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "FileRequestSubmissionCreateForm")}
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
              comments,
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
              comments,
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
              comments,
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
              comments,
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
              comments,
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
        label="Comments"
        isRequired={false}
        isReadOnly={false}
        value={comments}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              artist,
              name,
              fileId,
              fileExtension,
              rating,
              comments: value,
            };
            const result = onChange(modelFields);
            value = result?.comments ?? value;
          }
          if (errors.comments?.hasError) {
            runValidationTasks("comments", value);
          }
          setComments(value);
        }}
        onBlur={() => runValidationTasks("comments", comments)}
        errorMessage={errors.comments?.errorMessage}
        hasError={errors.comments?.hasError}
        {...getOverrideProps(overrides, "comments")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
