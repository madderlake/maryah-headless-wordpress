import type { WPPage } from './wp-page';

type Draft = {
  id?: number;
  databaseId?: number;
  slug: string;
  status: string;
  post: WPPage;
};

export default Draft;
