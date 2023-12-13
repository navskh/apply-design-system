'use client';
import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // 스타일 선택
import beautify from 'js-beautify';
import styles from '../layout.module.css';

export default function CheckboxField() {
  const sampleHTML = `
  <div class="agree_check">
  <span class="cell_box1">
      <span class="cell_check1">
          <input type="checkbox" id="c00" name="" />
          <label for="c00">선택지0</label>
      </span>
      <span class="cell_check1">
          <input type="checkbox" id="c01" name="" />
          <label for="c01">선택지1</label>
      </span>
      <span class="cell_check1">
          <input type="checkbox" id="c02" name="" />
          <label for="c02">선택지2</label>
      </span>
      <span class="cell_check1">
          <input type="checkbox" id="c03" name="" />
          <label for="c03">선택지3</label>
      </span>
      <span class="cell_check1">
          <input type="checkbox" id="c04" name="" />
          <label for="c04">선택지4</label>
      </span>
  </span>
  </div>`;

  const formattedHtmlCode = beautify.html(sampleHTML);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <h1 className={styles.title}>체크박스 (CheckboxField)</h1>
      <div dangerouslySetInnerHTML={{ __html: sampleHTML }}></div>
      <pre>
        <code className="html">{formattedHtmlCode}</code>
      </pre>
    </>
  );
}
