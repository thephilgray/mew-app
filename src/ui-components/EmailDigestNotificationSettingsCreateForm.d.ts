/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type EmailDigestNotificationSettingsCreateFormInputValues = {
    enabled?: boolean;
    frequency?: string;
};
export declare type EmailDigestNotificationSettingsCreateFormValidationValues = {
    enabled?: ValidationFunction<boolean>;
    frequency?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmailDigestNotificationSettingsCreateFormOverridesProps = {
    EmailDigestNotificationSettingsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    enabled?: PrimitiveOverrideProps<SwitchFieldProps>;
    frequency?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmailDigestNotificationSettingsCreateFormProps = React.PropsWithChildren<{
    overrides?: EmailDigestNotificationSettingsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EmailDigestNotificationSettingsCreateFormInputValues) => EmailDigestNotificationSettingsCreateFormInputValues;
    onSuccess?: (fields: EmailDigestNotificationSettingsCreateFormInputValues) => void;
    onError?: (fields: EmailDigestNotificationSettingsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmailDigestNotificationSettingsCreateFormInputValues) => EmailDigestNotificationSettingsCreateFormInputValues;
    onValidate?: EmailDigestNotificationSettingsCreateFormValidationValues;
} & React.CSSProperties>;
export default function EmailDigestNotificationSettingsCreateForm(props: EmailDigestNotificationSettingsCreateFormProps): React.ReactElement;
