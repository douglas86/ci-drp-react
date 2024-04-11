import {Navbar, Container, Nav} from "react-bootstrap";

import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
    return (
        <Navbar expand="md" className={`bg-body-tertiary ${styles.NavBar}`} fixed="top">
            <Container>
                <Navbar.Brand><img src={logo} alt='logo' height='45px'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link><i className='fas fa-home'></i> Home</Nav.Link>
                        <Nav.Link><i className='fas fa-sign-in-alt'></i> Sign in</Nav.Link>
                        <Nav.Link><i className='fas fa-user-plus'></i> Sign out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;