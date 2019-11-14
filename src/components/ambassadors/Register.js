import React, { Component } from 'react'

class Register extends Component {
  render() {
    return (
      <div className="row mt-4 mb-3">
        <div className="col-md-6">
          <div className="container signup-link">
            <div>
              <a href="/ambassador/login" className="btn btn-primary px-2 mx-3">Ambassadors</a>
              <a href="/supervisor/sign-in" className="btn btn-primary px-2">Supervisor</a>
              <p className="lead">Sign in As Ambassador</p>
            </div>
            <div>
            <a href="/auth/sign-in" className="btn btn-danger"><i className="fab fa-google"></i> Continue with Google</a>

            <p>Already have an account? <a href="/ambassador/login">Login</a></p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <form className="card card-body">
            <div className="card card-body"><h4>Ambassador Registration</h4></div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" className="form-control"/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" className="form-control"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" className="form-control"/>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" className="form-control"/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="password2">Confirm Password</label>
                <input type="password" name="password2" className="form-control"/>
              </div>
            </div>
            <div className="card card-body"><h4>Guardian Details</h4></div>
            <div className="form-row">
              <div className="form-group col-md-6">
               <label htmlFor="guardianName">Guardian Name</label>
                <input type="text" name="guardianName" className="form-control"/>
              </div>
              <div className="form-group col-md-6">
               <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" className="form-control"/>
              </div>
            </div>
            <div className="card card-body"><h4>Emergency Contact</h4></div>
            <div className="form-row">
              <div className="form-group col-md-6">
               <label htmlFor="emergencyName"> Name</label>
                <input type="text" name="emergencyName" className="form-control"/>
              </div>
              <div className="form-group col-md-6">
               <label htmlFor="emergencyPhone">Phone</label>
                <input type="text" name="emergencyPhone" className="form-control"/>
              </div>
            </div>
            <input type="submit" value="Register/Submit" className="btn btn-primary btn-block"/>
          </form>
        </div>
      </div>
    )
  }
}

export default Register;