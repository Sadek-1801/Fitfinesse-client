import { useState } from "react";
import useFetchClasses from "../../Hooks/useFetchClasses";
import Select from 'react-select'
import { uploadImage } from "../../Components/Utility/uploadImage";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const BeATrainer = () => {
    // const [classes, setClasses] = useState([])
    const { user, setLoader } = useAuth()
    const [classes] = useFetchClasses() // isLoading
    const axiosSecure = useAxiosSecure()


    const [formData, setFormData] = useState({
        name: '',
        email: "",
        age: '',
        profileImage: null,
        skills: [],
        availableDays: [],
        availableTime: '',
        socialLinks: '',
        experience: '',
        bio: ''
    });

    const skillsOptions = classes;
    const daysOptions = [
        { value: 'sat', label: 'Saturday' },
        { value: 'sun', label: 'Sunday' },
        { value: 'mon', label: 'Monday' },
        { value: 'tue', label: 'Tuesday' },
        { value: 'wed', label: 'Wednesday' },
        { value: 'thu', label: 'Thirsday' }
    ]
    const timeOptions = [
        {
            "value": "mor-four",
            "label": "Morning: 7am to 11am",
            "slots": [
                {
                    "slotName": "Slot 7-8",
                    "duration": "1 hour",
                    "status": "available"
                },
                {
                    "slotName": "Slot 8-9",
                    "duration": "1 hour",
                    "status": "available"
                },
                {
                    "slotName": "Slot 9-10",
                    "duration": "1 hour",
                    "status": "available"
                },
                {
                    "slotName": "Slot 10-11",
                    "duration": "1 hour",
                    "status": "available"
                }
            ]
        },
        {
            "value": "mor-six",
            "label": "Morning: 7am to 1pm",
            "slots": [
                {
                    "slotName": "Slot 7-8",
                    "duration": "1 hour",
                    "status": "available"
                },
                {
                    "slotName": "Slot 8-9",
                    "duration": "1 hour",
                    "status": "available"
                },
                {
                    "slotName": "Slot 9-10",
                    "duration": "1 hour",
                    "status": "available"
                },
                {
                    "slotName": "Slot 10-11",
                    "duration": "1 hour",
                    "status": "available"
                },
                {
                    "slotName": "Slot 11-12",
                    "duration": "1 hour",
                    "status": "available"
                },
                {
                    "slotName": "Slot 12-13",
                    "duration": "1 hour",
                    "status": "available"
                }
            ]
        },
        {
            "value": "eve-four",
            "label": "Evening: 4pm to 8pm",
            "slots": [
                {
                    "slotName": "Slot 16-17",
                    "duration": "1 hour",
                    "status": "available"
                },
                {
                    "slotName": "Slot 17-18",
                    "duration": "1 hour",
                    "status": "available"
                },
                {
                    "slotName": "Slot 18-19",
                    "duration": "1 hour",
                    "status": "available"
                },
                {
                    "slotName": "Slot 19-20",
                    "duration": "1 hour",
                    "status": "available"
                }
            ]
        },
        {
            "value": "eve-six",
            "label": "Evening: 4pm to 10pm",
            "slots": [
                {
                    "slotName": "Slot 16-17",
                    "duration": "1 hour",
                    "status": "available"
                },
                {
                    "slotName": "Slot 17-18",
                    "duration": "1 hour",
                    "status": "available"
                },
                {
                    "slotName": "Slot 18-19",
                    "duration": "1 hour",
                    "status": "available"
                },
                {
                    "slotName": "Slot 19-20",
                    "duration": "1 hour",
                    "status": "available"
                },
                {
                    "slotName": "Slot 20-21",
                    "duration": "1 hour",
                    "status": "available"
                },
                {
                    "slotName": "Slot 21-22",
                    "duration": "1 hour",
                    "status": "available"
                }
            ]
        }
    ]

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAvaiDays = (selectedOptions) => {
        setFormData({ ...formData, availableDays: selectedOptions });
    };
    const handleAvaiTime = (selectedOption) => {
        setFormData({ ...formData, availableTime: selectedOption });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        if (checked) {
            setFormData({ ...formData, skills: [...formData.skills, name] });
        } else {
            setFormData({ ...formData, skills: formData.skills.filter(skill => skill !== name) });
        }
    };
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: '#1F2937', // Tailwind bg-gray-800
            borderColor: state.isFocused ? '#E01717' : '#E01717', // Tailwind border color
            color: 'white',
            '&:hover': {
                borderColor: '#E01717'
            },
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'white'
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: '#1F2937' // Tailwind bg-gray-800
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#374151' : '#1F2937', // Tailwind bg-gray-700 and bg-gray-800
            color: 'white',
            '&:hover': {
                backgroundColor: '#374151' // Tailwind bg-gray-700
            },
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: '#374151', // Tailwind bg-gray-700
            color: 'white'
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: 'white'
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: 'white',
            '&:hover': {
                backgroundColor: '#E01717',
                color: 'white'
            }
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const profileImageURL = await uploadImage(formData.profileImage)
        const trainerData = {
            ...formData,
            profileImage: profileImageURL,
            email: user?.email
        }

        try {
            const { data } = await axiosSecure.post("/beATrainer", trainerData);
            if (data.message === "You've successfully applied! Wait for admin confirmation.") {
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
    return (
        <section className="bg-black py-10 min-h-screen flex items-center justify-center">
            <div className="container mx-auto p-6 bg-gray-900 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-white text-3xl font-bold mb-8 text-center">Become a Trainer</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-white">Name</label>
                        <input
                            type="text"
                            name="name"
                            // readOnly
                            // defaultValue={user?.displayName}
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-800 text-white border border-[#E01717] rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-white">Email</label>
                        <input
                            readOnly
                            defaultValue={user?.email}
                            type="email"
                            name="email"
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-800 text-white border border-[#E01717] rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-white">Age</label>
                        <input
                            type="number"
                            name="age"
                            required
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-800 text-white border border-[#E01717] rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-white">Profile Image</label>
                        <input
                            type="file"
                            name="profileImage"
                            required
                            onChange={(e) => setFormData({ ...formData, profileImage: e.target.files[0] })}
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
                                        checked={formData.skills.includes(skill)}
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
                        {/* <select
                            name="availableDays"
                            value={formData.availableDays}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-800 text-white border border-[#E01717] rounded"
                        >
                            {daysOptions.map(day => (
                                <option key={day} value={day}>{day}</option>
                            ))}
                        </select> */}
                        <Select isMulti
                            name="availableDays"
                            options={daysOptions}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            value={formData.availableDays}
                            onChange={handleAvaiDays}
                            styles={customStyles}
                            required />
                    </div>
                    <div>
                        <label className="block text-white">Available Time</label>
                        <Select
                            name="availableTime"
                            options={timeOptions}
                            className="basic-single"
                            classNamePrefix="select"
                            value={formData.availableTime}
                            onChange={handleAvaiTime}
                            styles={customStyles}
                            required />
                    </div>
                    <div>
                        <label className="block text-white">Social Links</label>
                        <input
                            type="text"
                            name="socialLinks"
                            required
                            value={formData.socialLinks}
                            onChange={handleChange}
                            placeholder="e.g., https://instagram.com/yourprofile"
                            className="w-full p-2 bg-gray-800 text-white border border-[#E01717] rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-white">Years of Experience</label>
                        <input
                            type="number"
                            name="experience"
                            required
                            value={formData.experience}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-800 text-white border border-[#E01717] rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-white">Short Bio</label>
                        <textarea
                            name="bio"
                            value={formData.bio}
                            required
                            onChange={handleChange}
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

export default BeATrainer;