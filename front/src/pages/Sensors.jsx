import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Sensor1 from "../assets/Sensor 1.png";
import Sensor2 from "../assets/Sensor 2.png";
import Header from "../components/Header";

export default function Sensors() {
  const images = [
    { src: Sensor1, alt: "Temperature" },
    { src: Sensor2, alt: "Humidity" },
    { src: Sensor1, alt: "Luminosity" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slideshow logic for the first section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const slideContent = [
    "Detailed sensor information 1.",
    "Detailed sensor information 2.",
    "Detailed sensor information 3.",
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % slideContent.length);
  };

  const handlePrevious = () => {
    setSlideIndex((prev) => (prev - 1 + slideContent.length) % slideContent.length);
  };

  return (
    <>
    <Header />
    <div className="flex flex-col items-center space-y-8 !mt-50">
      {/* First Section */}
      <div className="w-full flex flex-col items-center space-y-4">
        <div className="relative">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`transition-all duration-700 rounded-lg w-96 h-96 object-cover ${
                index === currentIndex ? "opacity-100" : "opacity-0 absolute"
              }`}
            />
          ))}
        </div>

        <div className="flex space-x-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${
                index === currentIndex ? "border-4 border-purple-500" : "border border-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full flex items-center justify-between space-x-4">
        <button
          onClick={handlePrevious}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex-1 text-center px-4">
          <p className="text-lg font-medium">{slideContent[slideIndex]}</p>
        </div>
        <button
          onClick={handleNext}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
    </>
  );
}
