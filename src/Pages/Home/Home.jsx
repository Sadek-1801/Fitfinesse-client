import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FeaturedSection from "./FeaturedSection";
import AboutSection from "./AboutSection";
import FeaturedClasses from "./FeaturedClasses";
import Reviews from "./Reviews";
import ForumPost from "./ForumPost";
import Newsletter from "./Newsletter";
import FeaturedTrainers from "./FeaturedTrainers";

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
            <FeaturedTrainers />
        </div>
    );
};

export default Home;