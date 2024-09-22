import ContentBlock from '@/components/layout/ContentBlock/ContentBlock';
import type { Post } from '@/app/lib/types/posts/post';
import { notFound } from 'next/navigation';
import { Categories } from '@/app/lib/types/posts/category';
// import './index.css';

const Article = (data: Post) => {
  if (!data) return notFound();
  const { id, title, slug, date, content, categories, author } = data;

  return (
    <article className={`${slug} post-template post-${id}`}>
      <h2 className="mb-8">{title}</h2>
      <ContentBlock content={content} />
      <div className="row  post-footer ">
        <span>{author.node.name}</span>
        <span> | </span>
        <span>{date}</span>
        <span> | </span>
        <span>
          Categories:
          {categories?.nodes.map((cat: any) => {
            return <span className="inline-block mx-2">{cat.name}</span>;
          })}
        </span>
      </div>
    </article>
  );
};

export default Article;
