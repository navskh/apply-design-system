export default function InputField() {
  return (
    <>
      <h1 style={{ fontSize: '23px', fontWeight: 'bold', marginBottom: '20px' }}>단일텍스트 필드(INPUTFIELD)</h1>
      <h2 className="heading2">휴대폰번호<em>*</em></h2>
      <div className="cell_group">
        <span className="cell_box">
          <span className="cell_txt1">
            <input type="text" id="" placeholder="'-'를 빼고 입력해 주세요." />
          </span>
          <p className="cell_helper1 wrong">
            잘못된 전화번호입니다.
          </p>
        </span>
      </div>
    </>
  )
}
