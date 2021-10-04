import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
import './HomeService.css'

const HomeService = () => {
   const [courses,setCourses] = useState([])
  useEffect(() => {
    fetch('./home.json')
      .then(res => res.json())
      .then(data=>setCourses(data))
  },[])
  return (
    <div className="container course-home">
      {
          courses.map(element=><Home data={element}></Home>)
        }

    </div>
  );
};

export default HomeService;