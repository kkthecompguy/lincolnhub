import React, { Fragment } from 'react';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
import Register from './components/ambassadors/Register'

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
       <Home />
      </div>
      <Footer />
      <Register />
    </Fragment>
  );
}

export default App;
