'use client'

import React from 'react'
import './firstJob.css'
import { Roboto, Karantina } from 'next/font/google'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Accenture from './../../../../assests/job/Accenture.svg'

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

const FirstJob = ({ onBack }) => {
  const startDate = new Date('2021-05-17')
  const todayDate = new Date()
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
            <div className={`toggle-number-card-first-job  ${karantina.className}`}>
              <h1 className='number-title'>01</h1>
            </div>
            <div className='toggle-title-card-first-job'>
              <div className='titles-desc'>
                <h1 className='title-work-firstJob'>Software Engineer</h1>
                <h2 className='subtitle-work'>At Accenture</h2>
              </div>
            </div>
            <div className='toggle-button-card-first-job'>
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
            transition={{ ...transition, delay: 0.15 }} className='toggle-firstjob-card-2'
          >
            <div className='expertise-section-container'>
              <h2 className='title-expertise-section'>Expertise</h2>
            </div>
            <div className='expertise-section-description-container'>
              <div className={`toggle-image-card-first-job  ${karantina.className}`}>
                <Image
                  src={Accenture}
                  alt='Accenture'
                  width={250}
                  height={250}
                />
              </div>
              <div className='toggle-years-firstJob-card'>
                <h2 className='number-year-firstJob-card'>+{yearsDifference}</h2>
                <h3 className='text-year-firstjob-card'>years</h3>
              </div>
              <div className='toggle-description-firstJob-card'>
                <ul className='title-description-text'>
                  <li>
                    <h2 className='job-title'>Software Engineer Analyst - Mayo 2021 - Present</h2>
                    <p className='description-job'>
                      Full stack software engineer in the development department responsible for the design and
                      maintenance of the web application for Payroll in North America, including Canada and Puerto Rico.
                      Member of an internationally distributed team that works applying an agile (Scrum) development.
                    </p>
                    <p className='description-job'>
                      Different technologies and tools to achieve the objectives where needed: Node Js,
                      React Js, JavaScript, TypeScript, AWS, GitHub, SQL Server,
                      CSS, HTML, Git, Active Directory and others
                    </p>
                  </li>
                  <li>
                    <h2 className='job-title'>Software Engineer Associate - Mayo 2021 - Mayo 2022</h2>
                    <p className='description-job'>
                      I started at Accenture as a Jr. Software Engineer (full stack)
                      for the development department. SEGIOR AGREGAMDP OMFPR,ASCPOM ASDKAKDAKSDAKSDAD
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
            className='toggle-firstJob-card-3'
          >
            <div className='expertise-section-container'>
              <h2 className='title-expertise-section'>TechStack</h2>
            </div>
            <div className='expertise-section-description-container'>
              <p>ACA VAN TODO EL STADCK DE TECH</p>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  )
}

export default FirstJob
