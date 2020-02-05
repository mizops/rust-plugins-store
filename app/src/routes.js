import SignUp from './containers/auth/sign-up/sign-up-container';
import SignIn from './containers/auth/sign-in/sign-in-container';

const routes = [
    {
        name: "signUp",
        path: "/auth/sign-up",
        component: SignUp,
        exact: true
    },
    {
        name: "signIn",
        path: "/auth/sign-in",
        component: SignIn,
        exact: true
    }
]

export {routes}