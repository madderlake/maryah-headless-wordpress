import { getPageBySlug, getAllPostsForHome } from '@/app/lib/api';
import ContentBlock from '@/components/layout/ContentBlock/ContentBlock';

const Blog = async ({ slug = 'blog' }) => {
  const data: any = await getPageBySlug(slug);
  const posts: any = await getAllPostsForHome(12, false);
  const {
    nodeByUri: { title, content },
  } = data;

  const { edges } = posts;
  return (
    <main className="min-h-screen p-16 prose md:prose-lg lg:prose-lg max-w-full">
      <h1>{title}</h1>
      <ContentBlock content={content} />
      {edges.map((post: any, index: number) => {
        const {
          node: {
            id,
            title,
            excerpt,
            slug,
            date,
            featuredImage,
            categories,
            author,
          },
        } = post;
        const postCats = categories.nodes.map((cat: any) => cat.name);
        return (
          <section className={`post-${id} excerpt `} key={id}>
            <h3 className="my-4 font-bold">{title}</h3>
            <ContentBlock content={excerpt} />
            <p className="mt-4">by {author.node.name}</p>
            <span>Date: {date} </span>
            <span>Categories: {postCats}</span>
          </section>
        );
      })}
    </main>
  );
};

export default Blog;
