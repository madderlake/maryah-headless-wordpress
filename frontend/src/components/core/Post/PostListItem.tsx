import Post from '@/app/lib/types/posts/post';
import ContentBlock from '@/components/core/ContentBlock';
import Link from 'next/link';
import Image from 'next/image';
import Category from '@/app/lib/types/posts/category';
import { formatDate } from '@/components/utilities/Helpers';
import { pathname } from 'next-extra/pathname';

const PostListItem = (data: Post) => {
  const { id, title, slug, excerpt, author, date, featuredImage, categories } =
    data;
  const sourceUrl = featuredImage?.node?.sourceUrl;
  const path = pathname();
  return (
    <section className={`post-${id} excerpt`} key={`post-${id}`}>
      <h3 className="my-4 font-bold">{title}</h3>
      <div className="flex gap-5">
        {sourceUrl && (
          <Image src={sourceUrl} alt={title} width={175} height={175} />
        )}
        <ContentBlock content={excerpt} />
      </div>
      <Link href={`${path}/${slug}`} className="block no-underline">
        Read More &raquo;
      </Link>
      <div className="post-footer mt-8 pb-5 border-b border-dotted b border-gray-400">
        <span className="my-0">by {author && author.node.name} | </span>
        <span>{formatDate(date)} | </span>
        <span>Categories:</span>
        {categories?.nodes.map((cat: Category, index) => (
          <span className="nline-block mx-2" key={cat.id || index}>
            {cat.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default PostListItem;
