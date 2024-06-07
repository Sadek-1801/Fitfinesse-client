import { PieChart, Pie, Cell, Tooltip } from 'recharts';
const Balance = () => {

    const pieData = [
        { name: 'Subscribers', value: 400 },
        { name: 'Paid Members', value: 300 },
    ];

    // Colors for the pie chart
    const COLORS = ['#8884d8', '#82ca9d'];
    return (
        <div className="text-white  p-8">
            <div className="container mx-auto">
                <h1 className="text-3xl text-white font-bold text-center mb-4">Admin Panel: Balance & Transaction History</h1>

                {/* Balance Section */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                    <h2 className="text-xl font-semibold mb-4">Total Balance</h2>
                    <p className="text-3xl">$12,345.67</p>
                </div>

                {/* History Section */}
                <div className='flex flex-col lg:flex-row gap-4'>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8 lg:w-1/3">
                        <h2 className="text-xl font-semibold mb-4">Last 6 Transactions</h2>
                        <table className="min-w-full divide-y divide-gray-700">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Paid By</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-800">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">-$500</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">John Doe</td>
                                </tr>
                                <tr className="bg-gray-800">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">+$1000</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Jane Smith</td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>

                    {/* Bar Chart Section */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg lg:w-2/3">
                        <h2 className="text-xl font-semibold mb-4">Subscribers vs Paid Members</h2>
                        <div className="w-full h-64 flex justify-center items-center">
                            <PieChart width={400} height={400}>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Balance;