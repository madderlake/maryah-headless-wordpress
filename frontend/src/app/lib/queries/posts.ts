import type { Post } from '@/types/posts/post';

import { Edges, QueryEdgesResult } from '@/types/common';
import { Preview } from '@/types/posts/preview';

export type GetPreviewPostResult = Preview;

export const GET_POST_BY_SLUG = `query GetPostByUri($slug: String!) {
  nodeByUri(uri: $slug) {
    __typename
    ... on Post {
      id
      date
      slug
      title
      content
      excerpt
      author {
        ...AuthorToUser
      }
      categories {
        ...PostToCategory
      }
    }
  }
}

fragment AuthorToUser on NodeWithAuthorToUserConnectionEdge {
  node {
    name
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

fragment PostToCategory on PostToCategoryConnection {
  nodes {
    name
    id
    uri
  }
}`;

export const GET_PREVIEW_POST = `
  query PreviewPost($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      databaseId
      slug
      status
    }
  }`;

export type GetAllPostsWithSlugResult = QueryEdgesResult<'posts', Post>;

export const GET_ALL_POSTS_WITH_SLUG = `
  {
    posts(first: 10000) {
      edges {
        node {
          slug
        }
      }
    }
  }`;

export type GetAllPostsForHomeResult = QueryEdgesResult<'posts', Post>;

export const GET_LTD_POSTS = `
  query AllPosts($limit: Int!) {
  posts(first: $limit) {
    edges {
      ...RootQueryToPostConnectionEdgeFragment
    }
  }
}

fragment RootQueryToPostConnectionEdgeFragment on RootQueryToPostConnectionEdge {
  node {
    id
    title
    excerpt(format: RENDERED)
    slug
    date
    featuredImage {
      node {
        sourceUrl
      }
    }
    categories {
      nodes {
        categoryId
        name
        slug
      }
    }
    author {
      node {
        id
        name
        avatar {
          url
          default
        }
      }
    }
  }
}`;

export type GetPostAndMorePostsResult = {
  post: Post;
  posts: Edges<Post>;
};

export const GET_POST_AND_MORE_POSTS = (isRevision: boolean) => `
  fragment AuthorFields on User {
    name
    firstName
    lastName
    avatar {
      url
    }
  }
  fragment PostFields on Post {
    title
    excerpt
    slug
    date
    featuredImage {
      node {
        sourceUrl
      }
    }
    author {
      node {
        ...AuthorFields
      }
    }
    categories {
      edges {
        node {
          name
        }
      }
    }
    tags {
      edges {
        node {
          name
        }
      }
    }
  }
  query PostBySlug($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      ...PostFields
      content
      ${
        // Only some of the fields of a revision are considered as there are some inconsistencies
        isRevision
          ? `
      revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            content
            author {
              node {
                ...AuthorFields
              }
            }
          }
        }
      }
      `
          : ''
      }
    }
    posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }`;

export const GET_POST_SLUGS = `
query GetPostSlugs {
  posts {
    nodes {
      slug
    }
  }
}`;
