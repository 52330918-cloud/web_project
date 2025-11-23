import React, { useState } from 'react'

function Registration() {
    const [selectedCourse, setSelectedCourse] = useState('Math');
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const courseOptions = ['Physics', 'Math', 'Chemistry', 'Biology', 'Computer Science', 'English', 'History'];
  return (
    <div>Registration</div>
  )
}

export default Registration