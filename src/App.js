import React, { useState } from 'react';
import StudentList from './Components/Students/StudentList';
import NameFilter from './Components/NameFilter';
import TagFilter from './Components/TagFilter';

function App() {
  const [studentList, setStudentList] = useState();

  const nameFilterHandler = () => {
    setStudentList((prevList) => {
      prevList.filter((students) => students.includes(NameFilter));
    });
  };

  return (
    <React.Fragment>
      <NameFilter onNameFilterChange={nameFilterHandler} />
      <TagFilter />
      {/* <ExpandView/> */}
      <StudentList students={studentList} />
    </React.Fragment>
  );
}

export default App;
