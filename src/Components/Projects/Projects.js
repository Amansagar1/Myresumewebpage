"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      image: "/omni.png",
      title: "Omni Edgemetic Platform (company project)",
      description: "The Omni Edgemetic Platform is a real-time data analytics solution built with Next.js and Edgemetic Tool to process readings from edge devices. It offers seamless API integration and fast, making it ideal for real-time monitoring and edge computing.",
      link: "https://github.com/Amansagar1"
    },
    {
      image: "/image.png",
      title: "E-commerce Web App",
      description: "A responsive E-commerce for ordering your favorite Products.",
      link: "https://amansagar1.github.io/JavaScript-Finaleproject.github.io/"
    },
    {
      image: "/Screenshot 2024-09-22 223047.png",
      title: "Product Inventory Webpage",
      description: "A responsive Product Admin Page Where Admin Can See All Inventory.",
      link: "https://relaxed-caramel-1f97ca.netlify.app/"
    },
    {
      image: "/movei.png",
      title: "Movie Web App",
      description: "A real-time Movies searching or streaming webpage.",
      link: "https://monumental-chaja-b490f4.netlify.app/"
    },
    {
      image: "/code.png",
      title: "Code Editor Web App",
      description: "A Code Editor application for real-time writing, copying, deleting, or saving your code.",
      link: "https://delicate-choux-d7e93d.netlify.app/"
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#c7d0ff] to-[#6c89ff] flex items-center flex-col py-12 px-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-black">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

const ProjectCard = ({ title, description, link, image }) => {
  return (
    <div className="w-full h-full">
      <Link href={link} className="block w-full h-full">
        <motion.div
          className="relative bg-black lg:w-[300px] lg:h-[500px] rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105"
          whileHover={{ rotateX: 10, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Image section */}
          {image && (
            <div className="h-40 md:h-56 lg:h-64 overflow-hidden rounded-t-2xl">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover p-4"
              />
            </div>
          )}
          {/* Text section */}
          <div className="p-4 text-center">
            <h3 className="text-white text-xl font-semibold">{title}</h3>
            <p className="text-gray-300 text-sm mt-2">
              {description.length > 100
                ? description.substring(0, 100) + "..."
                : description}
            </p>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};
