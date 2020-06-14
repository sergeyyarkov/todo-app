import gql from 'graphql-tag'

const GET_TODOS_BY_CATEGORY = gql`
query getTodosByCategory($id: ID!) {
  category(id: $id) {
    title
    todos {
      id
      title
      description
      deadline
      category {
        id
        title
      }
    }
  }
}
`

export default GET_TODOS_BY_CATEGORY