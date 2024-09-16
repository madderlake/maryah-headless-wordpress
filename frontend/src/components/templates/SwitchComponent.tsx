import { getFlexPageBySlug, getPageBySlug } from '@/lib/api';
import { notFound } from 'next/navigation';

import FlexContent from '@/components/templates/FlexContent/FlexContent';
import Default from '@/components/templates/Default/Default';

type SwitchProps = {
  tmpl: string;
  slug: string;
};
const SwitchComponent = async ({ tmpl, slug }: SwitchProps) => {
  let pageData;
  switch (tmpl) {
    case 'Default':
      pageData = await getPageBySlug(slug);
      if (!pageData) {
        return notFound();
      }
      return <Default {...pageData.nodeByUri} />;

    case 'Flex Content':
      pageData = await getFlexPageBySlug(slug);
      if (!pageData) {
        return notFound();
      }
      return <FlexContent {...pageData.nodeByUri} />;

    default:
      pageData = await getPageBySlug(slug);
      if (!pageData) {
        return notFound();
      }
  }
};

export default SwitchComponent;
