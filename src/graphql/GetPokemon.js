import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query pokemons($limit: Int) {
    pokemons(limit: $limit) {
      results {
        id
        name
        image
      }
    }
  }
`;
