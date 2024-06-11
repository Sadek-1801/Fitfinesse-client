
const AppliedTrainer = () => {
    const appliedTrainers = [
        {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'jane@example.com',
        },
        // Add more trainers as needed
      ];
      const handleDetail = (id) => {
        // Implement the logic for showing details of the trainer
        console.log(`Details for trainer ID: ${id}`);
      };
    
      const handleConfirm = (id) => {
        // Implement the logic for confirming the trainer
        console.log(`Confirm trainer ID: ${id}`);
      };
    
      const handleReject = (id) => {
        // Implement the logic for rejecting the trainer
        console.log(`Reject trainer ID: ${id}`);
      };
    return (
        <div className="bg-black text-white p-8 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-8">Applied Trainers</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 text-white rounded-lg">
            <thead>
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appliedTrainers.map((trainer) => (
                <tr key={trainer.id} className="border-b border-gray-700">
                  <td className="py-3 px-4">{trainer.name}</td>
                  <td className="py-3 px-4">{trainer.email}</td>
                  <td className="py-3 px-4 text-center space-x-2">
                    <button
                      onClick={() => handleDetail(trainer.id)}
                      className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                    >
                      Detail
                    </button>
                    <button
                      onClick={() => handleConfirm(trainer.id)}
                      className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => handleReject(trainer.id)}
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
      </div>
    );
};

export default AppliedTrainer;