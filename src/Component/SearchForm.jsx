import React, { useState } from 'react';
import styles from '../style';

const SearchForm = () => {
    const locations = [
        'Bangalore',
        'Mangalore',
        'Hyderabad',
        'Gurugram',
        'Ghaziabad',
        'Delhi',
        'Chennai',
        'Coimbatore',
        'Shimoga',
    ];
    const truckSizes = ['22 feet', '10 feet'];
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedTruckSize, setSelectedTruckSize] = useState('');

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
    };

    const handleTruckSizeChange = (e) => {
        setSelectedTruckSize(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Add your search functionality here
    };

    return (
        <div className={`bg-black bg-opacity-50 p-8 rounded-md ${styles.paddingX}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 md:mb-12 text-center text-white">
                Search for Available Trucks
            </h1>
            <form onSubmit={handleSearch} className=" md:flex md:items-center md:justify-center">
                <div className="relative flex-grow">
                    <select
                        value={selectedLocation}
                        onChange={handleLocationChange}
                        className="border border-gray-300 px-4 py-3 mt-5 md:mt-0  rounded-md w-full focus:outline-none"
                    >
                        <option value="">Select Location</option>
                        {locations.map((location, index) => (
                            <option key={index} value={location}>
                                {location}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="relative flex-grow md:mx-4">
                    <select
                        value={selectedTruckSize}
                        onChange={handleTruckSizeChange}
                        className="border border-gray-300 my-5 px-4 py-3 rounded-md w-full focus:outline-none"
                    >
                        <option value="">Select Truck Size</option>
                        {truckSizes.map((size, index) => (
                            <option key={index} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-3 rounded-md w-full md:w-auto hover:bg-blue-600"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchForm;
