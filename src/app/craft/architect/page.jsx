'use client'

import React, { useEffect, useState } from 'react'
import { Karantina, Roboto } from 'next/font/google'
import Image from 'next/image'
import face from './../../../assests/face.svg'
import './architect.css'
import Link from 'next/link'

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
  const [time, setTime] = useState(new Date())

  const clockTime = time.toString()
  const formattedTime = clockTime.slice(16, 24)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className={`container-architect ${karantina.className}`}>
      <div className={`viewport-container-architect ${roboto.className}`}>
        <section className='main-header-architect'>
          <div className='main-header'>
            <h2 className='color-text'>{formattedTime}</h2>
          </div>
        </section>
        <main className='main-architect-container'>
          <section className='top-section-architect'>
            <div className={`title-number-1  ${karantina.className}`}><h1>Architect</h1></div>
            <div className={`title-number-2  ${karantina.className}`}><h1>02</h1></div>
          </section>
          <section className='main-section-face-title'>
            <Link className='link-architect' href='/craft'>
              <button className={`button-about ${karantina.className}`}>{'<'}</button>
            </Link>
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
            <Link className='link-architect' href='/craft'>
              <button className={`button-about ${karantina.className}`}>{'>'}</button>
            </Link>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Craft
