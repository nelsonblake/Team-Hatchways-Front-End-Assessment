import React, { useEffect, useState } from 'react';
import './StudentList.module.css';
import Card from '../UI/Card';

const StudentList = (props) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch('https://api.hatchways.io/assessment/students')
      .then((res) => res.json())
      .then((students) => {
        setStudents(Object.values(students)[0]);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  if (error || !Array.isArray(students)) {
    return <p>There was an error loading your data!</p>;
  }

  return (
    <ul>
      {students.map((student) => (
        <Card key={student.id}>
          <li key={student.id}>
            <img src={student.pic} alt="logo" />
            <div>
              <h1>
                {student.firstName.toUpperCase()}{' '}
                {student.lastName.toUpperCase()}
              </h1>
              <h3>Email: {student.email}</h3>
              <h3>Skill: {student.skill}</h3>
              <h3>Company: {student.company}</h3>
              <h3>
                Average:{' '}
                {Object.values(student.grades)
                  .map((entry) => Number(entry))
                  .reduce((a, b) => a + b) / student.grades.length}
                %
              </h3>
            </div>
          </li>
        </Card>
      ))}
    </ul>
  );
};
export default StudentList;
