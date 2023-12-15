'use client';
import React, { useEffect, useState } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // 스타일 선택
import beautify from 'js-beautify';
import styles from '@/app/layout.module.css';
import ExampleTab from '@/app/components/ExampleTab';

export default function Color() {
  const [sampleHTML, setSampleHTML] = useState('');

  useEffect(() => {
    fetch('/html/color.html')
      .then(response => response.text())
      .then(data => setSampleHTML(data));
  }, []);


  const formattedHtmlCode = beautify.html(sampleHTML);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <h1 className={styles.title}>컬러 (Color)</h1>
      <ExampleTab sampleHTML={formattedHtmlCode} />
    </>
  );
}
