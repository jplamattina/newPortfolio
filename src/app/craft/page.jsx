'use client'

import React, { useState } from 'react'
import { Karantina, Roboto } from 'next/font/google'
import Image from 'next/image'
import face from './../../assests/face-2.svg'
// import faceInverted from './../../assests/face-inverted.svg'
import faceArchitect from './../../assests/face-architect.svg'
import './craft.css'

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
  const [isFlipped, setIsFlipped] = useState(false)

  const handleProfile = (profile) => {
    console.log('profile:', profile)
    setSelectedProfile(profile)
    setIsFlipped((prev) => !prev)
  }

  return (
    <div className={`container-craft ${karantina.className}`}>
      <div className={`viewport-container-craft ${roboto.className}`}>
        <section className='main-header-craft'>
          <div className='main-header'>
            <h2 className='color-text'>Profile</h2>
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
                    <div className='button-section'>
                      <button
                        className={`button-about ${karantina.className}`}
                      >
                        <p className='button-text' onClick={() => handleProfile('architect')}>{'<'}</p>
                      </button>
                    </div>
                    <div className='face-section-container'>
                      <div className={`card-circle-background ${isFlipped ? 'is-flipped' : ''}`}>
                        <div className='card__front'>
                          <Image
                            src={face}
                            className='handleFace'
                            id='handleFaceProfessional'
                            alt='contacto'
                          />
                        </div>
                        <div className='card__back'>
                          <Image
                            src={faceArchitect}
                            className='handleFace'
                            id='handleFaceProfessional'
                            alt='contacto'
                          />
                        </div>
                      </div>
                    </div>
                    <div className={`description-1 ${karantina.className}`}>
                      <h1 className='principal-title'>+3 YEARS EXP</h1>
                      <h1 className='second-titles'>EDUCATION</h1>
                      <ul className='second-titles-descriptions'>
                        <li>IT MASTER ACADEMY</li>
                        <ul className='third-titles-descriptions'>
                          <li className='desciption-profile'>Full Stack developer career</li>
                          <li className='desciption-profile'>Java development</li>
                        </ul>
                        <li>CODER HOUSE</li>
                        <ul className='third-titles-descriptions'>
                          <li className='desciption-profile'>Advanced Backend Development</li>
                          <li className='desciption-profile'>React Native</li>
                        </ul>
                      </ul>
                    </div>
                    <div className='button-section'>
                      <button
                        className={`button-about ${karantina.className}`}
                        onClick={() => handleProfile('architect')}
                      >
                        <p className='button-text'>{'<'}</p>
                      </button>
                    </div>
                  </section>
                </>
                )
              : (
                <>
                  <section className='top-section-craft'>
                    <div className={`title-number-1 ${karantina.className}`}>
                      <h1>Architect</h1>
                    </div>
                    <div className={`title-number-2 ${karantina.className}`}>
                      <h1>02</h1>
                    </div>
                  </section>
                  <section className='main-section-face-title'>
                    <div className='button-section'>
                      <button
                        className={`button-about ${karantina.className}`}
                        onClick={() => handleProfile('developer')}
                      >
                        <p className='button-text'>{'<'}</p>
                      </button>
                    </div>
                    <div className='face-section-container'>
                      <div className={`card-circle-background ${isFlipped ? 'is-flipped' : ''}`}>
                        <div className='card__front'>
                          <Image
                            src={face}
                            className='handleFace'
                            id='handleFaceProfessional'
                            alt='contacto'
                          />
                        </div>
                        <div className='card__back'>
                          <Image
                            src={faceArchitect}
                            className='handleFace'
                            id='handleFaceProfessional'
                            alt='contacto'
                          />
                        </div>
                      </div>
                    </div>
                    <div className={`description-1 ${karantina.className}`}>
                      <h1 className='principal-title'>+5 YEARS EXP</h1>
                      <h1 className='second-titles'>EDUCATION</h1>
                      <ul className='second-titles-descriptions'>
                        <li>UNIVERSIDAD DE BUENOS AIRES</li>
                        <ul className='third-titles-descriptions'>
                          <li className='desciption-profile'>Architecture</li>
                        </ul>
                      </ul>
                    </div>
                    <div className='button-section'>
                      <button
                        className={`button-about ${karantina.className}`}
                        onClick={() => handleProfile('developer')}
                      >
                        <p className='button-text'>{'<'}</p>
                      </button>
                    </div>
                  </section>
                </>
                )}
          </>
        </main>
      </div>
    </div>
  )
}

export default Craft
