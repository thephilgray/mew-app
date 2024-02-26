/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type PlaylistCreateFormInputValues = {
    public?: boolean;
    title?: string;
    type?: string;
    createdAt?: string;
};
export declare type PlaylistCreateFormValidationValues = {
    public?: ValidationFunction<boolean>;
    title?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlaylistCreateFormOverridesProps = {
    PlaylistCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    public?: PrimitiveOverrideProps<SwitchFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlaylistCreateFormProps = React.PropsWithChildren<{
    overrides?: PlaylistCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlaylistCreateFormInputValues) => PlaylistCreateFormInputValues;
    onSuccess?: (fields: PlaylistCreateFormInputValues) => void;
    onError?: (fields: PlaylistCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlaylistCreateFormInputValues) => PlaylistCreateFormInputValues;
    onValidate?: PlaylistCreateFormValidationValues;
} & React.CSSProperties>;
export default function PlaylistCreateForm(props: PlaylistCreateFormProps): React.ReactElement;
