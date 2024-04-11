export const router = [
    {
        path: '/',
        element: <h1>Home</h1>
    },
    {
        path: 'signin',
        element: <h1>SignIn</h1>
    },
    {
        path: 'signout',
        element: <h1>SignUp</h1>
    },
    {
        path: '*',
        element: <h1>Page Not Found</h1>
    }
]