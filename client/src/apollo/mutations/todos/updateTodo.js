import gql from 'graphql-tag';

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID! $title: String! $description: String! $deadline: String! $categoryId: String!) {
    updateTodo(id: $id title: $title description: $description deadline: $deadline categoryId: $categoryId) {
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

export default UPDATE_TODO