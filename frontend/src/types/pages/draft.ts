import Page from './page';

type Draft = {
  id?: number;
  databaseId?: number;
  slug: string;
  status: string;
  post: Page;
};

export default Draft;
