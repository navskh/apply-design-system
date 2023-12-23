import hljs from 'highlight.js';
import { usePathname } from "next/navigation";
import getSampleHTML from "../function/getSampleHTML";
import { useEffect } from "react";
import styles from '@/app/layout.module.css';
import ExampleTab from './ExampleTab';

export default function Renderer(props: any) {
  const pathname = usePathname()
  const arrPath = pathname.split('/');
  const htmlType = arrPath[1];
  const htmlDir = arrPath[2];
  const formattedHtmlCode = getSampleHTML(htmlType, htmlDir);
  const title = props.title;

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <ExampleTab sampleHTML={formattedHtmlCode} />
    </>
  );
}