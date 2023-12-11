"use client";
import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // 스타일 선택
import beautify from 'js-beautify';

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
  </div>`

  const formattedHtmlCode = beautify.html(sampleHTML);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <h1 style={{ fontSize: '23px', fontWeight: 'bold', marginBottom: '20px' }}>라디오필드(RADIOFIELD)</h1>
      <div dangerouslySetInnerHTML={{ __html: sampleHTML }}></div>
      <pre>
        <code className="html">{formattedHtmlCode}</code>
      </pre>
    </>
  )
}