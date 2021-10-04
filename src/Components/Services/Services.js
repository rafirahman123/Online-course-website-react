import React from 'react';

const Services = (props) => {
  // console.log(props?.data?.course); 
  const {course,author,url}=props?.data||{}

  return (
    <div>
      <h3>name : {course} </h3>
      <img src={url} alt="" />
      <h3>Instructor : {author} </h3>
      {/* <h3>instructor : {author} </h3> */}
    </div>
  );
};

export default Services;