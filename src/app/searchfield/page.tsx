// @ts-nocheck
export default function SearchField() {
  return (
    <>
      <h1 style={{ fontSize: '23px', fontWeight: 'bold', marginBottom: '20px' }}>검색필드(SEARCHFIELD)</h1>
      <h2 className="heading2">지망학과 - 목록형<em>*</em></h2>
      <div className="cell_group">
        <span className="cell_box">
          <span className="cell_search" type="ul" style={{ cursor: "pointer" }}>
            <input type="text" id="" placeholder="학과를 검색해 주세요." readOnly />
            <a className="btn_search">검색</a>
          </span>
          <p className="cell_helper1">지원학과명을 확인해 주세요.</p>
          <p className="cell_helper1 warning">지원학과명을 확인해 주세요.</p>
        </span>
      </div>
      <div className="layer search1" type="ul" style={{ display: "none" }}>
        <div className="layer_header">
          <p className="heading5">대학 검색</p>
        </div>
        <div className="layer_cont">
          <span className="search_box">
            <span className="cell_search">
              <input type="text" id="" placeholder="대학명을 입력해 주세요." />
              <a className="btn_search">검색</a>
            </span>
          </span>
          <div className="search_result">
            <ul className="list_search1">
              <li>
                <a>
                  <span className="title">
                    <strong>정보통신소프트웨어공학과</strong>
                  </span>
                </a>
              </li>
              <li>
                <a>
                  <span className="title">
                    <strong>컴퓨터공학과</strong>
                  </span>
                </a>
              </li>
              <li>
                <a>
                  <span className="title">
                    <strong>게임공학과</strong>
                  </span>
                </a>
              </li>
              <li>
                <a>
                  <span className="title">
                    <strong>자동화설계전공</strong>
                  </span>
                </a>
              </li>
              <li>
                <a>
                  <span className="title">
                    <strong>정보통신소프트웨어공학과</strong>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <ul className="list_dot2">
            <li>검색 결과에서 해당 학과 또는 전공을 선택해 주세요.</li>
            <li>원하는 대학명이 없는 경우 직접입력으로 등록해 주세요.</li>
          </ul>
        </div>
        <div className="layer_footer">

        </div>
        <a className="close" style={{ cursor: "pointer" }}>닫기</a>
      </div>
    </>
  )
}