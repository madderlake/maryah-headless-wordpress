import { getAllPostsForHome, getPageBySlug } from '@/lib/api';
import { notFound } from 'next/navigation';

import FlexContent from '@/components/templates/FlexContent/FlexContent';
import Default from '@/components/templates/Default/Default';
import Blog from '@/components/templates/Blog/Blog';

const LoadTemplate = async ({
  tmpl,
  slug,
  data,
}: {
  tmpl: string;
  slug: string;
  data: any;
}) => {
  if (!data) return notFound();

  switch (tmpl) {
    case 'Flex Content':
      return <FlexContent {...data.nodeByUri} />;

    case 'Blog':
      const postData = await getAllPostsForHome(12, false);
      return <Blog {...data.nodeByUri} {...postData} />;

    default:
      return <Default {...data.nodeByUri} />;
  }
};

export default LoadTemplate;
