import gql from 'graphql-tag'

const GET_TODOS = gql`
  query getTodos {
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
`;

export default GET_TODOS