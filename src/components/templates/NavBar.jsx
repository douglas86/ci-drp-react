import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <Navbar expand="md" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" height="45px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link>
              <i className="fas fa-home"></i> Home
            </Nav.Link>
            <Nav.Link>
              <i className="fas fa-sign-in-alt"></i> Sign in
            </Nav.Link>
            <Nav.Link>
              <i className="fas fa-user-plus"></i> Sign up
            </Nav.Link>
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
