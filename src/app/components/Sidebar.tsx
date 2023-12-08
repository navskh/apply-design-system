"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = (menuName: string) => {
    console.log(menuName);
    setIsOpen(prevState => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };

  return (
    <div style={{ width: '200px', background: '#f0f0f0', padding: '20px' }}>
      <ul>
        <li onClick={() => toggleMenu('mainMenu1')}> Main Menu 1
          {isOpen.mainMenu1 && <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          }
        </li>
      </ul>

    </div>
  );
};

export default Sidebar;
