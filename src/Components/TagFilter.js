import React from 'react';
import styles from './TagFilter.module.css';

const TagFilter = (props) => {
  return (
    <form className={styles.search}>
      <input
        id="tagFilter"
        name="filter"
        type="search"
        onChange={(event) =>
          props.onTagFilterChange(event.target.value.toLowerCase().trim())
        }
        placeholder="Search by tag.."
        className={styles.search}
      />
    </form>
  );
};

export default TagFilter;
