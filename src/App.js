import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } 
from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home.js';
import Footer from './components/Footer.js';
import LogIn from './components/pages/LogIn/LogIn.js';
import HOForm from './components/pages/HouseOwnerSignUp/HOForm.js';
import Form from './components/pages/SignUp/Form.js';
import SignUpRedirect from './components/pages/SignUpRedirect/SignUpRedirect'
import UploadDeals from './components/pages/UploadDeals/UploadDeals'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/products' exact component={Home}/>
          <Route path='/sign-up' exact component={SignUpRedirect}/>
          <Route path='/sign-up/house-owner' exact component={HOForm}/>
          <Route path='/sign-up/renter' exact component={Form}/>
          <Route path='/log-in' exact component={LogIn}/>
          <Route path='/upload-deal' exact component={UploadDeals}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
