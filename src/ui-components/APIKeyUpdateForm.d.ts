/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { APIKey } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type APIKeyUpdateFormInputValues = {
    keyName?: string;
    createdAt?: string;
    profileID?: string;
};
export declare type APIKeyUpdateFormValidationValues = {
    keyName?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    profileID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type APIKeyUpdateFormOverridesProps = {
    APIKeyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    keyName?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    profileID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type APIKeyUpdateFormProps = React.PropsWithChildren<{
    overrides?: APIKeyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aPIKey?: APIKey;
    onSubmit?: (fields: APIKeyUpdateFormInputValues) => APIKeyUpdateFormInputValues;
    onSuccess?: (fields: APIKeyUpdateFormInputValues) => void;
    onError?: (fields: APIKeyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: APIKeyUpdateFormInputValues) => APIKeyUpdateFormInputValues;
    onValidate?: APIKeyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function APIKeyUpdateForm(props: APIKeyUpdateFormProps): React.ReactElement;
