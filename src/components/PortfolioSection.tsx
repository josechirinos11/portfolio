import React from 'react'
import styles from '@/styles/PortfolioSection.module.css'
import mainImg from '@/assets/hj_mainimg.png'
import Image from 'next/image'

const PortfolioSection = () => {
  return (
    <div className={styles.section1outer}>
      <div className={styles.subtextdiv}>
        <div className={styles.left}>
          <div className={styles.about}>
            <p>Hola me llamo <span>Jose Chirinos</span></p>
            <p>Soy un desarrollador apasionado con experiencia en la creación de sitios web dinámicos y aplicaciones móviles innovadoras.</p>
          </div>
        </div>
        <div className={styles.right}>

          <div className={styles.stat}>
            <h1>4</h1>
            <p>Años<br></br> de Experiencia</p>
            <p>Dale Click a mi aplicacion en desarrollado</p>
            <a href="https://app-felman-frontend.vercel.app/login" target="_blank" className={styles.enlace}>
              App MERN STACK
            </a>
            <a href="https://proyectoceac-1.onrender.com/index.php?controller=auth&action=login" target="_blank" className={styles.enlace}>
              APP con PHP y SQL
            </a>
          </div>
        </div>

      </div>
      <Image src={mainImg} className={styles.mainimg} alt="mainimg" quality={100} />
      <div className={styles.maintextdiv}>
        <p>Desarrollador</p>
        <h1><span>&nbsp;</span>FULL STACK</h1>
        <h2></h2>
      </div>
      <video src={'/smoke1.webm'} autoPlay loop muted
        className={styles.smokevideo}
      />
    </div>
  )
}

export default PortfolioSection