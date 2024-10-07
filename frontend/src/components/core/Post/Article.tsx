import ContentBlock from '@/components/core/ContentBlock';
import type { Post } from '@/app/lib/types/posts/post';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import type Category from '@/app/lib/types/posts/category';

const Article = (data: Post) => {
  if (!data) return notFound();
  const { id, title, slug, date, content, categories, featuredImage, author } =
    data;

  const sourceUrl = featuredImage?.node?.sourceUrl;

  return (
    <article className={`${slug} post-template post-${id}`}>
      <h2 className="mb-8">{title}</h2>
      <div className="flex gap-5">
        {sourceUrl && (
          <Image
            src={sourceUrl}
            alt={title}
            width={300}
            height={300}
            className="inline h-auto"
          />
        )}
        <ContentBlock content={content} />
      </div>
      <div className="row  post-footer ">
        <span>{author?.node?.name}</span>
        <span> | </span>
        <span>{date}</span>
        <span> | </span>
        <span>
          Categories:
          {categories?.nodes.map((cat: Category) => (
            <span className="inline-block mx-2" key={cat.id}>
              {cat.name}
            </span>
          ))}
        </span>
      </div>
    </article>
  );
};

export default Article;
