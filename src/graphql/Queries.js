import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query pokemons($limit: Int!) {
    pokemons(limit: $limit) {
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_POKEMON_DATA = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      stats {
        base_stat
        stat {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;
