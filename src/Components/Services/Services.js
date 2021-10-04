import React from 'react';

const Services = (props) => {
  // console.log(props?.data?.course); 
  const {course,author,url,price}=props?.data||{}

  return (
       <div >
      <div className="card course-card">
        <div className="image-course">
          <img src={url} alt="" />
        </div>
        <div className="content">
        <h5> {course.slice(0,44)} </h5>
        <h6 className="text-muted">Instructor : {author} </h6>
          <button className="btn btn-warning mb-3" >Buy Now : ${price} </button>     
        </div>
      </div>
    </div>
  );
};

export default Services;