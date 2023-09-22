/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCharacters = /* GraphQL */ `
  mutation CreateCharacters(
    $input: CreateCharactersInput!
    $condition: ModelCharactersConditionInput
  ) {
    createCharacters(input: $input, condition: $condition) {
      id
      name
      hp
      ap
      height
      pronouns
      class
      hometown
      items
      clothes
      abilities
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCharacters = /* GraphQL */ `
  mutation UpdateCharacters(
    $input: UpdateCharactersInput!
    $condition: ModelCharactersConditionInput
  ) {
    updateCharacters(input: $input, condition: $condition) {
      id
      name
      hp
      ap
      height
      pronouns
      class
      hometown
      items
      clothes
      abilities
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCharacters = /* GraphQL */ `
  mutation DeleteCharacters(
    $input: DeleteCharactersInput!
    $condition: ModelCharactersConditionInput
  ) {
    deleteCharacters(input: $input, condition: $condition) {
      id
      name
      hp
      ap
      height
      pronouns
      class
      hometown
      items
      clothes
      abilities
      createdAt
      updatedAt
      __typename
    }
  }
`;
