import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Shared/Error/Error";
import SignIn from "../Pages/auth/SignIn";
import SignUp from "../Pages/auth/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/auth/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/auth/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
  
]);
