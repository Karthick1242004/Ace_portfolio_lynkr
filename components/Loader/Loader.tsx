// components/Loader.tsx

import React from 'react';
import styles from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={styles.loaderBackground}>
      <div className={styles.body}>
        <span className={styles.bodySpan}>
          <span className="fazer1"></span>
          <span className="fazer2"></span>
          <span className="fazer3"></span>
          <span className="fazer4"></span>
        </span>
        <div className={styles.base}>
          <span className={styles.baseSpan}></span>
          <div className={styles.face}></div>
        </div>
      </div>
      <div className={styles.longfazers}>
        <span className={styles.longfazersSpan1}></span>
        <span className={styles.longfazersSpan2}></span>
        <span className={styles.longfazersSpan3}></span>
        <span className={styles.longfazersSpan4}></span>
      </div>
      <h1 className={styles.redirectingText}>Cooking</h1>
    </div>
  );
};

export default Loader;
