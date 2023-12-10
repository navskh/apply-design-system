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
  new ParentMenu('Field', '필드정보', [
    new ChildMenu('RADIOFIELD', '라디오필드', '/radiofield'),
    new ChildMenu('CHECKBOXFIELD', '체크박스필드', '/checkboxfield'),
    new ChildMenu('INPUTFIELD', '단일텍스트필드', '/inputfield'),
    new ChildMenu('MULTIINPUTFIELD', '다중텍스트필드', '/multiinputfield'),
    new ChildMenu('SEARCHFIELD', '검색필드', '/searchfield'),
    new ChildMenu('PERIODFIELD', '기간필드', '/periodfield'),
  ]),
];

export default menuList;
