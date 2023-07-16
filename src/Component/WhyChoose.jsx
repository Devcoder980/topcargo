import React from 'react';
import styles from '../style';

const WhyChooseUs = () => {


    return (
        // 
        <div>

            <h2 className="text-4xl font-bold  text-center my-8 mb-8">Why You Should Choose Us?</h2>
            {/* <hr className='border-1 mb-8' /> */}
            <div className={`sm:flex flex-row-reverse ${styles.paddingX}`}>
                {/* <div className="flex-1 pr-4">

                    <p className="text-lg text-gray-700 mb-6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos qui necessitatibus mpora incidunt , libero nobis assumenda repellat corrupti labore?</p>
                    <button className="my-2  bg-indigo-500   transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                        View More
                    </button>
                </div> */}
                <div className=" flex  flex-1  flex-col items-center justify-centers pl-4 gap-4">
                    <div className='flex justify-start w-[80%]'>
                        <div className=" bg-yellow-400 rounded p-4 w-72  md:relative right-20">
                            <span className="tn icon-affordable-price text-gray-700 text-3xl"></span>
                            <h4 className="text-lg font-medium text-gray-800">Affordable Price</h4>
                            <p className="text-gray-600">We offer competitive and affordable pricing for our transportation services.</p>
                        </div>
                        <div className="bg-gray-200 rounded p-4 w-72  md:relative left-20 ">
                            <span className="tn icon-change-picks text-gray-700 text-3xl"></span>
                            <h4 className="text-lg font-medium text-gray-800">Flexible Pick-ups</h4>
                            <p className="text-gray-600">We provide flexible pick-up options to accommodate your schedule and needs.</p>
                        </div>
                    </div>
                    <div className='flex justify-center w-[100%]'>

                        <div className="bg-green-500 rounded p-4 w-72  md:relative right-20">
                            <span className="tn icon-high-quality text-gray-700 text-3xl"></span>
                            <h4 className="text-lg font-medium text-gray-800">High Quality</h4>
                            <p className="text-gray-600">We prioritize delivering your goods with the utmost care and quality standards.</p>
                        </div>
                        <div className="bg-gray-200 rounded p-4 w-72  md:relative left-20 ">
                            <span className="tn icon-wide-verity text-gray-700 text-3xl"></span>
                            <h4 className="text-lg font-medium text-gray-800">Wide Variety</h4>
                            <p className="text-gray-600">We have a wide variety of transportation options to meet your specific requirements.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default WhyChooseUs;
