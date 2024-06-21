import toast from "react-hot-toast";
import Select from 'react-select';
import useAuth from "../../../../Hooks/useAuth";
import useFetchClasses from "../../../../Hooks/useFetchClasses";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";

const timeOptions = [
    {
        value: "mor-four",
        label: "Morning: 7am to 11am",
        slots: [
            { slotName: "Slot 7-8", duration: "1 hour", status: "available" },
            { slotName: "Slot 8-9", duration: "1 hour", status: "available" },
            { slotName: "Slot 9-10", duration: "1 hour", status: "available" },
            { slotName: "Slot 10-11", duration: "1 hour", status: "available" }
        ]
    },
    {
        value: "mor-six",
        label: "Morning: 7am to 1pm",
        slots: [
            { slotName: "Slot 7-8", duration: "1 hour", status: "available" },
            { slotName: "Slot 8-9", duration: "1 hour", status: "available" },
            { slotName: "Slot 9-10", duration: "1 hour", status: "available" },
            { slotName: "Slot 10-11", duration: "1 hour", status: "available" },
            { slotName: "Slot 11-12", duration: "1 hour", status: "available" },
            { slotName: "Slot 12-13", duration: "1 hour", status: "available" }
        ]
    },
    {
        value: "eve-four",
        label: "Evening: 4pm to 8pm",
        slots: [
            { slotName: "Slot 16-17", duration: "1 hour", status: "available" },
            { slotName: "Slot 17-18", duration: "1 hour", status: "available" },
            { slotName: "Slot 18-19", duration: "1 hour", status: "available" },
            { slotName: "Slot 19-20", duration: "1 hour", status: "available" }
        ]
    },
    {
        value: "eve-six",
        label: "Evening: 4pm to 10pm",
        slots: [
            { slotName: "Slot 16-17", duration: "1 hour", status: "available" },
            { slotName: "Slot 17-18", duration: "1 hour", status: "available" },
            { slotName: "Slot 18-19", duration: "1 hour", status: "available" },
            { slotName: "Slot 19-20", duration: "1 hour", status: "available" },
            { slotName: "Slot 20-21", duration: "1 hour", status: "available" },
            { slotName: "Slot 21-22", duration: "1 hour", status: "available" }
        ]
    }
];

const AddNewSlot = () => {
    const { user, setLoader } = useAuth();
    const [classes] = useFetchClasses();
    const axiosSecure = useAxiosSecure();
    const { data: trainerData = {}, isLoading } = useQuery({
        queryKey: ['trainerEmail', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure(`/trainer-email/${user?.email}`);
            return data;
        },
        enabled: !!user?.email, 
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        profileImage: "",
        skills: [],
        availableDays: [],
        availableTime: {},
        socialLinks: '',
        experience: '',
        bio: ''
    });

    useEffect(() => {
        if (trainerData) {
            setFormData((prevState) => ({
                ...prevState,
                name: trainerData.name || '',
                email: user?.email || '',
                age: trainerData.age || '',
                profileImage: trainerData?.profileImage || "",
                skills: trainerData.skills || [],
                availableDays: trainerData.availableDays || [],
                availableTime: trainerData.availableTime || {},
                socialLinks: trainerData.socialLinks || '',
                experience: trainerData.experience || '',
                bio: trainerData.bio || ''
            }));
        }
    }, [trainerData, user?.email]);

    const skillsOptions = classes;
    const daysOptions = [
        { value: 'sat', label: 'Saturday' },
        { value: 'sun', label: 'Sunday' },
        { value: 'mon', label: 'Monday' },
        { value: 'tue', label: 'Tuesday' },
        { value: 'wed', label: 'Wednesday' },
        { value: 'thu', label: 'Thursday' }
    ];

    const handleAvaiDays = (selectedOptions) => {
        setFormData({ ...formData, availableDays: selectedOptions });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            skills: checked
                ? [...prevState.skills, name]
                : prevState.skills.filter(skill => skill !== name)
        }));
    };

    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: '#1f2937',
            borderColor: '#E01717',
            color: 'white'
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'white'
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: '#1f2937'
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#E01717' : '#1f2937',
            color: 'white',
            '&:hover': {
                backgroundColor: '#E01717',
            },
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: '#E01717',
            color: 'white'
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: 'white'
        }),
    };

    const handleAvaiTime = (selectedOption) => {
        setFormData({
            ...formData,
            availableTime: selectedOption
        });
    };

    const handleSlotChange = (index, field, value) => {
        setFormData((prevState) => ({
            ...prevState,
            availableTime: {
                ...prevState.availableTime,
                slots: prevState.availableTime.slots.map((slot, slotIndex) => (
                    slotIndex === index ? { ...slot, [field]: value } : slot
                ))
            }
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            const { data } = await axiosSecure.patch(`/update-trainer/${user?.email}`, formData);
            if (data.message === "You've successfully updated your profile.") {
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
            setLoader(false);
        } catch (err) {
            console.log(err?.message);
            toast.error("Failed to apply. Please try again.");
            setLoader(false);
        }
    };

    if (isLoading) return <p>Loading...</p>;

    return (
        <section className="bg-black py-10 min-h-screen flex items-center justify-center">
            <Helmet>
                <title>FitFinesse | Add New Slots</title>
            </Helmet>
            <div className="container mx-auto p-6 bg-gray-900 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-white text-3xl font-bold mb-8 text-center">Become a Trainer</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-white">Name</label>
                        <input
                            type="text"
                            name="name"
                            readOnly
                            value={formData?.name}
                            className="w-full p-2 bg-gray-800 text-white border border-[#E01717] rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-white">Email</label>
                        <input
                            readOnly
                            type="email"
                            name="email"
                            value={formData?.email}
                            className="w-full p-2 bg-gray-800 text-white border border-[#E01717] rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-white">Age</label>
                        <input
                            type="number"
                            name="age"
                            readOnly
                            value={formData?.age}
                            className="w-full p-2 bg-gray-800 text-white border border-[#E01717] rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-white">Profile Image</label>
                        <input
                            type="text"
                            name="profileImage"
                            readOnly
                            value={formData?.profileImage}
                            className="w-full p-2 bg-gray-800 text-white border border-[#E01717] rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-white">Skills</label>
                        <div className="flex flex-wrap">
                            {skillsOptions.map(skill => (
                                <label key={skill} className="block text-white mr-4">
                                    <input
                                        type="checkbox"
                                        name={skill}
                                        checked={formData?.skills.includes(skill)}
                                        onChange={handleCheckboxChange}
                                        className="mr-2"
                                    />
                                    {skill}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-white">Available Days</label>
                        <Select
                            isMulti
                            name="availableDays"
                            options={daysOptions}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            value={formData?.availableDays}
                            onChange={handleAvaiDays}
                            styles={customStyles}
                        />
                    </div>
                    <div>
                        <label className="block text-white">Available Time</label>
                        <Select
                            name="availableTime"
                            options={timeOptions}
                            className="basic-single"
                            classNamePrefix="select"
                            value={formData?.availableTime}
                            onChange={handleAvaiTime}
                            styles={customStyles}
                        />
                    </div>
                    {formData?.availableTime?.slots && formData?.availableTime?.slots.map((slot, index) => (
                        <div key={index} className="mb-4 p-4 bg-gray-700 rounded-lg">
                            <div className="mb-2">
                                <label className="block text-sm font-medium text-gray-300">Slot Name</label>
                                <input
                                    type="text"
                                    value={slot?.slotName}
                                    onChange={(e) => handleSlotChange(index, 'slotName', e.target.value)}
                                    className="w-full p-2 bg-gray-800 text-white border border-[#E01717] rounded"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm font-medium text-gray-300">Duration</label>
                                <input
                                    type="text"
                                    value={slot?.duration}
                                    onChange={(e) => handleSlotChange(index, 'duration', e.target.value)}
                                    className="w-full p-2 bg-gray-800 text-white border border-[#E01717] rounded"
                                />
                            </div>
                        </div>
                    ))}
                    <div>
                        <label className="block text-white">Social Links</label>
                        <input
                            type="text"
                            name="socialLinks"
                            value={formData?.socialLinks}
                            required
                            onChange={(e) => setFormData({ ...formData, socialLinks: e.target.value })}
                            placeholder="e.g., https://instagram.com/yourprofile"
                            className="w-full p-2 bg-gray-800 text-white border border-[#E01717] rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-white">Years of Experience</label>
                        <input
                            type="number"
                            name="experience"
                            value={formData?.experience}
                            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                            className="w-full p-2 bg-gray-800 text-white border border-[#E01717] rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-white">Short Bio</label>
                        <textarea
                            name="bio"
                            value={formData?.bio}
                            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                            rows="4"
                            className="w-full p-2 bg-gray-800 text-white border border-[#E01717] rounded"
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full p-2 bg-[#E01717] text-white font-bold rounded hover:bg-red-600 transition-colors"
                        >
                            Apply
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddNewSlot;
