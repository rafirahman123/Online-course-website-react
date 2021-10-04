import React from 'react';
import img from '../img/blognew.jpg'
const BlogUi = () => {
  return (
    // first blog part
    <div className="container">
      <img src={img} className="img-fluid" alt="" />
      <h3 className="text-center my-3 text-info">Read new Blogs & News and Learn More</h3>
    </div>
  );
};

export default BlogUi;