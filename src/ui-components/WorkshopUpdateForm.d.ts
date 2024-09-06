/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Workshop } from "../API.ts";
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
export declare type WorkshopUpdateFormInputValues = {
    name?: string;
    status?: string;
    passes?: number;
    description?: string;
    startDate?: string;
    endDate?: string;
    maxFeedback?: number;
};
export declare type WorkshopUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    passes?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
    maxFeedback?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkshopUpdateFormOverridesProps = {
    WorkshopUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    passes?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
    maxFeedback?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WorkshopUpdateFormProps = React.PropsWithChildren<{
    overrides?: WorkshopUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    workshop?: Workshop;
    onSubmit?: (fields: WorkshopUpdateFormInputValues) => WorkshopUpdateFormInputValues;
    onSuccess?: (fields: WorkshopUpdateFormInputValues) => void;
    onError?: (fields: WorkshopUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WorkshopUpdateFormInputValues) => WorkshopUpdateFormInputValues;
    onValidate?: WorkshopUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WorkshopUpdateForm(props: WorkshopUpdateFormProps): React.ReactElement;
