import ContentBlock from '@/components/layout/ContentBlock/ContentBlock';
import type { Post } from '@/app/lib/types/posts/post';
import './index.css';

const Article = (data: Post) => {
  if (!data) console.log('no data');
  console.log(data);
  const { id, title, slug, date, content, author } = data;

  return (
    <article className={`${slug} post-template post-${id}`}>
      <h2 className="mb-8">{title}</h2>
      <ContentBlock content={content} />
      <div className="row  post-footer ">
        <p>{author.node.name}</p>
        <p>{date}</p>
      </div>
    </article>
  );
};

export default Article;
