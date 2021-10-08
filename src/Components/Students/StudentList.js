import React, { useState } from 'react';
import './StudentList.module.css';
import Card from '../UI/Card';

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
  const [showGrades, setShowGrades] = useState(false);
  return (
    <Card>
      <li>
        <img src={img} alt="avatar" />
        <div>
          <h1>{`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}</h1>
          <h3>Email: {email}</h3>
          <h3>Company: {company}</h3>
          <h3>Skill: {skill}</h3>
          <h3>Average: {averageGrade}%</h3>
          {/* {showGrades && (
          <div className={styles.extendedContent}>
            {grades.map((grade, index) => {
              return (
                <div key={index.toString()}>
                  {`test${index}:\xa0\xa0\xa0\xa0\xa0\xa0${grade}%`}
                </div>
              );
            })}
            {tags.length > 0
              ? tags.map((tag, index) => {
                  return <Tag key={index.toString()} tag={tag} />;
                })
              : null}
            <TagForm index={index} addTag={addTag} />
          </div>
        )} */}
        </div>
      </li>
      {/* {showGrades ? (
        <CloseIcon
          className={styles.expandBtn}
          setShowGrades={setShowGrades}
          showGrades={showGrades}
        />
      ) : (
        <OpenIcon
          className={styles.expandBtn}
          setShowGrades={setShowGrades}
          showGrades={showGrades}
        />
      )} */}
    </Card>
  );
};
export default StudentList;
