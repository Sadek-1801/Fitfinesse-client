import { useQuery } from '@tanstack/react-query';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useAuth from '../../../../Hooks/useAuth';
const Balance = () => {
    const axiosSecure = useAxiosSecure()
    const {loader} = useAuth()
    const {data: transaction = [], isLoading} = useQuery({
        queryKey: ['transaction'],
        queryFn: async() => {
            const {data} = await axiosSecure('/transaction')
            return data
        }
    })
    const totalBalance = transaction.reduce((acc, cur) => {
        return acc + cur.price
    }, 0)
    const {data: subscribers = []} = useQuery({
        queryKey: ['subscribers'],
        queryFn: async() => {
            const {data} = await axiosSecure("/subscribers")
            return data
        }
    })
    console.log(transaction);
    const pieData = [
        { name: 'Subscribers', value: subscribers.length },
        { name: 'Paid Members', value: transaction.length },
    ];
    if(isLoading || loader) return <p>Loading ......</p>
    // Colors for the pie chart
    const COLORS = ['#8884d8', '#82ca9d'];
    return (
        <div className="text-white  p-8">
            <div className="container mx-auto">
                <h1 className="text-3xl text-white font-bold text-center mb-4">Admin Panel: Balance & Transaction History</h1>

                {/* Balance Section */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                    <h2 className="text-xl font-semibold mb-4">Total Balance</h2>
                    <p className="text-3xl">${totalBalance}</p>
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
                                {transaction.slice(0, 6).map(item => <tr
                                key={item._id} 
                                className="bg-gray-800">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">${item?.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{item?.userName}</td>
                                </tr>)}
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