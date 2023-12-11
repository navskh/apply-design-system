// @ts-nocheck
"use client";
import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // 스타일 선택
import beautify from 'js-beautify';

export default function PeriodField() {
  const sampleHTML = `
  <h3 class="heading4">입학일자</h3>
  <span class="cell_box" id="F_GraduteUnivStartDate_1">
      <span class="cell_txt1">
          <input type="text" class="input" maxLength="8" placeholder="입학일자를 입력해 주세요." />
      </span>
      <p class="cell_helper1 wrong" style={{ display: "none" }}>날짜를 정확히 입력해주세요.</p>
  </span>`


  const formattedHtmlCode = beautify.html(sampleHTML);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <h1 style={{ fontSize: '23px', fontWeight: 'bold', marginBottom: '20px' }}>기간필드(PERIODFIELD)</h1>
      <div dangerouslySetInnerHTML={{ __html: sampleHTML }}></div>
      <pre>
        <code class="html">{formattedHtmlCode}</code>
      </pre>
    </>
  )
}