'use client';
import { useState } from 'react';
import Link from 'next/link';
import type { MenuItem } from './Header';

export const NavigationMenu: React.FC<{ menuItems: MenuItem[] }> = ({
  menuItems,
}) => {
  const [active, setActive] = useState<number>();
  const handleClick = (index: number) => {
    setActive(index);
  };
  return (
    <nav className="p-4 md:container mx-auto">
      <ul className="flex gap-20 justify-end">
        {menuItems.map((item, i) => {
          return (
            <li
              key={item.id}
              className={`menu-item ${i === active ? 'font-bold' : ''}`}>
              <Link href={item.url} onClick={() => handleClick(i)}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
