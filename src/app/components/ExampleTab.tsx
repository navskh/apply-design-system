'use client';
import React, { useEffect, useState } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // 스타일 선택
import beautify from 'js-beautify';
import styles from './components.module.css'; // CSS Module 사용 예시
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const ExampleTab = ({ sampleHTML }) => {
  const formattedHtmlCode = beautify.html(sampleHTML);
  const [tabs, setTabs] = useState([
    { id: 1, text: '미리보기', active: true },
    { id: 2, text: 'HTML', active: false },
  ]);

  const toggleTab = id => {
    setTabs(
      tabs.map(tab => {
        if (tab.id === id && tab.active !== true) {
          return { ...tab, active: !tab.active };
        } else if (tab.id === id && tab.active === true) {
          return { ...tab, active: true };
        } else {
          return { ...tab, active: false };
        }
      }),
    );
  };

  useEffect(() => {
    hljs.highlightAll();
  }, [tabs]);

  return (
    <>
      <div className={styles.exampleTab}>
        <div className={styles.tabs}>
          {tabs.map(tab => (
            <button key={tab.id} data-active={tab.active} onClick={() => toggleTab(tab.id)}>
              {tab.text}
            </button>
          ))}
        </div>
        <div className={styles.tabContents}>
          {tabs[0].active && <div dangerouslySetInnerHTML={{ __html: sampleHTML }}></div>}
          {tabs[1].active && (
            <div className={styles.codeBox}>
              <pre>
                <code className="html">{formattedHtmlCode}</code>
              </pre>
              <button className={styles.copyButton}>
                <FontAwesomeIcon icon={faCopy} style={{ fontSize: '20px', color: 'white' }} />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ExampleTab;
