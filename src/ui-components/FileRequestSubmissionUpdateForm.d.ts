/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { FileRequestSubmission } from "../API.ts";
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
export declare type FileRequestSubmissionUpdateFormInputValues = {
    artist?: string;
    name?: string;
    fileId?: string;
    fileExtension?: string;
    rating?: number;
    lyrics?: string;
    requestFeedback?: boolean;
    duration?: number;
};
export declare type FileRequestSubmissionUpdateFormValidationValues = {
    artist?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    fileId?: ValidationFunction<string>;
    fileExtension?: ValidationFunction<string>;
    rating?: ValidationFunction<number>;
    lyrics?: ValidationFunction<string>;
    requestFeedback?: ValidationFunction<boolean>;
    duration?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FileRequestSubmissionUpdateFormOverridesProps = {
    FileRequestSubmissionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    artist?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    fileId?: PrimitiveOverrideProps<TextFieldProps>;
    fileExtension?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    lyrics?: PrimitiveOverrideProps<TextFieldProps>;
    requestFeedback?: PrimitiveOverrideProps<SwitchFieldProps>;
    duration?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FileRequestSubmissionUpdateFormProps = React.PropsWithChildren<{
    overrides?: FileRequestSubmissionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fileRequestSubmission?: FileRequestSubmission;
    onSubmit?: (fields: FileRequestSubmissionUpdateFormInputValues) => FileRequestSubmissionUpdateFormInputValues;
    onSuccess?: (fields: FileRequestSubmissionUpdateFormInputValues) => void;
    onError?: (fields: FileRequestSubmissionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FileRequestSubmissionUpdateFormInputValues) => FileRequestSubmissionUpdateFormInputValues;
    onValidate?: FileRequestSubmissionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FileRequestSubmissionUpdateForm(props: FileRequestSubmissionUpdateFormProps): React.ReactElement;
