import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div className="row mt-5 mb-5">
        <div className="col-md-6 mx-auto">
          <h2 className="text-center">
            <span className="text-primary"><i className="fas fa-lock"></i></span> Account Login
          </h2>
          <form>
            <div className="card card-body">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" className="form-control"/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" className="form-control" />
              </div>
              <input type="submit" value="Login" className="btn btn-primary btn-block"/>
              <p className="mt-2" >Don't have an account?<a href="/ambassador/sign-in"> Register</a></p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;