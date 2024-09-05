import { getPageBySlug } from '../lib/api';
import { notFound } from 'next/navigation';
import DOMPurify from 'isomorphic-dompurify';
import type { Page } from '@/types/pages/page';
import FlexContent from '@/components/templates/FlexContent/FlexContent';
import Default from '@/components/templates/Default';
export default async function Page({ params }: { params: { slug: string } }) {
  const page: any = await getPageBySlug(params?.slug);

  if (!page) {
    return notFound();
  }

  const { title, content, template } = page;
  const { templateName } = template;

  let TemplateComponent;

  switch (templateName) {
    case 'Flex Content':
      TemplateComponent = FlexContent;
      break;
    default:
      TemplateComponent = Default;
  }

  const saniContent = DOMPurify.sanitize(content);

  return (
    <main className="min-h-screen p-24">
      {/* <TemplateComponent> */}
      <h1 className="text-xl font-bold mb-8">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: saniContent }}></div>
      {/* </TemplateComponent> */}
    </main>
  );
}
