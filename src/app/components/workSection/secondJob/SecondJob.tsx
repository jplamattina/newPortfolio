'use client'

import React from 'react'
import './secondJob.css'
import { Roboto, Karantina } from 'next/font/google'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Accenture from './../../../../assests/job/Accenture.svg'
import AssetsWork from '../assetswork'

const roboto = Roboto({
  weight: ['300', '400', '700'],
  style: ['normal'],
  subsets: ['latin']
})

const karantina = Karantina({
  weight: ['300', '400', '700'],
  style: ['normal'],
  subsets: ['latin']
})

const SecondJob = ({ onBack }) => {
  const startDate = new Date('2020-05-17')
  const todayDate = new Date('2021-05-17')
  const yearsDifference = todayDate.getFullYear() - startDate.getFullYear()

  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
  return (
    <div className='container'>
      <div className={`viewport-container-work ${roboto.className}`}>
        <main className='main-work-container'>
          {/* Actual Work */}
          <motion.section
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            exit={{ opacity: 0 }} className='toggle-card-1'
          >
            <div className={`toggle-number-card-second-job  ${karantina.className}`}>
              <h1 className='number-title'>01</h1>
            </div>
            <div className='toggle-title-card-second-job'>
              <div className='titles-desc'>
                <h1 className='title-work-secondJob'>Frontend Developer</h1>
                <h2 className='subtitle-work'>At TallerV3D</h2>
              </div>
            </div>
            <div className='toggle-button-card-second-job'>
              <button className='toggle-button-figure' onClick={onBack}>+
              </button>
            </div>
          </motion.section>
          {/* 2do Section */}
          <motion.div
            initial={{ opacity: 0, y: 1000 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ ...transition, delay: 0.15 }} className='line'
          />
          <motion.section
            initial={{ opacity: 0, y: 1000 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ ...transition, delay: 0.15 }} className='toggle-secondjob-card-2'
          >
            <div className='expertise-section-container'>
              <h2 className='title-expertise-section'>Expertise</h2>
            </div>
            <div className='expertise-section-description-container'>
              <div className={`toggle-number-card-second-job  ${karantina.className}`}>
                <Image
                  src={Accenture}
                  alt='Accenture'
                  width={250}
                  height={250}
                />
              </div>
              <div className='toggle-years-secondJob-card'>
                <h2 className='number-year-secondJob-card'>+{yearsDifference}</h2>
                <h3 className='text-year-secondjob-card'>years</h3>
              </div>
              <div className='toggle-description-secondJob-card'>
                <ul className='title-description-text'>
                  <li>
                    <h2 className='job-title'>Frontend Developer - Mayo 2020 - Mayo 2021</h2>
                    <p className='description-job'>
                      Frontend developer working as a freelance implementing web design and mobile development applying agile methodology (Scrum).
                      In this position I have applied the knowledge acquired throughout my career as a software engineer using the latest technologies.
                      In charge of UX/UI development and frontend technology implementation.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>
          {/* 3do Section */}
          <motion.section
            initial={{ opacity: 0, y: 1000 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ ...transition, delay: 0.3 }}
            className='toggle-secondJob-card-3'
          >
            <div className='expertise-section-container'>
              <h2 className='title-expertise-section'>TechStack</h2>
            </div>
            <div className='expertise-section-description-container'>
              <ul className='wrapper-second-job'>
                {AssetsWork.map((item, index) => (
                  <li key={index}>
                    <Image className={`item-second-job item-second-job${index + 1}`} src={item} alt={`icon-${index}`} />
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  )
}

export default SecondJob
