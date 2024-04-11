// third party libraries
import Container from 'react-bootstrap/Container'
import {Route, Routes} from 'react-router-dom'

// constructors directory
import {router} from "./router";

// components directory
import NavBar from "../components/templates/NavBar";

// styling
import styles from '../styles/App.module.css'

const App = () => {
    return (
        <div className={styles.App}>
            <NavBar/>
            <Container className={styles.Main}>
                <Routes>
                    <>
                        {router.map((route, index) => (
                            <Route exact key={index} path={route.path} element={route.element}/>
                        ))}
                    </>
                </Routes>
            </Container>
        </div>
    )
}

export default App;
