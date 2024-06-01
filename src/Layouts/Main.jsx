import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

const Main = () => {
    return (
        <div className="bg-black">
            <Nav />
            <Outlet></Outlet>
        </div>
    );
};

export default Main;