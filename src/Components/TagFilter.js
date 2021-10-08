import React from 'react';
import styles from './TagFilter.module.css';

const TagFilter = (props) => {
  return (
    <form className={styles.search}>
      <input
        type="search"
        placeholder="Search by tag.."
        className={styles.search}
      />
    </form>
  );
};

export default TagFilter;
