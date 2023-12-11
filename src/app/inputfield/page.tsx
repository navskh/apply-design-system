// @ts-nocheck
"use client";
import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // 스타일 선택
import beautify from 'js-beautify';

export default function InputField() {
  const sampleHTML = `
  <h2 class="heading2">휴대폰번호<em>*</em></h2>
      <div class="cell_group">
        <span class="cell_box">
          <span class="cell_txt1">
            <input type="text" id="" placeholder="'-'를 빼고 입력해 주세요." />
          </span>
          <p class="cell_helper1 wrong">
            잘못된 전화번호입니다.
          </p>
        </span>
      </div>`

  const formattedHtmlCode = beautify.html(sampleHTML);

  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <>
      <h1 style={{ fontSize: '23px', fontWeight: 'bold', marginBottom: '20px' }}>단일텍스트 필드(INPUTFIELD)</h1>
      <div dangerouslySetInnerHTML={{ __html: sampleHTML }}></div>
      <pre>
        <code class="html">{formattedHtmlCode}</code>
      </pre>
    </>
  )
}
