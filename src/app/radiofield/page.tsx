import React from 'react';

export default function RadioField() {
  return (
    <>
      <h1 style={{ fontSize: '23px', fontWeight: 'bold', marginBottom: '20px' }}>라디오필드(RADIOFIELD)</h1>
      <div className="form_cell">
        <h2 className="heading2">전형구분<em>*</em></h2>
        <div className="cell_group">
          <span className="cell_box radio_col2" style={{ cursor: "pointer" }} />
          <span className="cell_radio1 dim">
            <input type="radio" id="r1" name="rr" />
            <label htmlFor="r1">일반편입학(3학년)</label>
          </span>
          <span className="cell_radio1">
            <input type="radio" id="r2" name="rr" />
            <label htmlFor="r2">일반편입학(3학년)</label>
          </span>
          <span className="cell_radio1">
            <input type="radio" id="r3" name="rr" disabled />
            <label htmlFor="r3">일반편입학(3학년)</label>
          </span>
          <span className="cell_radio1">
            <input type="radio" id="r4" name="rr" />
            <label htmlFor="r4">일반편입학(3학년)</label>
          </span>
          <span className="cell_radio1">
            <label htmlFor="r5">사회통합전형</label>
            <input type="radio" id="r5" name="rr" />
          </span>
        </div>
      </div>
    </>
  )
}