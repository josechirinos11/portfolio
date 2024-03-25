"use client"
import React, { useRef, useState } from 'react';

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



import './ProjectSwiper.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const Projects = () => {
  return (
    <div className={styles.projectdiv}>
      <h1>My Skills</h1>

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
        </Swiper>
      </div>
    </div>
  )
}

export default Projects