import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { TiUserDelete } from "react-icons/ti";
import { Helmet } from "react-helmet-async";

const AllTrainers = () => {
    const axiosSecure = useAxiosSecure()
    const {data:trainers, isLoading, refetch} = useQuery({
        queryKey: ["trainers"],
        queryFn: async() => {
            const {data} = await axiosSecure("/trainers")
            return data
        }
    })

    const handleDelete = (email) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const {data} = await axiosSecure.patch(`/deleteTrainer/${email}`)
                console.log(data);
                if(data.message === "Trainer deleted successfully"){
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success"
                    });
                    refetch()
                }
            }
          });
    }
    if(isLoading) return <p>Loading ...........</p>
    return (
        <div className="overflow-x-auto">
            <Helmet>
                <title>FitFinesse |All Trainers</title>
            </Helmet>
            <div className="flex flex-col items-center justify-center mx-auto sm:w-3/5">
            <h1 className="text-3xl text-white font-bold text-center mb-4">Admin Panel: All Trainers Information</h1>
            </div>
            <table className="min-w-full bg-gray-900 text-white">
                <thead>
                    <tr className="w-full bg-gray-700 text-left">
                        <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">SL No.</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm">Email</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm">Name</th>
                        <th className="py-3 px-4 uppercase font-semibold text-sm">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {trainers.map((item, index) => (
                        <tr key={item._id} className="bg-gray-800 border-b border-gray-700">
                            <td className="py-3 px-4 w-1/5">{index + 1}</td>
                            <td className="py-3 px-4">{item.email}</td>
                            <td className="py-3 px-4">{item.name}</td>
                            <td className="py-3 px-4"><button onClick={() => handleDelete(item.email)}><TiUserDelete /></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllTrainers;