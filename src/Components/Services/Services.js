import React from 'react';

const Services = (props) => {
  //getting data from props
  const { course, author, url, price } = props?.data || {}
  return (
    //service second part

    <div className="col-4">
      <div className="card course-card w-100 mb-4">
        <div className="image-course">
          <img src={url} alt="" />
        </div>
        <div className="content">
          <h5> {course.slice(0, 44)} </h5>
          <h6 className="fw-bold">Instructor : {author} </h6>
          <button className="btn btn-info mb-4 fw-bold text-white" >Enrole Now : ${price} </button>
        </div>
      </div>
    </div>


  );
};

export default Services;