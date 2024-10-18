import React from 'react'

import ToTop from './ToTop.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faFacebook, faSpotify } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className='flex flex-row justify-center align-center items-center gap-3 bg-amber-200 w-full'>
      <a href='https://www.youtube.com/channel/UCPhvY1BXpxeamDwLGvnjIjQeferrer' rel='noreferrer'  target='_blank'>      <FontAwesomeIcon className='text-amber-400' icon={faYoutube}/>
      </a>
      <a href='https://www.instagram.com/bigtones.oto/' rel='noreferrer' target='_blank'>
      <FontAwesomeIcon className='text-amber-400' icon={faInstagram}/>
      </a>
      <a href='https://www.facebook.com/bigtonesbaby/' rel='noreferrer' target='_blank'>
      <FontAwesomeIcon className='text-amber-400' icon={faFacebook}/>
      </a>
      <a href='https://open.spotify.com/artist/2VH86MazYojDoIJbU8st1E' rel='noreferrer'  target='_blank'>
      <FontAwesomeIcon className='text-amber-400' icon={faSpotify}/>
      </a>
      <ToTop />
    </div>
  )
}

export default Footer;