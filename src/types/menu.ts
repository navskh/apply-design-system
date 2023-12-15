class Menu {
  title: string;
  fieldName: string;
  constructor(title: string, fieldName: string) {
    this.title = title;
    this.fieldName = fieldName;
  }
}

class ParentMenu extends Menu {
  children: ChildMenu[];
  constructor(title: string, fieldName: string, children: ChildMenu[]) {
    super(title, fieldName);
    this.children = children;
  }
}

class ChildMenu extends Menu {
  path: string;
  constructor(title: string, fieldName: string, path: string) {
    super(title, fieldName);
    this.path = path;
  }
}

const menuList: ParentMenu[] = [
  new ParentMenu('Foundation', 'Foundation', [
    new ChildMenu('COLOR', '색상', '/foundation/color'),
    new ChildMenu('TYPOGRAPHY', '타이포그래피', '/foundation/typography'),
    new ChildMenu('ICON', '아이콘', '/foundation/icon'),
    new ChildMenu('GRID', '그리드', '/foundation/grid'),
    new ChildMenu('LAYOUT', '레이아웃', '/foundation/layout'),
  ]),
  new ParentMenu('Component', '컴포넌트', [
    new ChildMenu('BUTTON', '버튼', '/components/button'),
    new ChildMenu('INPUT', '인풋', '/components/input'),
    new ChildMenu('SELECT', '셀렉트', '/components/select'),
    new ChildMenu('CHECKBOX', '체크박스', '/components/checkbox'),
    new ChildMenu('RADIO', '라디오', '/components/radio'),
  ]),
  new ParentMenu('Field', '필드', [
    new ChildMenu('RADIOFIELD', '라디오', '/fields/radiofield'),
    new ChildMenu('CHECKBOXFIELD', '체크박스', '/fields/checkboxfield'),
    new ChildMenu('SELECTBOXFIELD', '셀렉트박스', '/fields/selectboxfield'),
    new ChildMenu('INPUTFIELD', '인풋', '/fields/inputfield'),
    new ChildMenu('MULTIINPUTFIELD', '멀티 인풋', '/fields/multiinputfield'),
    new ChildMenu('SEARCHFIELD', '검색', '/fields/searchfield'),
    new ChildMenu('PERIODFIELD', '기간', '/fields/periodfield'),
  ]),
];

export default menuList;
