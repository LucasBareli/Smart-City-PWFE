import React from "react";
import Mange from '../assets/Mange.png';

function App() {
    return (
        <div className="font-jomhuria">
            {/* Navbar */}
            <header className="absolute top-0 w-full z-10">
                <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                    <div>
                        <h3 className="text-[64px] font-regular text-white">SMART <span className="text-[#17CF96]">CITY</span></h3>
                    </div>
                    <ul className="flex space-x-8 text-[36px] ledger-regular text-white gap-8">
                        <li className="cursor-pointer">HOME</li>
                        <li className="cursor-pointer">SENSORS</li>
                        <li className="cursor-pointer">DATA</li>
                    </ul>
                    <button className="bg-[#17CF96] text-[36px] text-white ">
                        Sign up
                    </button>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="relative h-screen">
                <img
                    src={Mange}
                    alt="Senai"
                    className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-white">
                    <h1 className="text-[250px] font-regular font-bold">SMART CITY</h1>
                    <p className="mt-4 text-xl max-w-2xl text-center">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                    </p>
                    <button className="mt-6 text-white">
                        Learn more ↓
                    </button>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-5xl font-bold text-gray-800">Introduction</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        This section contains an introduction about the Smart City project.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default App;
