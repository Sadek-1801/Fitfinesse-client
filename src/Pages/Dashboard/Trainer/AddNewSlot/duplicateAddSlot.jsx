import { useState } from 'react';
import Select from 'react-select';

const timeOptions = [
  {
    "value": "mor-four",
    "label": "Morning: 7am to 11am",
    "slots": [
      { "slotName": "Slot 7-8", "duration": "1 hour", "status": "available" },
      { "slotName": "Slot 8-9", "duration": "1 hour", "status": "available" },
      { "slotName": "Slot 9-10", "duration": "1 hour", "status": "available" },
      { "slotName": "Slot 10-11", "duration": "1 hour", "status": "available" }
    ]
  },
  {
    "value": "mor-six",
    "label": "Morning: 7am to 1pm",
    "slots": [
      { "slotName": "Slot 7-8", "duration": "1 hour", "status": "available" },
      { "slotName": "Slot 8-9", "duration": "1 hour", "status": "available" },
      { "slotName": "Slot 9-10", "duration": "1 hour", "status": "available" },
      { "slotName": "Slot 10-11", "duration": "1 hour", "status": "available" },
      { "slotName": "Slot 11-12", "duration": "1 hour", "status": "available" },
      { "slotName": "Slot 12-13", "duration": "1 hour", "status": "available" }
    ]
  },
  {
    "value": "eve-four",
    "label": "Evening: 4pm to 8pm",
    "slots": [
      { "slotName": "Slot 16-17", "duration": "1 hour", "status": "available" },
      { "slotName": "Slot 17-18", "duration": "1 hour", "status": "available" },
      { "slotName": "Slot 18-19", "duration": "1 hour", "status": "available" },
      { "slotName": "Slot 19-20", "duration": "1 hour", "status": "available" }
    ]
  },
  {
    "value": "eve-six",
    "label": "Evening: 4pm to 10pm",
    "slots": [
      { "slotName": "Slot 16-17", "duration": "1 hour", "status": "available" },
      { "slotName": "Slot 17-18", "duration": "1 hour", "status": "available" },
      { "slotName": "Slot 18-19", "duration": "1 hour", "status": "available" },
      { "slotName": "Slot 19-20", "duration": "1 hour", "status": "available" },
      { "slotName": "Slot 20-21", "duration": "1 hour", "status": "available" },
      { "slotName": "Slot 21-22", "duration": "1 hour", "status": "available" }
    ]
  }
];

const customStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: '#333',
    borderColor: '#555',
    color: 'white',
  }),
  singleValue: (base) => ({
    ...base,
    color: 'white',
  }),
};

const AddClasses = () => {
  const [formData, setFormData] = useState({
    availableTimes: [],
  });

  const handleAvaiTime = (selectedOption) => {
    const selectedSlots = selectedOption.slots.map(slot => ({
      ...slot,
      timeOption: selectedOption.value,
    }));

    setFormData({
      ...formData,
      availableTimes: selectedSlots,
    });
  };

  const handleSlotChange = (index, field, value) => {
    const updatedSlots = formData.availableTimes.map((slot, slotIndex) => (
      slotIndex === index ? { ...slot, [field]: value } : slot
    ));
    setFormData({
      ...formData,
      availableTimes: updatedSlots,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log('Form data:', formData);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6">Add Classes</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-800 p-6 rounded-lg">
        <div className="mb-4">
          <label className="block text-white">Available Time</label>
          <Select
            name="availableTime"
            options={timeOptions}
            className="basic-single"
            classNamePrefix="select"
            onChange={handleAvaiTime}
            styles={customStyles}
            required
          />
        </div>

        {formData.availableTimes.length > 0 && formData.availableTimes.map((slot, index) => (
          <div key={index} className="mb-4 p-4 bg-gray-700 rounded-lg">
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-300">Slot Name</label>
              <input
                type="text"
                value={slot.slotName}
                onChange={(e) => handleSlotChange(index, 'slotName', e.target.value)}
                className="mt-1 p-2 block w-full bg-gray-600 border border-gray-500 rounded-md"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-300">Duration</label>
              <input
                type="text"
                value={slot.duration}
                onChange={(e) => handleSlotChange(index, 'duration', e.target.value)}
                className="mt-1 p-2 block w-full bg-gray-600 border border-gray-500 rounded-md"
              />
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddClasses;
