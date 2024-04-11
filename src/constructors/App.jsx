import NavBar from "../components/NavBar";
import Container from 'react-bootstrap/Container'

import styles from '../styles/App.module.css'

const App = () => {
    return (
        <div className={styles.App}>
            <NavBar/>
            <Container className={styles.Main}>
                <h1>Home page</h1>
                <h1>Sign in</h1>
            </Container>
        </div>
    )
}

export default App;
