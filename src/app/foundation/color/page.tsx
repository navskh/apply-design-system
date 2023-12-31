'use client';
import styles from '@/app/layout.module.css';

export default function Page() {
  return (
    <>
      <h1 className={styles.title}>컬러(Color)</h1>
      <div className="detail">
        <div className="sample">
          <div className="sample_cont col1">
            <ul className="detail_list">
              <li>
                <span className="colorchip" style={{ background: "#2b87ec" }}>Primary</span>
                <em>메인</em>
                <em>#2b87ec</em>
              </li>
              <li>
                <span className="colorchip" style={{ background: "#298DE7" }}>Primary Font</span>
                <em>메인 폰트</em>
                <em>#298DE7</em>
              </li>
              <li>
                <span className="colorchip" style={{ background: "#1B1B1B" }}>Secondary</span>
                <em>서브 및 서브 폰트</em>
                <em>#1B1B1B</em>
              </li>
              <li>
                <span className="colorchip" style={{ background: "#F36160" }}>Error</span>
                <em>경고</em>
                <em>#F36160</em>
              </li>
              <li>
                <span className="colorchip" style={{ background: "#F36162" }}>Error Font</span>
                <em>경고 폰트</em>
                <em>#F36162</em>
              </li>
              <li className="clear">
                <span className="colorchip" style={{ background: "#458dc5" }}>Link Font</span>
                <em>링크 폰트</em>
                <em>#458dc5</em>
              </li>
              <li>
                <span className="colorchip" style={{ background: "#555" }}>Default Font</span>
                <em>기본 폰트</em>
                <em>#555555</em>
              </li>
              <li>
                <span className="colorchip" style={{ background: "#777" }}>Sub1 Font</span>
                <em>서브 폰트1</em>
                <em>#777777</em>
              </li>
              <li>
                <span className="colorchip" style={{ background: "#999" }}>Sub2 Font</span>
                <em>서브 폰트2</em>
                <em>#999999</em>
              </li>
              <li className="clear">
                <span className="colorchip" style={{ background: "#F7F7F7" }}>Background1</span>
                <em>배경1</em>
                <em>#F7F7F7</em>
              </li>
              <li>
                <span className="colorchip" style={{ background: "#F6F6F8" }}>Background2</span>
                <em>배경2</em>
                <em>#F6F6F8</em>
              </li>
              <li>
                <span className="colorchip" style={{ background: "#ECECEC" }}>Background3</span>
                <em>배경3</em>
                <em>#ECECEC</em>
              </li>
              <li className="clear">
                <span className="colorchip" style={{ background: "#999" }}>Line1</span>
                <em>라인1</em>
                <em>#999999</em>
              </li>
              <li>
                <span className="colorchip" style={{ background: "#DDD" }}>Line2</span>
                <em>라인2(기본)</em>
                <em>#DDDDDD</em>
              </li>
              <li>
                <span className="colorchip" style={{ background: "#E6E6E6" }}>Line3</span>
                <em>라인3</em>
                <em>#E6E6E6</em>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
