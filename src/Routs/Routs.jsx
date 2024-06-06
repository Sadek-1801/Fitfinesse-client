import {
  createBrowserRouter
} from "react-router-dom";

import Main from "../Layouts/Main";
import SignIn from "../Pages/Registration/SignIn";
import SignUp from "../Pages/Registration/SignUp";
import Home from "../Pages/Home/Home";
import BeATrainer from "../Pages/BecomeATrainer/BeATrainer";
import Trainers from "../Pages/Trainers/Trainers";
import TrainerDetails from "../Pages/TrainerDetails/TrainerDetails";
import TrainerBooking from "../Pages/TrainerBooking/TrainerBooking";
import Payment from "../Pages/Payment/Payment";
import Dashboard from "../Layouts/Dashboard";
import AllSubscriber from "../Pages/Dashboard/Admin/AllSubscriber/AllSubscriber";

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
        path: "/trainer/:id",
        element: <TrainerDetails />,
      },
      {
        path: "/trainerBooking",
        element: <TrainerBooking />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/beATrainer",
        element: <BeATrainer />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element: <AllSubscriber />
      }
    ]
  }
]);