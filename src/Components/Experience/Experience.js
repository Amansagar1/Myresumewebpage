"use client";
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Digital-Sync",
      duration: "March 2024 - Present",
      details: [
        "Developed microservices and managed API handling to ensure seamless communication between frontend and backend systems.",
        "Contributed to the design and implementation of scalable software solutions aligned with business objectives.",
        "Led the development of the Omni Edgemetic Platform, overseeing architecture design, frontend implementation, and backend integration."
      ]
    },
    {
      title: "Web Developer (Internship)",
      company: "Achintya Solution",
      duration: "6 Months",
      details: [
        "Engaged in real-time projects, acquiring hands-on experience in web development.",
        "Implemented various web technologies while actively contributing to projects available on Google."
      ]
    },
    {
      title: "Chief Customer Officer (CCO)",
      company: "Samsung Service Center",
      duration: "1 Year",
      details: [
        "Managed customer relationships, ensuring satisfaction through effective communication and service.",
        "Collaborated with cross-functional teams to enhance service delivery and improve customer engagement."
      ]
    },
    {
      title: "Sales Associate",
      company: "Oppo",
      duration: "6 Months",
      details: [
        "Assisted customers with product selection and delivered exceptional customer service.",
        "Maintained comprehensive knowledge of product features and benefits to effectively promote sales."
      ]
    }
  ];

  return (
    <div className="p-12 bg-gradient-to-r from-[#6c89ff] to-[#c7d0ff] text-gray-800 w-full">
      <h2 className="text-3xl font-bold mb-6 text-center">Professional Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-8 p-5 flex items-center justify-center  bg-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105 ">
          <div className="w-full">
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <h4 className="text-md font-medium text-gray-300">{exp.company} | <span className="font-normal">{exp.duration}</span></h4>
          <ul className="list-disc list-inside mt-2 text-gray-200">
            {exp.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
