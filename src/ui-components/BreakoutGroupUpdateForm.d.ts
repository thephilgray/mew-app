/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BreakoutGroup } from "../API.ts";
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
export declare type BreakoutGroupUpdateFormInputValues = {
    name?: string;
    description?: string;
};
export declare type BreakoutGroupUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BreakoutGroupUpdateFormOverridesProps = {
    BreakoutGroupUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BreakoutGroupUpdateFormProps = React.PropsWithChildren<{
    overrides?: BreakoutGroupUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    breakoutGroup?: BreakoutGroup;
    onSubmit?: (fields: BreakoutGroupUpdateFormInputValues) => BreakoutGroupUpdateFormInputValues;
    onSuccess?: (fields: BreakoutGroupUpdateFormInputValues) => void;
    onError?: (fields: BreakoutGroupUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BreakoutGroupUpdateFormInputValues) => BreakoutGroupUpdateFormInputValues;
    onValidate?: BreakoutGroupUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BreakoutGroupUpdateForm(props: BreakoutGroupUpdateFormProps): React.ReactElement;
