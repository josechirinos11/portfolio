"use client"
import React from 'react';

import styles from '@/styles/SkillSection.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import Image from 'next/image'
import imgNext from '@/assets/next.png'
import imgGrpahql from '@/assets/graphql.png'
import imgReactNative from '@/assets/reactnative.png'
import imgNode from '@/assets/node.png'

import imgGit from '@/assets/git.png'
import imgReact from '@/assets/react.png'
import imgJavascript from '@/assets/javascript.png'
import imgMern from '@/assets/mern.png'
import { SiDelphi, SiOracle, SiTypescript, SiMysql, SiAngular, SiGo } from 'react-icons/si'



import './ProjectSwiper.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const Projects = () => {
  return (
    <div className={styles.projectdiv}>
      <h1>Mis Habilidades</h1>

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
            <div className={styles.projectcard}>
              <h1>REACT</h1>
              <Image src={imgReact} className={styles.imgproyecto} alt="imgproyecto" quality={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>JAVASCRIPT</h1>
              <Image src={imgJavascript} className={styles.imgproyecto} alt="imgproyecto" quality={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>TYPESCRIPT</h1>
              <SiTypescript size={120} color="#3178C6" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>GRAPHQL</h1>
              <Image src={imgGrpahql} className={styles.imgproyecto} alt="imgproyecto" quality={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>REACT NATIVE</h1>
              <Image src={imgReactNative} className={styles.imgproyecto} alt="imgproyecto" quality={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>NODEJS</h1>
              <Image src={imgNode} className={styles.imgproyecto} alt="imgproyecto" quality={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>NEXT</h1>
              <Image src={imgNext} className={styles.imgproyecto} alt="imgproyecto" quality={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>MERN</h1>
              <Image src={imgMern} className={styles.imgproyecto} alt="imgproyecto" quality={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>GIT</h1>
              <Image src={imgGit} className={styles.imgproyecto} alt="imgproyecto" quality={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>DELPHI</h1>
              <SiDelphi size={120} color="#E42627" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>PL/SQL</h1>
              <SiOracle size={120} color="#F80000" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>ANGULAR</h1>
              <SiAngular size={120} color="#DD0031" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>GO</h1>
              <SiGo size={120} color="#00ADD8" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>MYSQL</h1>
              <SiMysql size={120} color="#4479A1" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Projects
