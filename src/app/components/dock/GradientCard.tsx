import * as React from 'react'
import { Center } from '@chakra-ui/react'
import Image from 'next/image'

const GradientCard = ({ src }) => {
  return (
    <Center display='flex' pos='relative' h='100%' width='100%' overflow='hidden' transform='scale(1.25)'>
      <Image
        src={src}
        className='dock-img'
        alt='img'
      />
    </Center>
  )
}

export default GradientCard
