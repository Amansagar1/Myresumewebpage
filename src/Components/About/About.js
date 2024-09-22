import React from 'react';
import Image from "next/image";
import myimg from '../../../public/IMG_20240720_204524_956-removebg-preview.png';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-8 bg-white shadow-lg h-auto lg:h-[500px] justify-center">
      <div className="flex justify-center md:justify-end md:w-[30%]  w-full md:pr-10 mb-8 md:mb-0 lg:w-[40%] lg:mb-20">
        <Image
          src={myimg}
          alt="About"
          className="rounded-full shadow-4xl transform transition-transform duration-500 hover:scale-105 custom-bounce " // Adjust size based on screen size
        />
      </div>
      <div className="flex flex-col w-full md:w-[50%] text-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">About Me</h2>
        <p className="text-gray-700 text-center md:text-left">
          Hello! Im Kumar Aman Sagar, a passionate Full Stack MERN Developer with a strong focus on creating dynamic and responsive web applications. With expertise in MongoDB, SQL, Express.js, React.js, and Node.js, I thrive on turning complex problems into simple, beautiful solutions. My mission is to deliver high-quality software that enhances user experience and drives business success.
        </p>
        <p className="text-gray-700 mt-4 text-center md:text-left">
          I believe in the power of collaboration and enjoy working with teams to create innovative solutions. Whether its through clean coding practices, bug fixing, or designing RESTful APIs, I am committed to continuous learning and growth in the ever-evolving tech landscape.
        </p>
        <p className="text-gray-700 mt-4 text-center md:text-left">
          Thank you for visiting my portfolio! Im excited to connect and explore new opportunities in software development.
        </p>
      </div>
    </div>
  );
};

export default About;
