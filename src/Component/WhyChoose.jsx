import React from 'react';
import styles from '../style';

const WhyChooseUs = () => {


    return (
        // 
        <div className={`flex  flex-row-reverse items-center justify-between ${styles.paddingX}`}>
            <div className="w-1/3 pr-4">
                <h2 className="text-4xl font-bold mb-4">Why You Should Choose Us?</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos qui necessitatibus mpora incidunt , libero nobis assumenda repellat corrupti labore?</p>
                <button className="my-2  bg-indigo-500   transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                    View More
                </button>
            </div>
            <div className="w-1/3 pl-4">
                <div className="flex flex-col space-y-4">
                    <div>
                        <div className="bg-gray-200 rounded p-4">
                            <span className="tn icon-affordable-price text-gray-700 text-3xl"></span>
                            <h4 className="text-lg font-medium text-gray-800">Affordable Price</h4>
                            <p className="text-gray-600">We offer competitive and affordable pricing for our transportation services.</p>
                        </div>
                        <div className="bg-gray-200 rounded p-4">
                            <span className="tn icon-change-picks text-gray-700 text-3xl"></span>
                            <h4 className="text-lg font-medium text-gray-800">Flexible Pick-ups</h4>
                            <p className="text-gray-600">We provide flexible pick-up options to accommodate your schedule and needs.</p>
                        </div>
                    </div>

                    <div>
                        <div className="bg-gray-200 rounded p-4">
                            <span className="tn icon-high-quality text-gray-700 text-3xl"></span>
                            <h4 className="text-lg font-medium text-gray-800">High Quality</h4>
                            <p className="text-gray-600">We prioritize delivering your goods with the utmost care and quality standards.</p>
                        </div>
                        <div className="bg-gray-200 rounded p-4">
                            <span className="tn icon-wide-verity text-gray-700 text-3xl"></span>
                            <h4 className="text-lg font-medium text-gray-800">Wide Variety</h4>
                            <p className="text-gray-600">We have a wide variety of transportation options to meet your specific requirements.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
