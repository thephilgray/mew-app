/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Playlist } from "../API.ts";
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
export declare type PlaylistUpdateFormInputValues = {
    public?: boolean;
    title?: string;
    type?: string;
    createdAt?: string;
};
export declare type PlaylistUpdateFormValidationValues = {
    public?: ValidationFunction<boolean>;
    title?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlaylistUpdateFormOverridesProps = {
    PlaylistUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    public?: PrimitiveOverrideProps<SwitchFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlaylistUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlaylistUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    playlist?: Playlist;
    onSubmit?: (fields: PlaylistUpdateFormInputValues) => PlaylistUpdateFormInputValues;
    onSuccess?: (fields: PlaylistUpdateFormInputValues) => void;
    onError?: (fields: PlaylistUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlaylistUpdateFormInputValues) => PlaylistUpdateFormInputValues;
    onValidate?: PlaylistUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlaylistUpdateForm(props: PlaylistUpdateFormProps): React.ReactElement;
