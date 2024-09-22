import { getPageBySlug, getPageSlugs } from '@/lib/api';
import LoadTemplate from '@/components/core/LoadTemplate';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const data = await getPageSlugs();
  return Object.values(data).map((page: any) => Object.values(page));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const path = slug.length ? Array.from(slug).join('/') : slug;

  const data: any = await getPageBySlug(path);
  if (!data) return notFound();
  const { nodeByUri } = data;
  const { templateName } = nodeByUri.template;

  return (
    <main className="min-h-screen p-24 prose md:prose-lg lg:prose-lg max-w-full">
      <LoadTemplate tmpl={templateName} data={nodeByUri} />
    </main>
  );
}
