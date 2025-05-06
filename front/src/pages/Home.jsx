import React from "react";
import Mange from '../assets/Mange.png';
import Footer from "../components/Footer";
import CityFooter from '../assets/CityFooter.png';
import CityLorem from '../assets/CityLorem.png'

function Home() {
    return (
        <>
            <div>
                {/* Navbar */}
                <header className="absolute top-0 w-full z-10">
                    <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                        <div>
                            <h3 className="text-[64px] font-regular text-white !ml-20">
                                SMART <span className="text-[#17CF96]">CITY</span>
                            </h3>
                        </div>
                        <ul className="flex space-x-8 text-[36px] lateef-regular font-regular text-white gap-20 !m-10">
                            <li className="cursor-pointer hover:text-[#17CF96] !ml-130">HOME</li>
                            <li className="cursor-pointer hover:text-[#17CF96]">SENSORS</li>
                            <li className="cursor-pointer hover:text-[#17CF96]">DATA</li>
                        </ul>
                        <button className="bg-[#17CF96] text-[36px] text-white rounded-full w-35 h-8 hover:bg-[#14b380] cursor-pointer flex items-center justify-center !mr-20">
                            Sign up
                        </button>
                    </nav>
                </header>

                {/* Hero Section */}
                <section className="relative h-screen">
                    <img
                        src={Mange}
                        alt="Senai"
                        className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-opacity-40 flex flex-col items-start justify-end text-[#E4E4E4] !ml-30">
                        <h1 className="text-[250px] font-bold leading-none tracking-wide">
                            SMART CITY
                        </h1>
                        <p className="text-[32px] max-w-2xl text-left ledger-regular">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </p>
                        <button className="mt-6 text-[32px] flex jusitfy-end items-end">
                            Learn more
                        </button>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="bg-white !ml-15 !mr-15 !mt-20">
                    <div>
                        <h2 className="text-[28px] font-bold text-[#77625C] ledger-regular !ml-4">Introduction</h2>
                        <hr className="border-t border-[#8D8D8D] w-full" />
                        <h3 className="text-[64px] league-regular text-[#3C096C] font-semibold !mt-10">Lorem Ipsum is simply dummy text of the printing</h3>
                    </div>
                    <div>
                        <h2 className="text-[28px] font-bold text-[#77625C] ledger-regular !ml-4 !mt-20">Advantages</h2>
                        <hr className="border-t border-[#8D8D8D] w-full" />
                        <h3 className="text-[64px] league-regular text-[#3C096C] font-semibold !mt-10">Lorem Ipsum is simply dummy text of the printing</h3>
                        <p className="text-[24px] league-regular font-thin text-black ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <img
                            src={CityLorem}
                            alt="City"
                            className="w-full h-[700px] object-cover rounded-xl"
                        />
                    </div>
                </section>
            </div>
            <img
                src={CityFooter}
                alt="City"
                className="w-full h-[400px] object-cover rounded-xl"
            />
            <Footer />
        </>
    );
}

export default Home;
