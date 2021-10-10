import React from 'react';
import styles from './Tag.module.css';

const Tag = (props) => {
  return <div className={styles.tag}>{props.tag}</div>;
};

export default Tag;
