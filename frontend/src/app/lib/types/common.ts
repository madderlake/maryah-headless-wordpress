export type Node<T> = {
  node: T;
};

export type Edges<T> = {
  edges: Node<T>[];
};

export type QueryResult<TKey extends string, TData = unknown> = {
  [key in TKey]: TData;
};

type QueryEdgesKeys =
  | 'posts'
  | 'pages'
  | 'pageBy'
  | 'nodeByUri'
  | 'categories'
  | 'menus';

export type QueryEdgesResult<
  TKey extends QueryEdgesKeys,
  TData extends {} = {}
> = {
  [key in TKey]: Edges<TData>;
};
