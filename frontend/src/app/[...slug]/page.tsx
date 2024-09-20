import { getPageBySlug } from '@/lib/api';
import LoadTemplate from '@/components/core/LoadTemplate';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const path = slug.length ? Array.from(slug).join('/') : slug;

  const data: any = await getPageBySlug(path);
  if (!data) return notFound();
  const { nodeByUri } = data;

  const templateName =
    nodeByUri.template !== null ? nodeByUri.template.templateName : null;

  return (
    <main className="min-h-screen p-24 prose md:prose-lg lg:prose-lg">
      <LoadTemplate tmpl={templateName} slug={path} data={data} />
    </main>
  );
}
