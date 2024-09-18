import { getPostBySlug } from '@/app/lib/api';

import PostComponent from '@/components/templates/Post/Post';

const Page = async ({ params }: { params: { slug: string } }) => {
  const data: any = await getPostBySlug(params?.slug);
  const { nodeByUri } = data;

  return (
    <main className="min-h-screen p-24">
      <PostComponent {...nodeByUri} />
    </main>
  );
};

export default Page;
