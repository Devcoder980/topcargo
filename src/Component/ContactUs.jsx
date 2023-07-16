import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { AiFillPlayCircle } from 'react-icons/ai'
import styles from '../style'
const ContactUs = () => {
    return (
        <>
            <div id="main" className={`max-h-screen my-8 ${styles.paddingX} `}>
                <section className={` ${styles.paddingX} pt-8 `}>
                    <div className="container">
                        <div className="flex flex-col  space-y-6">
                            <h1 className="text-3xl font-bold">Contact US</h1>
                            <p className="text-gray-600 md:w-4/6 text-base">
                                TopCargo provides the best transportation service in India. The company is located at Vapi, Gujarat. TopCargo offers daily services that ensure fast and safe delivery for customers. The company also provides affordable transportation fares for every delivery.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={` ${styles.paddingX} `}>
                    <div className="container">
                        <div className="flex flex-wrap justify-between mt-8">
                            <div className="w-full md:w-7/12">
                                <form action="" method="post" role="form" className="php-email-form">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="mb-4">
                                            <input type="text" name="name" className="form-input px-4 py-3  w-full border border-gray-300" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div className="validate"></div>
                                        </div>
                                        <div className="mb-4">
                                            <input name="email" type="email" className="form-input px-4 py-3  w-full border border-gray-300" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <input type="text" name="subject" className="form-input px-4 py-3  w-full border border-gray-300" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                        <div className="validate"></div>
                                    </div>
                                    <textarea name="message" className="form-textarea px-4 py-3  w-full border border-gray-300" cols="45" rows="8" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                    <div className="validate"></div>
                                    <div className="text-center">
                                        <button type="submit" className=" bg-black px-3 py-2 text-white w-auto">Send Message</button>
                                    </div>
                                </form>

                            </div>
                            <div className="w-full md:w-5/12 mt-8 px-8 md:mt-0">
                                <div className="flex flex-col items-start space-y-4">
                                    <div className="flex items-center space-x-4">
                                        {/* <img className="w-6 h-6" src={AiOutlineSend} alt="Plane" /> */}
                                        <AiOutlineSend className="w-6 h-6" />
                                        <h4 className=" text-2xl font-semibold">Say Hello</h4>
                                    </div>
                                    <p className="mb-1 pl-8">Email: <span className="text-blue-500">topcargo.inida@gmail.com</span></p>
                                    <p className="mb-1 pl-8">Phone: <span className="text-blue-500">+91 9586624949</span></p>
                                </div>
                                <div className="flex flex-col items-start space-y-4 mt-6">
                                    <div className="flex items-center space-x-4">
                                        <AiFillPlayCircle className='w-6 h-6'/>
                                        <h4 className="text-lg font-semibold">Find us in</h4>
                                    </div>
                                    <p className="mb-1 pl-8">TopCargo, Balaji Complex,</p>
                                    <p className='pl-8'>Near MahaLakshmi Kata, Vapi - 396195</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ContactUs