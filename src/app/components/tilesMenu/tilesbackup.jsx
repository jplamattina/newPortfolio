'use client'

import { useEffect, useState } from 'react'
import '../tilesMenu/tiles.css'
import { Karantina } from 'next/font/google'
import Image from 'next/image'
import face from './../../../assests/face-2.svg'
import faceShadow from './../../../assests/face-shadow.svg'

const karantina = Karantina({
  weight: ['300', '400', '700'],
  style: ['normal'],
  subsets: ['latin']
})

const Tiles = () => {
  const [showFace, setShowFace] = useState(false)
  const [animationDisplay, setAnimationDisplay] = useState('disabledFace')
  const [animationShadowDisplay, setAnimationShadowDisplay] = useState('disabledFace')
  const [resolution, setResolution] = useState('')
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  const width = window.innerWidth
  const height = window.innerHeight
  const resolucion = `${width}x${height}`

  useEffect(() => {
    setResolution(resolucion)
  }, [resolucion])

  const clockTime = time.toString()
  const formattedTime = clockTime.slice(16, 24)

  const handleContactInformation = () => {
    setShowFace(!showFace)
    setAnimationDisplay('handleFaceContactBackPosition')
    setAnimationShadowDisplay('handleShadowFaceBackPosition')
  }

  useEffect(() => {
    window.addEventListener('wheel', (event) => {})
    onwheel = (event) => { console.log('event', event) }
  }, [])

  return (
    <div className={`container-viewport ${karantina.className}`}>
      <div className='main-header'>
        <h2 className='color-text'>{formattedTime}</h2>
      </div>
      <div className='main-tild-container'>
        <div className='container-grid'>
          <div className='tild1 grid-col-span-3 grid-row-span-2'>
            <header className='tild1-header-space'>
              <h1 className='text-title'>JUAN PABLO LA MATTINA</h1>
            </header>
            <div className='tild1-section-space'>
              <section className='text-middle'>
                <p>I grew up professionally in the field of programming.
                  I’m graduated at FADU – Buenos Aires University,
                  with strong judgment for design, about space living and the passion about resolve problems.
                </p>
              </section>
              <section className='button-middle-section'>
                <button className='button-tild-1' onClick={handleContactInformation}>CONTACT</button>                <button className='button-tild-1'>INFO</button>
              </section>
            </div>
            <footer className='footer-title-bottom'>
              <h1>DEVELOPER-DEVELOPER-DEVELOPER-DEVELOPER-DEVELOPER</h1>
            </footer>
            {
              showFace
                ? (
                  <>
                    <Image
                      src={faceShadow}
                      className='handleShadowFace'
                      id='handleFaceContactId'
                      alt='contacto'
                    />
                    <Image
                      src={face}
                      className='handleFaceContact'
                      id='handleFaceContactId'
                      alt='contacto'
                    />
                  </>
                  )
                : (
                  <>
                    <Image
                      src={faceShadow}
                      className={animationShadowDisplay}
                      id='handleFaceContactId'
                      alt='contacto'
                    />
                    <Image
                      src={face}
                      className={animationDisplay}
                      id='handleFaceContactId'
                      alt='contacto'
                    />
                  </>
                  )
            }

          </div>
          <div className='tild2 text-align-end grid-col-span-2 '>
            <section>
              <h1 className='text-tild-title'>WORK</h1>
            </section>
          </div>
          <div className='tild3 text-align-end grid-col-span-2'>
            <section>
              <h1 className='text-tild-title'>PROJECTS</h1>
            </section>
          </div>
          {showFace
            ? (
              <>
                <div className='tild4 text-align-end'>
                  <section>
                    <h1 className='text-tild-title'>MAIL</h1>
                  </section>
                </div>
                <div className='tild5-expanded text-align-end grid-col-span-2 '>
                  <section>
                    <h1 className='text-tild-title'>SKILLS</h1>
                  </section>
                </div>
              </>
              )
            : (
              <div className='tild5 text-align-end grid-col-span-3 '>
                <section>
                  <h1 className='text-tild-title'>SKILLS</h1>
                </section>
              </div>
              )}
          <div className='tild6 text-align-end'>
            <section>
              <h1 className='text-tild-title'>CRAFT</h1>
            </section>
          </div>
          <div className='tild7 text-align-end  '>
            <section>
              <h1 className='text-tild-title'>ART</h1>
            </section>
          </div>
        </div>
      </div>
      <div className='main-footer'>
        <h2 className='color-text'>{resolution}</h2>
        <h2 className='color-text'>last visit: Buenos Aires, Argentina</h2>
      </div>
    </div>
  )
}

export default Tiles
