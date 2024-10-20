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
import { getEmailDigestNotificationSettings } from "../graphql/queries";
import { updateEmailDigestNotificationSettings } from "../graphql/mutations";
export default function EmailDigestNotificationSettingsUpdateForm(props) {
  const {
    id: idProp,
    emailDigestNotificationSettings: emailDigestNotificationSettingsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    enabled: false,
    frequency: "",
  };
  const [enabled, setEnabled] = React.useState(initialValues.enabled);
  const [frequency, setFrequency] = React.useState(initialValues.frequency);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = emailDigestNotificationSettingsRecord
      ? { ...initialValues, ...emailDigestNotificationSettingsRecord }
      : initialValues;
    setEnabled(cleanValues.enabled);
    setFrequency(cleanValues.frequency);
    setErrors({});
  };
  const [
    emailDigestNotificationSettingsRecord,
    setEmailDigestNotificationSettingsRecord,
  ] = React.useState(emailDigestNotificationSettingsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getEmailDigestNotificationSettings.replaceAll(
                "__typename",
                ""
              ),
              variables: { id: idProp },
            })
          )?.data?.getEmailDigestNotificationSettings
        : emailDigestNotificationSettingsModelProp;
      setEmailDigestNotificationSettingsRecord(record);
    };
    queryData();
  }, [idProp, emailDigestNotificationSettingsModelProp]);
  React.useEffect(resetStateValues, [emailDigestNotificationSettingsRecord]);
  const validations = {
    enabled: [],
    frequency: [],
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
          enabled: enabled ?? null,
          frequency: frequency ?? null,
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
            query: updateEmailDigestNotificationSettings.replaceAll(
              "__typename",
              ""
            ),
            variables: {
              input: {
                id: emailDigestNotificationSettingsRecord.id,
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
      {...getOverrideProps(
        overrides,
        "EmailDigestNotificationSettingsUpdateForm"
      )}
      {...rest}
    >
      <SwitchField
        label="Enabled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={enabled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              enabled: value,
              frequency,
            };
            const result = onChange(modelFields);
            value = result?.enabled ?? value;
          }
          if (errors.enabled?.hasError) {
            runValidationTasks("enabled", value);
          }
          setEnabled(value);
        }}
        onBlur={() => runValidationTasks("enabled", enabled)}
        errorMessage={errors.enabled?.errorMessage}
        hasError={errors.enabled?.hasError}
        {...getOverrideProps(overrides, "enabled")}
      ></SwitchField>
      <TextField
        label="Frequency"
        isRequired={false}
        isReadOnly={false}
        value={frequency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              enabled,
              frequency: value,
            };
            const result = onChange(modelFields);
            value = result?.frequency ?? value;
          }
          if (errors.frequency?.hasError) {
            runValidationTasks("frequency", value);
          }
          setFrequency(value);
        }}
        onBlur={() => runValidationTasks("frequency", frequency)}
        errorMessage={errors.frequency?.errorMessage}
        hasError={errors.frequency?.hasError}
        {...getOverrideProps(overrides, "frequency")}
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
          isDisabled={!(idProp || emailDigestNotificationSettingsModelProp)}
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
              !(idProp || emailDigestNotificationSettingsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
