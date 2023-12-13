import ExampleTab from './components/ExampleTab';

export default function Page() {
  const sampleHTML = `
  <div class="form_cell">
      <h2 class="heading2">전형구분<em>*</em></h2>
      <div class="cell_group">
          <span class="cell_box radio_col2" style={{ cursor: "pointer" }} />
          <span class="cell_radio1 dim">
              <input type="radio" id="r1" name="rr" />
              <label for="r1">일반편입학(3학년)</label>
          </span>
          <span class="cell_radio1">
              <input type="radio" id="r2" name="rr" />
              <label for="r2">일반편입학(3학년)</label>
          </span>
          <span class="cell_radio1">
              <input type="radio" id="r3" name="rr" disabled />
              <label for="r3">일반편입학(3학년)</label>
          </span>
          <span class="cell_radio1">
              <input type="radio" id="r4" name="rr" />
              <label for="r4">일반편입학(3학년)</label>
          </span>
          <span class="cell_radio1">
              <input type="radio" id="r5" name="rr" />
              <label for="r5">사회통합전형</label>
          </span>
      </div>
  </div>`;

  return (
    <>
      <div>
        <h1>DOLIST</h1>
        <p>- 탭만들어서 코드와 미리보기 동시에 보여줄 수 있게 수정 (탭 컴포넌트 만들기 - 하얀)</p>
        <p>- 구조다듬기, html 만 만들면 알아서 나오게끔</p>
        <p>- 변칙에 따른 미리보기 늘리기</p>
        <p>- 그 외 아라에 들어갈 샘플들을 늘려둘 것</p>
        <p>- 아라를 적용하기 위해 대메뉴가 필요하다 ...</p>
        <br />
        <br />

        <ExampleTab sampleHTML={sampleHTML} />
        <h1>디자인 시스템 적용</h1>
        <p>- 테일윈드 CSS를 적용하는 건 어떨지? (하얀)</p>
        <p>- 학교가 요구하는 사항에 맞춰줄 수 있도록 강제하지는 않는다</p>
        <p>- 이런 요구 사항에 무조건적으로 맞춰주지 않도록, 설득을 위한 공신력 있는 자료를 만들어낸다</p>
        <p>- 교직원은 공신력 있는 자료가 있으면 충분히 설득 가능하다</p>
        <p>- 네이버, 애플, 카카오가 이렇게 했다 / UX 디자이너가 이렇게 했다 → 이 자료를 만들어야 한다</p>
        <p>
          - 가이드 라인만 만들어도 충분하지 않을까? ⇒ 부족할 수 있으니 레퍼런스는 추가한다 ⇒ 토스, UX 책, 영어 자료… ⇒
          이를 근거로 우리는 이렇게 만들고 있다~
        </p>
        <p>- 내년에 공통원서 모바일 만들 때 이 설득 자료를 도입하면 좋겠다</p>
        <p>- 이렇게 결론이 나오도록 만들어야 한다</p>
      </div>
    </>
  );
}
