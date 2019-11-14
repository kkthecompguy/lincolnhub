import React, { Component } from 'react'

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="text-center" >Active Project Achive</h2>
        <div className="row">
          <div className="col-md-4">
            <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1143979354%2F960x0.jpg%3Ffit%3Dscale" alt="Programmer" className="avatar" />
            <h3>Name</h3>
            <div className="card card-body">
              <ul>
                <li>Email</li>
                <li>Phone</li>
                <li>Supervisor</li>
              </ul>
            </div>
            <a href="/ambassador/logout" className="btn btn-primary btn-sm mt-3">Logout</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;