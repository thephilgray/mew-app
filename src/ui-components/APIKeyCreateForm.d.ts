/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type APIKeyCreateFormInputValues = {
    keyName?: string;
    createdAt?: string;
    profileID?: string;
};
export declare type APIKeyCreateFormValidationValues = {
    keyName?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    profileID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type APIKeyCreateFormOverridesProps = {
    APIKeyCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    keyName?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    profileID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type APIKeyCreateFormProps = React.PropsWithChildren<{
    overrides?: APIKeyCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: APIKeyCreateFormInputValues) => APIKeyCreateFormInputValues;
    onSuccess?: (fields: APIKeyCreateFormInputValues) => void;
    onError?: (fields: APIKeyCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: APIKeyCreateFormInputValues) => APIKeyCreateFormInputValues;
    onValidate?: APIKeyCreateFormValidationValues;
} & React.CSSProperties>;
export default function APIKeyCreateForm(props: APIKeyCreateFormProps): React.ReactElement;
