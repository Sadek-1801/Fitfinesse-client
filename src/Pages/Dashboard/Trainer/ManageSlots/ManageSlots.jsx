import { Helmet } from "react-helmet-async";
import useAuth from "../../../../Hooks/useAuth";
import useFetchTrainer from "../../../../Hooks/useFetchTrainer";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ManageSlots = () => {
    const [fetchTrainer, isLoading, refetch] = useFetchTrainer();
    const { loader } = useAuth();
    const axiosSecure = useAxiosSecure()

    const handleDelete = async (slotName) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: `You won't be able to revert this!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            });

            if (result.isConfirmed) {
                const { data } = await axiosSecure.delete(`/slots/${slotName}`);
                if(data.message === 'Slot deleted successfully'){
                    Swal.fire('Deleted!', 'Your slot has been deleted.', 'success');
                    refetch();
                }else{
                    Swal.fire('Error!', 'There was an issue deleting the slot.', 'error');
                }
            }
        } catch (error) {
            Swal.fire('Error!', 'There was an issue deleting the slot.', 'error');
        }
    };

    if (isLoading || loader) return <div><p>Loading......</p></div>;

    return (
        <div className="bg-gray-900 text-white min-h-screen p-6 flex flex-col items-center">
            <Helmet>
                <title>FitFinesse | Manage Slots</title>
            </Helmet>
            <h1 className="text-2xl font-bold mb-6">Manage Slots</h1>
            <div className="w-full max-w-4xl">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-700">
                            <th className="px-4 py-2">Slot Name</th>
                            <th className="px-4 py-2">Duration</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fetchTrainer.availableTime.slots.map((slot, idx) => (
                            <tr key={idx} className="border-b border-gray-700">
                                <td className="px-4 py-2">{slot.slotName}</td>
                                <td className="px-4 py-2">{slot.duration}</td>
                                <td className="px-4 py-2">{slot.status}</td>
                                <td className="px-4 py-2">
                                    <button
                                        onClick={() => handleDelete(slot.slotName)}
                                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageSlots;
