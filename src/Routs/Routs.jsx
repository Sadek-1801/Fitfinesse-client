import {
    createBrowserRouter
  } from "react-router-dom";
  
import Main from "../Layouts/Main";
import SignIn from "../Pages/Registration/SignIn";
import SignUp from "../Pages/Registration/SignUp";
import Home from "../Pages/Home/Home";
import BeATrainer from "../Pages/BecomeATrainer/BeATrainer";
import Trainers from "../Pages/Trainers/Trainers";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/login",
          element: <SignIn />
        }, 
        {
          path: "/signup",
          element: <SignUp />
        },
        {
          path: "/trainers", 
          element: <Trainers />
        },
        {
          path: "/beATrainer",
          element: <BeATrainer />
        }
      ]
    },
  ]);