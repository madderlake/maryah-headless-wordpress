import type { Node, Edges } from './common';

export type MenuItem = {
  id: string;
  label: string;
  parentId: string | null;
  url: string;
  uri: string;
};
