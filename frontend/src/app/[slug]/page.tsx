import { getPageBySlug } from '@/lib/api';
import SwitchTemplate from '@/components/core/SwitchTemplate';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { slug: string } }) {
  const data: any = await getPageBySlug(params?.slug);
  if (!data) return notFound();

  const { nodeByUri } = data;
  const { slug } = params;

  const templateName =
    nodeByUri.template !== null ? nodeByUri.template.templateName : null;

  return (
    <main className="min-h-screen p-24 prose md:prose-lg lg:prose-lg">
      <SwitchTemplate tmpl={templateName} slug={slug} />
    </main>
  );
}
