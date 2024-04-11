import NavBar from "../components/NavBar";
import Container from 'react-bootstrap/Container'
import {Route, Routes} from 'react-router-dom'

import styles from '../styles/App.module.css'

const App = () => {
    return (
        <div className={styles.App}>
            <NavBar/>
            <Container className={styles.Main}>
                <Routes>
                    <Route exact path='/' element={<h1>Home</h1>}/>
                    <Route exact path='/signin' element={<h1>Signing</h1>}/>
                    <Route exact path='/signout' element={<h1>Sign out</h1>}/>
                    <Route path='*' element={<h1>Not found</h1>}/>
                </Routes>
            </Container>
        </div>
    )
}

export default App;
