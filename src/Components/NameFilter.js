import React, { useState } from 'react';
import styles from './NameFilter.module.css';

const NameFilter = (props) => {
  const [nameFilter, setNameFilter] = useState('');
  const [foundNames, setFoundNames] = useState('');

  return (
    <form className={styles.search}>
      <input
        id="nameFilter"
        name="filter"
        type="search"
        value={nameFilter}
        onChange={(event) => setNameFilter(event.target.value)}
        placeholder="Search by name.."
        className={styles.search}
      />
    </form>
  );
};

export default NameFilter;
