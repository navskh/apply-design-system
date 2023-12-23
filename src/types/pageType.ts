interface pageType {
  [key: string]: string;
}

const FieldDirectoryType: pageType = {
  checkboxfield: 'checkboxfield.html',
  inputfield: 'inputfield.html',
  multiinputfield: 'multiinputfield.html',
  periodfield: 'periodfield.html',
  radiofield: 'radiofield.html',
  searchfield: 'searchfield.html',
  selectboxfield: 'selectboxfield.html',
};

const FoundationDirectoryType: pageType = {
  color: 'color.html',
  typography: 'typography.html',
  icon: 'icon.html',
  grid: 'grid.html',
  layout: 'layout.html',
};

const ComponentDirectoryType: pageType = {
  button: 'button.html',
  checkbox: 'checkbox.html',
  input: 'input.html',
  radio: 'radio.html',
  select: 'select.html',
};

export { FieldDirectoryType, FoundationDirectoryType, ComponentDirectoryType };
