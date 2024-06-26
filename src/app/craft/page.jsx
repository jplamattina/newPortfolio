'use client'

import React, { useEffect, useState } from 'react'
import { Karantina, Roboto } from 'next/font/google'
import Image from 'next/image'
import face from './../../assests/face-2.svg'
import './craft.css'
import Profile from './../components/about/Profile'

const karantina = Karantina({
  weight: ['300', '400', '700'],
  style: ['normal'],
  subsets: ['latin']
})

const roboto = Roboto({
  weight: ['300', '400', '700'],
  style: ['normal'],
  subsets: ['latin']
})

const Craft = () => {
  const [selectedProfile, setSelectedProfile] = useState('developer')
  const [time, setTime] = useState(new Date())

  const clockTime = time.toString()
  const formattedTime = clockTime.slice(16, 24)

  const handleProfile = (profile) => {
    console.log('profile:', profile)
    setSelectedProfile(profile)
  }
  const goBack = () => {
    setSelectedProfile('developer')
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className={`container-craft ${karantina.className}`}>
      <div className={`viewport-container-craft ${roboto.className}`}>
        <section className='main-header-craft'>
          <div className='main-header'>
            <h2 className='color-text'>{formattedTime}</h2>
          </div>
        </section>
        <main className='main-craft-container'>
          <>
            {selectedProfile === 'developer'
              ? (
                <>
                  <section className='top-section-craft'>
                    <div className={`title-number-1 ${karantina.className}`}>
                      <h1>Developer</h1>
                    </div>
                    <div className={`title-number-2 ${karantina.className}`}>
                      <h1>01</h1>
                    </div>
                  </section>
                  <section className='main-section-face-title'>
                    <button
                      className={`button-about ${karantina.className}`}
                      onClick={() => handleProfile('architect')}
                    >
                      {'<'}
                    </button>
                    <div className='face-section-container'>
                      <div className='circle-background'>
                        <Image
                          src={face}
                          className='handleFace'
                          id='handleFaceProfessional'
                          alt='contacto'
                        />
                      </div>
                    </div>
                    <div className={`description-1 ${karantina.className}`}>
                      <h1 className='principal-title'>+3 YEARS EXP</h1>
                      <h1 className='second-titles'>EDUCATION</h1>
                      <ul className='second-titles-descriptions'>
                        <li>IT MASTER ACADEMY</li>
                        <ul className='second-titles-descriptions'>
                          <li>Full Stack developer career</li>
                          <li>Java - course</li>
                        </ul>
                        <li>CODER HOUSE</li>
                        <ul className='second-titles-descriptions'>
                          <li>Backend Programming I: Advanced Backend Development</li>
                          <li>React Native</li>
                        </ul>
                      </ul>
                    </div>
                    <button
                      className={`button-about ${karantina.className}`}
                      onClick={() => handleProfile('architect')}
                    >
                      {'>'}
                    </button>
                  </section>
                </>
                )
              : <Profile onBack={goBack} />}
          </>
        </main>
      </div>
    </div>
  )
}

export default Craft
