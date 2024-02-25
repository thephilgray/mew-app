/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Track } from "../API.ts";
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
export declare type TrackUpdateFormInputValues = {
    order?: number;
};
export declare type TrackUpdateFormValidationValues = {
    order?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrackUpdateFormOverridesProps = {
    TrackUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    order?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TrackUpdateFormProps = React.PropsWithChildren<{
    overrides?: TrackUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    track?: Track;
    onSubmit?: (fields: TrackUpdateFormInputValues) => TrackUpdateFormInputValues;
    onSuccess?: (fields: TrackUpdateFormInputValues) => void;
    onError?: (fields: TrackUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TrackUpdateFormInputValues) => TrackUpdateFormInputValues;
    onValidate?: TrackUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TrackUpdateForm(props: TrackUpdateFormProps): React.ReactElement;
