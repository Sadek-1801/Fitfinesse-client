import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import useAuth from '../../../Hooks/useAuth';
import toast from 'react-hot-toast';

const Profile = () => {
    const { user, updateUserProfile } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: user.name,
        profileURL: user.profileURL,
    });

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdate = async(e) => {
        e.preventDefault();
        try{
            await updateUserProfile(formData.name, formData.photo)
            toast.success("You've Succefully Logged In")
        }catch(err) {
            toast.error(err?.message)
        }
        handleCloseModal();
    };
    console.log(user);
    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="container mx-auto p-6 bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
                <div className="text-center">
                    <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-24 h-24 rounded-full mx-auto mb-4"
                    />
                    <h2 className="text-white text-3xl font-bold mb-2">{user.name}</h2>
                    <p className="text-gray-400 mb-4">{user.email}</p>
                    <p className="text-gray-400 mb-4">Last login: {user.metadata?.lastLoginAt}</p>
                    <button
                        onClick={handleOpenModal}
                        className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition-colors"
                    >
                        Update Profile
                    </button>
                </div>
            </div>

            <Transition appear show={isModalOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-lg bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl font-bold leading-6 text-white mb-4"
                                    >
                                        Update Profile
                                    </Dialog.Title>
                                    <form onSubmit={handleUpdate} className="space-y-4">
                                        <div>
                                            <label className="block text-white">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full p-2 bg-gray-800 text-white border border-red-600 rounded"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white">Profile URL</label>
                                            <input
                                                type="text"
                                                name="profileURL"
                                                value={formData.profileURL}
                                                onChange={handleInputChange}
                                                className="w-full p-2 bg-gray-800 text-white border border-red-600 rounded"
                                            />
                                        </div>
                                        <div className="flex justify-end">
                                            <button
                                                type="button"
                                                onClick={handleCloseModal}
                                                className="bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 transition-colors mr-2"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition-colors"
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default Profile;
