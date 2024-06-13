// import Navbar from './components/Navbar'
'use client'
import { AnimatePresence } from 'framer-motion'
import { PositionProvider } from './positionContext'
import { FirstPositionProvider } from './firstPositionContext'

export default function WorkLayout ({ children }) {
  return (
    <>
      <FirstPositionProvider>
        <PositionProvider>
          <AnimatePresence mode='wait'>
            {children}
          </AnimatePresence>
        </PositionProvider>
      </FirstPositionProvider>
    </>
  )
}
