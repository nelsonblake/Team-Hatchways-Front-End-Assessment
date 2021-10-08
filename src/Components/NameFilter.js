import React, { useState } from 'react';
import styles from './NameFilter.module.css';

const NameFilter = ({ onNameFilterChange }) => {
  return (
    <form className={styles.search}>
      <input
        id="nameFilter"
        name="filter"
        type="search"
        onChange={(event) =>
          onNameFilterChange(event.target.value.toLowerCase().trim())
        }
        placeholder="Search by name.."
        className={styles.search}
      />
    </form>
  );
};

export default NameFilter;
