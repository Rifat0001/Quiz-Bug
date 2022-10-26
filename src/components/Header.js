import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router-dom';
import checked from '../assets/loading.json'

const Header = () => {
    return (
        <header>
            <div className="bg-gray-100 grid grid-cols-1 lg:grid-cols-2">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                    <h1 className="text-xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-800">
                        Quiz Bug
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
                        <span className='text-blue-600'>Welcome to Quiz Bug </span>
                        to challange you an awesome quiz today .
                    </p>
                    <div className="flex flex-wrap justify-center">
                        <Link to="/topics">
                            <button
                                type="button"
                                className="px-8 py-3 m-2 text-lg font-semibold rounded-full  text-gray-900 hover:bg-emerald-500 bg-emerald-300"
                            >
                                Quiz Bug
                            </button>
                        </Link>
                        <Link to="/about">
                            <button
                                type="button"
                                className="px-8 py-3 m-2 text-lg border rounded-full border-emerald-300 text-gray-900"
                            >
                                Read more
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-full h-1/2">
                    <Lottie animationData={checked} loop={true} />
                </div>
            </div>

        </header>
    );
};

export default Header;