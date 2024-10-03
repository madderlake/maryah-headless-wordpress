import Post from '@/app/lib/types/posts/post';
import ContentBlock from '@/components/layout/ContentBlock/ContentBlock';

const PostListItem = (data: Post) => {
  const { id, title, excerpt, author, date, categories } = data;

  return (
    <section className={`post-${id} excerpt  max-w-full `}>
      <h3 className="my-4 font-bold">{title}</h3>
      <ContentBlock content={excerpt} />
      <p className="mt-4">by {author.node.name}</p>
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
