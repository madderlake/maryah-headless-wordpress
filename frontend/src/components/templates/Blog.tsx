import ContentBlock from '../core/ContentBlock';
import { WPPage } from '@/types/pages/wp-page';
import { Post } from '@/app/lib/types/posts/post';
import { Edges } from '@/app/lib/types/common';
import PostListItem from '@/components/core/Post/PostListItem';

const Blog = (data: WPPage & Edges<Post>) => {
  if (!data) return;
  const { title, content, slug, edges } = data;

  return (
    <>
      <article className={`${slug} container`}>
        <div>
          <h1>{title}</h1>
          <ContentBlock content={content} />
        </div>
      </article>
      {edges.map((post, index) => {
        const { node } = post;

        return <PostListItem {...node} key={`post-${index}`} />;
      })}
    </>
  );
};

export default Blog;
