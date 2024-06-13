// import Navbar from './components/Navbar'
'use client'
import { AnimatePresence } from 'framer-motion'

export default function WorkLayout ({ children }) {
  return (
    <>
      <AnimatePresence mode='wait'>
        {children}
      </AnimatePresence>
    </>
  )
}
