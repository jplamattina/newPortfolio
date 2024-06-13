'use client'
import React, { useState, createContext, useContext } from 'react'

const ContextPosition = createContext(null)
// pasar un Estado entre rutas
export function PositionProvider ({ children }) {
  const [position, setPosition] = useState([])
  return (
    <ContextPosition.Provider value={[position, setPosition]}>
      {children}
    </ContextPosition.Provider>
  )
}

export const usePosition = () => useContext(ContextPosition)
