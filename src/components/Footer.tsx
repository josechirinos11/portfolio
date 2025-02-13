import React from 'react'
import styles from '@/styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.section4outermost}>
      <div className={styles.left}>
        <p>Si estás en busca de un desarrollador web o de aplicaciones, 
        no dudes en contactarme
          <span>   josechirinos11@gmail.com</span>
        </p>
        <a href="https://app-felman-frontend.vercel.app/login" target="_blank" className={styles.enlace}>
        Aplicación MERN STACK
            </a>
      </div>

      <div className={styles.right}>
  <h1>
    Be<br />
    able<br />
    <hr className={styles.line} /> {/* Línea horizontal */}
    Nunca parar<br /> de aprender
  </h1>
  <p>No es mi lema, es de Platzi, pero lo uso todos los dias para fortalecer mi mente
        </p>
</div>

    </div>
  )
}

export default Footer
