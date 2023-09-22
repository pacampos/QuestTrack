/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCharactersInput = {
  id?: string | null,
  name: string,
  hp?: number | null,
  ap?: number | null,
  height?: string | null,
  pronouns?: string | null,
  class?: string | null,
  hometown?: string | null,
  items?: Array< string | null > | null,
  clothes?: Array< string | null > | null,
  abilities?: Array< string | null > | null,
};

export type ModelCharactersConditionInput = {
  name?: ModelStringInput | null,
  hp?: ModelIntInput | null,
  ap?: ModelIntInput | null,
  height?: ModelStringInput | null,
  pronouns?: ModelStringInput | null,
  class?: ModelStringInput | null,
  hometown?: ModelStringInput | null,
  items?: ModelStringInput | null,
  clothes?: ModelStringInput | null,
  abilities?: ModelStringInput | null,
  and?: Array< ModelCharactersConditionInput | null > | null,
  or?: Array< ModelCharactersConditionInput | null > | null,
  not?: ModelCharactersConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Characters = {
  __typename: "Characters",
  id: string,
  name: string,
  hp?: number | null,
  ap?: number | null,
  height?: string | null,
  pronouns?: string | null,
  class?: string | null,
  hometown?: string | null,
  items?: Array< string | null > | null,
  clothes?: Array< string | null > | null,
  abilities?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCharactersInput = {
  id: string,
  name?: string | null,
  hp?: number | null,
  ap?: number | null,
  height?: string | null,
  pronouns?: string | null,
  class?: string | null,
  hometown?: string | null,
  items?: Array< string | null > | null,
  clothes?: Array< string | null > | null,
  abilities?: Array< string | null > | null,
};

export type DeleteCharactersInput = {
  id: string,
};

export type ModelCharactersFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  hp?: ModelIntInput | null,
  ap?: ModelIntInput | null,
  height?: ModelStringInput | null,
  pronouns?: ModelStringInput | null,
  class?: ModelStringInput | null,
  hometown?: ModelStringInput | null,
  items?: ModelStringInput | null,
  clothes?: ModelStringInput | null,
  abilities?: ModelStringInput | null,
  and?: Array< ModelCharactersFilterInput | null > | null,
  or?: Array< ModelCharactersFilterInput | null > | null,
  not?: ModelCharactersFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCharactersConnection = {
  __typename: "ModelCharactersConnection",
  items:  Array<Characters | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCharactersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  hp?: ModelSubscriptionIntInput | null,
  ap?: ModelSubscriptionIntInput | null,
  height?: ModelSubscriptionStringInput | null,
  pronouns?: ModelSubscriptionStringInput | null,
  class?: ModelSubscriptionStringInput | null,
  hometown?: ModelSubscriptionStringInput | null,
  items?: ModelSubscriptionStringInput | null,
  clothes?: ModelSubscriptionStringInput | null,
  abilities?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCharactersFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharactersFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateCharactersMutationVariables = {
  input: CreateCharactersInput,
  condition?: ModelCharactersConditionInput | null,
};

export type CreateCharactersMutation = {
  createCharacters?:  {
    __typename: "Characters",
    id: string,
    name: string,
    hp?: number | null,
    ap?: number | null,
    height?: string | null,
    pronouns?: string | null,
    class?: string | null,
    hometown?: string | null,
    items?: Array< string | null > | null,
    clothes?: Array< string | null > | null,
    abilities?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCharactersMutationVariables = {
  input: UpdateCharactersInput,
  condition?: ModelCharactersConditionInput | null,
};

export type UpdateCharactersMutation = {
  updateCharacters?:  {
    __typename: "Characters",
    id: string,
    name: string,
    hp?: number | null,
    ap?: number | null,
    height?: string | null,
    pronouns?: string | null,
    class?: string | null,
    hometown?: string | null,
    items?: Array< string | null > | null,
    clothes?: Array< string | null > | null,
    abilities?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCharactersMutationVariables = {
  input: DeleteCharactersInput,
  condition?: ModelCharactersConditionInput | null,
};

export type DeleteCharactersMutation = {
  deleteCharacters?:  {
    __typename: "Characters",
    id: string,
    name: string,
    hp?: number | null,
    ap?: number | null,
    height?: string | null,
    pronouns?: string | null,
    class?: string | null,
    hometown?: string | null,
    items?: Array< string | null > | null,
    clothes?: Array< string | null > | null,
    abilities?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCharactersQueryVariables = {
  id: string,
};

export type GetCharactersQuery = {
  getCharacters?:  {
    __typename: "Characters",
    id: string,
    name: string,
    hp?: number | null,
    ap?: number | null,
    height?: string | null,
    pronouns?: string | null,
    class?: string | null,
    hometown?: string | null,
    items?: Array< string | null > | null,
    clothes?: Array< string | null > | null,
    abilities?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCharactersQueryVariables = {
  filter?: ModelCharactersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCharactersQuery = {
  listCharacters?:  {
    __typename: "ModelCharactersConnection",
    items:  Array< {
      __typename: "Characters",
      id: string,
      name: string,
      hp?: number | null,
      ap?: number | null,
      height?: string | null,
      pronouns?: string | null,
      class?: string | null,
      hometown?: string | null,
      items?: Array< string | null > | null,
      clothes?: Array< string | null > | null,
      abilities?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCharactersSubscriptionVariables = {
  filter?: ModelSubscriptionCharactersFilterInput | null,
};

export type OnCreateCharactersSubscription = {
  onCreateCharacters?:  {
    __typename: "Characters",
    id: string,
    name: string,
    hp?: number | null,
    ap?: number | null,
    height?: string | null,
    pronouns?: string | null,
    class?: string | null,
    hometown?: string | null,
    items?: Array< string | null > | null,
    clothes?: Array< string | null > | null,
    abilities?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCharactersSubscriptionVariables = {
  filter?: ModelSubscriptionCharactersFilterInput | null,
};

export type OnUpdateCharactersSubscription = {
  onUpdateCharacters?:  {
    __typename: "Characters",
    id: string,
    name: string,
    hp?: number | null,
    ap?: number | null,
    height?: string | null,
    pronouns?: string | null,
    class?: string | null,
    hometown?: string | null,
    items?: Array< string | null > | null,
    clothes?: Array< string | null > | null,
    abilities?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCharactersSubscriptionVariables = {
  filter?: ModelSubscriptionCharactersFilterInput | null,
};

export type OnDeleteCharactersSubscription = {
  onDeleteCharacters?:  {
    __typename: "Characters",
    id: string,
    name: string,
    hp?: number | null,
    ap?: number | null,
    height?: string | null,
    pronouns?: string | null,
    class?: string | null,
    hometown?: string | null,
    items?: Array< string | null > | null,
    clothes?: Array< string | null > | null,
    abilities?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
