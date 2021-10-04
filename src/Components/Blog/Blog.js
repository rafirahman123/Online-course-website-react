import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';

const Blog = () => {
  const [blogs,setBlogs] = useState([])
  useEffect(() => {
    fetch('./Blog.json')
      .then(res => res.json())
      .then(data=>setBlogs(data))
  },[])
  return (
     <div class="container">
  <div class="row">
     {
          blogs.map(element=> <Blogs data={element} ></Blogs> )
        }
  </div>    
</div>

    
  );
};

export default Blog;