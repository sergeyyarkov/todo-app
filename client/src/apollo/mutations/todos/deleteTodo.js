import gql from 'graphql-tag'

const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id) {
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
`

export default DELETE_TODO