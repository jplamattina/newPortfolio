import React from 'react'
import '../work/work.css'
import { Roboto, Karantina } from 'next/font/google'

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

const Work = () => {
  return (
    <div className='container'>
      <div className={`viewport-container-work ${roboto.className}`}>
        <section className='main-header-work'>
          <h2 className='color-text'>WORK</h2>
        </section>
        <main className='main-work-container'>
          <section className='toggle-card-1'>
            <div className={`toggle-number-card  ${karantina.className}`}><h1>01</h1></div>
            <div className='toggle-title-card'><h1>Accenture</h1></div>
            <div className='toggle-button-card '><button className='toggle-button-figure'>+</button></div>
          </section>
          <section className='toggle-card-2'>
            <div className={`toggle-number-card  ${karantina.className}`}><h1>02</h1></div>
            <div className='toggle-title-card'><h1>Taller V3D</h1></div>
            <div className='toggle-button-card '><button className='toggle-button-figure'>+</button></div>
          </section>
          <section className='toggle-card-3'>
            <div className={`toggle-number-card  ${karantina.className}`}><h1>03</h1></div>
            <div className='toggle-title-card'><h1>GCBA</h1></div>
            <div className='toggle-button-card '><button className='toggle-button-figure'>+</button></div>
          </section>
        </main>
        <footer className='main-footer-work'>
          <h2 className='color-text'>123</h2>
          <h2 className='color-text'>last visit: Buenos Aires, Argentina</h2>
        </footer>
      </div>
    </div>
  )
}
export default Work
