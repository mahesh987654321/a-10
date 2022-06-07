// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import { getAuth, signOut } from "firebase/auth";
// // import React from "react";
// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import {
//   useAuthState,
//   useSignInWithEmailAndPassword,
// } from "react-firebase-hooks/auth";
// // import { Link } from "react-router-dom";
// import app from "../../firebase.init";
// const auth = getAuth(app);
// const Header = () => {
//   const [user] = useAuthState(auth);
//   const handleSignOut = () => {
//     signOut(auth);
//   };
// const Navbar = () => {
//   return (
//     <div>
//       <div class="nav">
//         <input type="checkbox" id="nav-check" />
//         <div class="nav-header">
//           <div class="nav-title">Mahesh PhohtoGraphy</div>
//         </div>
//         <div class="nav-btn">
//           <label for="nav-check">
//             <span></span>
//             <span></span>
//             <span></span>
//           </label>
//         </div>

//         <div class="nav-links">
//           <Link to="/">Home</Link>
//           <Link to="/about"></Link>
//           <Link to="/services">Services</Link>
//           <Link to="/blogs">Blogs</Link>
//           <Link to="/about">About</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { Navbar } from "react-bootstrap";


// import "responsive-navbar-react/dist/index.css";

const Navbarr = () => {
  const props = {
    items: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Doc",
        link: "#docs",
      },
      {
        text: "Custom",
        link: "#custom-bar",
      },
      {
        text: "Contact",
        link: "#contact",
      },
    ],
    logo: {
      text: "Responsive Navbar React",
    },
    style: {
      barStyles: {
        background: "#444",
      },
      sidebarStyles: {
        background: "#222",
        buttonColor: "white",
      },
    },
  };
  return <Navbar {...props} />;
};
export default Navbarr;
