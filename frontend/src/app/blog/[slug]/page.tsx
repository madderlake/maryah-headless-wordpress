import { getPostBySlug } from '@/lib/api';
import LoadTemplate from '@/components/core/LoadTemplate';
import Article from '@/components/core/Post/Article';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const data: any = await getPostBySlug(slug);
  console.log(slug, data);
  if (!data) return notFound();
  const { nodeByUri } = data;

  return (
    <main className="min-h-screen p-24 prose md:prose-lg lg:prose-lg max-w-full">
      <Article {...nodeByUri} />
    </main>
  );
}
