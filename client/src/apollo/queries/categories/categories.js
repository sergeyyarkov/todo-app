import gql from 'graphql-tag'

const GET_CATEGORIES = gql`
  {
    categories {
      id
      title
    }
  }
`

export default GET_CATEGORIES