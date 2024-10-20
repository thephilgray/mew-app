/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EmailDigestNotificationSettings } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EmailDigestNotificationSettingsUpdateFormInputValues = {
    enabled?: boolean;
    frequency?: string;
};
export declare type EmailDigestNotificationSettingsUpdateFormValidationValues = {
    enabled?: ValidationFunction<boolean>;
    frequency?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmailDigestNotificationSettingsUpdateFormOverridesProps = {
    EmailDigestNotificationSettingsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    enabled?: PrimitiveOverrideProps<SwitchFieldProps>;
    frequency?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmailDigestNotificationSettingsUpdateFormProps = React.PropsWithChildren<{
    overrides?: EmailDigestNotificationSettingsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    emailDigestNotificationSettings?: EmailDigestNotificationSettings;
    onSubmit?: (fields: EmailDigestNotificationSettingsUpdateFormInputValues) => EmailDigestNotificationSettingsUpdateFormInputValues;
    onSuccess?: (fields: EmailDigestNotificationSettingsUpdateFormInputValues) => void;
    onError?: (fields: EmailDigestNotificationSettingsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmailDigestNotificationSettingsUpdateFormInputValues) => EmailDigestNotificationSettingsUpdateFormInputValues;
    onValidate?: EmailDigestNotificationSettingsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EmailDigestNotificationSettingsUpdateForm(props: EmailDigestNotificationSettingsUpdateFormProps): React.ReactElement;
