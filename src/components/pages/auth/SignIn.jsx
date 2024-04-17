import styles from "../../../styles/SignInUpForm.module.css";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import appStyles from "../../../styles/App.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useSetCurrentUser } from "../../../context/CurrentUserContext";

const SignIn = () => {
  const { setCurrentUser } = useSetCurrentUser();

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignInData({
      ...signInData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      history("/");
    } catch (error) {
      setErrors(error.response?.data);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign in</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label className="d-none">username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group className="mb-3" controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              type="submit"
            >
              Sign in
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert variant="warning" className="mt-3" key={idx}>
                {message}
              </Alert>
            ))}
          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signup">
            Don't have an account? <span>Sign up now!!</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={"https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero2.jpg"}
        />
      </Col>
    </Row>
  );
};

export default SignIn;

// import styles from "../../../styles/SignInUpForm.module.css";
// import {
//   Alert,
//   Button,
//   Col,
//   Container,
//   Form,
//   Image,
//   Row,
// } from "react-bootstrap";
// import appStyles from "../../../styles/App.module.css";
// import btnStyles from "../../../styles/Button.module.css";
// import { Link, useNavigate } from "react-router-dom";
// import { useContext, useState } from "react";
// import axios from "axios";
// import { SetCurrentUserContext } from "../../../constructors/App";
//
// const SignIn = () => {
//   const setCurrentUser = useContext(SetCurrentUserContext);
//
//   const [signInData, setSignInData] = useState({
//     username: "",
//     password: "",
//   });
//
//   const { username, password } = signInData;
//
//   const [errors, setErrors] = useState({});
//
//   const history = useNavigate();
//
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//
//     setSignInData({
//       ...signInData,
//       [name]: value,
//     });
//   };
//
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//
//     try {
//       const { data } = await axios.post("dj-rest-auth/login/", signInData);
//       setCurrentUser(data.user);
//       history("/");
//     } catch (error) {
//       setErrors(error.response?.data);
//     }
//   };
//
//   return (
//     <Row className={styles.Row}>
//       <Col className="my-auto py-2 p-md-2" md={6}>
//         <Container className={`${appStyles.Content} p-4 `}>
//           <h1 className={styles.Header}>sign in</h1>
//
//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3" controlId="username">
//               <Form.Label className="d-none">username</Form.Label>
//               <Form.Control
//                 className={styles.Input}
//                 type="text"
//                 placeholder="Username"
//                 name="username"
//                 value={username}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             {errors.username?.map((message, idx) => (
//               <Alert variant="warning" key={idx}>
//                 {message}
//               </Alert>
//             ))}
//
//             <Form.Group className="mb-3" controlId="password1">
//               <Form.Label className="d-none">Password</Form.Label>
//               <Form.Control
//                 className={styles.Input}
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 value={password}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             {errors.password?.map((message, idx) => (
//               <Alert variant="warning" key={idx}>
//                 {message}
//               </Alert>
//             ))}
//
//             <Button
//               className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
//               type="submit"
//             >
//               Sign up
//             </Button>
//             {errors.non_field_errors?.map((message, idx) => (
//               <Alert variant="warning" key={idx}>
//                 {message}
//               </Alert>
//             ))}
//           </Form>
//         </Container>
//         <Container className={`mt-3 ${appStyles.Content}`}>
//           <Link className={styles.Link} to="/signin">
//             Don't have an account? <span>Sign Up Now</span>
//           </Link>
//         </Container>
//       </Col>
//       <Col
//         md={6}
//         className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
//       >
//         <Image
//           className={`${appStyles.FillerImage}`}
//           src={"https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero2.jpg"}
//         />
//       </Col>
//     </Row>
//   );
// };
//
// export default SignIn;
