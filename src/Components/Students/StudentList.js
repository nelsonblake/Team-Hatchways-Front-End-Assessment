import React, { useState } from 'react';
import styles from './StudentList.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Tag from './Tag';
import TagInput from '../TagInput';

// Using specified props here for organization sake
const StudentList = ({
  index,
  img,
  firstName,
  lastName,
  email,
  company,
  skill,
  averageGrade,
  grades,
  tags,
  addTag,
}) => {
  // set state for toggling showGrades
  const [showGrades, setShowGrades] = useState(false);

  return (
    <Card>
      <li className={styles.listItem}>
        <img src={img} alt="icon" className={styles.image} />
        <div>
          <h1
            className={styles.name}
          >{`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}</h1>

          <h3 className={styles.info}>Email: {email}</h3>
          <h3 className={styles.info}>Company: {company}</h3>
          <h3 className={styles.info}>Skill: {skill}</h3>
          <h3 className={styles.info}>
            Average: {Number(averageGrade).toFixed(2)}%
          </h3>
          {/* Show the full grades conditionally */}
          {showGrades && (
            <div className={styles.hiddenContent}>
              {grades.map((grade, index) => {
                return (
                  <div key={index.toString()}>
                    {/* Non-breakable space character */}
                    {`Test ${index + 1}:\xa0\xa0\xa0\xa0\xa0\xa0${grade}%`}
                  </div>
                );
              })}
              {/* if tags exist, display */}
              {tags.length > 0
                ? tags.map((tag, index) => {
                    return <Tag key={index.toString()} tag={tag} />;
                  })
                : null}
              <TagInput index={index} addTag={addTag} />
            </div>
          )}
        </div>

        {/* If grades are showing then show the X, else show the + */}
        {!showGrades ? (
          <Button
            className={styles.btn}
            setShowGrades={setShowGrades}
            showGrades={showGrades}
          >
            <i class="fas fa-plus fa-2x"></i>
          </Button>
        ) : (
          <Button
            className={styles.btn}
            setShowGrades={setShowGrades}
            showGrades={showGrades}
          >
            <i class="fas fa-times fa-2x"></i>
          </Button>
        )}
      </li>
    </Card>
  );
};
export default StudentList;
