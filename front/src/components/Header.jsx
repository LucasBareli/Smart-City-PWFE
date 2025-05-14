import React from "react";
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";
import Person from "../assets/Bareli.png";

const Header = () => {
    return (
        <header className="absolute top-0 w-full z-10">
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div>
                    <h3 className="text-[64px] font-regular text-[#3C096C] !ml-20">
                        SMART <span className="text-[#17CF96]">CITY</span>
                    </h3>
                </div>

                    <ul className="flex space-x-8 text-[36px] lateef-regular font-regular text-[#3C096C] gap-20 !m-10">
                        <li className="cursor-pointer hover:text-[#17CF96]">
                            <Link to="/home">HOME</Link>
                        </li>
                        <li className="cursor-pointer hover:text-[#17CF96]">
                            <Link to="/sensors">SENSORS</Link>
                        </li>
                        <li className="cursor-pointer hover:text-[#17CF96]">
                            <Link to="/data">DATA</Link>
                        </li>
                    </ul>

                {/* User Section */}
                <div className="flex items-center space-x-8">
                    {/* User Image */}
                    <img
                        src={Person}
                        alt="User"
                        className="w-10 h-10 rounded-full !mr-5"
                    />
                    {/* Divider */}
                    <div className="h-6 border-l border-[#3C096C]" />
                    {/* Logout Icon */}
                    <button className="text-[#3C096C] hover:cursor-pointer hover:text-[#17CF96] transition duration-200 !ml-5">
                        <LogOut size={24} />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
