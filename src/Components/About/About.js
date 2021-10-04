import React from 'react';
import './About.css';
import img from '../img/08.png';
const About = () => {
  return (
    //creating about part
    <div className="container">
      <div className="row about d-flex justify-content-center align-items-center">
        <div className="col-lg-6">
          <img src={img} className="about-image" alt="" />
        </div>
        <div className="col-lg-6 ">
          <h2 className="text-info">Why Learn With Rafi's Dream Skill ?</h2>
          <p>There are many variations of passages of course available, but the majority have suffered alteration in some form. There are many variations of passages of Best Course available.</p>
          <button className="btn btn-info fw-bold">More Details</button>
        </div>
      </div>
    </div>
  );
};

export default About;