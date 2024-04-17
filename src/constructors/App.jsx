import NavBar from "../components/templates/NavBar";

import styles from "../styles/App.module.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import SignIn from "../components/pages/auth/SignIn";
import SignUpForm from "../components/pages/auth/SignUpForm";
import NotFound from "../components/pages/NotFound";
import "../api/axiosDefaults";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CurrentUserContext = createContext(null);
export const SetCurrentUserContext = createContext(null);

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      return await axios.get("dj-rest-auth/user/");
    } catch (err) {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    handleMount()
      .then((data) => setCurrentUser(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <SetCurrentUserContext.Provider value={{ setCurrentUser }}>
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route element={<NotFound />} />
            </Routes>
          </Container>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};

export default App;

// // third party libraries
// import Container from "react-bootstrap/Container";
// import { Route, Routes } from "react-router-dom";
//
// // constructors directory
// import { router } from "./router";
//
// // components directory
// import NavBar from "../components/templates/NavBar";
//
// // api directory
// import "../api/axiosDefaults";
//
// // styling
// import styles from "../styles/App.module.css";
// import { createContext, useEffect, useState } from "react";
// import axios from "axios";
//
// export const CurrentUserContext = createContext(null);
// export const SetCurrentUserContext = createContext(null);
//
// const App = () => {
//   const [currentUser, setCurrentUser] = useState(null);
//
//   const handleMount = async () => {
//     try {
//       const { data } = await axios.get("dj-rest-auth/user/");
//       setCurrentUser(data);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//
//   useEffect(() => {
//     handleMount();
//   }, []);
//
//   return (
//     <CurrentUserContext.Provider value={currentUser}>
//       <SetCurrentUserContext.Provider value={setCurrentUser}>
//         <div className={styles.App}>
//           <NavBar />
//           <Container className={styles.Main}>
//             <Routes>
//               <>
//                 {router.map((route, index) => (
//                   <Route
//                     exact
//                     key={index}
//                     path={route.path}
//                     element={route.element}
//                   />
//                 ))}
//               </>
//             </Routes>
//           </Container>
//         </div>
//       </SetCurrentUserContext.Provider>
//     </CurrentUserContext.Provider>
//   );
// };
//
// export default App;
