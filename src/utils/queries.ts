import { gql } from '@apollo/client'

export const GET_COUNTRIES = gql`
  query Countries($search: StringQueryOperatorInput) {
    countries(filter: { continent: $search }) {
      code
      currency
      name
      continent {
        name
      }
      emoji
    }
  }
`
