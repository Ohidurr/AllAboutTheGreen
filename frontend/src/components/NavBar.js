import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/NavBar.css";


const NavBar = () => {
    return (
      <div className="navBarContainer">
        <nav className="navBar">
          <ul className="navUl">
            <li className="navLi">
              <NavLink exact to="/" className="logo-style">
                <h3 className="logo">AATG</h3>
             </NavLink>
            </li>
            <li className="navLi">
              <NavLink exact to="/" className="nav-selected">
                Home
              </NavLink>
            </li>
            <li className="navLi">
              <NavLink exact to="/plant-scan" className="nav-selected">
                Plant Scan
              </NavLink>
            </li>
            <li className="navLi">
              <NavLink exact to="/plants" className="nav-selected">
                Plant Search
              </NavLink>
            </li>
  
            <li className="navLi">
              <NavLink exact to="/submissions" className="nav-selected">
                Plant Inquiry
                {/* <Mainlogo/> */}
              </NavLink>
            </li>
            <li className="navLi">
              <NavLink exact to="/open-forum" className="nav-selected">
                Community Forum
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
  export default NavBar; 