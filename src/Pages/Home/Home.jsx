import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FeaturedSection from "./FeaturedSection";
import AboutSection from "./AboutSection";
import FeaturedClasses from "./FeaturedClasses";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>FitFinesse | Home</title>
            </Helmet>
            <Banner></Banner>
            <FeaturedSection />
            <AboutSection />
            <FeaturedClasses />
        </div>
    );
};

export default Home;