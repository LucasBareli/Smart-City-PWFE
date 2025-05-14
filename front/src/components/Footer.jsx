import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white py-10 px-16 items-center">
            {/* Coluna 1: Direitos Reservados */}
            <div className="text-left !mt-10 !ml-15">
                <p className="text-[#3F3F3F] text-[20px] font-thin league-regular">
                    © 2025 Lucas Bareli. All rights reserved
                </p>
            </div>

            {/* Coluna 2: Logo */}
            <div className="text-left !ml-40 !mt-10">
                    <h3 className="text-[96px] font-semibold league-regular text-black leading-none">
                        SMART <span className="text-[#17CF96] font-semibold league-regular">CITY</span>
                    </h3>
                </div>

                {/* Coluna 3: Contatos */}
                <div className="text-center">
                    <p className="text-black font-thin league-regular text-[24px]">Contacts</p>
                    <p className="text-black font-thin league-regular text-[24px]">+55 19 9999-9999</p>
                    <p className="text-black font-thin league-regular text-[24px]">lucasnareli@gmail.com</p>
                </div>

            {/* Linha 4: Links de navegação */}
            <div className="!mt-10  !mb-10 flex justify-between items-center flex-col md:flex-row gap-4">
                {/* Navegação */}
                <nav className="flex gap-6">
                    <a href="#home" className="text-black text-[20px] font-semibold league-regular hover:underline">
                        Home
                    </a>
                    <a href="#sensors" className="text-black text-[20px] font-semibold league-regular hover:underline">
                        Sensors
                    </a>
                    <a href="#data" className="text-black text-[20px] font-semibold league-regular hover:underline">
                        Data
                    </a>
                </nav>

                {/* Ícones sociais */}
                <div className="flex gap-4">
                    <FaLinkedin className="w-8 h-8 text-black cursor-pointer transition duration-300 hover:text-[#17CF96]" />
                    <FaGithub className="w-8 h-8 text-black cursor-pointer transition duration-300 hover:text-[#17CF96]" />
                    <FaInstagram className="w-8 h-8 text-black cursor-pointer transition duration-300 hover:text-[#17CF96]" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
