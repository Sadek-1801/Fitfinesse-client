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
import AllTrainers from "../Pages/Dashboard/Admin/AllTrainers/AllTrainers";
import Balance from "../Pages/Dashboard/Admin/Balance/Balance";
import AddClass from "../Pages/Dashboard/Admin/AddClass/AddClass";
import ManageSlots from "../Pages/Dashboard/Trainer/ManageSlots/ManageSlots";
import AddForum from "../Pages/Dashboard/Shared/AddForum";
import AddNewSlot from "../Pages/Dashboard/Trainer/AddNewSlot/AddNewSlot";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Classes from "../Pages/Classes/Classes";
import Forum from "../Pages/Forum/Forum";
import PrivateRous from "./PrivateRous";
import AppliedTrainer from "../Pages/Dashboard/Admin/AppliedTrainer/AppliedTrainer";
import AdminRouts from "./AdminRouts";
import AppTrainerDetails from "../Pages/Dashboard/Admin/AppliedTrainer/AppTrainerDetails";
import Profile from "../Pages/Dashboard/Shared/Profile";
import TrainerRaout from "./TrainerRaout";
import ActivityLog from "../Pages/Dashboard/Shared/ActivityLog";
import MyTrainer from "../Pages/Dashboard/Shared/MyTrainer";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/classes",
        element: <Classes />
      },
      {
        path: "/forum",
        element: <Forum />
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
        element: <PrivateRous><TrainerBooking /></PrivateRous>
      },
      {
        path: "/payment",
        element: <PrivateRous><Payment /></PrivateRous>,
      },
      {
        path: "/beATrainer",
        element: <PrivateRous><BeATrainer /></PrivateRous>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRous><Dashboard /></PrivateRous>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Profile />
      },
      {
        path: "allSubscriber",
        element: <AdminRouts><AllSubscriber /></AdminRouts>
      },
      {
        path: "allSubscriber",
        element: <AdminRouts><AllSubscriber /></AdminRouts>
      },
      {
        path: "allTrainers",
        element: <AdminRouts><AllTrainers /></AdminRouts>
      },
      {
        path: "appliedTrainer",
        element: <AdminRouts><AppliedTrainer /></AdminRouts>
      },
      {
        path: "/dashboard/appTrainer/:id",
        element: <AdminRouts><AppTrainerDetails /></AdminRouts>
      },
      {
        path: "balance",
        element: <AdminRouts><Balance /></AdminRouts>
      },
      {
        path: "addClass",
        element: <AdminRouts><AddClass /></AdminRouts>
      },
      {
        path: "manageSlots",
        element: <TrainerRaout><ManageSlots /></TrainerRaout>
      },
      {
        path: "addForum",
        element: <AddForum />
      },
      {
        path: "activityLog",
        element: <ActivityLog />
      },
      {
        path: "myTrainer",
        element: <MyTrainer />
      },
      {
        path: "addNewSlot",
        element: <TrainerRaout><AddNewSlot/></TrainerRaout>
      },
      {
        path: "addNewSlot",
        element: <TrainerRaout><AddNewSlot/></TrainerRaout>
      },
    ]
  }
]);