import React, { useState, useEffect } from 'react';
import StudentList from './Components/Students/StudentList';
import NameFilter from './Components/NameFilter';
import TagFilter from './Components/TagFilter';

function App() {
  ////////////////////////////////////////////////
  // States
  const [studentData, setStudentData] = useState([]);
  const [filterContent, setFilterContent] = useState([]);
  const [nameFilter, setNameFilter] = useState([]);
  const [tagFilter, setTagFilter] = useState([]);

  ///////////////////////////////////////////////
  //API call
  async function fetchUrl(url) {
    const response = await fetch(url);
    const json = await response.json();
    let newStudentData = [];
    // Will be empty for now, but prepare for when we add tags
    json.students.forEach((student) => {
      let addTags = student;
      addTags.tags = [];
      newStudentData.push(addTags);
    });
    setStudentData(newStudentData);
    setFilterContent(newStudentData);
    setNameFilter(newStudentData);
    setTagFilter(newStudentData);
  }
  useEffect(() => {
    fetchUrl(`https://www.hatchways.io/api/assessment/students`);
  }, []);

  ///////////////////////////////////////////////
  // Filter Functions
  ////////////
  // Name
  const nameFilterHandler = (nameInput) => {
    let newNameFilter = [];
    studentData.forEach((student) => {
      // eliminate case sensitivity
      const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
      // Push if includes the substring
      if (fullName.includes(nameInput)) {
        newNameFilter.push(student);
      }
    });
    let contentFilter = [];
    tagFilter.forEach((student) => {
      // eliminate case sensitivity
      const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
      if (fullName.includes(nameInput)) {
        // Push if includes the substring
        contentFilter.push(student);
      }
    });
    // set states
    setFilterContent(contentFilter);
    setNameFilter(newNameFilter);
  };
  /////////////
  // Tag
  const tagFilterHandler = (tagInput) => {
    if (tagInput) {
      let newTagFilter = [];
      let newContentFilter = [];
      studentData.forEach((student) => {
        let tagged = false;
        student.tags.forEach((tag) => {
          // push if includes substring
          if (tag.includes(tagInput)) {
            // tag flag
            tagged = true;
          }
        });
        if (tagged) {
          newTagFilter.push(student);
        }
      });
      filterContent.forEach((student) => {
        let tagged = false;
        student.tags.forEach((tag) => {
          // push if includes substring
          if (tag.includes(tagInput)) {
            // tag flag
            tagged = true;
          }
        });
        // put all tagged students in newContentFilter
        if (tagged) {
          newContentFilter.push(student);
        }
      });
      // update states with new data
      setFilterContent(newContentFilter);
      setTagFilter(newTagFilter);
    } else {
      // update states with old data
      setFilterContent(nameFilter);
      setTagFilter(studentData);
    }
  };

  ///////////////////////////////////////////////
  // AddTag
  const addTag = (tag, index) => {
    const studentDataTag = [...studentData];
    studentDataTag[index].tags.push(tag);
    setStudentData(studentDataTag);
  };

  return (
    <React.Fragment>
      <NameFilter onNameFilterChange={nameFilterHandler} />
      <TagFilter onTagFilterChange={tagFilterHandler} />
      {filterContent.map((student, index) => {
        function findAverage(array) {
          let sum = 0;
          for (let i = 0; i < array.length; i++) {
            sum += parseInt(array[i]);
          }
          let average = sum / array.length;
          return average;
        }
        const averageGrade = findAverage(student.grades);
        return (
          <StudentList
            key={index.toString()}
            index={index}
            img={student.pic}
            firstName={student.firstName}
            lastName={student.lastName}
            email={student.email}
            company={student.company}
            skill={student.skill}
            grades={student.grades}
            averageGrade={averageGrade}
            tags={student.tags}
            addTag={addTag}
          />
        );
      })}
    </React.Fragment>
  );
}

export default App;
