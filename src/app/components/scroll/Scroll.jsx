// components/HorizontalScroll.js
import Link from 'next/link'
import './scroll.css'

const HorizontalScroll = () => {
  return (
    <div className='horizontal-scroll'>
      <Link href='/work' />
      <Link href='/craft' />
      <Link href='/ideas' />
    </div>
  )
}

export default HorizontalScroll
