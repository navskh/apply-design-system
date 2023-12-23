import beautify from 'js-beautify';
import { useEffect, useState } from 'react';
import { FieldDirectoryType, ComponentDirectoryType, FoundationDirectoryType } from '@/types/pageType';

function getSampleHTML(htmlType: string, htmlDir: string) {
  const [sampleHTML, setSampleHTML] = useState('');

  let directory = '';
  if (htmlType === 'fields') directory = `/html/fields/${FieldDirectoryType[htmlDir]}`;
  else if (htmlType === 'foundation') directory = `/html/foundation/${FoundationDirectoryType[htmlDir]}`;
  else if (htmlType === 'component') directory = `/html/component/${ComponentDirectoryType[htmlDir]}`;

  useEffect(() => {
    fetch(directory)
      .then(response => response.text())
      .then(data => setSampleHTML(data));
  }, []);

  const formattedHtmlCode = beautify.html(sampleHTML);

  return formattedHtmlCode;
}

export default getSampleHTML;
