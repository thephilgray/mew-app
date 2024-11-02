/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { FeedbackCategory } from "../API.ts";
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
export declare type FeedbackCategoryUpdateFormInputValues = {
    name?: string;
    title?: string;
    description?: string;
};
export declare type FeedbackCategoryUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeedbackCategoryUpdateFormOverridesProps = {
    FeedbackCategoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FeedbackCategoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: FeedbackCategoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    feedbackCategory?: FeedbackCategory;
    onSubmit?: (fields: FeedbackCategoryUpdateFormInputValues) => FeedbackCategoryUpdateFormInputValues;
    onSuccess?: (fields: FeedbackCategoryUpdateFormInputValues) => void;
    onError?: (fields: FeedbackCategoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeedbackCategoryUpdateFormInputValues) => FeedbackCategoryUpdateFormInputValues;
    onValidate?: FeedbackCategoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FeedbackCategoryUpdateForm(props: FeedbackCategoryUpdateFormProps): React.ReactElement;
