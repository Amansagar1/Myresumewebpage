"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4">
            <h3 className="text-lg font-bold">Kumar Aman Sagar</h3>
            <p className="text-gray-400">Full Stack MERN Developer</p>
            <p className="mt-2">Mobile: <span className="text-blue-400">8434120273</span></p>
            <p>Email: 
              <a href="mailto:Kumaramansagar01@gmail.com" className="text-blue-400 hover:underline"> Kumaramansagar01@gmail.com</a>
            </p>
            <p>
              <a href="https://github.com/Amansagar1" className="text-blue-400 hover:underline">GitHub</a> | 
              <a href="https://www.linkedin.com/in/kumaraman-sagar/" className="text-blue-400 hover:underline"> LinkedIn</a>
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Skills</h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>HTML, CSS, JavaScript</li>
              <li>React, Next.js, Tailwind CSS</li>
              <li>Node.js, Express.js</li>
              <li>MongoDB, MySQL</li>
              <li>Git, Azure DevOps</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Certifications</h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>Full Stack MERN Development</li>
              <li>React JS Certification</li>
              <li>Web Development Fundamentals</li>
              <li>Data Entry Certification</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-400">Follow Me:</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/Amansagar1" className="text-blue-400 hover:underline">GitHub</a>
            <a href="https://www.linkedin.com/in/kumaramansagar/" className="text-blue-400 hover:underline">LinkedIn</a>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Kumar Aman Sagar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
