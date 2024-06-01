import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FeaturedSection from "./FeaturedSection";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>FitFinesse | Home</title>
            </Helmet>
            <Banner></Banner>
            <FeaturedSection />
        </div>
    );
};

export default Home;