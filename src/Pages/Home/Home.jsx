import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FeaturedSection from "./FeaturedSection";
import AboutSection from "./AboutSection";
import FeaturedClasses from "./FeaturedClasses";
import Reviews from "./Reviews";
import ForumPost from "./ForumPost";
import Newsletter from "./Newsletter";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>FitFinesse | Home</title>
            </Helmet>
            <Banner />
            <FeaturedSection />
            <AboutSection />
            <FeaturedClasses />
            <Reviews />
            <ForumPost />
            <Newsletter />
        </div>
    );
};

export default Home;