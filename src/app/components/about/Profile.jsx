'use client'

import React from 'react'
import { Karantina } from 'next/font/google'
import Image from 'next/image'
import face from './../../../assests/face-2.svg'
import './profile.css'

const karantina = Karantina({
  weight: ['300', '400', '700'],
  style: ['normal'],
  subsets: ['latin']
})

// const roboto = Roboto({
//   weight: ['300', '400', '700'],
//   style: ['normal'],
//   subsets: ['latin']
// })

const Profile = ({ onBack }) => {
  return (
    <main className='main-architect-container'>
      <section className='top-section-architect'>
        <div className={`title-number-1  ${karantina.className}`}><h1>Architect</h1></div>
        <div className={`title-number-2  ${karantina.className}`}><h1>02</h1></div>
      </section>
      <section className='main-section-face-title'>
        <button className={`button-about ${karantina.className}`} onClick={onBack}>
          {'<'}
        </button>
        <div className='face-section-container'>
          <div className='circle-background-architect'>
            <Image
              src={face}
              className='handleFace'
              id='handleFaceProfessional'
              alt='contacto'
            />
          </div>
        </div>
        <div className={`description-1  ${karantina.className}`}>
          <h1 className='principal-title'>+5 YEARS EXP</h1>
          <h1 className='second-titles'>EDUCATION</h1>
          <h2 className='second-titles-descriptions'>UNIVERSIDAD DE BUENOS AIRES</h2>
        </div>
        <button className={`button-about ${karantina.className}`} onClick={onBack}>
          {'>'}
        </button>
      </section>
    </main>
  )
}

export default Profile
