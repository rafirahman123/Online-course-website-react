import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';
import './Courses.css'

const Courses = () => {
    const [service,setServices] = useState([])
  useEffect((() => {
    fetch('./course.json')
      .then(res => res.json())
      .then(data=>setServices(data))
  }),[])

  return (
    
    <div className="container">
      <div className="courses">
      {
         service.map(element=><Services data={element}  ></Services>)
       }
      </div>
    
    </div>
  );
};

export default Courses;


