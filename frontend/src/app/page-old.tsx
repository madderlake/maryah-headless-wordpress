// app/page.tsx
import { gql } from '@apollo/client';
import { client } from './lib/apolloClient';
import DOMPurify, { sanitize } from 'isomorphic-dompurify';

export const revalidate = 10; // ISR (Incremental Static Regeneration)

const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        content
      }
    }
  }
`;

interface Post {
  id: string;
  title: string;
  content: string;
}

export default async function Home() {
  const { data } = await client.query({
    query: GET_POSTS,
  });

  const posts: Post[] = data.posts.nodes;

  return (
    <main>
      <h1>Blog Posts</h1>
      {posts.map((post) => {
        const { id, title, content } = post;
        const saniContent = DOMPurify.sanitize(content);
        return (
          <article key={id}>
            <h2>{title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(saniContent),
              }}
            />
          </article>
        );
      })}
    </main>
  );
}
