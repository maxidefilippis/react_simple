import { gql } from "@apollo/client";

export const GET_PLANETS = gql`
  query allPlanets($first: Int, $last: Int) {
    allPlanets(first: $first, last: $last) {
      planets {
        name
        diameter
        climates
        terrains
      }
    }
  }
`;