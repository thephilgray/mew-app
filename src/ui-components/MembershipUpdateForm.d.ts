/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Membership } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MembershipUpdateFormInputValues = {
    status?: string;
};
export declare type MembershipUpdateFormValidationValues = {
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MembershipUpdateFormOverridesProps = {
    MembershipUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MembershipUpdateFormProps = React.PropsWithChildren<{
    overrides?: MembershipUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    membership?: Membership;
    onSubmit?: (fields: MembershipUpdateFormInputValues) => MembershipUpdateFormInputValues;
    onSuccess?: (fields: MembershipUpdateFormInputValues) => void;
    onError?: (fields: MembershipUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MembershipUpdateFormInputValues) => MembershipUpdateFormInputValues;
    onValidate?: MembershipUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MembershipUpdateForm(props: MembershipUpdateFormProps): React.ReactElement;
