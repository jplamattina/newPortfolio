/* eslint-disable react/jsx-closing-tag-location */
'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import './art.css'
import Assets from './assets'

const Craft = () => {
  const [selectedImage, setSelectedImage] = useState()
  const [expandedImage, setExpandedImage] = useState(false)
  const [hiddenImage, setHiddenImage] = useState(true)

  const openImage = (index) => {
    setExpandedImage(true)
    setSelectedImage(index)
    setHiddenImage(false)
  }
  const backToCarousel = () => {
    setExpandedImage(false)
  }

  useEffect(() => {
    const images = document.getElementsByClassName('hidden-image')
    for (let i = 0; i < images.length; i++) {
      const image = images[i]
      const delay = i * 100
      setTimeout(() => {
        image.style.opacity = '1'
        image.style.visibility = 'visible'
        image.animate(
          [
            { transform: 'translateY(-1000px)' },
            { transform: 'translateY(0)' }

          ],
          {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-in-out'
          }
        )
      }, delay)
    }
  }, [])

  return (
    <div className='art-container'>
      {/* <--image-slider--> */}
      {expandedImage
        ? <div className='image-expanded-container'>
          <div className='content'>
            <a>{'<'}</a>
            <h1 className='title-text'>{Assets[selectedImage].title}</h1>
            <a>{'>'}</a>
          </div>
          <Image
            className='image-fit'
            src={Assets[selectedImage].image}
            id={`image-photo-${selectedImage}`}
            alt='contacto'
            draggable='false'
            priority='high'
            onClick={() => backToCarousel()}
          />

        </div>
        : <div className='carousel'>
          <div className='item'>
            {Assets.map((room, index) => {
              return (
                <div key={index}>
                  <Image
                    src={room.image}
                    className={hiddenImage ? 'hidden-image' : 'image'}
                    id={`image-photo-${index}`}
                    alt='contacto'
                    draggable='false'
                    priority='high'
                    onClick={() => openImage(index)}
                  />
                </div>
              )
            })}
          </div>
        </div>}
    </div>

  )
}

export default Craft
