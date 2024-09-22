"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_81k54d5", "template_o0nbr7r", formData, "c2nIrp6Mw3-TTSXYj")
      .then((response) => {
        console.log("Message sent successfully:", response);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#4c65be] to-[#10162f] text-white p-6 w-full">
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col md:flex-row">
        {/* Contact Information */}
        <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-6">
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Contact Me</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Kumar Aman Sagar</h3>
            <p className="text-gray-300">
              <strong>Role:</strong> Full Stack MERN Developer
            </p>
            <p className="text-gray-300">
              <strong>Mobile:</strong> 8434120273
            </p>
            <p className="text-gray-300">
              <strong>Email:</strong>
              <a href="mailto:Kumaramansagar01@gmail.com" className="text-blue-400 hover:underline">
                {" "}
                Kumaramansagar01@gmail.com
              </a>
            </p>
            <p className="text-gray-300">
              <strong>GitHub:</strong>
              <a href="https://github.com/Amansagar1" className="text-blue-400 hover:underline">
                {" "}
                github.com/Amansagar1
              </a>
            </p>
            <p className="text-gray-300">
              <strong>LinkedIn:</strong>
              <a
                href="https://www.linkedin.com/in/kumaraman-sagar/"
                className="text-blue-400 hover:underline"
              >
                {" "}
                linkedin.com/in/kumaraman-sagar
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 w-full">
          {submitted ? (
            <div className="flex flex-col items-center justify-center mt-20">
              <div className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full animate-bounce">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-green-300">Message sent successfully!</p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 text-gray-300">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-300">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-300">Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
