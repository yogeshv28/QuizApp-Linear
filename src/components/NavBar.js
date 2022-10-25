import React from "react";
import '../App.css';
// import footer-kingdom from './footer-kingdom.jpg';
// const NavButton = ({ label, onClick }) => (
//   <button className="btn" onClick={onClick}>
//     {label.toUpperCase()}
//   </button>
// );

// export default NavButton;



function Navbar() {
  return (
      <div>
          <nav className="navbar">
              {/* <img
                  src={require('./footer-kingdom.jpg')}
                  width="1000"
                  height="130"
                  className="d-inline-block align-top logo"
                  alt=""
              /> */}
          </nav>
      </div>
  );
}

export default Navbar;