/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getCharacters } from "../graphql/queries";
import { updateCharacters } from "../graphql/mutations";
export default function CharactersUpdateForm(props) {
  const {
    id: idProp,
    characters: charactersModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    hp: "",
    ap: "",
    height: "",
    pronouns: "",
    class: "",
    hometown: "",
    items: "",
    clothes: "",
    abilities: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [hp, setHp] = React.useState(initialValues.hp);
  const [ap, setAp] = React.useState(initialValues.ap);
  const [height, setHeight] = React.useState(initialValues.height);
  const [pronouns, setPronouns] = React.useState(initialValues.pronouns);
  const [class1, setClass1] = React.useState(initialValues.class);
  const [hometown, setHometown] = React.useState(initialValues.hometown);
  const [items, setItems] = React.useState(initialValues.items);
  const [clothes, setClothes] = React.useState(initialValues.clothes);
  const [abilities, setAbilities] = React.useState(initialValues.abilities);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = charactersRecord
      ? { ...initialValues, ...charactersRecord }
      : initialValues;
    setName(cleanValues.name);
    setHp(cleanValues.hp);
    setAp(cleanValues.ap);
    setHeight(cleanValues.height);
    setPronouns(cleanValues.pronouns);
    setClass1(cleanValues.class);
    setHometown(cleanValues.hometown);
    setItems(cleanValues.items);
    setClothes(cleanValues.clothes);
    setAbilities(cleanValues.abilities);
    setErrors({});
  };
  const [charactersRecord, setCharactersRecord] =
    React.useState(charactersModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getCharacters,
              variables: { id: idProp },
            })
          )?.data?.getCharacters
        : charactersModelProp;
      setCharactersRecord(record);
    };
    queryData();
  }, [idProp, charactersModelProp]);
  React.useEffect(resetStateValues, [charactersRecord]);
  const validations = {
    name: [{ type: "Required" }],
    hp: [],
    ap: [],
    height: [],
    pronouns: [],
    class: [],
    hometown: [],
    items: [],
    clothes: [],
    abilities: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          hp: hp ?? null,
          ap: ap ?? null,
          height: height ?? null,
          pronouns: pronouns ?? null,
          class: class {} ?? null,
          hometown: hometown ?? null,
          items: items ?? null,
          clothes: clothes ?? null,
          abilities: abilities ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateCharacters,
            variables: {
              input: {
                id: charactersRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CharactersUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              hp,
              ap,
              height,
              pronouns,
              class: class1,
              hometown,
              items,
              clothes,
              abilities,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Hp"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={hp}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              hp: value,
              ap,
              height,
              pronouns,
              class: class1,
              hometown,
              items,
              clothes,
              abilities,
            };
            const result = onChange(modelFields);
            value = result?.hp ?? value;
          }
          if (errors.hp?.hasError) {
            runValidationTasks("hp", value);
          }
          setHp(value);
        }}
        onBlur={() => runValidationTasks("hp", hp)}
        errorMessage={errors.hp?.errorMessage}
        hasError={errors.hp?.hasError}
        {...getOverrideProps(overrides, "hp")}
      ></TextField>
      <TextField
        label="Ap"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ap}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              hp,
              ap: value,
              height,
              pronouns,
              class: class1,
              hometown,
              items,
              clothes,
              abilities,
            };
            const result = onChange(modelFields);
            value = result?.ap ?? value;
          }
          if (errors.ap?.hasError) {
            runValidationTasks("ap", value);
          }
          setAp(value);
        }}
        onBlur={() => runValidationTasks("ap", ap)}
        errorMessage={errors.ap?.errorMessage}
        hasError={errors.ap?.hasError}
        {...getOverrideProps(overrides, "ap")}
      ></TextField>
      <TextField
        label="Height"
        isRequired={false}
        isReadOnly={false}
        value={height}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              hp,
              ap,
              height: value,
              pronouns,
              class: class1,
              hometown,
              items,
              clothes,
              abilities,
            };
            const result = onChange(modelFields);
            value = result?.height ?? value;
          }
          if (errors.height?.hasError) {
            runValidationTasks("height", value);
          }
          setHeight(value);
        }}
        onBlur={() => runValidationTasks("height", height)}
        errorMessage={errors.height?.errorMessage}
        hasError={errors.height?.hasError}
        {...getOverrideProps(overrides, "height")}
      ></TextField>
      <TextField
        label="Pronouns"
        isRequired={false}
        isReadOnly={false}
        value={pronouns}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              hp,
              ap,
              height,
              pronouns: value,
              class: class1,
              hometown,
              items,
              clothes,
              abilities,
            };
            const result = onChange(modelFields);
            value = result?.pronouns ?? value;
          }
          if (errors.pronouns?.hasError) {
            runValidationTasks("pronouns", value);
          }
          setPronouns(value);
        }}
        onBlur={() => runValidationTasks("pronouns", pronouns)}
        errorMessage={errors.pronouns?.errorMessage}
        hasError={errors.pronouns?.hasError}
        {...getOverrideProps(overrides, "pronouns")}
      ></TextField>
      <TextField
        label="Class"
        isRequired={false}
        isReadOnly={false}
        value={class1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              hp,
              ap,
              height,
              pronouns,
              class: value,
              hometown,
              items,
              clothes,
              abilities,
            };
            const result = onChange(modelFields);
            value = result?.class ?? value;
          }
          if (errors.class?.hasError) {
            runValidationTasks("class", value);
          }
          setClass1(value);
        }}
        onBlur={() => runValidationTasks("class", class1)}
        errorMessage={errors.class?.errorMessage}
        hasError={errors.class?.hasError}
        {...getOverrideProps(overrides, "class")}
      ></TextField>
      <TextField
        label="Hometown"
        isRequired={false}
        isReadOnly={false}
        value={hometown}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              hp,
              ap,
              height,
              pronouns,
              class: class1,
              hometown: value,
              items,
              clothes,
              abilities,
            };
            const result = onChange(modelFields);
            value = result?.hometown ?? value;
          }
          if (errors.hometown?.hasError) {
            runValidationTasks("hometown", value);
          }
          setHometown(value);
        }}
        onBlur={() => runValidationTasks("hometown", hometown)}
        errorMessage={errors.hometown?.errorMessage}
        hasError={errors.hometown?.hasError}
        {...getOverrideProps(overrides, "hometown")}
      ></TextField>
      <TextField
        label="Items"
        isRequired={false}
        isReadOnly={false}
        value={items}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              hp,
              ap,
              height,
              pronouns,
              class: class1,
              hometown,
              items: value,
              clothes,
              abilities,
            };
            const result = onChange(modelFields);
            value = result?.items ?? value;
          }
          if (errors.items?.hasError) {
            runValidationTasks("items", value);
          }
          setItems(value);
        }}
        onBlur={() => runValidationTasks("items", items)}
        errorMessage={errors.items?.errorMessage}
        hasError={errors.items?.hasError}
        {...getOverrideProps(overrides, "items")}
      ></TextField>
      <TextField
        label="Clothes"
        isRequired={false}
        isReadOnly={false}
        value={clothes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              hp,
              ap,
              height,
              pronouns,
              class: class1,
              hometown,
              items,
              clothes: value,
              abilities,
            };
            const result = onChange(modelFields);
            value = result?.clothes ?? value;
          }
          if (errors.clothes?.hasError) {
            runValidationTasks("clothes", value);
          }
          setClothes(value);
        }}
        onBlur={() => runValidationTasks("clothes", clothes)}
        errorMessage={errors.clothes?.errorMessage}
        hasError={errors.clothes?.hasError}
        {...getOverrideProps(overrides, "clothes")}
      ></TextField>
      <TextField
        label="Abilities"
        isRequired={false}
        isReadOnly={false}
        value={abilities}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              hp,
              ap,
              height,
              pronouns,
              class: class1,
              hometown,
              items,
              clothes,
              abilities: value,
            };
            const result = onChange(modelFields);
            value = result?.abilities ?? value;
          }
          if (errors.abilities?.hasError) {
            runValidationTasks("abilities", value);
          }
          setAbilities(value);
        }}
        onBlur={() => runValidationTasks("abilities", abilities)}
        errorMessage={errors.abilities?.errorMessage}
        hasError={errors.abilities?.hasError}
        {...getOverrideProps(overrides, "abilities")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || charactersModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || charactersModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
