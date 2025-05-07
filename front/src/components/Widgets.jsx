import React, { useState } from "react";
import { MdOutlineSensors, MdOutlineLightbulb } from "react-icons/md";
import { FaHandHoldingWater } from "react-icons/fa";
import { LiaTemperatureLowSolid } from "react-icons/lia";

const Widgets = () => {
    const [activeCard, setActiveCard] = useState("Luminosity");
    const [visibleDescription, setVisibleDescription] = useState(null);

    const handleCardClick = (cardName) => {
        setActiveCard(cardName);
        setVisibleDescription(cardName); o
    };

    const sensorDescriptions = {
        Counter: "The counter sensor is used to track incremental counts of specific events or activities, such as people entering a room or items passing a point on a conveyor belt.",
        Temperature: "The temperature sensor measures ambient temperature in its environment. It is widely used in weather stations, HVAC systems, and industrial processes to ensure optimal conditions.",
        Humidity: "The humidity sensor monitors the level of moisture in the air. It is critical for applications like climate control, agriculture, and indoor air quality management.",
        Luminosity: "The luminosity sensor detects the intensity of light in its surroundings. It is commonly employed in smart lighting systems, photography, and environmental monitoring."
    };

    return (
        <section className="bg-white px-8 py-16">
            <div>
                <h2 className="text-[28px] font-bold text-[#77625C] ledger-regular !ml-4 w-40">Introduction</h2>
                <hr className="border-t border-[#000000] w-full" />
                <h3 className="text-[64px] league-regular text-[#3C096C] font-semibold w-160 !m-4">
                    Lorem Ipsum is simply dummy text of the printing
                </h3>
                <p className="league-regular font-thin text-[24px] flex justify-end">Select the sensor if you want to see more <span className="text-black">*</span></p>
            </div>
            <div className="grid grid-cols-12 gap-8 mt-10">
                {/* Map */}
                <div className="col-span-7">
                    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.564012282367!2d-47.06763282381148!3d-22.9002830418007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c89bf74286b7%3A0x761e0c9ea5da22e8!2sFaculdade%20de%20Tecnologia%20de%20Campinas%20(FATEC)!5e0!3m2!1spt-BR!2sbr!4v1690584485294!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Widgets */}
                <div className="col-span-5 grid grid-cols-2 gap-4 !mt-6">
                    {Object.keys(sensorDescriptions).map((sensor, index) => (
                        <div
                            key={index}
                            onClick={() => handleCardClick(sensor)}
                            className={`flex flex-col items-center rounded-lg p-4 cursor-pointer transition-all duration-300 ${activeCard === sensor
                                ? "bg-[#3C096C] text-white border-[#3C096C] shadow-xl"
                                : "bg-white "
                                }`}
                            style={{ minHeight: "150px" }}
                        >
                            {activeCard !== sensor && (
                                <div className="w-70 h-0.5 bg-[#3C096C] !mb-4"></div>
                            )}
                            {/* Tittle of Sensor */}
                            <h4
                                className={`text-[22px] league-regular ${activeCard === sensor ? "text-white" : "text-[#3C096C]"}`}
                            >
                                {sensor}
                            </h4>

                            {/* Description */}
                            <p
                                className={`!mt-2 text-[16px] league-regular font-thin transition-opacity duration-300 ${activeCard === sensor
                                    ? "opacity-100"
                                    : "opacity-70"
                                    }`}
                            >
                                {activeCard === sensor && !visibleDescription && sensorDescriptions[sensor].slice(0, 100) + "..."}
                            </p>
                            
                            {/* Icons */}
                            <div className="!mt-4">
                                {sensor === "Counter" && (
                                    <MdOutlineSensors
                                        className={`text-[32px] ${activeCard === sensor ? "text-white" : "text-[#3C096C]"}`}
                                    />
                                )}
                                {sensor === "Humidity" && (
                                    <FaHandHoldingWater
                                        className={`text-[32px] ${activeCard === sensor ? "text-white" : "text-[#3C096C]"}`}
                                    />
                                )}
                                {sensor === "Temperature" && (
                                    <LiaTemperatureLowSolid
                                        className={`text-[32px] ${activeCard === sensor ? "text-white" : "text-[#3C096C]"}`}
                                    />
                                )}
                                {sensor === "Luminosity" && (
                                    <MdOutlineLightbulb
                                        className={`text-[32px]  ${activeCard === sensor ? "text-white" : "text-[#3C096C]"}`}
                                    />
                                )}
                            </div>

                            {activeCard !== sensor && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleCardClick(sensor);
                                    }}
                                    className="text-[16px] !mt-20 hover:underline league-regular font-thin"
                                >
                                    (See more)
                                </button>
                            )}

                            {/* Full Description */}
                            {activeCard === sensor && (
                                <p className="mt-2 text-[16px] league-regular font-thin">
                                    {sensorDescriptions[sensor]} 
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Widgets;
