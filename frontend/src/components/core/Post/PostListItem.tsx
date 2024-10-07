import Post from '@/app/lib/types/posts/post';
import ContentBlock from '@/components/core/ContentBlock';
import Link from 'next/link';
import Image from 'next/image';

const PostListItem = (data: Post) => {
  const { id, title, slug, excerpt, author, date, featuredImage, categories } =
    data;

  const sourceUrl = featuredImage?.node?.sourceUrl;

  return (
    <section className={`post-${id} excerpt  max-w-full `}>
      <h3 className="my-4 font-bold">{title}</h3>
      <div className="flex gap-5">
        {sourceUrl && (
          <Image src={sourceUrl} alt={title} width={175} height={175} />
        )}
        <ContentBlock content={excerpt} />
      </div>
      <Link href={`blog/${slug}`}>Read More &raquo;</Link>
      <p className="my-0">by {author.node.name}</p>
      <span>Date: {date} </span>
      <span> | </span>
      <span>Categories:</span>

      {categories?.nodes.map((cat: any) => (
        <span className="inline-block mx-2" key={cat.categoryId}>
          {cat.name}
        </span>
      ))}
    </section>
  );
};

export default PostListItem;
