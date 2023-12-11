// @ts-nocheck
"use client";
import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // 스타일 선택
import beautify from 'js-beautify';

export default function MultiInputField() {
  const sampleHTML = `
  <div class="form_cell">
        <h2 class="heading2">최종출신대학(교)<em>*</em></h2>
        <div class="cell_group">
          <h3 class="heading4">졸업연도</h3>
          <span class="cell_box">
            <span class="cell_txt1">
              <input type="text" id="" placeholder="졸업년월을 입력해 주세요." />
            </span>
            <p class="cell_helper1">예) 202102</p>
          </span>

          <h3 class="heading4">졸업구분</h3>
          <span class="cell_box radio_col2">
            <span class="cell_radio1">
              <input type="radio" id="ra1" name="arr" />
              <label for="ra1">졸업 예정</label>
            </span>
            <span class="cell_radio1">
              <input type="radio" id="ra2" name="arr" />
              <label for="ra2">졸업</label>
            </span>
            <span class="cell_radio1">
              <input type="radio" id="ra3" name="arr" />
              <label for="ra3">수료 예정</label>
            </span>
            <span class="cell_radio1">
              <input type="radio" id="ra4" name="arr" />
              <label for="ra4">수료</label>
            </span>
          </span>

          <h3 class="heading4">출신교명</h3>
          <span class="cell_box">
            <span class="cell_search">
              <input type="text" id="" placeholder="학과를 검색해 주세요." readonly="" />
              <a class="btn_search">검색</a>
            </span>
          </span>

          <h3 class="heading4">출신학과</h3>
          <span class="cell_box">
            <span class="cell_txt1">
              <input type="text" id="" placeholder="졸업년월을 입력해 주세요. 예) 202102" />
            </span>
          </span>

          <h3 class="heading4">대학소재지</h3>
          <span class="cell_box">
            <span class="cell_select1">
              <select name="" id="">
                <option value="">선택</option>
              </select>
            </span>
          </span>

          <h3 class="heading4">학점</h3>
          <span class="cell_box">
            <span class="cell_txt1">
              <input type="text" id="" placeholder="00.0" />
            </span>
          </span>

          <h3 class="heading4">학점1</h3>
          <span class="cell_box score1">
            <span class="cell_txt1">
              <input type="text" id="" placeholder="" />
            </span>
            <em class="point">.</em>
            <span class="cell_txt1">
              <input type="text" id="" placeholder="" />
            </span>
          </span>

          <h3 class="heading4">학점2</h3>
          <span class="cell_box score2">
            <span class="cell_txt1">
              <input type="text" id="" placeholder="" />
            </span>
            <em>/</em>
            <span class="cell_select1">
              <select name="" id="">
                <option value="">선택</option>
                <option value="">100</option>
                <option value="">5.0</option>
                <option value="">100.00</option>
              </select>
            </span>
          </span>

          <h3 class="heading4">학점3</h3>
          <span class="cell_box score3">
            <span class="cell_txt1">
              <input type="text" id="" placeholder="" />
            </span>
            <em>/ 100.00</em>
          </span>

          <h3 class="heading4">학점3-2</h3>
          <span class="cell_box score3">
            <span class="cell_txt1">
              <input type="text" id="" placeholder="" />
            </span>
            <em>/ 100점 만점</em>
          </span>

          <h3 class="heading4">학기</h3>
          <span class="cell_box period2">
            <span class="cell_select1">
              <select name="" id="">
                <option value="">선택</option>
                <option value="">100</option>
                <option value="">5.0</option>
                <option value="">100.00</option>
              </select>
            </span>
            <em>년</em>
            <span class="cell_select1">
              <select name="" id="">
                <option value="">선택</option>
                <option value="">100</option>
                <option value="">5.0</option>
                <option value="">100.00</option>
              </select>
            </span>
            <em>개월</em>
          </span>
        </div>

        <div class="notice2">
          학사편입학의 경우 4학년 2학기 졸업(예정)자만 지원할 수 있습니다.
        </div>
      </div>
      `

  const formattedHtmlCode = beautify.html(sampleHTML);

  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <>
      <h1 style={{ fontSize: '23px', fontWeight: 'bold', marginBottom: '20px' }}>다중 텍스트 필드(MULTIINPUTFIELD)</h1>
      <div dangerouslySetInnerHTML={{ __html: sampleHTML }}></div>
      <pre>
        <code class="html">{formattedHtmlCode}</code>
      </pre>
    </>
  )
}