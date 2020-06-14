import gql from 'graphql-tag'

const UPDATE_CATEGORY = gql`
  mutation updateCategory($id: ID! $title: String!) {
    updateCategory(id: $id title: $title) {
      id
      title
    }
  } 
`
export default UPDATE_CATEGORY