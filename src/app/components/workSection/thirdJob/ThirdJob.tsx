'use client'

import React from 'react'
import './thirdJob.css'
import { Roboto, Karantina } from 'next/font/google'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Accenture from './../../../../assests/job/Accenture.svg'
import AssetsArchitect from '../AssetsArchitect'

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

const ThirdJob = ({ onBack }) => {
  const startDate = new Date('2014-03-01')
  const todayDate = new Date('2019-05-17')
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
            <div className={`toggle-number-card-third-job  ${karantina.className}`}>
              <h1 className='number-title'>01</h1>
            </div>
            <div className='toggle-title-card-third-job'>
              <div className='titles-desc'>
                <h1 className='title-work-thirdJob'>Architect</h1>
                <h2 className='subtitle-work'>At Government  of Buenos Aires</h2>
              </div>
            </div>
            <div className='toggle-button-card-third-job'>
              <button className='toggle-button-figure' onClick={onBack}>+
              </button>
            </div>
          </motion.section>
          {/* 2do Section */}
          <motion.section
            initial={{ opacity: 0, y: 1000 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ ...transition, delay: 0.15 }} className='toggle-thirdjob-card-2'
          >
            <div className='expertise-section-container'>
              <h2 className='title-expertise-section'>Expertise</h2>
            </div>
            <div className='expertise-section-description-container'>
              <div className={`toggle-number-card-third-job  ${karantina.className}`}>
                <Image
                  src={Accenture}
                  alt='Accenture'
                  width={250}
                  height={250}
                />
              </div>
              <div className='toggle-years-thirdJob-card'>
                <h2 className='number-year-thirdJob-card'>+{yearsDifference}</h2>
                <h3 className='text-year-thirdjob-card'>years</h3>
              </div>
              <div className='toggle-description-thirdJob-card'>
                <ul className='title-description-text'>
                  <li>
                    <h2 className='job-title'>Architect - Feb 2018 - Present</h2>
                    <p className='description-job'>
                      - Carrying out projects and inspection of work in the
                      Green Centers.
                      - Technical assistance to industrial engineers for the
                      execution of Recycling Plants.
                      - Execution of detailed plans, calculation and budget,
                      public tenders, work start protocols, proyect and
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
            className='toggle-thirdJob-card-3'
          >
            <div className='expertise-section-container'>
              <h2 className='title-expertise-section'>TechStack</h2>
            </div>
            <div className='expertise-section-description-container'>
              <ul className='wrapper-third-job'>
                {AssetsArchitect.map((item, index) => (
                  <li key={index}>
                    <Image className={`item-third-job item-third-job${index + 1}`} src={item} alt={`icon-${index}`} />
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

export default ThirdJob
