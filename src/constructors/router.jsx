import Home from '../components/pages/Home'
import SignIn from "../components/pages/SignIn";
import SignOut from "../components/pages/SignOut";
import NotFound from "../components/pages/NotFound";

export const router = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/signin',
        element: <SignIn/>
    },
    {
        path: '/signout',
        element: <SignOut/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
]