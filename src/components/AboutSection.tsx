import React from 'react'
import styles from '@/styles/AboutSection.module.css'
import AboutImg from '@/assets/about-img.png'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <div className={styles.about}>
      <div className={styles.textdiv}>
        <h1>Acerca de mí</h1>
        <p>Soy titulado en Ing. electrónica en computación, he ampliado mi conocimiento para convertirme en un desarrollador.</p>
      
        <p>Como desarrollador, estoy capacitado para ofrecerte una solución integral en el desarrollo de sitios web y aplicaciones móviles.</p>
        <p>Con especialización en <span> MongoDB, Express.js, React.js y Node.js </span>, aprovecho al máximo la versatilidad de la pila MERN para crear soluciones sólidas y dinámicas que superan las expectativas. Tanto si necesitas un sitio web elegante como una aplicación móvil llena de funciones.</p>
        <p>Mi compromiso con un código limpio y eficiente garantiza un mantenimiento y escalabilidad fáciles para soluciones personalizadas que abordan cualquier necesidad específica.</p>
        <a href="https://app-felman-frontend.vercel.app/login" target="_blank" className={styles.enlace}>
  Enlace a la web de la aplicación
</a>
      </div>
      <Image src={AboutImg} alt="aboutimg" quality={100} />

    </div>
  )
}

export default AboutSection