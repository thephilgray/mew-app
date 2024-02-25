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
import { getFileRequest } from "../graphql/queries";
import { updateFileRequest } from "../graphql/mutations";
export default function FileRequestUpdateForm(props) {
  const {
    id: idProp,
    fileRequest: fileRequestModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    startDate: "",
    expiration: "",
    title: "",
    details: "",
    required: false,
    playlistStartDate: "",
    playlistExternalUrl: "",
    type: "",
    createdAt: "",
  };
  const [startDate, setStartDate] = React.useState(initialValues.startDate);
  const [expiration, setExpiration] = React.useState(initialValues.expiration);
  const [title, setTitle] = React.useState(initialValues.title);
  const [details, setDetails] = React.useState(initialValues.details);
  const [required, setRequired] = React.useState(initialValues.required);
  const [playlistStartDate, setPlaylistStartDate] = React.useState(
    initialValues.playlistStartDate
  );
  const [playlistExternalUrl, setPlaylistExternalUrl] = React.useState(
    initialValues.playlistExternalUrl
  );
  const [type, setType] = React.useState(initialValues.type);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = fileRequestRecord
      ? { ...initialValues, ...fileRequestRecord }
      : initialValues;
    setStartDate(cleanValues.startDate);
    setExpiration(cleanValues.expiration);
    setTitle(cleanValues.title);
    setDetails(cleanValues.details);
    setRequired(cleanValues.required);
    setPlaylistStartDate(cleanValues.playlistStartDate);
    setPlaylistExternalUrl(cleanValues.playlistExternalUrl);
    setType(cleanValues.type);
    setCreatedAt(cleanValues.createdAt);
    setErrors({});
  };
  const [fileRequestRecord, setFileRequestRecord] =
    React.useState(fileRequestModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getFileRequest.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getFileRequest
        : fileRequestModelProp;
      setFileRequestRecord(record);
    };
    queryData();
  }, [idProp, fileRequestModelProp]);
  React.useEffect(resetStateValues, [fileRequestRecord]);
  const validations = {
    startDate: [],
    expiration: [{ type: "Required" }],
    title: [],
    details: [],
    required: [],
    playlistStartDate: [],
    playlistExternalUrl: [],
    type: [],
    createdAt: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          startDate: startDate ?? null,
          expiration,
          title: title ?? null,
          details: details ?? null,
          required: required ?? null,
          playlistStartDate: playlistStartDate ?? null,
          playlistExternalUrl: playlistExternalUrl ?? null,
          type: type ?? null,
          createdAt: createdAt ?? null,
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
            query: updateFileRequest.replaceAll("__typename", ""),
            variables: {
              input: {
                id: fileRequestRecord.id,
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
      {...getOverrideProps(overrides, "FileRequestUpdateForm")}
      {...rest}
    >
      <TextField
        label="Start date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={startDate && convertToLocal(new Date(startDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              startDate: value,
              expiration,
              title,
              details,
              required,
              playlistStartDate,
              playlistExternalUrl,
              type,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.startDate ?? value;
          }
          if (errors.startDate?.hasError) {
            runValidationTasks("startDate", value);
          }
          setStartDate(value);
        }}
        onBlur={() => runValidationTasks("startDate", startDate)}
        errorMessage={errors.startDate?.errorMessage}
        hasError={errors.startDate?.hasError}
        {...getOverrideProps(overrides, "startDate")}
      ></TextField>
      <TextField
        label="Expiration"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={expiration && convertToLocal(new Date(expiration))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              startDate,
              expiration: value,
              title,
              details,
              required,
              playlistStartDate,
              playlistExternalUrl,
              type,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.expiration ?? value;
          }
          if (errors.expiration?.hasError) {
            runValidationTasks("expiration", value);
          }
          setExpiration(value);
        }}
        onBlur={() => runValidationTasks("expiration", expiration)}
        errorMessage={errors.expiration?.errorMessage}
        hasError={errors.expiration?.hasError}
        {...getOverrideProps(overrides, "expiration")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              startDate,
              expiration,
              title: value,
              details,
              required,
              playlistStartDate,
              playlistExternalUrl,
              type,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Details"
        isRequired={false}
        isReadOnly={false}
        value={details}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              startDate,
              expiration,
              title,
              details: value,
              required,
              playlistStartDate,
              playlistExternalUrl,
              type,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.details ?? value;
          }
          if (errors.details?.hasError) {
            runValidationTasks("details", value);
          }
          setDetails(value);
        }}
        onBlur={() => runValidationTasks("details", details)}
        errorMessage={errors.details?.errorMessage}
        hasError={errors.details?.hasError}
        {...getOverrideProps(overrides, "details")}
      ></TextField>
      <SwitchField
        label="Required"
        defaultChecked={false}
        isDisabled={false}
        isChecked={required}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              startDate,
              expiration,
              title,
              details,
              required: value,
              playlistStartDate,
              playlistExternalUrl,
              type,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.required ?? value;
          }
          if (errors.required?.hasError) {
            runValidationTasks("required", value);
          }
          setRequired(value);
        }}
        onBlur={() => runValidationTasks("required", required)}
        errorMessage={errors.required?.errorMessage}
        hasError={errors.required?.hasError}
        {...getOverrideProps(overrides, "required")}
      ></SwitchField>
      <TextField
        label="Playlist start date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={playlistStartDate && convertToLocal(new Date(playlistStartDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              startDate,
              expiration,
              title,
              details,
              required,
              playlistStartDate: value,
              playlistExternalUrl,
              type,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.playlistStartDate ?? value;
          }
          if (errors.playlistStartDate?.hasError) {
            runValidationTasks("playlistStartDate", value);
          }
          setPlaylistStartDate(value);
        }}
        onBlur={() =>
          runValidationTasks("playlistStartDate", playlistStartDate)
        }
        errorMessage={errors.playlistStartDate?.errorMessage}
        hasError={errors.playlistStartDate?.hasError}
        {...getOverrideProps(overrides, "playlistStartDate")}
      ></TextField>
      <TextField
        label="Playlist external url"
        isRequired={false}
        isReadOnly={false}
        value={playlistExternalUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              startDate,
              expiration,
              title,
              details,
              required,
              playlistStartDate,
              playlistExternalUrl: value,
              type,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.playlistExternalUrl ?? value;
          }
          if (errors.playlistExternalUrl?.hasError) {
            runValidationTasks("playlistExternalUrl", value);
          }
          setPlaylistExternalUrl(value);
        }}
        onBlur={() =>
          runValidationTasks("playlistExternalUrl", playlistExternalUrl)
        }
        errorMessage={errors.playlistExternalUrl?.errorMessage}
        hasError={errors.playlistExternalUrl?.hasError}
        {...getOverrideProps(overrides, "playlistExternalUrl")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              startDate,
              expiration,
              title,
              details,
              required,
              playlistStartDate,
              playlistExternalUrl,
              type: value,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        value={createdAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              startDate,
              expiration,
              title,
              details,
              required,
              playlistStartDate,
              playlistExternalUrl,
              type,
              createdAt: value,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
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
          isDisabled={!(idProp || fileRequestModelProp)}
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
              !(idProp || fileRequestModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
