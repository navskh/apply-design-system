import hljs from 'highlight.js';
import { useEffect } from "react";
import styles from '@/app/layout.module.css';
import ExampleTab from './ExampleTab';
import useSampleHTML from '../hook/getSampleHTML';

interface propsStyle {
  title: string;
  path: string;
}

export default function Renderer(props: propsStyle) {
  const title = props.title;
  const path = props.path;
  const arrPath = path?.split('/');
  if (!arrPath) return null;
  let htmlType = arrPath[1];
  let htmlDir = arrPath[2];

  const formattedHtmlCode = useSampleHTML(htmlType, htmlDir);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <h3 className={styles.title}>{title}</h3>
      <ExampleTab sampleHTML={formattedHtmlCode} />
    </>
  );
}