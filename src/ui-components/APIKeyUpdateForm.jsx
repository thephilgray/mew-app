/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getAPIKey } from "../graphql/queries";
import { updateAPIKey } from "../graphql/mutations";
export default function APIKeyUpdateForm(props) {
  const {
    id: idProp,
    aPIKey: aPIKeyModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    keyName: "",
    createdAt: "",
    profileID: "",
  };
  const [keyName, setKeyName] = React.useState(initialValues.keyName);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [profileID, setProfileID] = React.useState(initialValues.profileID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = aPIKeyRecord
      ? { ...initialValues, ...aPIKeyRecord }
      : initialValues;
    setKeyName(cleanValues.keyName);
    setCreatedAt(cleanValues.createdAt);
    setProfileID(cleanValues.profileID);
    setErrors({});
  };
  const [aPIKeyRecord, setAPIKeyRecord] = React.useState(aPIKeyModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getAPIKey.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAPIKey
        : aPIKeyModelProp;
      setAPIKeyRecord(record);
    };
    queryData();
  }, [idProp, aPIKeyModelProp]);
  React.useEffect(resetStateValues, [aPIKeyRecord]);
  const validations = {
    keyName: [{ type: "Required" }],
    createdAt: [],
    profileID: [{ type: "Required" }],
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
          keyName,
          createdAt: createdAt ?? null,
          profileID,
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
            query: updateAPIKey.replaceAll("__typename", ""),
            variables: {
              input: {
                id: aPIKeyRecord.id,
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
      {...getOverrideProps(overrides, "APIKeyUpdateForm")}
      {...rest}
    >
      <TextField
        label="Key name"
        isRequired={true}
        isReadOnly={false}
        value={keyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              keyName: value,
              createdAt,
              profileID,
            };
            const result = onChange(modelFields);
            value = result?.keyName ?? value;
          }
          if (errors.keyName?.hasError) {
            runValidationTasks("keyName", value);
          }
          setKeyName(value);
        }}
        onBlur={() => runValidationTasks("keyName", keyName)}
        errorMessage={errors.keyName?.errorMessage}
        hasError={errors.keyName?.hasError}
        {...getOverrideProps(overrides, "keyName")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              keyName,
              createdAt: value,
              profileID,
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
      <TextField
        label="Profile id"
        isRequired={true}
        isReadOnly={false}
        value={profileID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              keyName,
              createdAt,
              profileID: value,
            };
            const result = onChange(modelFields);
            value = result?.profileID ?? value;
          }
          if (errors.profileID?.hasError) {
            runValidationTasks("profileID", value);
          }
          setProfileID(value);
        }}
        onBlur={() => runValidationTasks("profileID", profileID)}
        errorMessage={errors.profileID?.errorMessage}
        hasError={errors.profileID?.hasError}
        {...getOverrideProps(overrides, "profileID")}
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
          isDisabled={!(idProp || aPIKeyModelProp)}
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
              !(idProp || aPIKeyModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
