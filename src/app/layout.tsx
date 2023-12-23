import { Metadata } from 'next';
import './globals.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { config } from '@fortawesome/fontawesome-svg-core';
import styles from './layout.module.css';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'ADS (ApplyDesignSystem)',
  description: 'Apply Design System',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={styles.bodyContainer}>
        <Header />
        <div className={styles.container}>
          <Sidebar />
          <div className={styles.main}>
            <main className={styles.contents}>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
