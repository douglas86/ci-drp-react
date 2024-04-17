import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";

import styles from "../../styles/NavBar.module.css";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../context/CurrentUserContext";
import Avatar from "../Avatar";
import axios from "axios";

const NavBar = () => {
  const { currentUser } = useCurrentUser();
  const { setCurrentUser } = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/").then(() => {
        setCurrentUser(null);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const addPostIcon = (
    <>
      <NavLink
        to="/posts/create"
        className={({ isActive }) => (isActive ? active(true) : active(false))}
      >
        <i className="fas fa-plus-square"></i> Add post
      </NavLink>
    </>
  );
  const loggedInIcons = (
    <>
      {currentUser?.username}
      <NavLink
        to="/feed"
        className={({ isActive }) => (isActive ? active(true) : active(false))}
      >
        <i className="fas fa-stream"></i> Feed
      </NavLink>
      <NavLink
        to="/liked"
        className={({ isActive }) => (isActive ? active(true) : active(false))}
      >
        <i className="fas fa-heart"></i> Liked
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? active(true) : active(false))}
        onClick={handleSignOut}
      >
        <i className="fas fa-sign-out-alt"></i> Sign out
      </NavLink>
      <NavLink
        to={`/profiles/${currentUser?.pk}`}
        className={({ isActive }) => (isActive ? active(true) : active(false))}
        onClick={() => {}}
      >
        <Avatar height={40} src={currentUser?.profile_image} text="Profile" />
      </NavLink>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink
        to="/signin"
        className={({ isActive }) => (isActive ? active(true) : active(false))}
      >
        <i className="fas fa-sign-in-alt"></i> Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={({ isActive }) => (isActive ? active(true) : active(false))}
      >
        <i className="fas fa-user-plus"></i> Sign up
      </NavLink>
    </>
  );

  const active = (flag) => (flag === true ? styles.Active : styles.NavLink);

  return (
    <Navbar expand="md" className={styles.NavBar} fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45px" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? active(true) : active(false)
              }
            >
              <i className="fas fa-home"></i> Home
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

// import { Navbar, Container, Nav } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
//
// import { router } from "../../constructors/router";
//
// import logo from "../../assets/logo.png";
// import styles from "../../styles/NavBar.module.css";
// import { useContext } from "react";
// import { CurrentUserContext } from "../../constructors/App";
//
// const NavBar = () => {
//   const currentUser = useContext(CurrentUserContext);
//   const loggedOutIcons = (route) =>
//     route.title === "Sign In" ? displayNavlink(route) : displayNavlink(route);
//
//   const active = (flag) => (flag === true ? styles.Active : styles.NavLink);
//
//   const displayNavlink = ({ path, fontawesomeIcon, title }) => (
//     <NavLink
//       to={path}
//       className={({ isActive }) => (isActive ? active(true) : active(false))}
//     >
//       <i className={`fas ${fontawesomeIcon}`}></i> {title}
//     </NavLink>
//   );
//
//   const links = (route) =>
//     route.title === "Sign In" || route.title === "Sign Out"
//       ? loggedOutIcons(route.title)
//       : displayNavlink(route);
//
//   return (
//     <Navbar expand="md" className="bg-body-tertiary" fixed="top">
//       <Container>
//         <NavLink to="/">
//           <Navbar.Brand>
//             <img src={logo} alt="logo" height="45px" />
//           </Navbar.Brand>
//         </NavLink>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
//           <Nav>
//             <>
//               {router.map((route, index) => (
//                 <div key={index}>{route.title !== "None" && links(route)}</div>
//               ))}
//             </>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };
//
// export default NavBar;
