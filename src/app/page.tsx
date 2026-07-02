"use client"
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import SkillSection from "@/components/SkillSection";
import Footer from "@/components/Footer";
import SocialSection from "@/components/SocialSection";
import ProjectSection from "@/components/ProjectSection"
import CoursesSection from "@/components/CoursesSection";
import AnimatedSection from "@/components/AnimatedSection";
import { useRef } from "react";

export default function Home() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const mernRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const coursesRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        mernRef={mernRef}
        contactRef={contactRef}
        coursesRef={coursesRef}
      />

      <div ref={homeRef} id="home-section">
        <PortfolioSection />
      </div>

      <div ref={coursesRef} id="courses-section">
        <AnimatedSection>
          <CoursesSection />
        </AnimatedSection>
      </div>

      <div ref={aboutRef} id="about-section">
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
      </div>

      <div ref={projectsRef} id="projects-section">
        <AnimatedSection>
          <ProjectSection />
        </AnimatedSection>
      </div>

      <div ref={skillsRef} id="skills-section">
        <AnimatedSection>
          <SkillSection />
        </AnimatedSection>
      </div>

      <div ref={contactRef} id="contact-section">
        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      </div>

      <SocialSection />
    </div>
  );
}
