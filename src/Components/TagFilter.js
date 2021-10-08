import React, { useState } from 'react';
import styles from './TagFilter.module.css';

const TagFilter = ({ onTagFilterChange }) => {
  return (
    <form className={styles.search}>
      <input
        id="tagFilter"
        name="filter"
        type="search"
        onChange={(event) =>
          onTagFilterChange(event.target.value.toLowerCase().trim())
        }
        placeholder="Search by name.."
        className={styles.search}
      />
    </form>
  );
};

export default TagFilter;
