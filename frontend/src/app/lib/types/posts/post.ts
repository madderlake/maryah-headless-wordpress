import { Edges, Node } from '../common';

import Author from './author';
import type { Categories } from './category';
import FeaturedImage from './featuredImage';
import Revision from './revision';
import Tag from './tag';

export type Post = {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage: Node<FeaturedImage>;
  author: Node<Author>;
  categories?: Categories;
  tags?: Edges<Tag>;
  content?: string;
  revisions?: Edges<Revision>;
};

export default Post;
