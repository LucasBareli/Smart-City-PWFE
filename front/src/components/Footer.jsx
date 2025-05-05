import React from "react";
import Linkedin from '../assets/Linkedin.png';
import Github from '../assets/Github.png';
import Instagram from '../assets/Instagram.png';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="text-[#3F3F3F] text-[20px] league-regular font-thin">
                <p>© 2025 Lucas Bareli. All rights reserved</p>
            </div>
            <div>
                <h3 className="text-[50px] league-regular font-semibold text-[96px]">
                    SMART <span className="league-regular text-[#17CF96] text-[96px]">CITY</span>
                </h3>
            </div>
            <div className="flex">
                <img
                    src={Linkedin}
                    alt="Linkedin"
                    className="justify-end"  
                />
                <img
                    src={Github}
                    alt="Github"
                    className="justify-end"  
                />
                <img
                    src={Instagram}
                    alt="Instagram"
                    className="justify-end"  
                />
            </div>
        </>
    )
}

export default Footer;