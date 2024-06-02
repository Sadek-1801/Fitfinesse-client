import toast from "react-hot-toast";
import useAxiosCommon from "../../Hooks/useAxiosCommon";

const Newsletter = () => {
    const axiosCommon = useAxiosCommon()
    const imageUrl = 'https://i.ibb.co/nCpbmF9/3d-gym-equipment.jpg'
    const handleNewsletter = async(e) => {
        e.preventDefault()
        const form = e.target;
        let name = form.name.value;
        let email = form.email.value;
        const subScriber = {name, email}
        try{
            const {data} = await axiosCommon.post("/subscriber", subScriber)
            if(data.insertedId){
                toast.success("You've Successfully Subscribed to Our Newsletter")
                form.reset()
            }
        }catch(err){
            console.log(err?.message);
        }
    }
    return (
        <section className="bg-black text-white md:my-10 max-w-4xl mx-auto rounded-lg shadow-lg bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageUrl})`, 
        backgroundCover: 'cover', 
        backgroundPosition: 'center' }}>
            <div className="my-10 container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row bg-gray-900/40 py-6">
                <div className="flex-1 flex flex-col justify-center space-y-4 text-center lg:text-left">
                    <h1 className="text-5xl font-bold leading-none">Stay in the loop</h1>
                    <p className="text-lg">Fuel your fitness journey with our informative and inspiring newsletter. Get access to exclusive workouts, healthy recipes, and motivational tips delivered straight to your inbox.</p>
                </div>
                <form onSubmit={handleNewsletter} className="flex-1 flex flex-col shadow-md gap-3">
                    <div>
                        <label className="text-gray-200" htmlFor="username">Username</label>
                        <input id="username" type="text" name="name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-red-600 focus:ring-red-400 focus:ring-opacity-40 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-200 " htmlFor="emailAddress">Email Address</label>
                        <input id="emailAddress" type="email" name="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-red-600 focus:ring-red-400 focus:ring-opacity-40  focus:outline-none focus:ring" />
                    </div>
                    <div className="flex flex-row w-full mt-6">
                        <button type="submit" className="w-full p-3 font-semibold rounded-lg bg-btn text-gray-50">Subscribe</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;