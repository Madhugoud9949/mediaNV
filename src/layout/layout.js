import React from 'react';
import BidPage from '../bidPage';
import '../layout/layout.css' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="header">
        <div className="header-item">Bid</div>
        <div className="header-item">POD</div>
        <div className="header-item">Vendor</div>
        <div className="header-item">User</div>
        <div className="header-item">
      Freight EG
  <FontAwesomeIcon icon={faUser} className="user-icon" />
  <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
</div>
      </div>
     
   <div className="sidebar">
  <div className='logo-container'>
    <img className="logo" src="https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg" alt="Logo" />
    <div className="sidebar-item">LOGO</div>
  </div>

 
    <div className='side1'>
    <div className="sidebar-item">
      <div className="box-logo"></div>
      Bid
    </div>

    <div className="sidebar-item">
      <div className="box-logo"></div>
      POD
    </div>

    <div className="sidebar-item">
      <div className="box-logo"></div>
      Vendor
    </div>

    <div className="sidebar-item">
      <div className="box-logo"></div>
      User
    </div>
    </div>
    <div className='side2'>
    <div className="sidebar-item">
      <div className="box-logo"></div>
      Settings
    </div>
    
    <div className="sidebar-item">
      <div className="box-logo"></div>
      Profile
    </div>
    
    <div className="sidebar-item">
      <div className="box-logo"></div>
      Contact Us
    </div>
    
    <div className="sidebar-item">
      <div className="box-logo"></div>
      Logout
    </div>
  </div>
</div>



      <div >
        <BidPage />
        {children}
      </div>
    </div>
   
  );
};

export default Layout;
