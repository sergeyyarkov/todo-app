import gql from 'graphql-tag'

const GET_TODOS = gql`
  query getTodos {
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
`;

export default GET_TODOS