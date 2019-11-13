import React, { Fragment } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar'

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
       <Home />
      </div>
    </Fragment>
  );
}

export default App;
