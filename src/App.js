import React, { useState , useEffect } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import Home from './components/pages/Home/Home.js';
import Footer from './components/Footer.js';
import LogIn from './components/pages/LogIn/LogIn.js';
import HOForm from './components/pages/HouseOwnerSignUp/HOForm.js';
import Form from './components/pages/SignUp/Form.js';
import SignUpRedirect from './components/pages/SignUpRedirect/SignUpRedirect'
import UploadDeals from './components/pages/UploadDeals/UploadDeals'
import Deals from './components/pages/DealsListingPage/DealsListingPage';
import LogOutNoti from './components/pages/LogOutNoti/LogOutNoti'
import DetailProductPage from './components/pages/DetailProductPage/DetailProductPage';
import LogInNoTi from './components/pages/LogInNoti/LogInNoti'
import AdminPendingPage from './components/pages/Admin/AdminPendingPage';
import AdminApprovedPage from './components/pages/Admin/AdminApprovedPage';
import OwnerPendingPage from './components/pages/PostOwnerManagement/OwnerPendingPage';
import OwnerApprovedPage from './components/pages/PostOwnerManagement/OwnerApprovedPage';
import ManageProfile from './components/pages/ManageProfile/ManageProfile';
import RenterBookmark from './components/pages/ManageProfile/RenterBookmark';

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
  const loggedInUser = localStorage.getItem("user");
  if (loggedInUser) {
    const foundUser = JSON.parse(loggedInUser);
    setUser(foundUser);
  }
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/products' exact component={Deals}/>
          <Route path='/sign-up' exact component={SignUpRedirect}/>
          <Route path='/sign-up/house-owner' exact component={HOForm}/>
          <Route path='/sign-up/renter' exact component={Form}/>
          <Route path='/log-in' exact component={LogIn}/>
          <Route path='/upload-deal' exact component={UploadDeals}/>
          <Route path='/log-out' exact component={LogOutNoti}/>
          <Route path="/product/:productId" exact component={DetailProductPage} />
          <Route path="/log-in-noti" exact component={LogInNoTi} />
          <Route path='/pending-posts' exact component={AdminPendingPage}/>
          <Route path='/approved-posts' exact component={AdminApprovedPage}/>
          <Route path='/owner-pending-posts' exact component={OwnerPendingPage}/>
          <Route path='/owner-approved-posts' exact component={OwnerApprovedPage}/>
          <Route path='/profile' exact component={ManageProfile}/>
          <Route path='/my-bookmarks' exact component={RenterBookmark}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
