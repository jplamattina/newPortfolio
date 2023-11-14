'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import home from '@/assests/home.svg'
import brush from '@/assests/brush.svg'
import lightbolt from '@/assests/lightbolt.svg'
import twitter from '@/assests/twitter-x.svg'
import mail from '@/assests/mail.svg'
import github from '@/assests/github.svg'
import linkedin from '@/assests/linkedin.svg'
import theme from '@/assests/night-light.svg'
import '../../app/components/navbar.css'

export default function Navbar () {
  useEffect(() => {
    const dockContainer = document.querySelector('.dock')
    const dockItems = dockContainer.querySelectorAll('.dock-item')
    const defaultItemScale = 1
    const hoverItemScale = 2.5
    const neighborItemScale = 2

    const defaultMargin = '10px'
    const expandedMargin = '40px'

    const updateDockItems = () => {
      dockItems.forEach((item, index) => {
        let scale = defaultItemScale
        let margin = defaultMargin

        if (item.isHovered) {
          scale = hoverItemScale
          margin = expandedMargin
        } else if (item.isNeighbor) {
          scale = neighborItemScale
          margin = expandedMargin
        }

        item.style.transform = `scale(${scale})`
        item.style.margin = `0 ${margin}`
      })
    }

    dockItems.forEach(item => {
      item.addEventListener('mousemove', () => {
        dockItems.forEach(otherItem => {
          otherItem.isHovered = otherItem === item
          otherItem.isNeighbor = Math.abs(
            Array.from(dockItems).indexOf(otherItem) -
          Array.from(dockItems).indexOf(item) === 1 || Array.from(dockItems).indexOf(otherItem) -
          Array.from(dockItems).indexOf(item) === -1
          )
        })
        updateDockItems()
      })
    })
    dockContainer.addEventListener('mouseleave', () => {
      dockItems.forEach(item => {
        item.isHovered = item.isNeighbor = false
      })
      updateDockItems()
    })
  }, [])

  return (
    <container className='container'>
      {/* use Router para un boton que lleve a una ruta, twitter y Linkedin usar Link */}
      <nav className='dock'>
        <div>
          <Link href='/' name='home-icon'>
            <Image className='dock-item' id='home-img' src={home} alt='home-icon' />
          </Link>
        </div>
        <div>
          <Link href='/work' name='work-icon'>
            <Image className='dock-item' id='brush-img' src={brush} alt='work-icon' />
          </Link>
        </div>
        <div>
          <Link href='/craft' name='craft-icon'>
            <Image className='dock-item' id='craft-img' src={lightbolt} alt='craft-icon' />
          </Link>
        </div>
        <div>
          <Link href='/twitter' name='twitter-icon'>
            <Image className='dock-item' id='twitter-img' src={twitter} alt='twitter-icon' />
          </Link>
        </div>
        <div>
          <Link href='/github' name='github-icon'>
            <Image className='dock-item' id='github-img' src={github} alt='github-icon' />
          </Link>
        </div>
        <div>
          <Link href='/linkedin' name='linkedin-icon'>
            <Image className='dock-item' id='linkedin-img' src={linkedin} alt='linkedin-icon' />
          </Link>
        </div>
        <div>
          <Link href='/Mail' name='Mail-icon'>
            <Image className='dock-item' id='mail-img' src={mail} alt='mail-icon' />
          </Link>
        </div>
        <div>
          <Link href='/darkmode' name='Theme-item'>
            <Image className='dock-item' id='theme-img' src={theme} alt='mail-icon' />
          </Link>
        </div>
      </nav>
    </container>
  )
}
