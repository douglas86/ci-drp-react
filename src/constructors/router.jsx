import Home from "../components/pages/Home";
import SignIn from "../components/pages/SignIn";
import NotFound from "../components/pages/NotFound";
import SignUpForm from "../components/pages/auth/SignUpForm";

export const router = [
  {
    path: "/",
    title: "Home",
    element: <Home />,
    fontawesomeIcon: "fa-home",
  },
  {
    path: "/signin",
    title: "Sign In",
    element: <SignIn />,
    fontawesomeIcon: "fa-sign-in-alt",
  },
  {
    path: "/signup",
    title: "Sign Up",
    element: <SignUpForm />,
    fontawesomeIcon: "fa-user-plus",
  },
  {
    path: "*",
    title: "None",
    element: <NotFound />,
    fontawesomeIcon: "",
  },
];
