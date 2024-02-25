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
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createStem } from "../graphql/mutations";
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
export default function StemCreateForm(props) {
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
    title: "",
    bpm: "",
    key: "",
    scale: "",
    instruments: [],
    notes: "",
    fileSize: "",
    fileExtension: "",
    stemGroupId: "",
    filePath: "",
    artist: "",
    type: "",
    createdAt: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [bpm, setBpm] = React.useState(initialValues.bpm);
  const [key, setKey] = React.useState(initialValues.key);
  const [scale, setScale] = React.useState(initialValues.scale);
  const [instruments, setInstruments] = React.useState(
    initialValues.instruments
  );
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [fileSize, setFileSize] = React.useState(initialValues.fileSize);
  const [fileExtension, setFileExtension] = React.useState(
    initialValues.fileExtension
  );
  const [stemGroupId, setStemGroupId] = React.useState(
    initialValues.stemGroupId
  );
  const [filePath, setFilePath] = React.useState(initialValues.filePath);
  const [artist, setArtist] = React.useState(initialValues.artist);
  const [type, setType] = React.useState(initialValues.type);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setBpm(initialValues.bpm);
    setKey(initialValues.key);
    setScale(initialValues.scale);
    setInstruments(initialValues.instruments);
    setCurrentInstrumentsValue("");
    setNotes(initialValues.notes);
    setFileSize(initialValues.fileSize);
    setFileExtension(initialValues.fileExtension);
    setStemGroupId(initialValues.stemGroupId);
    setFilePath(initialValues.filePath);
    setArtist(initialValues.artist);
    setType(initialValues.type);
    setCreatedAt(initialValues.createdAt);
    setErrors({});
  };
  const [currentInstrumentsValue, setCurrentInstrumentsValue] =
    React.useState("");
  const instrumentsRef = React.createRef();
  const validations = {
    title: [],
    bpm: [],
    key: [],
    scale: [],
    instruments: [],
    notes: [],
    fileSize: [],
    fileExtension: [],
    stemGroupId: [],
    filePath: [],
    artist: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          bpm,
          key,
          scale,
          instruments,
          notes,
          fileSize,
          fileExtension,
          stemGroupId,
          filePath,
          artist,
          type,
          createdAt,
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
            query: createStem.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "StemCreateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              bpm,
              key,
              scale,
              instruments,
              notes,
              fileSize,
              fileExtension,
              stemGroupId,
              filePath,
              artist,
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
        label="Bpm"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={bpm}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              bpm: value,
              key,
              scale,
              instruments,
              notes,
              fileSize,
              fileExtension,
              stemGroupId,
              filePath,
              artist,
              type,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.bpm ?? value;
          }
          if (errors.bpm?.hasError) {
            runValidationTasks("bpm", value);
          }
          setBpm(value);
        }}
        onBlur={() => runValidationTasks("bpm", bpm)}
        errorMessage={errors.bpm?.errorMessage}
        hasError={errors.bpm?.hasError}
        {...getOverrideProps(overrides, "bpm")}
      ></TextField>
      <TextField
        label="Key"
        isRequired={false}
        isReadOnly={false}
        value={key}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              bpm,
              key: value,
              scale,
              instruments,
              notes,
              fileSize,
              fileExtension,
              stemGroupId,
              filePath,
              artist,
              type,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.key ?? value;
          }
          if (errors.key?.hasError) {
            runValidationTasks("key", value);
          }
          setKey(value);
        }}
        onBlur={() => runValidationTasks("key", key)}
        errorMessage={errors.key?.errorMessage}
        hasError={errors.key?.hasError}
        {...getOverrideProps(overrides, "key")}
      ></TextField>
      <TextField
        label="Scale"
        isRequired={false}
        isReadOnly={false}
        value={scale}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              bpm,
              key,
              scale: value,
              instruments,
              notes,
              fileSize,
              fileExtension,
              stemGroupId,
              filePath,
              artist,
              type,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.scale ?? value;
          }
          if (errors.scale?.hasError) {
            runValidationTasks("scale", value);
          }
          setScale(value);
        }}
        onBlur={() => runValidationTasks("scale", scale)}
        errorMessage={errors.scale?.errorMessage}
        hasError={errors.scale?.hasError}
        {...getOverrideProps(overrides, "scale")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              bpm,
              key,
              scale,
              instruments: values,
              notes,
              fileSize,
              fileExtension,
              stemGroupId,
              filePath,
              artist,
              type,
              createdAt,
            };
            const result = onChange(modelFields);
            values = result?.instruments ?? values;
          }
          setInstruments(values);
          setCurrentInstrumentsValue("");
        }}
        currentFieldValue={currentInstrumentsValue}
        label={"Instruments"}
        items={instruments}
        hasError={errors?.instruments?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("instruments", currentInstrumentsValue)
        }
        errorMessage={errors?.instruments?.errorMessage}
        setFieldValue={setCurrentInstrumentsValue}
        inputFieldRef={instrumentsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Instruments"
          isRequired={false}
          isReadOnly={false}
          value={currentInstrumentsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.instruments?.hasError) {
              runValidationTasks("instruments", value);
            }
            setCurrentInstrumentsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("instruments", currentInstrumentsValue)
          }
          errorMessage={errors.instruments?.errorMessage}
          hasError={errors.instruments?.hasError}
          ref={instrumentsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "instruments")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              bpm,
              key,
              scale,
              instruments,
              notes: value,
              fileSize,
              fileExtension,
              stemGroupId,
              filePath,
              artist,
              type,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
      ></TextField>
      <TextField
        label="File size"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={fileSize}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              bpm,
              key,
              scale,
              instruments,
              notes,
              fileSize: value,
              fileExtension,
              stemGroupId,
              filePath,
              artist,
              type,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.fileSize ?? value;
          }
          if (errors.fileSize?.hasError) {
            runValidationTasks("fileSize", value);
          }
          setFileSize(value);
        }}
        onBlur={() => runValidationTasks("fileSize", fileSize)}
        errorMessage={errors.fileSize?.errorMessage}
        hasError={errors.fileSize?.hasError}
        {...getOverrideProps(overrides, "fileSize")}
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
              title,
              bpm,
              key,
              scale,
              instruments,
              notes,
              fileSize,
              fileExtension: value,
              stemGroupId,
              filePath,
              artist,
              type,
              createdAt,
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
        label="Stem group id"
        isRequired={false}
        isReadOnly={false}
        value={stemGroupId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              bpm,
              key,
              scale,
              instruments,
              notes,
              fileSize,
              fileExtension,
              stemGroupId: value,
              filePath,
              artist,
              type,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.stemGroupId ?? value;
          }
          if (errors.stemGroupId?.hasError) {
            runValidationTasks("stemGroupId", value);
          }
          setStemGroupId(value);
        }}
        onBlur={() => runValidationTasks("stemGroupId", stemGroupId)}
        errorMessage={errors.stemGroupId?.errorMessage}
        hasError={errors.stemGroupId?.hasError}
        {...getOverrideProps(overrides, "stemGroupId")}
      ></TextField>
      <TextField
        label="File path"
        isRequired={false}
        isReadOnly={false}
        value={filePath}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              bpm,
              key,
              scale,
              instruments,
              notes,
              fileSize,
              fileExtension,
              stemGroupId,
              filePath: value,
              artist,
              type,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.filePath ?? value;
          }
          if (errors.filePath?.hasError) {
            runValidationTasks("filePath", value);
          }
          setFilePath(value);
        }}
        onBlur={() => runValidationTasks("filePath", filePath)}
        errorMessage={errors.filePath?.errorMessage}
        hasError={errors.filePath?.hasError}
        {...getOverrideProps(overrides, "filePath")}
      ></TextField>
      <TextField
        label="Artist"
        isRequired={false}
        isReadOnly={false}
        value={artist}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              bpm,
              key,
              scale,
              instruments,
              notes,
              fileSize,
              fileExtension,
              stemGroupId,
              filePath,
              artist: value,
              type,
              createdAt,
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
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              bpm,
              key,
              scale,
              instruments,
              notes,
              fileSize,
              fileExtension,
              stemGroupId,
              filePath,
              artist,
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
              title,
              bpm,
              key,
              scale,
              instruments,
              notes,
              fileSize,
              fileExtension,
              stemGroupId,
              filePath,
              artist,
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
