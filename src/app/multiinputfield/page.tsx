export default function MultiInputField() {
  return (
    <>
      <h1 style={{ fontSize: '23px', fontWeight: 'bold', marginBottom: '20px' }}>다중 텍스트 필드(MULTIINPUTFIELD)</h1>
      <h2 className="heading2">영문성명</h2>
      <div className="cell_group">
        <span className="cell_box type4">
          <span className="cell_txt1">
            <input type="text" id="" placeholder="성(Family Name)" />
          </span>

          <span className="cell_txt1">
            <input type="text" id="" placeholder="이름(First Name)" />
          </span>
        </span>
      </div>
    </>
  )
}