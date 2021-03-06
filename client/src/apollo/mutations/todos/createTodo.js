import gql from 'graphql-tag'

const CREATE_TODO = gql`
  mutation CreateTodo($title: String! $description: String! $deadline: String! $categoryId: String!) {
    createTodo(title: $title description: $description deadline: $deadline categoryId: $categoryId) {
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

export default CREATE_TODO