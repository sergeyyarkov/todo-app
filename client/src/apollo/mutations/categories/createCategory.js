import gql from 'graphql-tag'

const CREATE_CATEGORY = gql`
  mutation createCategory($title: String!) {
    createCategory(title: $title) {
      id
      title
    }
  } 
`
export default CREATE_CATEGORY