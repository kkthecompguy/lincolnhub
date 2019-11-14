import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <div className="row">
        <div className="col-md-8">
          <div className="content-text">
            <h1>Lincoln Hub Project</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, odio quam, iusto explicabo laboriosam repellendus magnam tempore ullam eaque, sit incidunt nulla alias ratione tenetur perferendis ut. Reprehenderit quisquam suscipit, corporis ipsam rem maxime ex eveniet, exercitationem facilis eum placeat?</p>
            <a href="/ambassador/sign-in" className="btn btn-primary mt-4">Get Started</a>
          </div>
        </div>
        <div className="col-md-4">
        <div className="content-img">
          <img src="https://www.snyxius.com/wp-content/uploads/2017/10/productivity-tools.jpg" alt="programmers" className="img-thumbnail" />
        </div>
        </div>
      </div>
    </div>
    
  )
}

export default Home;