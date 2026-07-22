import React from 'react';

const courses = [
  { id: 1, name: 'Angular', date: '4/5/2021' },
  { id: 2, name: 'React',   date: '6/5/2021' }
];

function CourseDetails() {
  const courseList = courses.map((course) => (
    <div key={course.id} className="mymref1">
      <h3>{course.name}</h3>
      <h4>{course.date}</h4>
    </div>
  ));

  return (
    <div className="d1">
      <h1>Course Details</h1>
      <div>{courseList}</div>
    </div>
  );
}

export default CourseDetails;
