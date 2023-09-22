import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  Button,
  Heading,
  Text,
  View,
  Flex
} from "@aws-amplify/ui-react";
import { listCharacters } from "./graphql/queries.ts"
import { createCharacters, deleteCharacters, updateCharacters } from "./graphql/mutations.ts"
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';


const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacters() {
    const apiData = await API.graphql({ query: listCharacters });
    const charactersFromAPI = apiData.data.listCharacters.items;
    setCharacters(charactersFromAPI);
  }

  async function createCharacter(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      hp: form.get("hp"),
      ap: form.get("ap"),
      height: form.get("height"),
      pronouns: form.get("pronouns"),
      class: form.get("class"),
      hometown: form.get("hometown"),
      items: form.get("items"),
      clothes: form.get("clothes"),
      abilities: form.get("abilities")
    };
    await API.graphql({
      query: createCharacters,
      variables: { input: data },
    });
    fetchCharacters();
    event.target.reset();
  }

  async function deleteCharacter({ id }) {
    const newCharacters = characters.filter((character) => character.id !== id);
    setCharacters(newCharacters);
    await API.graphql({
      query: deleteCharacters,
      variables: { input: { id } },
    });
  }

  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: false,
    },
    {
      field: 'class',
      headerName: 'Class',
      width: 150,
      editable: false,
    },
    {
      field: 'hp',
      headerName: 'HP',
      type: 'number',
      width: 50,
      editable: false,
    },
    {
      field: 'ap',
      headerName: 'AP',
      type: 'number',
      width: 50,
      editable: false,
    },
    {
      field: 'hometown',
      headerName: 'Hometown',
      width: 150,
      editable: false,
    },
    {
      field: 'pronouns',
      headerName: 'Pronouns',
      width: 150,
      editable: false,
    },
    {
      field: 'items',
      headerName: 'Items',
      width: 150,
      editable: false,
    },
    {
      field: 'clothes',
      headerName: 'Clothes',
      width: 150,
      editable: false,
    },
    {
      field: 'abilities',
      headerName: 'Abilities',
      width: 150,
      editable: false,
    },
  ];

  return (
    <View className="App">
      <Heading level={1}>Create A Character</Heading>
      <View as="form" margin="3rem 0" onSubmit={createCharacter}>
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 15 }}>
          <Grid item xs={2} sm={3} md={3}>
            <TextField
              name="name"
              label="Character Name"
              labelHidden
              variation="quiet"
              required
              inputProps={{maxLength: 50}}
            />
          </Grid>


          <Grid item xs={2} sm={3} md={3}>
            <TextField
              name="class"
              label="Class"
              labelHidden
              variation="quiet"
              required
              inputProps={{maxLength: 20}}
            />
          </Grid>

          <Grid item xs={2} sm={3} md={3}>
            <TextField
              name="hp"
              label="HP"
              labelHidden
              variation="quiet"
              required
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
          </Grid>

          <Grid item xs={2} sm={3} md={3}>
            <TextField
              name="ap"
              label="AP"
              labelHidden
              variation="quiet"
              required
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
          </Grid>

          <Grid item xs={2} sm={3} md={3}>
            <TextField
              name="hometown"
              label="Hometown"
              labelHidden
              variation="quiet"
              inputProps={{maxLength: 50}}
            />
          </Grid>

          <Grid item xs={2} sm={3} md={3}>
            <TextField
              name="height"
              label="Height"
              labelHidden
              variation="quiet"
              inputProps={{maxLength: 10}}
            />
          </Grid>

          <Grid item xs={2} sm={3} md={3}>
            <TextField
              name="pronouns"
              label="Pronouns"
              labelHidden
              variation="quiet"
              inputProps={{maxLength: 20}}
            />
          </Grid>

          <Grid item xs={2} sm={3} md={3}>
            <TextField
              name="items"
              label="Items"
              labelHidden
              variation="quiet"
              inputProps={{maxLength: 200}}
            />
          </Grid>

          <Grid item xs={2} sm={3} md={3}>
            <TextField
              name="clothes"
              label="Clothes"
              labelHidden
              variation="quiet"
              inputProps={{maxLength: 200}}
            />
          </Grid>

          <Grid item xs={2} sm={3} md={3}>
            <TextField
              name="abilities"
              label="Abilities"
              labelHidden
              variation="quiet"
            />
          </Grid>
          <Grid item xs>
            <Button type="submit" variation="primary">
              Create Character
            </Button>
          </Grid>
        </Grid>
      </View>
      <Heading level={2}>Existing Characters</Heading>
      <View margin="3rem 0">
      {/* <DataGrid
        rows={characters}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      /> */}

        {characters.map((character) => (
          <Flex
            key={character.id || character.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
            flex-wrap="wrap"
          >
          
            <Text as="strong" fontWeight={700}>
              Name: {character.name}
            </Text>
            <Text as="strong" fontWeight={700}>
              Class: {character.class}
            </Text>
            <Text as="span">HP: {character.hp}</Text>
            <Text as="span">AP: {character.ap}</Text>
            <Text as="span">Hometown: {character.hometown}</Text>
            <Text as="span">Height: {character.height}</Text>
            <Text as="span">Pronouns: {character.pronouns}</Text>
            <Text as="span">Items: {character.items}</Text>
            <Text as="span">Clothes: {character.clothes}</Text>
            <Text as="span">Abilities: {character.abilities}</Text>
            <Button variation="link" onClick={() => deleteCharacter(character)}>
              Delete Character
            </Button>
          </Flex>
        ))}
      </View>
    </View>
  );
};

export default App;