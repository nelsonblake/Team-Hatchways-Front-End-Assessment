import React from 'react';
import styles from './Button.module.css';

// Reusable button component that I like to use

const Button = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type || 'button'}
      onClick={() => {
        props.setShowGrades(!props.showGrades);
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
