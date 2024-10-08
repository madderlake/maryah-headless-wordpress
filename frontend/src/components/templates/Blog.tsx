import ContentBlock from '../core/ContentBlock';
import { WPPage } from '@/types/pages/wp-page';
import PostListItem from '@/components/core/Post/PostListItem';
import { getAllPostsForHome } from '@/app/lib/api';

const Blog = async (data: WPPage) => {
  if (!data) return;
  const { title, content, slug } = data;
  const postData = await getAllPostsForHome(12, false);
  const { edges } = postData;
  return (
    <>
      <article className={`${slug} container`}>
        <div>
          <h1>{title}</h1>
          <ContentBlock content={content} />
        </div>
      </article>
      {edges.map(({ node }) => (
        <PostListItem {...node} key={`post-${node.id}`} />
      ))}
    </>
  );
};

export default Blog;
