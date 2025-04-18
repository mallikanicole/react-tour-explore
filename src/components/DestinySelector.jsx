import React, { useState } from 'react';

const DestinySelector = ({ tours, onDestinationChange }) => {
    const [selectedDestination, setSelectedDestination] = useState('');

    const handleChange = (event) => {
        const destination = event.target.value;
        setSelectedDestination(destination);
        onDestinationChange(destination); // Pass the selected destination up to App.jsx
    };

    // Extract unique tour names
    const uniqueTours = [...new Set(tours.map((tour) => tour.name))];

    return (
        <div>
            <label htmlFor="destiny-selector">Select a Destination: </label>
            <select
                id="destiny-selector"
                value={selectedDestination}
                onChange={handleChange}
            >
                <option value="">-- Choose a Destination --</option>
                {uniqueTours.map((tour, index) => (
                    <option key={index} value={tour}>
                        {tour}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DestinySelector;