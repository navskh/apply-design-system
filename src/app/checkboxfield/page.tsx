export default function CheckboxField() {
  return (
    <>
      <h1 style={{ fontSize: '23px', fontWeight: 'bold', marginBottom: '20px' }}>체크박스 필드(CHECKBOXFIELD)</h1>
      <div className="agree_check">
        <span className="cell_box1">
          <span className="cell_check1">
            <input type="checkbox" id="c00" name="" />
            <label htmlFor="c00">선택지0</label>
          </span>
          <span className="cell_check1">
            <input type="checkbox" id="c01" name="" />
            <label htmlFor="c01">선택지1</label>
          </span>
          <span className="cell_check1">
            <input type="checkbox" id="c02" name="" />
            <label htmlFor="c02">선택지2</label>
          </span>
          <span className="cell_check1">
            <input type="checkbox" id="c03" name="" />
            <label htmlFor="c03">선택지3</label>
          </span>
          <span className="cell_check1">
            <input type="checkbox" id="c04" name="" />
            <label htmlFor="c04">선택지4</label>
          </span>
        </span>
      </div>
    </>
  )
}