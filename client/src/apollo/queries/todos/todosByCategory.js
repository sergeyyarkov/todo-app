import gql from 'graphql-tag'

const GET_TODOS_BY_CATEGORY = gql`
query getTodosByCategory($id: ID!) {
  category(id: $id) {
    id
    title
    todos {
      id
      title
      description
      status
      deadline
      category {
        title
      }
    }
  }
}
`

export default GET_TODOS_BY_CATEGORY