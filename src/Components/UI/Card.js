import React from 'react';
import styles from './Card.module.css';

// Reusable card component that I like to use
// Can take on any className you give it

const Card = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
