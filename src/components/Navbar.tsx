"use client"
import React, { useState } from 'react'
import styles from '@/styles/Navbar.module.css'
import Image from 'next/image'
import signature from '@/assets/hj_signature.png'
import dowload from '@/assets/descarga.png'

const Navbar = ({
    homeRef,
    aboutRef,
    projectsRef,
    contactRef,
    skillsRef,
    mernRef,
    coursesRef
}: {
    homeRef: React.RefObject<HTMLDivElement>
    aboutRef: React.RefObject<HTMLDivElement>
    projectsRef: React.RefObject<HTMLDivElement>
    contactRef: React.RefObject<HTMLDivElement>
    skillsRef: React.RefObject<HTMLDivElement>
    mernRef: React.RefObject<HTMLDivElement>
    coursesRef: React.RefObject<HTMLDivElement>
}) => {
    const [hovered, setHovered] = useState(false);
    const [navActive, setNavActive] = useState(false)
    const [skillsMenuActive, setSkillsMenuActive] = useState(false);


    const handleButtonClick = (section: any) => {
        console.log(section)

        if (section === 'home' && homeRef.current) {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });

        }
        else if (section === 'about' && aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'projects' && projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (section === 'skills' && skillsRef.current) {
            skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else if (section === 'contact' && contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'courses' && coursesRef.current) {
            coursesRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Provide clear error message for missing section
            console.warn(`Section "${section}" not found. Please ensure it exists.`);
        }

    }
    const handlenavbarclick = () => {
        setNavActive(!navActive)
    }

    const handleDownload = () => {
        // Crear un enlace de descarga invisible
        const link = document.createElement('a');
        link.href = '/CV Jose Chirinos Abril 2025.pdf'; // Ruta al archivo PDF
        link.download = 'CV Jose Chirinos Abril 2025.pdf'; // Nombre del archivo al descargar
        document.body.appendChild(link);
        link.click();
        //document.body.removeChild(link); // Limpieza después de la descarga
    };

    return (
        <div className={styles.navouter}>
            <div
                className={styles.left}
                onClick={handleDownload}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                title="Enlace descarga Curriculum Jose Chirinos"
            >
                <Image alt="" src={signature} width={700} height={700}
                    quality={100} className={styles.sign} />
                <Image alt="" src={dowload} width={500} height={500}
                    quality={100} className={[styles.sign, styles.acultar].join(' ')} />

            </div>


            <div className={navActive ? `${styles.nav_toggler} ${styles.navactive}` : `${styles.nav_toggler}`} onClick={handlenavbarclick}>
                <span></span>
            </div>

            <div className={styles.right}>
                <button onClick={() => handleButtonClick('home')}>Inicio</button>
                <button onClick={() => handleButtonClick('about')}>Acerca</button>
                <button onClick={() => handleButtonClick('projects')}>Proyectos</button>
                <button
                    onMouseEnter={() => setSkillsMenuActive(true)}
                    onMouseLeave={() => setSkillsMenuActive(false)}
                    onClick={() => handleButtonClick('skills')}>Habilidades</button>
                <button
                    className={styles.navButton}
                    onClick={() => handleButtonClick('courses')}
                    title="Ir a Cursos y Certificaciones"
                >
                    Cursos y Certificaciones
                </button>
                <button onClick={() => handleButtonClick('contact')}>Contacto</button>
            </div>

            {navActive && <div className={styles.right1}>
                <button className={styles.buttonExampol} onClick={() => handleButtonClick('home')}>Inicio</button>
                <button onClick={() => handleButtonClick('about')}>Acerca</button>
                <button onClick={() => handleButtonClick('projects')}>Proyectos</button>
                <button onClick={() => handleButtonClick('skills')}>Habilidades</button>
                <button
                    className={styles.navButton}
                    onClick={() => handleButtonClick('courses')}
                    title="Ir a Cursos y Certificaciones"
                >
                    Cursos y Certificaciones
                </button>
                <button onClick={() => handleButtonClick('contact')}>Contacto</button>
            </div>
            }
        </div>
    )
}

export default Navbar