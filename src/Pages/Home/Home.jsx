import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FeaturedSection from "./FeaturedSection";
import AboutSection from "./AboutSection";
import FeaturedClasses from "./FeaturedClasses";
import Reviews from "./Reviews";
import ForumPost from "./ForumPost";

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
            <Reviews />
            <ForumPost />
        </div>
    );
};

export default Home;