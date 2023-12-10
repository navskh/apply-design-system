import React from 'react';
import styles from './Header.module.css'; // CSS Module 사용 예시

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>ADS (ApplyDesignSystem)</div>
      <input type="search" placeholder="Search..." className={styles.searchInput} />
    </header>
  );
};

export default Header;
