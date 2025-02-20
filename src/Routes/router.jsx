import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Shared/Error/Error";
import SignIn from "../Pages/auth/SignIn";
import SignUp from "../Pages/auth/SignUp";
import AllTask from "../Pages/AllTask/AllTask";
import AddTask from "../Pages/AddTask/AddTask";
import PrivateRouter from "./PrivateRouter";

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
        path: "/alltasks",
        element: (
          <PrivateRouter>
            <AllTask></AllTask>
          </PrivateRouter>
        ),
      },
      {
        path: "/addtask",
        element: (
          <PrivateRouter>
            <AddTask></AddTask>
          </PrivateRouter>
        ),
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
