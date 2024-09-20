import { Post } from '@/app/lib/types/posts/post';
import ContentBlock from '@/components/layout/ContentBlock/ContentBlock';
import { Node } from '@/app/lib/types/common';
const PostListItem = (post: Post) => {
  const { id, title, excerpt, author, date, categories } = post;

  return (
    <section className={`post-${id} excerpt  max-w-full `} key={id}>
      <h3 className="my-4 font-bold">{title}</h3>
      <ContentBlock content={excerpt} />
      <p className="mt-4">by {author.node.name}</p>
      <span>Date: {date} </span>
      <span>Categories: cats here</span>
    </section>
  );
};

export default PostListItem;
