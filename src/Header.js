import React, { Component } from 'react'
import './mycss.css'

export default class Header extends Component {
    render() {
        return ( 
   <div className="wrapper">
  <nav className="main-header navbar navbar-expand back navbar-dark  ">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="/" className="nav-link">Home</a>
      </li>

    </ul>
      <div className="them1" style={{marginLeft:'35%'}}> 
      <label style={{color: 'white',opacity: '.9'}}>Enjoy In  &nbsp;</label>
      <img src="dist/img/log.PNG" alt="AdminLTE Logo" className=" brand-image img-circle elevation-3" style={{opacity: '.8',height:"40px"}} />
      <label style={{color: 'white',opacity: '.9'}}>&nbsp; Essaouira  </label>
      </div>
    
    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-bell" />
          <span className="badge badge-warning navbar-badge">1+</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-envelope mr-2" /> 4 new messages
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-sign-out-alt mr-2" />Log Out
          </a>
        
        </div>
      </li>
    </ul>
  </nav>
</div>

        )
    }
}


