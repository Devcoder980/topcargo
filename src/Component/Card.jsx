import React from 'react';

const Card = ({ item }) => {
    return (
        <div className="block rounded-lg bg-gray-100 shadow-md ">
            <div className="relative overflow-hidden">
                <img className="w-full h-auto rounded-t-lg" src={item.img} alt={item.name} />
                <a href="#!">
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
            </div>
            <div className="p-6 ">
                <h5 className="mb-2 text-2xl font-medium leading-tight  dark:text-neutral-50">{item.name}</h5>
                <p className="mb-2 text-base  ">{item.type}</p>
                <p className="mb-2 text-base  ">Size: {item.size}</p>
                <p className="mb-2 text-base  ">Capacity: {item.capacity} lbs</p>
                <button className="my-2  bg-indigo-500   transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                    Rent this Truck
                </button>
            </div>
        </div>
    );
};

export default Card;
