'use client'
import React, { useState, useRef, useEffect, useContext } from 'react'
import { Box, HStack } from '@chakra-ui/react'
import { motion, useSpring, useTransform } from 'framer-motion'

import { useMouse } from './MouseProvider'
import '../dock/dock.css'

const MotionBox = motion(Box)

type DockApi = {
  hovered: boolean;
  width: number | undefined;
};

const DockContext = React.createContext<DockApi | null>(null)

const useDock = () => {
  return useContext(DockContext)
}

export const Dock = ({ children }) => {
  const ref = useRef<HTMLDivElement>()
  const [hovered, setHovered] = useState(false)
  const [width, setWidth] = useState<number | undefined>()

  useEffect(() => {
    setWidth(ref.current?.clientWidth)
  }, [])

  return (
    <DockContext.Provider value={{ hovered, width }}>
      <HStack
        ref={ref}
        alignItems='flex-end'
        className='dock-container'
        spacing={2}
        onMouseOver={() => {
          setHovered(true)
        }}
        onMouseOut={() => {
          setHovered(false)
        }}
      >
        {children}
      </HStack>
    </DockContext.Provider>
  )
}

export const DockItem = ({ children }) => {
  const ref = React.useRef<HTMLDivElement>()
  const mouse = useMouse()
  const dock = useDock()
  const [elCenterX, setElCenterX] = React.useState<number | null>(null)

  const dimension = useTransform(mouse.position.x, (mouseX) => {
    return (
      48 +
      36 * Math.cos((((mouseX - elCenterX) / dock.width) * Math.PI) / 2) ** 12
    )
  })

  const spring = useSpring(48, {
    damping: 10,
    stiffness: 150,
    mass: 0.01
  })

  useEffect(() => {
    return dimension.on('change', (val) => {
      if (dock.hovered) {
        spring.set(val)
      } else {
        spring.set(48)
      }
    })
  }, [spring, dimension, dock.hovered])

  React.useEffect(() => {
    const rect = ref.current.getBoundingClientRect()
    setElCenterX(rect.x + rect.width / 2)
  }, [])

  // Agregar el event listener dentro de un useEffect para garantizar que ref.current esté definido
  useEffect(() => {
    if (!ref.current) return

    const handleResize = () => {
      const rect = ref.current.getBoundingClientRect()
      setElCenterX(rect.x + rect.width / 2)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Asegúrate de ejecutar esto solo una vez al montar

  return (
    <MotionBox
      className='dock-items'
      ref={ref}
      filter='saturate(0.9) brightness(0.9)'
      _hover={{ filter: ' saturate(1) brightness(1.12)' }}
      style={{
        width: spring,
        height: spring,
        transition: 'filter 0.05s'
      }}
    >
      {children}
    </MotionBox>
  )
}

export default Dock
