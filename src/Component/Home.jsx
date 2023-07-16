import React, { useState } from 'react';
import img3 from '../assets/img3.jpg';
import SearchForm from './SearchForm';
import { dummyData } from '../data.js';
import Testimonial from './Testimonial';
import styles from '../style';
import Card from './Card';
import WhyChoose from './WhyChoose';
import ClientStates from './ClientStates';
import Login from './Login';
const AutoSlideBackground = () => {
    const images = [img3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const updateImageIndex = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    React.useEffect(() => {
        const interval = setInterval(updateImageIndex, 2000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <div
                className="absolute top-0  left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-500 ease-in-out"
                style={{
                    backgroundImage: `url(${images[currentImageIndex]})`,
                    opacity: '0.8',
                    zIndex: -1,
                }}
            ></div>
            <div className={`relative ${styles.paddingX}`} >
                <div className="h-screen flex justify-center items-center">
                    <SearchForm />
                </div>
                <div className="flex justify-center mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {dummyData.slice(0, 6).map((item) => (
                            <Card key={item.id} item={item} />
                        ))}
                    </div>
                </div>
                <div className=' text-center my-2'>
                    <button class="mx-2 my-2   transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-blue-900 px-8 py-3 text-md hover:bg-blue-500  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2  ">
                        Show More</button>

                </div>
            </div>
            <WhyChoose/>
            <Testimonial />
            <ClientStates />
        
        </>
    );
};

export default AutoSlideBackground
