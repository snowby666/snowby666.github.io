import Titlebar from '../components/Titlebar';
import Sidebar from '../components/Sidebar';
import Explorer from '../components/Explorer';
import Bottombar from '../components/Bottombar';
import Tabsbar from './Tabsbar';
import styles from '../styles/Layout.module.css';
import { useState, useEffect } from 'react';

const useWidth = () => {
  const [width, setWidth] = useState(0); // default width, detect on server.
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);
  return width;
};

const Layout = ({ children }) => {
  var Width = useWidth();
  if (Width < 300 && Width > 0) {
    return (
      <>
        <Titlebar />
        <div className={styles.main}>
          <Sidebar />
          <div style={{ width: '100%', maxWidth: '80vmin' }}>
            <Tabsbar />
            <main className={styles.content}>{children}</main>
          </div>
        </div>
        <Bottombar />
      </>
    );
  } if (Width < 400 && Width > 0) {
      return (
        <>
          <Titlebar />
          <div className={styles.main}>
            <Sidebar />
            <div style={{ width: '100%', maxWidth: '87vmin' }}>
              <Tabsbar />
              <main className={styles.content}>{children}</main>
            </div>
          </div>
          <Bottombar />
        </>
      );
  } else if (Width < 500 && Width > 0) {
    return (
      <>
        <Titlebar />
        <div className={styles.main}>
          <Sidebar />
          <div style={{ width: '100%', maxWidth: '88vmin' }}>
            <Tabsbar />
            <main className={styles.content}>{children}</main>
          </div>
        </div>
        <Bottombar />
      </>
    );
  } else if (Width < 700 && Width > 0) {
    return (
      <>
        <Titlebar />
        <div className={styles.main}>
          <Sidebar />
          <div style={{ width: '100%', maxWidth: '90vmin' }}>
            <Tabsbar />
            <main className={styles.content}>{children}</main>
          </div>
        </div>
        <Bottombar />
      </>
    );
  }
  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%' }}>
          <Tabsbar />
          <main className={styles.content}>{children}</main>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Layout;
