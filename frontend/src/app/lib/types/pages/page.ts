import { Edges, Node } from '../common';
import FeaturedImage from './featuredImage';
import Revision from './revision';
import Tag from './tag';

export type Page = {
  title: string;
  excerpt: string;
  slug: string;
  featuredImage?: Node<FeaturedImage>;
  tags?: Edges<Tag>;
  content?: string;
  // acf?: any[];
  revisions?: Edges<Revision>;
  template?: {
    templateName: string;
  };
};

export type PageBy = {
  pageBy: Page;
};

export type NodeByUri = {
  nodeByUri: Page;
};

// export default Page, {PageBy};
