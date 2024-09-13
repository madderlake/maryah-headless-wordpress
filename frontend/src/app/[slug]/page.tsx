import { getPageTemplateBySlug } from '@/lib/api';
import SwitchComponent from '@/components/templates/SwitchComponent';

import type { Page } from '@/types/pages/page';

export default async function Page({ params }: { params: { slug: string } }) {
  const templateData: any = await getPageTemplateBySlug(params?.slug);

  const templateName = templateData.pageBy.template.templateName;

  return (
    <main className="min-h-screen p-24">
      <SwitchComponent tmpl={templateName} slug={params?.slug} />
    </main>
  );
}
