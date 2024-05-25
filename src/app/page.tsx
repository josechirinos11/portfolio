"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import SkillSection from "@/components/SkillSection";
import Footer from "@/components/Footer";
import SocialSection from "@/components/SocialSection";
import ProjectSection from "@/components/ProjectSection"
import Mern from "@/components/Mern";
import { useRef } from "react";
export default function Home() {

  const homeRef = useRef<HTMLDivElement | null>(null); 
  const aboutRef = useRef<HTMLDivElement | null>(null); 
  const projectsRef = useRef<HTMLDivElement | null>(null); 
  const skillsRef = useRef<HTMLDivElement | null>(null); 
  
  const mernRef = useRef<HTMLDivElement | null>(null); 
  

  const contactRef = useRef<HTMLDivElement | null>(null); 

  return (
    <div>
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        mernRef={mernRef}
        contactRef={contactRef}
      />

      <div ref={homeRef} id="home-section">
        <PortfolioSection />
      </div>
      <div ref={aboutRef} id="about-section">
        <AboutSection />
      </div>

      <div ref={mernRef} id="MERN">
        <Mern />
      </div>


      <div ref={projectsRef} id="projects-section">

        <ProjectSection />
      </div>

      <div ref={skillsRef} id="projects-section">
        <SkillSection />
      </div>
      <div ref={contactRef} id="contact-section">
        <Footer />
      </div>
      <SocialSection />
     
     
    </div>
  );
}
