import React from "react";
import Mange from '../assets/Mange.png';
import Footer from "../components/Footer";
import CityFooter from '../assets/CityFooter.png';

function Home() {
    return (
        <>
            <div>
                {/* Navbar */}
                <header className="absolute top-0 w-full z-10">
                    <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                        <div>
                            <h3 className="text-[64px] font-regular text-white">
                                SMART <span className="text-[#17CF96]">CITY</span>
                            </h3>
                        </div>
                        <ul className="flex space-x-8 text-[36px] ledger-regular text-white gap-8">
                            <li className="cursor-pointer hover:text-[#17CF96]">HOME</li>
                            <li className="cursor-pointer hover:text-[#17CF96]">SENSORS</li>
                            <li className="cursor-pointer hover:text-[#17CF96]">DATA</li>
                        </ul>
                        <button className="bg-[#17CF96] text-[36px] text-white rounded-full shadow-lg hover:bg-[#14b380] cursor-pointer">
                            Sign up
                        </button>
                    </nav>
                </header>

                {/* Hero Section */}
                <section className="relative h-screen">
                    <img
                        src={Mange}
                        alt="Senai"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-opacity-40 flex flex-col items-start justify-end text-[#E4E4E4] px-12 pb-12">
                        <h1 className="text-[250px] font-bold leading-none tracking-wide">
                            SMART CITY
                        </h1>
                        <p className="mt-4 text-[32px] max-w-2xl text-left ledger-regular">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </p>
                        <button className="mt-6 text-[32px]">
                            Learn more
                        </button>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="bg-white py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="text-[28px] font-bold text-[#77625C] ledger-regular">Introduction</h2>
                    </div>
                </section>
            </div>
            <img
                src={CityFooter}
                alt="City"
                className="w-full h-[400px] object-cover"  
            />
            <Footer />
        </>
    );
}

export default Home;
