import React, { useState } from 'react';
import TourCard from './TourCard'; // Assuming you have a TourCard component

const Gallery = () => {
    const tours = [
        { id: 1, destination: 'Paris', description: 'The city of lights.' },
        { id: 2, destination: 'Tokyo', description: 'Experience the vibrant culture.' },
        { id: 3, destination: 'New York', description: 'The city that never sleeps.' },
    ];

    const [selectedDestination, setSelectedDestination] = useState('');

    const handleSelectChange = (event) => {
        setSelectedDestination(event.target.value);
    };

    const filteredTours = selectedDestination
        ? tours.filter((tour) => tour.destination === selectedDestination)
        : tours;

    return (
        <div>
            <h1>Tour Gallery</h1>
            <label htmlFor="destination-select">Choose a destination: </label>
            <select id="destination-select" onChange={handleSelectChange}>
                <option value="">All Destinations</option>
                {tours.map((tour) => (
                    <option key={tour.id} value={tour.destination}>
                        {tour.destination}
                    </option>
                ))}
            </select>
            <div className="tour-list">
                {filteredTours.map((tour) => (
                    <TourCard key={tour.id} destination={tour.destination} description={tour.description} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;