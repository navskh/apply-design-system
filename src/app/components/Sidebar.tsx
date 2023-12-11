"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import menuList from '@/types/menu';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});
  const toggleMenu = (menuName: string) => {
    console.log(menuName);
    setIsOpen(prevState => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };
  const openMenu = (menuName: string) => {
    console.log(menuName);
    setIsOpen(prevState => ({
      ...prevState,
      [menuName]: true,
    }));
  };

  return (
    <div style={{ width: '200px', background: '#f0f0f0', padding: '20px', height: '100vh' }}>
      <ul>
        {
          menuList.map((menu, i) => (
            <li key={i}>
              <h1><a onClick={() => openMenu(menu.title)}>{menu.fieldName}</a></h1>
              {
                isOpen[menu.title] && <ul>
                  {
                    menu.children.map((subMenu, j) => (
                      <li key={j}><Link href={subMenu.path}>{subMenu.fieldName}</Link></li>
                    ))
                  }
                </ul>
              }
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Sidebar;
