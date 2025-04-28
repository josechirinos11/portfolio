import React from "react";
import styles from "@/styles/CoursesSection.module.css";
import CertificatesCarousel from "@/components/CertificatesCarousel";

const courses = [
  {
    name: "Nodejs y GraphQL",
    date: "04/2025",
    institution: "UDEMY",
    certificate: "/certificate%20Desarrollo%20%20de%20aplicaciones%20web.pdf",
  },
  {
    name: "Metodología SCRUM",
    date: "03/2025",
    institution: "LABORA",
    certificate: null,
  },
  {
    name: "React Native",
    date: "03/2024",
    institution: "UDEMY",
    certificate: "/react%20native.pdf",
  },
  {
    name: "Reactjs y Nextjs",
    date: "05/2023",
    institution: "UDEMY",
    certificate: "/react%20avanzado.pdf",
  },
  {
    name: "INGLES",
    date: "09/2020",
    institution: "OPENENGLISH",
    certificate: null,
  },
  {
    name: "JavaScript",
    date: "07/2020",
    institution: "UDEMY",
    certificate: "/javascrip.pdf",
  },
];

const experience = [
  {
    title: "FELMAN",
    location: "Valencia",
    date: "dic. 2024 - Actualidad",
    role: "Personal TI",
    description:
      "Mecanizado de perfiles de aluminios para ventanas en SICA2 y PROF2, modernización de procesos en la interfaz operario producción, implementando actualizaciones con ReactJS y optimizando la gestión de datos con MySQL.",
  },
  {
    title: "FREELANCER",
    location: "On-Line",
    date: "ene. 2022 - Actualidad",
    role: "Profesional independiente",
    description:
      "Compromiso con un servicio al cliente excepcional, utilizando tecnologías de vanguardia como ReactJS, NodeJS, ExpressJS, Git, Firebase y MongoDB dentro del stack MERN. Con más de 4 años de experiencia, entregando proyectos puntualmente.",
  },
  {
    title: "PROINEX SPA",
    location: "Santiago, CHILE",
    date: "ene. 2019 - feb. 2024",
    role: "Supervisor de operaciones",
    description:
      "Gestión y supervisión eficiente del flujo de proyectos e instalación en sistemas de barandas, ventanas, shower door y fachadas.",
  },
];

const CoursesSection = () => {
  return (
    <section className={styles.coursesSection}>
      <h2 className={styles.title}>Experiencia Laboral  (últimos 4 años)</h2>
      <div className={styles.descriptionBox}>
        
        <ul className={styles.experienceList}>
          {experience.map((exp, idx) => (
            <li key={idx} className={styles.experienceItem}>
              <strong>{exp.title}</strong> <span>({exp.date})</span> - <em>{exp.role}</em><br/>
              <span className={styles.expLocation}>{exp.location}</span><br/>
              <span>{exp.description}</span>
            </li>
          ))}
        </ul>
      </div>
      <h1 className={styles.titleCertificado}>Certificados</h1>
      <div className={styles.coursesList}>
      
        {courses.map((course, idx) => (
          <div className={styles.courseCard} key={idx}>
            <div className={styles.courseInfo}>
              <span className={styles.courseName}>{course.name}</span>
              <span className={styles.courseDate}>{course.date}</span>
              <span className={styles.courseInstitution}>{course.institution}</span>
            </div>
            {course.certificate && (
              <a
                href={course.certificate}
                download
                className={styles.downloadBtn}
                title={`Descargar certificado de ${course.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar PDF
              </a>
            )}
          </div>
        ))}
      </div>
      
      <h2 className={styles.certTitle}>Certificados destacados</h2>
      <CertificatesCarousel />
    </section>
  );
};

export default CoursesSection;
