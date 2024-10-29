import React from 'react'

import ToTop from './ToTop.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faFacebook, faSpotify } from "@fortawesome/free-brands-svg-icons"
import otoLogo from '../assets/otoLogo.png'

const Footer = () => {
  return (
    <>
    <br></br>
    <div className='flex justify-center'>
    <hr className='h-0.5 rounded-md border-0 w-full bg-orange-300 outline-amber-400'></hr>
    </div>
    <div className='flex flex-row bg-black justify-between items-center w-full'>
      <div>
        <img className='h-8' src={otoLogo} alt='oto logo'>
        </img>
      </div>
      <div className='ml-[58px] flex gap-3'>
      <a href='https://www.youtube.com/channel/UCPhvY1BXpxeamDwLGvnjIjQeferrer' rel='noreferrer'  target='_blank'>      
      <FontAwesomeIcon className='text-amber-400' icon={faYoutube}/>
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
      </div>
      <div>
        <ToTop />
      </div>
    </div>
    </>
  )
}

export default Footer;