import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

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
                if(data.modifiedCount > 0){
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
            <div className="flex flex-col items-center justify-center mx-auto sm:w-3/5">
            <h1 className="text-3xl text-white font-bold text-center mb-4">Admin Panel: All Subscribers Information</h1>
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
                            <td className="py-3 px-4"><button onClick={() => handleDelete(item.email)}><AiOutlineDelete /></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllTrainers;