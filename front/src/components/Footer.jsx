import React from "react";
import Linkedin from '../assets/Linkedin.png';
import Github from '../assets/Github.png';
import Instagram from '../assets/Instagram.png';

const Footer = () => {
    return (
        <>
            <div className="text-[#3F3F3F] text-[20px] league-regular font-thin !ml-10">
                <p>© 2025 Lucas Bareli. All rights reserved</p>
            </div>
            <div>
                <h3 className="text-[50px] league-regular font-semibold text-[96px] !m-20">
                    SMART <span className="league-regular text-[#17CF96] text-[96px]">CITY</span>
                </h3>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0 md:justify-end !m-15">
                <img
                    src={Linkedin}
                    alt="Linkedin"
                    className="justify-end cursor-pointer"  
                />
                <img
                    src={Github}
                    alt="Github"
                    className="justify-end cursor-pointer"  
                />
                <img
                    src={Instagram}
                    alt="Instagram"
                    className="justify-end cursor-pointer"  
                />
            </div>
        </>
    )
}

export default Footer;