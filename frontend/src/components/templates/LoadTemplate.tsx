import { getAllPostsForHome } from '@/lib/api';
import { notFound } from 'next/navigation';

import FlexContent from '@/components/templates/FlexContent/FlexContent';
import Default from '@/components/templates/Default';
import Blog from '@/components/templates/Blog';
import { WPPage } from '@/app/lib/types/pages/wp-page';

const LoadTemplate = async ({ tmpl, data }: { tmpl: string; data: WPPage }) => {
  if (!data) return notFound();

  switch (tmpl) {
    case 'Flex Content':
      return <FlexContent {...data} />;

    case 'Blog':
      const postData = await getAllPostsForHome(12, false);
      return <Blog {...data} {...postData} />;

    default:
      return <Default {...data} />;
  }
};

export default LoadTemplate;
