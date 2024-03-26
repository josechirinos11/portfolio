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
import imgGrpahql from '@/assets/Captura.png'
import imgReactNative from '@/assets/CapturaReactNative.jpg'
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
      <h1>Muestra de Proyecto</h1>
      <h2 className={styles.titulo}>
        <span className={styles.orange}>My</span>
        <span className={styles.blue}>Company</span>
      </h2>
      <p className={styles.parrafo}>
        Estoy en el desarrollo una aplicación llamada MyCompany, el cual tiene todo lo que se requiere para un perfil FullStack una solución integral dividida en cuatro Partes fundamentales. El backend, construido con GraphQL y MongoDB, garantiza un manejo eficiente de los datos respaldado por tecnologías sólidas ocupo otra forma de hacer el backend con Node.js y Firebase. El frontend, desarrollado en React con Next.js, proporciona una experiencia de usuario fluida y dinámica. Completando el ecosistema, la versión móvil está creada en React Native, asegurando una aplicación multiplataforma de alto rendimiento.
      </p>
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
                descripcion: 'Este proyecto se centra en el desarrollo de una aplicación móvil utilizando React Native. Proporciona una experiencia de usuario fluida y nativa en dispositivos iOS y Android. Con React Native, se pueden crear aplicaciones móviles de alto rendimiento que aprovechan las funcionalidades nativas del dispositivo, como la cámara, el GPS y las notificaciones push.',

                tecnologias: 'React Native, Apollo Client, Storage',
                enlace: 'https://github.com/josechirinos11/myCompanyReactNavive',
                imagen: imgReactNative
              })}
            >
              <h1>Projecto</h1>
              <h1>con</h1>
              <h1>React Native</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}
              onClick={() => handleOpenModal({
                proyecto: '2',
                descripcion: 'Este proyecto implementa un servidor GraphQL que se comunica con una base de datos MongoDB para gestionar la comunicación entre el cliente y el servidor. GraphQL es un lenguaje de consulta y manipulación de datos que permite a los clientes solicitar solo los datos que necesitan, mientras que MongoDB es una base de datos NoSQL altamente escalable y flexible.',
                tecnologias: 'GraphQL, Apollo Server, MongoDB',
                enlace: 'https://github.com/josechirinos11/myCompanyGraphQL',
                imagen: imgGrpahql
              })}
            >
              <h1>Projecto</h1>
              <h1>con</h1>
              <h1>GraphQL</h1>
              <h1> y </h1>
              <h1>MongoDB</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}
              onClick={() => handleOpenModal({
                proyecto: '3',
                descripcion: 'En este proyecto, se utiliza Node.js tanto para el desarrollo del backend como del frontend, creando así una aplicación fullstack. El backend se comunica con la base de datos Firebase para almacenar y recuperar datos en tiempo real, mientras que las plantillas Handlebars se utilizan para generar las vistas del frontend. Firebase proporciona una base de datos en tiempo real, autenticación de usuarios, almacenamiento de archivos y más, lo que permite construir aplicaciones web complejas de manera rápida y eficiente.',
                tecnologias: 'Nodejs, Express.js, Firebase',
                enlace: 'https://github.com/josechirinos11/myCompanyNodejs',
                imagen: imgNode
              })}
            >
              <h1>Projecto</h1>
              <h1>con</h1>
              <h1>Nodejs y Firebase</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}
              onClick={() => handleOpenModal({
                proyecto: '4',
                descripcion: 'Este proyecto se enfoca en el desarrollo del frontend utilizando React con Next.js. Next.js es un framework de React que facilita la creación de aplicaciones web con características avanzadas, como el renderizado del lado del servidor y la generación estática de páginas. Con Next.js, se puede mejorar la velocidad de carga y la optimización del SEO de la aplicación web.',
                tecnologias: 'React, Nextjs, Apollo Client',
                enlace: 'https://github.com/josechirinos11/myCompanyNext',
                imagen: imgNext
              })}
            >
              <h1>Projecto</h1>
              <h1>con</h1>
              <h1>React y Nextjs</h1>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>

      {showModal && (
        <div className={styles.modalBackground}>
          <div className={styles.modalContent}>
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