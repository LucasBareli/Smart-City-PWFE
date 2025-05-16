import React from "react";
import LoginImage from '../assets/Login.png';

function SignUp() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-50">
            <div className="flex w-full h-full bg-white lg:rounded-3xl">
                <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-8 lg:px-20 py-12">
                    <h1 className="text-[48px] league-regular font-semibold !mb-4">
                        Welcome to <span className="text-[#3C096C] league-regular font-semibold">Smart</span> <span className="text-[#17CF96] league-regular font-semibold">City</span>
                    </h1>
                    <p className="text-black text-[20px] font-thin league-regular !mb-8 leading-relaxed max-w-90">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <form className="space-y-6 w-full max-w-md">
                        <div>
                            <label
                                className="block text-black text-[20px] league-regular font-thin !ml-10"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                type="name"
                                className="w-85 !ml-10 px-4 py-3 border border-[#3C096C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3C096C] !mt-2"
                            />
                        </div>
                        <div>
                            <label
                                className="block text-black text-[20px] league-regular font-thin !ml-10"
                                htmlFor="e-mail"
                            >
                                E-mail
                            </label>
                            <input
                                id="e-mail"
                                type="e-mail"
                                className="w-85 !ml-10 px-4 py-3 border border-[#3C096C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3C096C] !mt-2"
                            />
                        </div>
                        <div>
                            <label
                                className="block text-black text-[20px] league-regular font-thin !ml-10"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                className="w-85 !ml-10 px-4 py-3 border border-[#3C096C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3C096C] !mt-2"
                            />
                        </div>
                        <div>
                            <label
                                className="block text-black text-[20px] league-regular font-thin !ml-10"
                                htmlFor="confirm_password"
                            >
                                Confirm Password
                            </label>
                            <input
                                id="confirm_password"
                                type="confirm_password"
                                className="w-85 !ml-10 px-4 py-3 border border-[#3C096C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3C096C] !mt-2"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-85 !mt-5 bg-[#17CF96] league-regular block text-white text-[24px] font-semibold py-3 rounded-lg hover:bg-[#13B983] hover:cursor-pointer transition !ml-10"
                        >
                            Sign up
                        </button>
                    </form>

                    <p className="!mt-6 text-[20px] league-regular text-center text-black font-thin">
                        Do you have an account?{' '}
                        <a href="/" className="text-[#3C096C] text-[20px] league-regular hover:underline">
                            Sign In
                        </a>
                    </p>
                </div>

                <div className="hidden !m-7 lg:block w-1/2 relative">
                    <img
                        src={LoginImage}
                        alt="City View"
                        className="w-full h-225 object-cover rounded-3xl"
                    />
                </div>
            </div>
        </div>
    );
}

export default SignUp;
