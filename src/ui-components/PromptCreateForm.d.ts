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
export declare type PromptCreateFormInputValues = {
    title?: string;
    content?: string;
    type?: string;
    createdAt?: string;
};
export declare type PromptCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PromptCreateFormOverridesProps = {
    PromptCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PromptCreateFormProps = React.PropsWithChildren<{
    overrides?: PromptCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PromptCreateFormInputValues) => PromptCreateFormInputValues;
    onSuccess?: (fields: PromptCreateFormInputValues) => void;
    onError?: (fields: PromptCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PromptCreateFormInputValues) => PromptCreateFormInputValues;
    onValidate?: PromptCreateFormValidationValues;
} & React.CSSProperties>;
export default function PromptCreateForm(props: PromptCreateFormProps): React.ReactElement;
