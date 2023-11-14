'use client'

import React, { createContext, useContext, useMemo } from 'react'
import { useEventListener } from '@chakra-ui/react'
import { MotionValue, useMotionValue, useVelocity } from 'framer-motion'

// Track mouse position as motion values
const useMousePosition = () => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEventListener('mousemove', (e) => {
    x.set(e.clientX)
    y.set(e.clientY)
  })

  return useMemo(
    () => ({
      x,
      y
    }),
    [x, y]
  )
}

type Mouse = {
  position: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
  velocity: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
};

const MouseContext = createContext<Mouse | null>(null)

// By using react context here, we can avoid spamming window
// with mouse listeners every time we use a mouse hook.
export const MouseProvider = ({ children }) => {
  const { x, y } = useMousePosition()
  const velocityX = useVelocity(x)
  const velocityY = useVelocity(y)

  const mouse = useMemo(
    () => ({
      position: {
        x,
        y
      },
      velocity: {
        x: velocityX,
        y: velocityY
      }
    }),
    [x, y, velocityX, velocityY]
  )

  return (
    <MouseContext.Provider value={mouse}>{children}</MouseContext.Provider>
  )
}

export const useMouse = () => {
  return useContext(MouseContext)
}
