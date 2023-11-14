'use client'

import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import { MouseProvider } from '../components/dock/MouseProvider'
import Dock, { DockItem } from '../components/dock/Dock'
import GradientCard from '../components/dock/GradientCard'
import { theme } from './dock/theme/index'
import Link from 'next/link'
import home from '../../assests/home.svg'
import brush from '../../assests/brush.svg'
import lightbolt from '../../assests/lightbolt.svg'
import twitter from '../../assests/twitter-x.svg'
import mail from '../../assests/mail.svg'
import github from '../../assests/github.svg'
import linkedin from '../../assests/linkedin.svg'
import darkMode from '../../assests/night-light.svg'

const Navbar = () => {
  return (
    <MouseProvider>
      <ChakraProvider theme={theme}>
        <Dock>
          <DockItem>
            <Link href='/'>
              <GradientCard src={home} />
            </Link>
          </DockItem>
          <DockItem>
            <Link href='/craft'>
              <GradientCard src={brush} />
            </Link>
          </DockItem>
          <DockItem>
            <Link href='/work'>
              <GradientCard src={lightbolt} />
            </Link>
          </DockItem>
          <DockItem>
            <GradientCard src={twitter} />
          </DockItem>
          <DockItem>
            <GradientCard src={mail} />
          </DockItem>
          <DockItem>
            <GradientCard src={github} />
          </DockItem>
          <DockItem>
            <GradientCard src={linkedin} />
          </DockItem>
          <DockItem>
            <GradientCard src={darkMode} />
          </DockItem>
        </Dock>
      </ChakraProvider>
    </MouseProvider>
  )
}

export default Navbar
