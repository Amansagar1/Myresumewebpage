"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import myimg from "../../../public/IMG_20240720_204524_956-removebg-preview.png";

const TopImginfo = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "MR. KUMAR AMAN SAGAR";
  const secondText = "Full Stack MERN Developer";

  useEffect(() => {
    const typingSpeed = 160; 

    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/KUMAR AMAN SAGAR.pdf";
    link.download = "Kumar_Aman_Sagar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full flex justify-center bg-gradient-to-r from-blue-950 to-blue-300 py-8 sm:py-12 lg:py-16">
      <div className="w-[90%] sm:w-[80%] lg:w-[70%] xl:w-[80%] h-[600px] flex flex-col-reverse lg:flex-row items-center justify-center gap-6">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold text-white animate-fade-in">
            {displayedText}
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mt-2">
            {secondText}
          </h2>
          <button
            onClick={handleDownload}
            className="p-2 w-40 bg-white text-black mt-4 rounded hover:bg-gray-200 transition-colors duration-300"
          >
            Download Resume
          </button>
        </div>
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-[740px] lg:h-[700px] rounded-full overflow-hidden shadow-2xl animate-bounce-slow flex items-center justify-center">
          <Image
            src={myimg}
            alt="Kumar Aman Sagar"
            fill
            loading="lazy"
            className="rounded-full shadow-4xl transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default TopImginfo;
