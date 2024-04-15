// third party libraries
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";

// constructors directory
import { router } from "./router";

// components directory
import NavBar from "../components/templates/NavBar";

// api directory
import "../api/axiosDefaults";

// styling
import styles from "../styles/App.module.css";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrentUserContext = createContext(null);
export const SetCurrentUserContext = createContext(null);

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Routes>
              <>
                {router.map((route, index) => (
                  <Route
                    exact
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </>
            </Routes>
          </Container>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};

export default App;
