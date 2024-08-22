'use client'

import React, { useState, useEffect } from 'react'
import { Karantina, Roboto } from 'next/font/google'
import Image from 'next/image'
import face from '../../../assests/face-2.svg'
// import faceInverted from './../../assests/face-inverted.svg'
import './tiles.css'

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

const Tiles = () => {
  const [time, setTime] = useState(new Date())
  const [resolution, setResolution] = useState('')

  const width = window.innerWidth
  const height = window.innerHeight
  const resolucion = `${width}x${height}`

  const clockTime = time.toString()
  const formattedTime = clockTime.slice(16, 24)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    setResolution(resolucion)
  }, [resolucion])

  return (
    <div className={`container-tiles ${karantina.className}`}>
      <div className={`viewport-container-tiles ${roboto.className}`}>
        <main className='main-tiles-container'>
          <>
            <section className='main-header-tiles'>
              <h2 className='tiles-color-text'>{formattedTime}</h2>
            </section>
            <section className='tiles-main-section-face-title'>
              <div className='tiles-text-container'>
                <h2 className='tiles-text-title'>
                  Hi, i’m Juan Pablo!
                </h2>
                <h1 className='tiles-text-title-2'>Professional Software Engineer</h1>
                <h1 className='tiles-text-title-3'>+4years</h1>
              </div>
              <div className='tiles-section-container'>
                <div className='tiles-card-circle-background'>
                  <div className='card__front'>
                    <Image
                      src={face}
                      className='tiles-handleFace'
                      id='handleFaceProfessional'
                      alt='contacto'
                    />
                  </div>
                </div>
              </div>
            </section>
          </>
          <section className='main-footer'>
            <h2 className='tiles-color-text'>{resolution}</h2>
            <h2 className='tiles-color-text'>last visit: Buenos Aires, Argentina</h2>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Tiles
