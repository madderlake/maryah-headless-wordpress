import { FlexData } from '@/components/templates/FlexContent/types';
import { Edges, Node } from '../common';
import FeaturedImage from './featuredImage';
import Revision from './revision';
import Tag from './tag';

export type Page = {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  featuredImage?: Node<FeaturedImage>;
  tags?: Edges<Tag>;
  content?: string;
  revisions?: Edges<Revision>;
  template: {
    templateName: string;
    flexTemplate?: FlexData | null;
  };
};

export type PageBy = {
  pageBy: Page;
};

export type NodeByUri = {
  nodeByUri: Page;
};
