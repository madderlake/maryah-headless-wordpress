import ContentBlock from '@/components/layout/ContentBlock/ContentBlock';
import type { Post } from '@/app/lib/types/posts/post';
import { notFound } from 'next/navigation';
import { Categories } from '@/app/lib/types/posts/category';
import Image from 'next/image';

const Article = (data: Post) => {
  if (!data) return notFound();
  const { id, title, slug, date, content, categories, featuredImage, author } =
    data;

  const {
    node: { sourceUrl },
  } = featuredImage;

  return (
    <article className={`${slug} post-template post-${id}`}>
      <h2 className="mb-8">{title}</h2>
      <div className="flex gap-5">
        <Image src={sourceUrl} alt={title} width={300} height={400} />
        <ContentBlock content={content} />
      </div>
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
