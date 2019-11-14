import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
import Register from './components/ambassadors/Register';
import Login from './components/ambassadors/Login';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/ambassador/sign-in" component={Register} />
            <Route exact path="/ambassador/login" component={Login} />
            <Route exact path="/ambassador/me" component={Dashboard} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
