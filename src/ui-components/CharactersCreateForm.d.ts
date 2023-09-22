/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CharactersCreateFormInputValues = {
    name?: string;
    hp?: number;
    ap?: number;
    height?: string;
    pronouns?: string;
    class?: string;
    hometown?: string;
    items?: string;
    clothes?: string;
    abilities?: string;
};
export declare type CharactersCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    hp?: ValidationFunction<number>;
    ap?: ValidationFunction<number>;
    height?: ValidationFunction<string>;
    pronouns?: ValidationFunction<string>;
    class?: ValidationFunction<string>;
    hometown?: ValidationFunction<string>;
    items?: ValidationFunction<string>;
    clothes?: ValidationFunction<string>;
    abilities?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CharactersCreateFormOverridesProps = {
    CharactersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    hp?: PrimitiveOverrideProps<TextFieldProps>;
    ap?: PrimitiveOverrideProps<TextFieldProps>;
    height?: PrimitiveOverrideProps<TextFieldProps>;
    pronouns?: PrimitiveOverrideProps<TextFieldProps>;
    class?: PrimitiveOverrideProps<TextFieldProps>;
    hometown?: PrimitiveOverrideProps<TextFieldProps>;
    items?: PrimitiveOverrideProps<TextFieldProps>;
    clothes?: PrimitiveOverrideProps<TextFieldProps>;
    abilities?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CharactersCreateFormProps = React.PropsWithChildren<{
    overrides?: CharactersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CharactersCreateFormInputValues) => CharactersCreateFormInputValues;
    onSuccess?: (fields: CharactersCreateFormInputValues) => void;
    onError?: (fields: CharactersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CharactersCreateFormInputValues) => CharactersCreateFormInputValues;
    onValidate?: CharactersCreateFormValidationValues;
} & React.CSSProperties>;
export default function CharactersCreateForm(props: CharactersCreateFormProps): React.ReactElement;
