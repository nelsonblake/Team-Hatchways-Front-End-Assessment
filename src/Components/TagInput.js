import React, { useState } from 'react';
import styles from './TagInput.module.css';

const TagInput = (props) => {
  const [newTag, setNewTag] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.addTag(newTag, props.index);
        setNewTag('');
      }}
    >
      <input
        className={styles.input}
        placeholder="Add a tag.."
        type="text"
        value={newTag}
        onChange={(e) => {
          setNewTag(e.target.value);
        }}
      />
      <input className={styles.tagSubmit} type="submit" />
    </form>
  );
};

export default TagInput;
