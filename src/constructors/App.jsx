import NavBar from "../components/templates/NavBar";

import styles from "../styles/App.module.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import SignIn from "../components/pages/auth/SignIn";
import SignUpForm from "../components/pages/auth/SignUpForm";
import NotFound from "../components/pages/NotFound";
import "../api/axiosDefaults";
import PostCreateForm from "../components/pages/posts/PostCreateForm";
import PostPage from "../components/pages/posts/PostPage";
import PostsPage from "../components/pages/posts/PostsPage";
import { useCurrentUser } from "../context/CurrentUserContext";

const App = () => {
  const { currentUser } = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route
            path="/"
            element={
              <PostsPage message="No results found. Adjust the search keyword." />
            }
          />
          <Route
            path="/feed"
            element={
              <PostsPage
                message="No results found. Adjust the search keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            }
          />
          <Route
            path="/liked"
            element={
              <PostsPage
                message="No results found. Adjust the search keyword or like a post"
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/posts/create" element={<PostCreateForm />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
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
