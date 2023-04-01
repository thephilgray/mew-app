/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FileRequestCreateFormInputValues = {
    expiration?: string;
    title?: string;
    details?: string;
    required?: boolean;
};
export declare type FileRequestCreateFormValidationValues = {
    expiration?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    details?: ValidationFunction<string>;
    required?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FileRequestCreateFormOverridesProps = {
    FileRequestCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    expiration?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    details?: PrimitiveOverrideProps<TextFieldProps>;
    required?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type FileRequestCreateFormProps = React.PropsWithChildren<{
    overrides?: FileRequestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FileRequestCreateFormInputValues) => FileRequestCreateFormInputValues;
    onSuccess?: (fields: FileRequestCreateFormInputValues) => void;
    onError?: (fields: FileRequestCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FileRequestCreateFormInputValues) => FileRequestCreateFormInputValues;
    onValidate?: FileRequestCreateFormValidationValues;
} & React.CSSProperties>;
export default function FileRequestCreateForm(props: FileRequestCreateFormProps): React.ReactElement;
