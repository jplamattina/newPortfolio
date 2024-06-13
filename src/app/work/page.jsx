/* eslint-disable multiline-ternary */
'use client'

import React, { useRef, useState } from 'react'
import { Roboto, Karantina } from 'next/font/google'
import { motion } from 'framer-motion'
import './work.css'
import FirstJob from './../components/workSection/firstJob/FirstJob'
import SecondJob from './../components/workSection/secondJob/SecondJob'
import ThirdJob from '../components/workSection/thirdJob/ThirdJob'

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

const Works = () => {
  const [expandedSection, setExpandedSection] = useState('works')

  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null)
  }

  const expandSection = (sectionId) => {
    console.log('sectionid', sectionId)
    setExpandedSection(sectionId)
  }

  const goBack = () => {
    setExpandedSection('works')
  }
  console.log('expandedSection', expandedSection)

  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

  return (
    <div className='container'>
      <div className={`viewport-container-work ${roboto.className}`}>
        <section className='main-header-work'>
          <h2 className='color-text'>work</h2>
        </section>
        <main className='main-work-container'>
          {expandedSection === 'works' ? (
            <>
              {/* Actual Work */}
              <motion.section
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={transition}
                whileHover={{
                  boxShadow: '0 20px 30px rgba(64, 60, 60, 1)'
                }}
                exit={{ opacity: 0 }} className={`toggle-card-1 ${expandedSection === 'section1' ? 'expanded' : ''}`} ref={sectionRefs.section1}
              >
                <div className={`toggle-number-card  ${karantina.className}`}>
                  <h1 className='number-title'>01</h1>
                </div>
                <div className='toggle-title-card'>
                  <div className='titles-desc'>
                    <h1 className='title-work'>Accenture</h1>
                    <h2 className='subtitle-work'>Software Engineer Analytic</h2>
                  </div>
                </div>
                <div className='toggle-button-card'>
                  <button className='toggle-button-figure' onClick={() => expandSection('section1')}>+
                  </button>
                </div>
              </motion.section>
              {/* 2nd Work */}
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
                whileHover={{
                  boxShadow: '0 0 30px rgba(64, 60, 60, 1)',
                  transition: { duration: 0.5 }
                }}
                transition={{ ...transition, delay: 0.15 }} className={`toggle-card-2 ${expandedSection === 'section2' ? 'expanded' : ''}`} ref={sectionRefs.section2}
              >
                <div className={`toggle-number-card  ${karantina.className}`}>
                  <h1 className='number-title'>02</h1>
                </div>
                <div className='toggle-title-card'>
                  <div className='titles-desc'>
                    <h1 className='title-work'>TallerV3D</h1>
                    <h2 className='subtitle-work'>Frontend</h2>
                  </div>
                </div>
                <div className='toggle-button-card '>
                  <button className='toggle-button-figure' onClick={() => expandSection('section2')}>+
                  </button>
                </div>
              </motion.section>
              {/* 3rd Work */}
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
                transition={{ ...transition, delay: 0.3 }}
                className={`toggle-card-3 ${expandedSection === 'section3' ? 'expanded' : ''}`} ref={sectionRefs.section3}
                whileHover={{
                  boxShadow: '0 -20px 30px rgba(64, 60, 60, 1)'
                }}
              >
                <div className={`toggle-number-card  ${karantina.className}`}>
                  <h1 className='number-title'>03</h1>
                </div>
                <div className='toggle-title-card'>
                  <div className='titles-desc'>
                    <h1 className='title-work'>GCBA</h1>
                    <h2 className='subtitle-work'>Architect</h2>
                  </div>
                </div>
                <div className='toggle-button-card'>
                  <button className='toggle-button-figure' onClick={() => expandSection('section3')}>+
                  </button>
                </div>
              </motion.section>
            </>
          ) : expandedSection === 'section1' ? <FirstJob onBack={goBack} />
            : expandedSection === 'section2' ? <SecondJob onBack={goBack} />
              : expandedSection === 'section3' ? <ThirdJob onBack={goBack} />
                : null}
        </main>
        <footer className='main-footer-work'>
          <h2 className='color-text'>123</h2>
          <h2 className='color-text'>last visit: Buenos Aires, Argentina</h2>
        </footer>
      </div>
    </div>
  )
}

export default Works
