import { getPageBySlug } from '@/lib/api';
import { notFound } from 'next/navigation';

import FlexContent from '@/components/templates/FlexContent/FlexContent';
import Default from '@/components/templates/Default/Default';

const SwitchTemplate = async ({
  tmpl,
  slug,
}: {
  tmpl: string;
  slug: string;
}) => {
  const pageData = await getPageBySlug(slug);
  if (!pageData) return notFound();

  switch (tmpl) {
    case 'Flex Content':
      return <FlexContent {...pageData.nodeByUri} />;

    default:
      return <Default {...pageData.nodeByUri} />;
  }
};

export default SwitchTemplate;
