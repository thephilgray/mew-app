/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { FileRequest } from "../API.ts";
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
export declare type FileRequestUpdateFormInputValues = {
    startDate?: string;
    expiration?: string;
    title?: string;
    details?: string;
    required?: boolean;
    playlistStartDate?: string;
    playlistExternalUrl?: string;
    type?: string;
    createdAt?: string;
};
export declare type FileRequestUpdateFormValidationValues = {
    startDate?: ValidationFunction<string>;
    expiration?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    details?: ValidationFunction<string>;
    required?: ValidationFunction<boolean>;
    playlistStartDate?: ValidationFunction<string>;
    playlistExternalUrl?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FileRequestUpdateFormOverridesProps = {
    FileRequestUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    expiration?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    details?: PrimitiveOverrideProps<TextFieldProps>;
    required?: PrimitiveOverrideProps<SwitchFieldProps>;
    playlistStartDate?: PrimitiveOverrideProps<TextFieldProps>;
    playlistExternalUrl?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FileRequestUpdateFormProps = React.PropsWithChildren<{
    overrides?: FileRequestUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fileRequest?: FileRequest;
    onSubmit?: (fields: FileRequestUpdateFormInputValues) => FileRequestUpdateFormInputValues;
    onSuccess?: (fields: FileRequestUpdateFormInputValues) => void;
    onError?: (fields: FileRequestUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FileRequestUpdateFormInputValues) => FileRequestUpdateFormInputValues;
    onValidate?: FileRequestUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FileRequestUpdateForm(props: FileRequestUpdateFormProps): React.ReactElement;
