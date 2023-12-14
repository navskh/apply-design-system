'use client';
import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // 스타일 선택
import beautify from 'js-beautify';
import styles from '@/app/layout.module.css';
import ExampleTab from '@/app/components/ExampleTab';


export default function RadioField() {
  const sampleHTML = `
  <div class="form_cell">
      <h2 class="heading2">전형구분<em>*</em></h2>
      <div class="cell_group">
          <span class="cell_box radio_col2" style={{ cursor: "pointer" }} />
          <span class="cell_radio1 dim">
              <input type="radio" id="r1" name="rr" />
              <label for="r1">일반편입학(3학년)</label>
          </span>
          <span class="cell_radio1">
              <input type="radio" id="r2" name="rr" />
              <label for="r2">일반편입학(3학년)</label>
          </span>
          <span class="cell_radio1">
              <input type="radio" id="r3" name="rr" disabled />
              <label for="r3">일반편입학(3학년)</label>
          </span>
          <span class="cell_radio1">
              <input type="radio" id="r4" name="rr" />
              <label for="r4">일반편입학(3학년)</label>
          </span>
          <span class="cell_radio1">
              <input type="radio" id="r5" name="rr" />
              <label for="r5">사회통합전형</label>
          </span>
      </div>
  </div>`;

  const formattedHtmlCode = beautify.html(sampleHTML);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <h1 className={styles.title}>라디오 (RadioField)</h1>
      <ExampleTab sampleHTML={formattedHtmlCode} />
    </>
  );
}
