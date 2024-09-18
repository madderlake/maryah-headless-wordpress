import { getPageBySlug } from '@/lib/api';
import SwitchTemplate from '@/components/templates/SwitchTemplate';
import { notFound } from 'next/navigation';

export default async function SinglePageOrPost({
  params,
}: {
  params: { slug: string };
}) {
  const data: any = await getPageBySlug(params?.slug);
  if (!data) return notFound();

  const { nodeByUri } = data;
  const { slug } = params;

  const templateName =
    nodeByUri.template !== null ? nodeByUri.template.templateName : null;

  return (
    <main className="min-h-screen p-24">
      <SwitchTemplate tmpl={templateName} slug={slug} />
    </main>
  );
}
