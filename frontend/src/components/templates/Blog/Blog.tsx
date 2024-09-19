'use client';

import ContentBlock from '../../layout/ContentBlock/ContentBlock';
import { Container } from 'reactstrap';
import './index.css';
import { Page } from '@/types/pages/page';
import { Post } from '@/app/lib/types/posts/post';
import { Edges } from '@/app/lib/types/common';
import PostListItem from '@/components/core/Post/PostListItem';

const Blog = (data: Page & Edges<Post>) => {
  if (!data) return;
  const { title, content, slug, edges } = data;

  return (
    <>
      <article className={`${slug} default-template`}>
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
