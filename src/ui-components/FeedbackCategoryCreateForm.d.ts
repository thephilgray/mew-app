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
export declare type FeedbackCategoryCreateFormInputValues = {
    name?: string;
    title?: string;
    description?: string;
};
export declare type FeedbackCategoryCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeedbackCategoryCreateFormOverridesProps = {
    FeedbackCategoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FeedbackCategoryCreateFormProps = React.PropsWithChildren<{
    overrides?: FeedbackCategoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FeedbackCategoryCreateFormInputValues) => FeedbackCategoryCreateFormInputValues;
    onSuccess?: (fields: FeedbackCategoryCreateFormInputValues) => void;
    onError?: (fields: FeedbackCategoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeedbackCategoryCreateFormInputValues) => FeedbackCategoryCreateFormInputValues;
    onValidate?: FeedbackCategoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function FeedbackCategoryCreateForm(props: FeedbackCategoryCreateFormProps): React.ReactElement;
