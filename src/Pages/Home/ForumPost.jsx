import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";

const ForumPost = () => {
    const axiosCommon = useAxiosCommon();
    const { data: forumPosts = [], isLoading } = useQuery({
        queryKey: ['forum-posts'],
        queryFn: async () => {
            const { data } = await axiosCommon("/forum-posts")
            return data
        }
    })

    if (isLoading) return <div>Loading ...........</div>
    return (
        <>
            <div className="bg-black text-white p-8">
                <div className="flex flex-col items-center justify-center mx-auto sm:w-3/5">
                    <h1 className="text-3xl text-white font-bold text-center mb-4">Featured Forum Posts</h1>
                    <p className="text-center text-gray-300 mb-12">
                        Stay updated with the latest discussions
                    </p>
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                    {forumPosts.map((post) => (
                        <div key={post._id} className="border border-gray-400 rounded-lg p-6 flex flex-col">
                            <div>
                                <img className="relative z-10 object-cover w-full rounded-md h-96" src={post.postImage} alt="" />
                                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 rounded-md shadow bg-gray-900">

                                    <div className="mb-4">
                                        <h3 className="text-2xl font-semibold">{post.title}</h3>
                                        <div className="text-gray-400 text-sm">{post.name} - {post.date}</div>
                                    </div>
                                    <p className="flex-grow mb-4">{post.post.slice(0, 200)}...</p>
                                    <button className="bg-btn opacity-90 text-white px-4 py-2 rounded-md self-start transition-transform transform hover:scale-105">Read More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <section className="bg-black">
            <div className="container px-6 py-10 mx-auto">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold capitalize lg:text-3xl text-white">From the blog</h1>

                    <p className="max-w-lg mx-auto mt-4 text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium
                        quia tempore delect
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
                    <div>
                        <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                    All the features you want to know
                                </a>

                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                                    laudantium quia tempore delect
                                </p>

                                <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
                            </div>
                    </div>
                </div>
            </div>
        </section> */}
        </>
    );
};

export default ForumPost;