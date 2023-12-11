// @ts-nocheck
"use client";
import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // 스타일 선택
import beautify from 'js-beautify';

export default function SelectBoxField() {
  const sampleHTML = `
  <h2 class="heading2">최종대학계열<em>*</em></h2>
  <div class="cell_group">
      <span class="cell_box">
          <span class="cell_select1">
              <select name="" id="">
                  <option value="">선택</option>
              </select>
          </span>
      </span>
  </div>
  <br />
  <h2 class="heading2">환불 은행명<em>*</em></h2>
  <div class="cell_group">
      <span class="cell_box">
          <span class="cell_select1">
              <select id="cboRefundBank" name="cboRefundBank">
                  <option value=""> :: 선택 :: </option>
                  <option id="optRefundBank03" value="03" jwidx="302">기업은행</option>
                  <option id="optRefundBank04" value="04" jwidx="303">국민은행</option>
                  <option id="optRefundBank05" value="05" jwidx="304">외환은행</option>
                  <option id="optRefundBank06" value="06" jwidx="305">주택은행</option>
                  <option id="optRefundBank07" value="07" jwidx="306">수협중앙회</option>
                  <option id="optRefundBank11" value="11" jwidx="307">농협</option>
                  <option id="optRefundBank16" value="16" jwidx="308">축협중앙회</option>
                  <option id="optRefundBank20" value="20" jwidx="309">우리은행</option>
                  <option id="optRefundBank21" value="21" jwidx="310">조흥은행</option>
                  <option id="optRefundBank23" value="23" jwidx="311">제일은행</option>
                  <option id="optRefundBank25" value="25" jwidx="312">서울은행</option>
                  <option id="optRefundBank26" value="26" jwidx="313">신한은행</option>
                  <option id="optRefundBank27" value="27" jwidx="314">한미은행</option>
                  <option id="optRefundBank31" value="31" jwidx="315">대구은행</option>
                  <option id="optRefundBank32" value="32" jwidx="316">부산은행</option>
                  <option id="optRefundBank34" value="34" jwidx="317">광주은행</option>
                  <option id="optRefundBank35" value="35" jwidx="318">제주은행</option>
                  <option id="optRefundBank37" value="37" jwidx="319">전북은행</option>
                  <option id="optRefundBank39" value="39" jwidx="320">경남은행</option>
                  <option id="optRefundBank53" value="53" jwidx="321">씨티은행</option>
                  <option id="optRefundBank54" value="54" jwidx="322">홍콩상하이</option>
                  <option id="optRefundBank71" value="71" jwidx="323">우체국</option>
                  <option id="optRefundBank81" value="81" jwidx="324">하나은행</option>
                  <option id="optRefundBank82" value="82" jwidx="325">보람은행</option>
                  <option id="optRefundBank83" value="83" jwidx="326">평화은행</option>
                  <option id="optRefundBank89" value="89" jwidx="327">케이뱅크</option>
                <option id="optRefundBank90" value="90" jwidx="328">카카오뱅크</option>
            </select>
        </span>
    </span>
</div>`


  const formattedHtmlCode = beautify.html(sampleHTML);

  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <>
      <h1 style={{ fontSize: '23px', fontWeight: 'bold', marginBottom: '20px' }}>셀렉트박스 필드(SELECTBOXFIELD)</h1>
      <div dangerouslySetInnerHTML={{ __html: sampleHTML }}></div>
      <pre>
        <code class="html">{formattedHtmlCode}</code>
      </pre>
    </>
  )
}