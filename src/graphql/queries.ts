/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCharacters = /* GraphQL */ `
  query GetCharacters($id: ID!) {
    getCharacters(id: $id) {
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
export const listCharacters = /* GraphQL */ `
  query ListCharacters(
    $filter: ModelCharactersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
