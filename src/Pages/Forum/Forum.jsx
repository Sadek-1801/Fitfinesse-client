import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import useAxiosCommon from '../../Hooks/useAxiosCommon';
import useAuth from '../../Hooks/useAuth';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Forum = () => {
    const axiosCommon = useAxiosCommon();
    const queryClient = useQueryClient();
    const navigate = useNavigate()
    const { user } = useAuth();
    const [expandedPosts, setExpandedPosts] = useState({});
    const [page, setPage] = useState(1);
    const limit = 6;

    const { data, isLoading } = useQuery({
        queryKey: ['all-forum-posts', page],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/allForumPosts?page=${page}&limit=${limit}`);
            return data;
        }
    });

    const voteMutation = useMutation({
        mutationFn: async ({ postId, voteType }) => {
            await axiosCommon.post('/vote', { postId, voteType });
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['all-forum-posts', page]);
        }
    });

    const handleVote = (postId, voteType) => {
        if (!user) {
            toast.error('Please log in to vote.');
            navigate("/login")
            return;
        }
        voteMutation.mutate({ postId, voteType });
    };

    const toggleReadMore = (postId) => {
        setExpandedPosts((prev) => ({
            ...prev,
            [postId]: !prev[postId]
        }));
    };
    if (isLoading) return <div>Loading ...........</div>;

    const { total, result: allForumPosts } = data;

    const totalPages = Math.ceil(total / limit);

    return (
        <div className="bg-black text-white p-8">
            <Helmet>
                <title>FitFinesse | Forum</title>
            </Helmet>
            <div className="flex flex-col items-center justify-center mx-auto sm:w-3/5">
                <h1 className="text-3xl text-white font-bold text-center mb-4">Featured Forum Posts</h1>
                <p className="text-center text-gray-300 mb-12">
                    Stay updated with the latest discussions
                </p>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                {allForumPosts.map((post) => (
                    <div key={post._id} className="border border-gray-400 rounded-lg p-6 flex flex-col">
                        <div>
                            <img className="relative z-10 object-cover w-full rounded-md h-96" src={post.postImage} alt="" />
                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 rounded-md shadow bg-gray-900">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-semibold">{post.title}</h3>
                                    <div className="text-gray-400 text-sm">{post.name} - {post.date}</div>
                                </div>
                                <p className="flex-grow mb-4">
                                    {expandedPosts[post._id] ? post.post : `${post.post.slice(0, 200)}...`}
                                </p>
                                <button
                                    onClick={() => toggleReadMore(post._id)}
                                    className="text-blue-500 mb-4"
                                >
                                    {expandedPosts[post._id] ? 'Read Less' : 'Read More'}
                                </button>
                                <div className="flex space-x-4 mt-4">
                                    <button onClick={() => handleVote(post._id, 'up')} className="text-green-500 text-2xl">
                                        <FaThumbsUp />
                                    </button>
                                    <span>Likes: <span>{post.votes || 0}</span></span>
                                    <button onClick={() => handleVote(post._id, 'down')} className="text-red-500 text-2xl">
                                        <FaThumbsDown />
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <button onClick={() => setPage(page => Math.max(page - 1, 1))} disabled={page === 1} className="bg-btn contrast-50 hover:contrast-100 text-white px-4 py-2 rounded-md mr-2">Prev</button>
                <button onClick={() => setPage(page => Math.min(page + 1, totalPages))} disabled={page === totalPages} className="bg-btn contrast-50 hover:contrast-100 text-white px-4 py-2 rounded-md">Next</button>
            </div>
        </div>
    );
};

export default Forum;
