import {
  createBrowserRouter,
} from "react-router-dom";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/register",
    element: <Singup/>
  }
]);
