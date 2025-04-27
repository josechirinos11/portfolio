"use client"
import React, { useRef, useState } from 'react';

import styles from '@/styles/ProjectSection.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './ProjectSwiper.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import Image from 'next/image'
import imgNext from '@/assets/CapturaNext.png'
import imgGrpahql from '@/assets/reactYouApp.png'
import imgReactNative from '@/assets/reactNativeYouApp.png'
import imgNode from '@/assets/CapturaNode.png'




const Projects = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [descp, setDescp] = useState('');
  const [tec, setTec] = useState('');
  const [enlace, setEnlace] = useState('');
  const [imagen, setImagen] = useState('');

  const handleOpenModal = (proyecto: { proyecto: any; descripcion: any; tecnologias: any; enlace: any; imagen: any; }) => {
    console.log('modal  ', proyecto.proyecto)
    console.log('modal  ', proyecto.descripcion)
    console.log('modal  ', proyecto.tecnologias)
    console.log('modal  ', proyecto.enlace)
    setSelectedProject(proyecto.proyecto);
    setDescp(proyecto.descripcion)
    setTec(proyecto.tecnologias)
    setEnlace(proyecto.enlace)
    setImagen(proyecto.imagen);
    setShowModal(true);
  }
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.projectdiv}>
      <h1>Proyecto</h1>
     <br/> 
      <h2 className={styles.titulo}>
        <span className={styles.orange}>Aun en </span>
        <span className={styles.blue}>Desarrollo</span>
      </h2>
      <p className={styles.parrafo}>
        Estoy en el desarrollo una aplicación llamada YouApp, el cual tiene todo lo que se requiere para un perfil
         FullStack una solución integral . El backend, construido con Nodejs y
          MongoDB. El frontend, desarrollado
           en React.js, proporciona una experiencia de usuario 
           fluida y dinámica. Completando el ecosistema, la versión móvil está creada en React Native, asegurando una aplicación
            multiplataforma de alto rendimiento.
      </p>
      <a href="https://app-felman-frontend.vercel.app/login" target="_blank" className={styles.enlace}>
        App MERN STACK
      </a>
      <a href="https://proyectoceac-1.onrender.com/index.php?controller=auth&action=login" target="_blank" className={styles.enlace}>
        APP con PHP y SQL
      </a>
      <div className='projectswipercontainer'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"



        >
          <SwiperSlide>
            <div className={styles.projectcard}
              onClick={() => handleOpenModal({
                proyecto: '1',
                descripcion: 'Desarrollado utilizando React Native. Proporciona una experiencia de usuario fluida y nativa en dispositivos Android. Aprovechan las funcionalidades nativas del dispositivo, como la cámara, el GPS y las notificaciones push.',

                tecnologias: 'React Native y MongooDB',
                enlace: 'https://github.com/josechirinos11/AppNativeFelman',
                imagen: imgReactNative
              })}
            >
              <h1>Projecto YouApp</h1>
              <h1>con</h1>
              <h1>React Native</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}
              onClick={() => handleOpenModal({
                proyecto: '2',
                descripcion: 'Con una base de datos MongoDB para gestionar la comunicación entre el cliente y el servidor. Esta aplicacion busca poder dar una herramienta a las empresas de fabrica y servivios.',
                tecnologias: 'React y MongoDB',
                enlace: 'https://github.com/josechirinos11/AppFelmanFrontend',
                imagen: imgGrpahql
              })}
            >
              <h1>Projecto YouApp</h1>
              <h1></h1>
              <h1>Frontend</h1>
              <h1> con </h1>
              <h1>React</h1>
            </div>
          </SwiperSlide>
      
          <SwiperSlide>
            <div className={styles.projectcard}
              onClick={() => handleOpenModal({
                proyecto: '4',
                descripcion: 'Es todo el backend ocupado para el frontend web y movil, usando express y mongoose para la conecion de base de datos.',
                tecnologias: 'Nodejs, express',
                enlace: 'https://github.com/josechirinos11/AppFelmanBackend',
                imagen: imgNext
              })}
            >
              <h1>Projecto YouApp</h1>
              <h1>Backend</h1>
              <h1>Node y Mongoose</h1>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>

      {showModal && (
        <div className={styles.modalBackground}
        >
          <div className={styles.modalContent}
          onClick={handleCloseModal}
          >
            <h2>Tecnologias: {tec}</h2>
            <h2 className={styles.titulo}>
              <span className={styles.orange}>My</span>
              <span className={styles.blue}>Company</span>
            </h2>
            <p>Descripción: {descp}</p>

            <div className={styles.imageContainer}>
              <Image src={imagen} className={styles.imgproyecto} alt="imgproyecto" quality={100} />
            </div>
            <p>
              GitHub:
              <a href={enlace} target="_blank" rel="noopener noreferrer">Repositorio</a>
            </p>
            <button className={styles.boton} onClick={handleCloseModal}>Cerrar</button>
          </div>
        </div>
      )}




    </div>
  )
}

export default Projects