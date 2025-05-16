import React, { useState, useEffect } from "react";
import Sensor1 from "../assets/Sensor 1.png";
import Sensor2 from "../assets/Sensor 2.png";
import Sensor3 from "../assets/Sensor 3.png";
import Header from "../components/Header";

export default function Sensors() {
  const allImages = [
    { src: Sensor1, alt: "Temperature", label: "Temperature" },
    { src: Sensor2, alt: "Humidity", label: "Humidity" },
    { src: Sensor3, alt: "Luminosity", label: "Luminosity" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, [allImages.length]);

  const bigImage = allImages[currentIndex]; 

  return (
    <>
      <Header />
      <div className="flex items-center justify-center !mt-30">
        <div className="relative w-[430px] h-[650px] rounded-lg overflow-hidden">
          <img
            src={bigImage.src}
            alt={bigImage.alt}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-[58px] font-semibold league-regular text-[#3C096C] leading-tight !ml-40 !mt-30">
            Lorem Ipsum is <br /> simply dummy <br /> text of the
          </h2>
          <p className="text-black font-thin league-regular text-[22px] !ml-35">
            Lorem Ipsum is simply dummy text of the printing and
          </p>

          <div className="flex space-x-8 gap-7 !ml-10">
            {allImages.map(({ src, alt, label }, index) => (
              <div
                key={index}
                className={"flex flex-col items-center space-y-1 !mt-30 cursor-pointer"}
                onClick={() => setCurrentIndex(index)} 
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-40 h-40 rounded-lg object-cover"
                />
                <span className="text-[16px] !ml-15 text-black league-regular font-bold">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
