import React, { useState, useEffect } from "react";
import Sensor1 from "../assets/Sensor 1.png";
import Sensor2 from "../assets/Sensor 2.png";
import Sensor3 from "../assets/Sensor 3.png";
import CityCarrossel from "../assets/CityCarrossel.png"
import Header from "../components/Header";
import Footer from "../components/Footer"
import { Check } from 'lucide-react';
import { X } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { CiCirclePlus } from "react-icons/ci";
import { CgArrowDownR } from "react-icons/cg";

export default function Sensors() {
  const allImages = [
    { src: Sensor1, alt: "Temperature", label: "Temperature" },
    { src: Sensor2, alt: "Humidity", label: "Humidity" },
    { src: Sensor3, alt: "Luminosity", label: "Luminosity" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [allImages.length]);

  const bigImage = allImages[currentIndex];

  const tableData = [
    {
      image: Sensor2,
      model: "Humidity Sensor",
      price: "R$5,99",
      status: "Active",
      macAddress: "1234-5678",
    },
    {
      image: Sensor2,
      model: "Humidity Sensor",
      price: "R$5,99",
      status: "Active",
      macAddress: "1234-5678",
    },
    {
      image: Sensor2,
      model: "Humidity Sensor",
      price: "R$5,99",
      status: "Active",
      macAddress: "1234-5678",
    },
    {
      image: Sensor2,
      model: "Humidity Sensor",
      price: "R$5,99",
      status: "Active",
      macAddress: "1234-5678",
    },
    {
      image: Sensor2,
      model: "Humidity Sensor",
      price: "R$5,99",
      status: "Active",
      macAddress: "1234-5678",
    },
  ];

  const carrosselData = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: CityCarrossel,
    },
    {
      text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: Sensor1,
    },
    {
      text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      image: CityCarrossel,
    },
  ];


  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carrosselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carrosselData.length - 1 : prevIndex - 1
    );
  };

  const handleNext2 = () => {
    setCurrentIndex2((prevIndex) =>
      prevIndex === carrosselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev2 = () => {
    setCurrentIndex2((prevIndex) =>
      prevIndex === 0 ? carrosselData.length - 1 : prevIndex - 1
    );
  };

  const currentItem = carrosselData[currentIndex2];

  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <div className="w-full !p-20 !mt-30 overflow-x-auto max-w-450">
          <table className="table-auto w-full text-left lateef-regular font-regular text-[32px]">
            <thead className="border-collapse border-b border-[#3C096C]">
              <tr className="text-[#3C096C]">
                <th className="px-4 py-2 font-medium">Image</th>
                <th className="px-4 py-2 font-medium">Model</th>
                <th className="px-4 py-2 font-medium">Price</th>
                <th className="px-4 py-2 font-medium">Status</th>
                <th className="px-4 py-2 font-medium">Mac-Address</th>
                <th className="text-[#17CF96] cursor-pointer hover:text-[#17cf95a6]"><CiCirclePlus /></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr
                  key={index}
                >
                  <td className="px-4 py-2">
                    <img
                      src={item.image}
                      alt={item.model}
                      className="w-30 h-30 !mt-8 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-4 py-2 text-black league-regular text-[24px] font-thin">{item.model}</td>
                  <td className="px-4 py-2 text-black league-regular text-[24px] font-thin">{item.price}</td>
                  <td className="px-4 py-2 text-center">
                    {item.status === "Active" ? (
                      <Check className="text-[#48752C]" />
                    ) : (
                      <X className="text-[#CF1800]" />
                    )}
                  </td>
                  <td className="px-4 py-2 text-black league-regular text-[24px] font-thin">{item.macAddress}</td>
                  <td className="px-4 py-2 flex items-center space-x-2">
                    <Pencil className="text-[#528EE9] cursor-pointer hover:text-[#528ee9ab] !mt-15" />
                    <Trash2 className="text-[#CF1800] cursor-pointer hover:text-[#cf1800a6] !mt-15" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center items-center">
            <div className="flex justify-center space-x-2">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className="border border-[#3C096C] text-[#3C096C] text-24 league-regular font-medium hover:bg-[#3C096C] hover:text-white hover:cursor-pointer w-10 h-10 flex items-center justify-center"
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Carrossel */}
        <div className="flex items-center justify-center !mt-10">
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

        <div className="flex flex-col items-center justify-center !mt-20 p-8 bg-[#F9F9F9] rounded-lg max-w-7xl relative">
          {/* Carrossel2 */}
          <div className="flex w-full items-start justify-between">
            <div className="w-3/4 pr-8">
      <p className="text-black font-thin text-[32px] league-regular !ml-20">
        {currentItem.text}
      </p>
    </div>
            <div className="flex mt-4 justify-end w-full">
            <div className="!mr-15">
              <button
                onClick={handlePrev2}
                className="!mr-2"
              >
                <CgArrowDownR className="text-black text-2xl transform rotate-90 cursor-pointer hover:text-[#17CF96]" />
              </button>
              <button
                onClick={handleNext2}
                className="!mr-2 !mt-85"
              >
                <CgArrowDownR className="text-black text-2xl transform -rotate-90 cursor-pointer hover:text-[#17CF96]" />
              </button>
            </div>
          </div>
            <div className="w-300">
              <img
                src={currentItem.image}
                alt="Carrossel Item"
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
