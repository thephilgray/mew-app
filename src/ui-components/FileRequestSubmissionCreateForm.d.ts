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
export declare type FileRequestSubmissionCreateFormInputValues = {
    artist?: string;
    name?: string;
    fileId?: string;
    fileExtension?: string;
    rating?: number;
    lyrics?: string;
    requestFeedback?: boolean;
};
export declare type FileRequestSubmissionCreateFormValidationValues = {
    artist?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    fileId?: ValidationFunction<string>;
    fileExtension?: ValidationFunction<string>;
    rating?: ValidationFunction<number>;
    lyrics?: ValidationFunction<string>;
    requestFeedback?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FileRequestSubmissionCreateFormOverridesProps = {
    FileRequestSubmissionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    artist?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    fileId?: PrimitiveOverrideProps<TextFieldProps>;
    fileExtension?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    lyrics?: PrimitiveOverrideProps<TextFieldProps>;
    requestFeedback?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type FileRequestSubmissionCreateFormProps = React.PropsWithChildren<{
    overrides?: FileRequestSubmissionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FileRequestSubmissionCreateFormInputValues) => FileRequestSubmissionCreateFormInputValues;
    onSuccess?: (fields: FileRequestSubmissionCreateFormInputValues) => void;
    onError?: (fields: FileRequestSubmissionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FileRequestSubmissionCreateFormInputValues) => FileRequestSubmissionCreateFormInputValues;
    onValidate?: FileRequestSubmissionCreateFormValidationValues;
} & React.CSSProperties>;
export default function FileRequestSubmissionCreateForm(props: FileRequestSubmissionCreateFormProps): React.ReactElement;
