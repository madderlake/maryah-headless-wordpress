import { getPostBySlug, getPostSlugs } from '@/lib/api';
import Article from '@/components/core/Post/Article';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const data = await getPostSlugs();
  return Object.values(data).map((post: any) => Object.values(post));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const data: any = await getPostBySlug(slug);
  if (!data) return notFound();
  const { nodeByUri } = data;
  return (
    <main className="min-h-screen p-24 prose md:prose-lg lg:prose-lg max-w-full">
      <Article {...nodeByUri} />
    </main>
  );
}
