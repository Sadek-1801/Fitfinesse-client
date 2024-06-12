import { useContext, useState } from "react";
import { TrainerBookingContext } from "../../Providers/TrainerBookingProvider";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Payment = () => {
    const { trainer } = useContext(TrainerBookingContext)
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const userInfo = {
        userName: user?.displayName,
        userEmail: user?.email
    }
    const [formData] = useState({ ...trainer, ...userInfo })
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Confirm it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const {data} = await axiosSecure.post("/trainer-booking", formData)
                
                if(data.insertedId){
                    Swal.fire({
                      title: "Booking Confirmed!",
                      text: `You've successfully booked${formData.trainerName} `,
                      icon: "success"
                    });
                }
            }
          });
        // You can handle further submission logic here
    };
    if (trainer === null) {
        return (<div className="min-h-screen flex items-center justify-center">
            <div>
                <p>There is No Data Found! To Book a Trainer, Return to Trainers Page</p>
                <Link to={"trainers"}>Click Me</Link>
            </div>
        </div>)
    }
    return (
        <div className="min-h-screen bg-black text-white flex justify-center items-center">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Trainer Information</h2>
                <div className="mb-4">
                    <label className="block mb-2">Trainer Name</label>
                    <input type="text" value={formData.trainerName} readOnly className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Slot Name</label>
                    <input type="text" value={formData.selectedSlot.slotName} readOnly className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Package Name</label>
                    <input type="text" value={formData.packageName} readOnly className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Price</label>
                    <input type="text" value={`$${formData.price}`} readOnly className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Classes</label>
                    {/* <input type="text" value={formData.classes} readOnly className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" /> */}
                    <ul className="list-disc pl-5 text-gray-300">
                       {formData.classes.map((cls, idx) => <li key={idx}>
                        {cls}
                       </li> )}
                    </ul>
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Session</label>
                    <input type="text" value={formData.session} readOnly className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" />
                </div>

                <h2 className="text-2xl font-bold mb-4">User Information</h2>
                <div className="mb-4">
                    <label className="block mb-2">User Name</label>
                    <input type="text" value={formData.userName} readOnly className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">User Email</label>
                    <input type="email" value={formData.userEmail} readOnly className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" />
                </div>

                <button type="submit" className="w-full py-2 bg-red-600 hover:bg-red-500 rounded-lg text-white font-bold">
                    Confirm Payment
                </button>
            </form>
        </div>
    );
};

export default Payment;