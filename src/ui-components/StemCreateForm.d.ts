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
export declare type StemCreateFormInputValues = {
    title?: string;
    bpm?: number;
    key?: string;
    scale?: string;
    instruments?: string[];
    notes?: string;
    fileSize?: number;
    fileExtension?: string;
    stemGroupId?: string;
    filePath?: string;
    artist?: string;
    type?: string;
    createdAt?: string;
};
export declare type StemCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    bpm?: ValidationFunction<number>;
    key?: ValidationFunction<string>;
    scale?: ValidationFunction<string>;
    instruments?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    fileSize?: ValidationFunction<number>;
    fileExtension?: ValidationFunction<string>;
    stemGroupId?: ValidationFunction<string>;
    filePath?: ValidationFunction<string>;
    artist?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StemCreateFormOverridesProps = {
    StemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    bpm?: PrimitiveOverrideProps<TextFieldProps>;
    key?: PrimitiveOverrideProps<TextFieldProps>;
    scale?: PrimitiveOverrideProps<TextFieldProps>;
    instruments?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    fileSize?: PrimitiveOverrideProps<TextFieldProps>;
    fileExtension?: PrimitiveOverrideProps<TextFieldProps>;
    stemGroupId?: PrimitiveOverrideProps<TextFieldProps>;
    filePath?: PrimitiveOverrideProps<TextFieldProps>;
    artist?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StemCreateFormProps = React.PropsWithChildren<{
    overrides?: StemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StemCreateFormInputValues) => StemCreateFormInputValues;
    onSuccess?: (fields: StemCreateFormInputValues) => void;
    onError?: (fields: StemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StemCreateFormInputValues) => StemCreateFormInputValues;
    onValidate?: StemCreateFormValidationValues;
} & React.CSSProperties>;
export default function StemCreateForm(props: StemCreateFormProps): React.ReactElement;
