import React from 'react';
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
        </div>
      </li>
    </Card>
  );
};
export default StudentList;
