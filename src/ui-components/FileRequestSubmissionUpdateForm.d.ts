/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FileRequestSubmission } from "../models";
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
    comments?: string;
};
export declare type FileRequestSubmissionUpdateFormValidationValues = {
    artist?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    fileId?: ValidationFunction<string>;
    fileExtension?: ValidationFunction<string>;
    rating?: ValidationFunction<number>;
    comments?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FileRequestSubmissionUpdateFormOverridesProps = {
    FileRequestSubmissionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    artist?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    fileId?: PrimitiveOverrideProps<TextFieldProps>;
    fileExtension?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    comments?: PrimitiveOverrideProps<TextFieldProps>;
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
