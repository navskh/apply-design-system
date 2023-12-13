import React from 'react';
import styles from './components.module.css'; // CSS Module 사용 예시
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagicWandSparkles, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <FontAwesomeIcon icon={faMagicWandSparkles} style={{ width: '20px', marginRight: '10px' }} />
          ADS <span>(ApplyDesignSystem)</span>
        </a>
      </div>
      <div className={styles.search}>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: '18px', marginRight: '8px', color: '#555' }} />
        <input type="search" placeholder="Search..." className={styles.searchInput} />
      </div>
    </header>
  );
};

export default Header;
