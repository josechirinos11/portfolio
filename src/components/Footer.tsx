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
       
      </div>

      <div className={styles.right}>
  <h1>
    Be<br />
    able<br />
    <hr className={styles.line} /> {/* Línea horizontal */}
    Nunca parar<br /> de aprender
  </h1>
</div>
    </div>
  )
}

export default Footer
