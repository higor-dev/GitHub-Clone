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
      starredRepositories {
        totalCount
      }
      login
      location
      email
    }
  }
`

export const REPOSITORIES = gql`
query {
  viewer {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          primaryLanguage {
            name
            color
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
}

`
