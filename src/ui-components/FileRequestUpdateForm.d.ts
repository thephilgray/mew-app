/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FileRequest } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FileRequestUpdateFormInputValues = {
    expiration?: string;
    title?: string;
    details?: string;
    required?: boolean;
};
export declare type FileRequestUpdateFormValidationValues = {
    expiration?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    details?: ValidationFunction<string>;
    required?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FileRequestUpdateFormOverridesProps = {
    FileRequestUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    expiration?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    details?: PrimitiveOverrideProps<TextFieldProps>;
    required?: PrimitiveOverrideProps<SwitchFieldProps>;
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
