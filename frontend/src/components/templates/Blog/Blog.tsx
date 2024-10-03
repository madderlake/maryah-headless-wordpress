'use client';

import ContentBlock from '../../layout/ContentBlock/ContentBlock';
import { Container } from 'reactstrap';
import './index.css';
import { WPPage } from '@/types/pages/wp-page';
import { Post } from '@/app/lib/types/posts/post';
import { Edges } from '@/app/lib/types/common';
import PostListItem from '@/components/core/Post/PostListItem';

const Blog = (data: WPPage & Edges<Post>) => {
  if (!data) return;
  const { title, content, slug, edges } = data;

  return (
    <>
      <article className={`${slug} blog-template`}>
        <Container>
          <h1>{title}</h1>
          <ContentBlock content={content} />
        </Container>
      </article>
      {edges.map((post, index) => {
        const { node } = post;

        return <PostListItem {...node} key={`post-${index}`} />;
      })}
    </>
  );
};

export default Blog;
