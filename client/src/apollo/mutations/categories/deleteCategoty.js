import gql from 'graphql-tag'

const DELETE_CATEGORY = gql`
  mutation deleteCategory($id: ID!) {
    deleteCategory(id: $id) {
      id
      title
    }
  } 
`
export default DELETE_CATEGORY