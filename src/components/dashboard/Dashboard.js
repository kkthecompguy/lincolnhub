import React, { Component } from 'react'

class Dashboard extends Component {
  closeNav = () => {
    document.getElementById("sidebar-nav").style.width = '0';
    document.getElementById("main").style.marginLeft = '0';
  }

  openNav = () => {
    document.getElementById("sidebar-nav").style.width = '250px';
    document.getElementById("main").style.marginLeft = '250px';
  }
  render() {
    return (
      <div>
        <div id="sidebar-nav" className="sidenav">
          <a href="#!" onClick={() => this.closeNav()} className="closebtn">&times;</a>
          <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1143979354%2F960x0.jpg%3Ffit%3Dscale" alt="Programmer" className="avatar"/>
          <ul>
            <li>Name</li>
            <li>Email</li>
            <li>Phone</li>
            <li>
             <a href="/ambassador/logout" className="btn btn-danger btn-sm mt-5 mb-5  ml-2 ">Logout</a>
            </li>
          </ul>
        </div>
        <span className="open-side" onClick={() => this.openNav()}>
          <svg width="30" height="30">
            <path d="M0,5 30,5" stroke="#111" strokeWidth="5"/>
            <path d="M0,14 30,14" stroke="#111" strokeWidth="5"/>
            <path d="M0,23 30,23" stroke="#111" strokeWidth="5"/>
          </svg>
        </span>

        <div id="main">
          <h2 className="text-center">Active Project Achieve</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1143979354%2F960x0.jpg%3Ffit%3Dscale" className="card-img-top" alt=""/>
                <div className="card-body">
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eaque.</p>
                  <a href="#!" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1143979354%2F960x0.jpg%3Ffit%3Dscale" className="card-img-top" alt=""/>
                <div className="card-body">
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eaque.</p>
                  <a href="#!" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1143979354%2F960x0.jpg%3Ffit%3Dscale" className="card-img-top" alt=""/>
                <div className="card-body">
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eaque.</p>
                  <a href="#!" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1143979354%2F960x0.jpg%3Ffit%3Dscale" className="card-img-top" alt=""/>
                <div className="card-body">
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eaque.</p>
                  <a href="#!" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;