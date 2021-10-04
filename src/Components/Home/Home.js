import './Home.css'


const Home = (props) => {
  console.log(props.data); 
  const {course,url,author,price}= props.data 
  return (
    <div >
      <div className="card">
        <div className="image">
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

export default Home;