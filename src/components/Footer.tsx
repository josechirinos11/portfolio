"use client"
import React, { useState } from 'react'
import styles from '@/styles/Footer.module.css';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto desde portafolio — ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`);
    window.location.href = `mailto:josechirinos11@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={styles.section4outermost}>
      <div className={styles.left}>
        <p>Si estás en busca de un desarrollador web o de aplicaciones,
        no dudes en contactarme
          <span>   josechirinos11@gmail.com</span>
        </p>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
          <textarea
            placeholder="Tu mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className={styles.textarea}
          />
          <button type="submit" className={styles.submitBtn}>Enviar mensaje</button>
        </form>
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
