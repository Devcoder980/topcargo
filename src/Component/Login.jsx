import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform validation
        if (!email || !password) {
            setError('Please enter your email and password.');
            return;
        }

        // Call API for verification or any other necessary actions
        // Replace this with your API call logic

        // Simulating API call delay
        setTimeout(() => {
            // Redirect to user dashboard if successful
            history('/dashboard');
        }, 1000);
    };

    return (
        <>
            <div className="bg-gradient-to-r from-blue-200 via-violet-600 to-cyan-200 h-[100vh] flex justify-center items-center px-6 py-12 lg:px-8">
                <div className="backdrop-blur-3xl border-white border-1 bg-transparent w-[550px] p-6 rounded-md">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h1
                            className="mx-auto text-center text-4xl font-bold h-10 w-auto"
                        >TopCargo</h1>
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-white hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>

                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                        type="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                </div>
                            </div>

                            {error && <p className="text-red-500">{error}</p>}

                            <div>
                                <button
                                    className="mt-6 block w-full select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="submit"
                                    data-ripple-light="true"
                                >
                                    Sign In
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-white">
                            Not a member?{' '}
                            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-white">
                                Start a 14 day free trial
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">


                <div className="flex shadow-md">

                    <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{width:"24rem",height:"32rem"}}>
                        <div className="w-72">

                            <h1 className="text-xl font-semibold">Welcome back</h1>
                            <small className="text-gray-400">Welcome back! Please enter your details</small>

                            <form className="mt-4">
                                <div className="mb-3">
                                    <label className="mb-2 block text-xs font-semibold">Email</label>
                                    <input type="email" placeholder="Enter your email" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                                </div>

                                <div className="mb-3">
                                    <label className="mb-2 block text-xs font-semibold">Password</label>
                                    <input type="password" placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                                </div>

                                <div className="mb-3 flex flex-wrap content-center">
                                    <input id="remember" type="checkbox" className="mr-1 checked:bg-purple-700" /> <label for="remember" className="mr-auto text-xs font-semibold">Remember for 30 days</label>
                                    <a href="#" className="text-xs font-semibold text-purple-700">Forgot password?</a>
                                </div>

                                <div className="mb-3">
                                    <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">Sign in</button>
                                    <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                                        <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" />
                                        Sign in with Google
                                    </button>
                                </div>
                            </form>


                            <div className="text-center">
                                <span className="text-xs text-gray-400 font-semibold">Don't have account?</span>
                                <a href="#" className="text-xs font-semibold text-purple-700">Sign up</a>
                            </div>
                        </div>
                    </div>


                    <div className="flex-wrap content-center justify-center rounded-r-md hidden lg:flex" style={{width: "24rem", height: "32rem"}}>
                        <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src="https://i.imgur.com/9l1A4OS.jpeg" />
                    </div>

                </div>

            </div> */}
        </>
    );
};

export default Login;
