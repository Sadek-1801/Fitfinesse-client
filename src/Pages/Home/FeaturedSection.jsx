import FeaturedCard from "../../Components/Home/FeaturedCard";

const FeaturedSection = () => {
    const features = [
        {
            title: 'Cardio Workouts',
            description: 'Get your heart pumping with our state-of-the-art cardio equipment and dynamic workout classes designed to boost your endurance and energy levels.',
            icon: 'https://img.icons8.com/ios-filled/50/000000/treadmill.png',
        },
        {
            title: 'Strength Training',
            description: 'Build muscle and increase your strength with our extensive range of free weights, resistance machines, and expert-led strength training programs.',
            icon: 'https://img.icons8.com/ios-filled/50/000000/dumbbell.png',
        },
        {
            title: 'Personal Training',
            description: 'Achieve your fitness goals with personalized workout plans and one-on-one sessions with our certified personal trainers.',
            icon: 'https://img.icons8.com/ios-filled/50/000000/personal-trainer.png',
        },
        {
            title: 'Group Classes',
            description: 'Stay motivated and have fun with a variety of group fitness classes, from high-intensity interval training to relaxing yoga sessions.',
            icon: 'https://img.icons8.com/ios-filled/50/gum-.png',
        },
        {
            title: 'Nutrition Coaching',
            description: 'Complement your workouts with tailored nutrition plans and advice from our expert nutrition coaches to optimize your health and fitness.',
            icon: 'https://img.icons8.com/ios-filled/50/000000/apple.png',
        },
        {
            title: 'Wellness Programs',
            description: 'Enhance your overall well-being with our comprehensive wellness programs, including stress management, mindfulness, and recovery techniques.',
            icon: 'https://img.icons8.com/ios-filled/50/000000/spa.png',
        },
    ];
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col items-center justify-center mx-auto sm:w-3/5">
            <h1 className="text-3xl text-white font-bold text-center mb-4">Discover Our Core Features</h1>
            <p className="text-center text-gray-300 mb-12">
                At FitFinesse, we offer a variety of services designed to help you achieve your fitness goals. Explore our key features and see how we can support your journey to a healthier, fitter you.
            </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <FeaturedCard
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default FeaturedSection;