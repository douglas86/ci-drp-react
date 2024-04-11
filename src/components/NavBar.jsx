import {Navbar, Container, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {

    const active = (flag) => flag === true ? styles.Active : styles.NavLink;

    return (
        <Navbar expand="md" className="bg-body-tertiary" fixed="top">
            <Container>
                <NavLink to='/'>
                    <Navbar.Brand><img src={logo} alt='logo' height='45px'/></Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavLink to='/' className={({isActive}) => isActive ? active(true) : active(false)}><i
                            className='fas fa-home'></i> Home</NavLink>
                        <NavLink to='/signin' className={({isActive}) => isActive ? active(true) : active(false)}><i
                            className='fas fa-sign-in-alt'></i> Sign in</NavLink>
                        <NavLink to='signout' className={({isActive}) => isActive ? active(true) : active(false)}><i
                            className='fas fa-user-plus'></i> Sign out</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;