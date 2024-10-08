'use client';
import ContentBlock from '@/components/core/ContentBlock';
import type { Post } from '@/app/lib/types/posts/post';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import type Category from '@/app/lib/types/posts/category';
import { useImageSize } from 'react-image-size';
import { formatDate } from '@/components/utilities/Helpers';

const Article = (data: Post) => {
  if (!data) return notFound();
  const { id, title, slug, date, content, categories, featuredImage, author } =
    data;

  const sourceUrl = featuredImage?.node?.sourceUrl;

  const [dimensions, { loading, error }] = useImageSize(sourceUrl);

  return (
    <article className={`${slug} post-template post-${id}`}>
      <h2 className="mb-8">{title}</h2>
      {sourceUrl && (
        <div className="w-full md:w-1/3">
          {loading ? (
            <div className="flex justify-center items-center">Loading...</div>
          ) : dimensions ? (
            <Image
              src={sourceUrl}
              alt={title}
              width={dimensions?.width}
              height={dimensions?.height}
              className="float-left mr-6 my-2 not-prose"
            />
          ) : (
            error && (
              <div className="flex justify-center items-center">
                Image not available.
              </div>
            )
          )}
        </div>
      )}
      <div className="w-full">
        <ContentBlock content={content} />
      </div>
      <div className="row  post-footer ">
        <span>by {author && author?.node?.name} | </span>
        <span>{formatDate(date)} | </span>
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
