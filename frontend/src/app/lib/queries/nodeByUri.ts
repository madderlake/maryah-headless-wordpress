export const GET_NODE_BY_URI = `
query GetNodeByUri($slug: String!) {
  nodeByUri(uri: $slug) {
    __typename
    ... on Page {
      id
      slug
      title
      content
      template {
        templateName
      }
    }
    ... on Post {
      id
      date
      slug
      title
      content
      excerpt
      author {
        node {
          name
          firstName
          lastName
          avatar {
            url
          }
          posts {
            edges {
              node {
                title
                link
                date
                excerpt
              }
            }
          }
        }
      }
    }
  }
}`;
