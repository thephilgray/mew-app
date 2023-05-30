/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Profile } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProfileUpdateFormInputValues = {
    email?: string;
    name?: string;
    avatar?: string;
    bio?: string;
    sub?: string;
};
export declare type ProfileUpdateFormValidationValues = {
    email?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    avatar?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    sub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileUpdateFormOverridesProps = {
    ProfileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    avatar?: PrimitiveOverrideProps<TextFieldProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
    sub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProfileUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProfileUpdateFormOverridesProps | undefined | null;
} & {
    email?: string;
    profile?: Profile;
    onSubmit?: (fields: ProfileUpdateFormInputValues) => ProfileUpdateFormInputValues;
    onSuccess?: (fields: ProfileUpdateFormInputValues) => void;
    onError?: (fields: ProfileUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProfileUpdateFormInputValues) => ProfileUpdateFormInputValues;
    onValidate?: ProfileUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProfileUpdateForm(props: ProfileUpdateFormProps): React.ReactElement;
