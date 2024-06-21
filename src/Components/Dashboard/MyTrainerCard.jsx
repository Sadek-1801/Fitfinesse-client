import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import PropTypes from "prop-types"
import StarRating from './StarRating';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const MyTrainerCard = ({ trainer }) => {
    const axiosSecure = useAxiosSecure()
    const [isOpen, setIsOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const submitReview = () => {
        // Handle review submission logic here
        console.log({ name, designation, rating, review });
        const reviewData = { name, designation, review }
        try {
            const { data } = axiosSecure.post("/review", reviewData)
            if (data.meassage === "Review posted successfully") {
                toast.success("Thanks for your valuable feedback")
                closeModal();
            } else {
                toast.error("An error occured during posting your review, Try Again!")
                closeModal();
            }
        } catch (err) {
            console.log(err.message);
            closeModal();
        }
    };

    return (
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">{trainer.trainerName}</h2>
            <p className="mb-2">Classes: {trainer.classes.join(', ')}</p>
            <p className="mb-2">Slots: {trainer.selectedSlot.slotName}</p>
            <button onClick={openModal} className="bg-btn text-white px-4 py-2 rounded mt-2">
                Review
            </button>
            <Transition appear show={isOpen}>
                <Dialog as="div" className="relative z-10 focus:outline-none" onClose={closeModal}>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 transform-[scale(95%)]"
                                enterTo="opacity-100 transform-[scale(100%)]"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 transform-[scale(100%)]"
                                leaveTo="opacity-0 transform-[scale(95%)]"
                            >
                                <DialogPanel className="w-full max-w-md rounded-xl bg-[#343a40] p-6 backdrop-blur-2xl">
                                    <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                                        Submit a Review
                                    </DialogTitle>
                                    <div className="mt-4">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="border p-2 w-full mb-2"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Your Designation"
                                            value={designation}
                                            onChange={(e) => setDesignation(e.target.value)}
                                            className="border p-2 w-full mb-2"
                                        />
                                        <textarea
                                            placeholder="Review"
                                            value={review}
                                            onChange={(e) => setReview(e.target.value)}
                                            className="border p-2 w-full mb-2"
                                        />
                                        <StarRating rating={rating} setRating={setRating} />
                                        <button
                                            onClick={submitReview}
                                            className="bg-btn text-white px-4 py-2 rounded mt-2 w-full"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};
MyTrainerCard.propTypes = {
    trainer: PropTypes.object
};
export default MyTrainerCard;
