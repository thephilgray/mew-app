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
export declare type MembershipCreateFormInputValues = {
    status?: string;
};
export declare type MembershipCreateFormValidationValues = {
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MembershipCreateFormOverridesProps = {
    MembershipCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MembershipCreateFormProps = React.PropsWithChildren<{
    overrides?: MembershipCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MembershipCreateFormInputValues) => MembershipCreateFormInputValues;
    onSuccess?: (fields: MembershipCreateFormInputValues) => void;
    onError?: (fields: MembershipCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MembershipCreateFormInputValues) => MembershipCreateFormInputValues;
    onValidate?: MembershipCreateFormValidationValues;
} & React.CSSProperties>;
export default function MembershipCreateForm(props: MembershipCreateFormProps): React.ReactElement;
