import React from 'react';
import styles from './InfoFilter.module.css';

// Refactored from NameFilter and TagFilter to better follow DRY

const InfoFilter = (props) => {
  return (
    <form className={styles.search}>
      <input
        id={`${props.type}filter`}
        name="filter"
        type="search"
        onChange={(event) =>
          props.onFilterChange(event.target.value.toLowerCase().trim())
        }
        placeholder={`Search by ${props.type}..`}
        className={styles.search}
      />
    </form>
  );
};

export default InfoFilter;
