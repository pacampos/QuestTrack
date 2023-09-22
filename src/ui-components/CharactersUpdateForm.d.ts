/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Characters } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CharactersUpdateFormInputValues = {
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
export declare type CharactersUpdateFormValidationValues = {
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
export declare type CharactersUpdateFormOverridesProps = {
    CharactersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type CharactersUpdateFormProps = React.PropsWithChildren<{
    overrides?: CharactersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    characters?: Characters;
    onSubmit?: (fields: CharactersUpdateFormInputValues) => CharactersUpdateFormInputValues;
    onSuccess?: (fields: CharactersUpdateFormInputValues) => void;
    onError?: (fields: CharactersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CharactersUpdateFormInputValues) => CharactersUpdateFormInputValues;
    onValidate?: CharactersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CharactersUpdateForm(props: CharactersUpdateFormProps): React.ReactElement;
