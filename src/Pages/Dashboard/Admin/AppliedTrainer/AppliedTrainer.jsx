import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

const AppliedTrainer = () => {
  const axiosSecure = useAxiosSecure();
  const { data: appliedTrainers = [], isLoading, refetch } = useQuery({
    queryKey: ["appliedTrainer"],
    queryFn: async () => {
      const { data } = await axiosSecure("/appliedTrainers");
      return data;
    },
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleDetail = async (id) => {
    // Implement the logic for showing details of the trainer
    console.log(`Details for trainer ID: ${id}`);
    const { data } = await axiosSecure(`/appTrainer/${id}`);
    console.log(data);
  };

  const handleConfirm = (trainer) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Him a Trainer!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosSecure.patch(`/user/update/${trainer?.email}`);
        if (data.message === "User has been verified and promoted to trainer.") {
          Swal.fire({
            title: "Confirmed!",
            text: `${trainer?.name} is Successfully Appointed as Trainer`,
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  const handleReject = (trainer) => {
    setSelectedTrainer(trainer);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedTrainer(null);
    setFeedback("");
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleRejectSubmit = async () => {
    if (selectedTrainer) {
      // Implement the logic to reject the trainer and provide feedback
      await axiosSecure.delete(`/rejected/${selectedTrainer._id}`, { data: { feedback } });
      refetch();
      handleModalClose();
    }
  };

  if (isLoading) return <p>Loading ...</p>;

  return (
    <div className="bg-black text-white p-8 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Applied Trainers</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 text-white rounded-lg">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appliedTrainers.map((trainer) => (
              <tr key={trainer._id} className="border-b border-gray-700">
                <td className="py-3 px-4">{trainer.name}</td>
                <td className="py-3 px-4">{trainer.email}</td>
                <td className="py-3 px-4 text-center space-x-2">
                  <Link
                    to={`/dashboard/appTrainer/${trainer._id}`}
                    onClick={() => handleDetail(trainer._id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                  >
                    Detail
                  </Link>
                  <button
                    onClick={() => handleConfirm(trainer)}
                    className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => handleReject(trainer)}
                    className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={isModalOpen} onClose={handleModalClose} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-md rounded bg-white p-4">
            <Dialog.Title className="text-lg font-bold">Reject {selectedTrainer?.name}</Dialog.Title>
            <div className="mt-2">
              <img src={selectedTrainer?.profileImage} alt={selectedTrainer?.name} className="w-full h-48 object-cover rounded" />
              <p className="mt-2"><strong>Email:</strong> {selectedTrainer?.email}</p>
              <p className="mt-2"><strong>Age:</strong> {selectedTrainer?.age}</p>
              <p className="mt-2"><strong>Experience:</strong> {selectedTrainer?.experience} years</p>
              <p className="mt-2"><strong>Skills:</strong> {selectedTrainer?.skills.join(', ')}</p>
              <p className="mt-2"><strong>Bio:</strong> {selectedTrainer?.bio}</p>
            </div>
            <div className="mt-4">
              <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">Rejection Feedback</label>
              <textarea
                id="feedback"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                rows={3}
                value={feedback}
                onChange={handleFeedbackChange}
              />
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button onClick={handleModalClose} className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded">Cancel</button>
              <button onClick={handleRejectSubmit} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">Reject</button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default AppliedTrainer;
