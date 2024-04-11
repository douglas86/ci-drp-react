import Home from '../components/pages/Home'
import SignIn from "../components/pages/SignIn";
import SignOut from "../components/pages/SignOut";
import NotFound from "../components/pages/NotFound";

export const router = [
    {
        path: '/',
        title: 'Home',
        element: <Home/>,
        fontawesomeIcon: 'fa-home',
    },
    {
        path: '/signin',
        title: 'Sign In',
        element: <SignIn/>,
        fontawesomeIcon: 'fa-sign-in-alt',
    },
    {
        path: '/signout',
        title: 'Sign Out',
        element: <SignOut/>,
        fontawesomeIcon: 'fa-user-plus',
    },
    {
        path: '*',
        title: 'None',
        element: <NotFound/>,
        fontawesomeIcon: '',
    }
]