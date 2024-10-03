import { getPrimaryMenu } from '@/app/lib/api';
import { NavigationMenu } from './Nav';
import { Node, Edges } from '@/lib/types/common';

export type MenuItem = {
  id: string;
  label: string;
  parentId: string | null;
  url: string;
  uri: string;
};

export type MenuData = {
  menus?: {
    nodes: {
      menuItems: Edges<MenuItem>;
    }[];
  };
};
export default async function Header() {
  const menuData: MenuData = await getPrimaryMenu();

  const {
    menus: { nodes: [{ menuItems: { edges = [] } = {} } = {}] = [] } = {},
  } = menuData ?? {};

  const menuItems = edges.map(({ node }: Node<MenuItem>) => node);
  return (
    <header className="fixed w-full bg-zinc-100">
      <NavigationMenu menuItems={menuItems} />
    </header>
  );
}
