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
            <h1>3</h1>
            <p>Años<br></br> de Exériencia</p>

          </div>
        </div>

      </div>
      <Image src={mainImg} className={styles.mainimg} alt="mainimg" quality={100} />
      <div className={styles.maintextdiv}>
        <p>Yo soy un </p>
        <h1><span>&nbsp;</span>FULL STACK</h1>
        <h2>Desarrollador</h2>
      </div>
      <video src={'/smoke1.webm'} autoPlay loop muted
        className={styles.smokevideo}
      />
    </div>
  )
}

export default PortfolioSection