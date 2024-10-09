import { notFound } from 'next/navigation';

import FlexContent from '@/components/templates/FlexContent/FlexContent';
import Default from '@/components/templates/Default';
import Blog from '@/components/templates/Blog';
import type { WPPage } from '@/app/lib/types/pages/wp-page';

const LoadTemplate = ({ tmpl, data }: { tmpl: string; data: WPPage }) => {
  if (!data) return notFound();

  switch (tmpl) {
    case 'Flex Content':
      return <FlexContent {...data} />;

    case 'Blog':
      return <Blog {...data} />;

    default:
      return <Default {...data} />;
  }
};

export default LoadTemplate;
