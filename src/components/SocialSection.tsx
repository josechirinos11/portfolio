"use client"
import React from 'react'
import styles from '@/styles/SocialSection.module.css';
import { SocialIcon } from 'react-social-icons'

const SocialSection = () => {


  const handleOpenGmail = () => {
    const email = 'josechirinos11@gmail.com';
    const subject = encodeURIComponent('Asunto de tu correo');
    const body = encodeURIComponent('Contenido de tu correo');
    const gmailUrl = `https://mail.google.com/mail/u/1/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };



  return (
    <div className={styles.social}>
      

      <div className={styles.socialcard} onClick={handleOpenGmail}>
       
      
        <SocialIcon url="https://mail.google.com" style={{ height: 40, width: 40 }} />
        <p>josechirinos11@gmail.com</p>
      </div>

      <div className={styles.socialcard}
        onClick={() => window.open('https://www.linkedin.com/in/josechirinos11/', '_blank')}
      >
        <SocialIcon url="https://linkedin.com" style={{ height: 40, width: 40 }} />
        <p>Jose Chirinos</p>
      </div>

      <div className={styles.socialcard}
        onClick={() => window.open('https://github.com/josechirinos11', '_blank')}
      >
        <SocialIcon url="https://github.com" style={{ height: 40, width: 40 }} />
        <p>GitHub</p>
      </div>
    </div>


  )
}

export default SocialSection