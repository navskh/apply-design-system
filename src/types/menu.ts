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
  new ParentMenu('Field', '필드', [
    new ChildMenu('RADIOFIELD', '라디오', '/radiofield'),
    new ChildMenu('CHECKBOXFIELD', '체크박스', '/checkboxfield'),
    new ChildMenu('SELECTBOXFIELD', '셀렉트박스', '/selectboxfield'),
    new ChildMenu('INPUTFIELD', '인풋', '/inputfield'),
    new ChildMenu('MULTIINPUTFIELD', '멀티 인풋', '/multiinputfield'),
    new ChildMenu('SEARCHFIELD', '검색', '/searchfield'),
    new ChildMenu('PERIODFIELD', '기간', '/periodfield'),
  ]),
];

export default menuList;
