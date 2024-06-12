import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const ActivityLog = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedRejection, setSelectedRejection] = useState('');

    const { data: applications = [], isLoading } = useQuery({
        queryKey: ['applications', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure(`/applications/${user?.email}`);
            return data;
        }
    });

    const openModal = (rejectionMessage) => {
        setSelectedRejection(rejectionMessage);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedRejection('');
    };

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="container mx-auto p-6 bg-gray-900 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-white text-3xl font-bold mb-8 text-center">Activity Log</h2>
            <div className="space-y-4">
                {applications.map((application) => (
                    <div key={application.id} className="bg-gray-800 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <span className="text-white">{application.name}</span>
                            <span className={`text-white ${application.status === 'Rejected' ? 'text-red-500' : 'text-yellow-500'}`}>
                                {application.status}
                            </span>
                            {application.status === 'Rejected' && (
                                <button onClick={() => openModal(application.feedback)}>
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12m-3 0a3 3 0 106 0 3 3 0 00-6 0zm6.828 3.828a4.5 4.5 0 010 6.364M21 21l-4.5-4.5m0 0a4.5 4.5 0 01-6.364 0M3 3l18 18"></path>
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
                        </Transition.Child>

                        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    Rejection Message
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">{selectedRejection}</p>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default ActivityLog;
