"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import menuList from '@/types/menu';
import styles from './components.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});
  const toggleMenu = (menuName: string) => {
    console.log(menuName);
    setIsOpen(prevState => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };
  // const openMenu = (menuName: string) => {
  //   console.log(menuName);
  //   setIsOpen(prevState => ({
  //     ...prevState,
  //     [menuName]: true,
  //   }));
  // };

  return (
    <div className={styles.sidebar}>
      <ul className={styles.menuList}>
        {
          menuList.map((menu, i) => (
            <li key={i}>
              <div className={styles.menuBig} onClick={() => toggleMenu(menu.title)}>
                {menu.fieldName}
                <FontAwesomeIcon icon={faChevronDown} style={{ width: '15px' }} data-menu-active={isOpen[menu.title]} />
              </div>
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
