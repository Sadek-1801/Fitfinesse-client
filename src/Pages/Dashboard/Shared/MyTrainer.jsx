import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import MyTrainerCard from "../../../Components/Dashboard/MyTrainerCard";
const MyTrainer = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { data: myTrainer = [], isLoading } = useQuery({
        queryKey: ['myTrainer', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure(`/myTrainer/${user?.email}`)
            return data
        }
    })
    if (isLoading) return <p>Loading......</p>
    return (
        <div className="p-4">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white">My Trainers</h1>
                <p className="text-xl text-gray-400">Meet the trainers who guide you towards your goals</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {myTrainer.map((trainer) => (
                    <MyTrainerCard key={trainer._id} trainer={trainer} />
                ))}
            </div>
        </div>
    );
};

export default MyTrainer;