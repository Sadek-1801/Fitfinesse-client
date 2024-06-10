import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Main = () => {
    return (
        <div className="bg-black max-w-screen-2xl mx-auto">
            <Nav />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Main;