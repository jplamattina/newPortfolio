'use client'
import React, { useState, createContext, useContext } from 'react'

const ContextFirstPosition = createContext(null)

export function FirstPositionProvider ({ children }) {
  const [firstPosition, setFirstPosition] = useState([])
  return (
    <ContextFirstPosition.Provider value={[firstPosition, setFirstPosition]}>
      {children}
    </ContextFirstPosition.Provider>
  )
}

export const useFirstPosition = () => useContext(ContextFirstPosition)
