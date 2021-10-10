import React from 'react';
import styles from './NameFilter.module.css';

const NameFilter = (props) => {
  return (
    <form className={styles.search}>
      <input
        id="nameFilter"
        name="filter"
        type="search"
        onChange={(event) =>
          props.onNameFilterChange(event.target.value.toLowerCase().trim())
        }
        placeholder="Search by name.."
        className={styles.search}
      />
    </form>
  );
};

export default NameFilter;
