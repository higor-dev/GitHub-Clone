import gql from 'graphql-tag';

export const USER_LIST = gql`
  query {
    viewer {
      name
      avatarUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      login
      location
      email
    }
  }
`
