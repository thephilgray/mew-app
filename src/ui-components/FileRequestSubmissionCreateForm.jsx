/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createFileRequestSubmission } from "../graphql/mutations";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
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
    lyrics: "",
    requestFeedback: false,
    duration: "",
    completionStage: "",
    feedbackAreas: [],
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
  const [completionStage, setCompletionStage] = React.useState(
    initialValues.completionStage
  );
  const [feedbackAreas, setFeedbackAreas] = React.useState(
    initialValues.feedbackAreas
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setArtist(initialValues.artist);
    setName(initialValues.name);
    setFileId(initialValues.fileId);
    setFileExtension(initialValues.fileExtension);
    setRating(initialValues.rating);
    setLyrics(initialValues.lyrics);
    setRequestFeedback(initialValues.requestFeedback);
    setDuration(initialValues.duration);
    setCompletionStage(initialValues.completionStage);
    setFeedbackAreas(initialValues.feedbackAreas);
    setCurrentFeedbackAreasValue("");
    setErrors({});
  };
  const [currentFeedbackAreasValue, setCurrentFeedbackAreasValue] =
    React.useState("");
  const feedbackAreasRef = React.createRef();
  const validations = {
    artist: [],
    name: [],
    fileId: [],
    fileExtension: [],
    rating: [],
    lyrics: [],
    requestFeedback: [],
    duration: [],
    completionStage: [],
    feedbackAreas: [],
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
          lyrics,
          requestFeedback,
          duration,
          completionStage,
          feedbackAreas,
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
            query: createFileRequestSubmission.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
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
              lyrics,
              requestFeedback,
              duration,
              completionStage,
              feedbackAreas,
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
              completionStage,
              feedbackAreas,
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
              completionStage,
              feedbackAreas,
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
              completionStage,
              feedbackAreas,
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
              completionStage,
              feedbackAreas,
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
        label="Lyrics"
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
              completionStage,
              feedbackAreas,
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
              completionStage,
              feedbackAreas,
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
              completionStage,
              feedbackAreas,
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
      <TextField
        label="Completion stage"
        isRequired={false}
        isReadOnly={false}
        value={completionStage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              artist,
              name,
              fileId,
              fileExtension,
              rating,
              lyrics,
              requestFeedback,
              duration,
              completionStage: value,
              feedbackAreas,
            };
            const result = onChange(modelFields);
            value = result?.completionStage ?? value;
          }
          if (errors.completionStage?.hasError) {
            runValidationTasks("completionStage", value);
          }
          setCompletionStage(value);
        }}
        onBlur={() => runValidationTasks("completionStage", completionStage)}
        errorMessage={errors.completionStage?.errorMessage}
        hasError={errors.completionStage?.hasError}
        {...getOverrideProps(overrides, "completionStage")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              artist,
              name,
              fileId,
              fileExtension,
              rating,
              lyrics,
              requestFeedback,
              duration,
              completionStage,
              feedbackAreas: values,
            };
            const result = onChange(modelFields);
            values = result?.feedbackAreas ?? values;
          }
          setFeedbackAreas(values);
          setCurrentFeedbackAreasValue("");
        }}
        currentFieldValue={currentFeedbackAreasValue}
        label={"Feedback areas"}
        items={feedbackAreas}
        hasError={errors?.feedbackAreas?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("feedbackAreas", currentFeedbackAreasValue)
        }
        errorMessage={errors?.feedbackAreas?.errorMessage}
        setFieldValue={setCurrentFeedbackAreasValue}
        inputFieldRef={feedbackAreasRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Feedback areas"
          isRequired={false}
          isReadOnly={false}
          value={currentFeedbackAreasValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.feedbackAreas?.hasError) {
              runValidationTasks("feedbackAreas", value);
            }
            setCurrentFeedbackAreasValue(value);
          }}
          onBlur={() =>
            runValidationTasks("feedbackAreas", currentFeedbackAreasValue)
          }
          errorMessage={errors.feedbackAreas?.errorMessage}
          hasError={errors.feedbackAreas?.hasError}
          ref={feedbackAreasRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "feedbackAreas")}
        ></TextField>
      </ArrayField>
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
