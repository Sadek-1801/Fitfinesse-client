import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

const Main = () => {
    return (
        <div className="bg-black max-w-screen-2xl mx-auto">
            <Nav />
            <Outlet></Outlet>
        </div>
    );
};

export default Main;