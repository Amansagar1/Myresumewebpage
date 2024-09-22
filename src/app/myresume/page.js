import React from 'react'
import TopImginfo from "../../Components/Banner/TopImginfo"
import About from "../../Components/About/About";
import Skill from "../../Components/Skill/Skill";
import Projects from "../../Components/Projects/Projects";
import Experience from "../../Components/Experience/Experience";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
const page = () => {
  return (
    <div>
  <TopImginfo/>  
  <Skill/>
  <Projects/>
  <Experience/>
  <Contact/>
  <About/>    
  <Footer/>
        </div>
  )
}

export default page