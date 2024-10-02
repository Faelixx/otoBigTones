import React, { useState } from 'react'

import otoLogo from '../assets/otoLogo.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"

const ModalMenu = () => {
  const [showModal, setShowModal] = useState(false);

  const test = () => {
    return console.log('Yooooo')
  }

  return (
    <div className='flex flex-row gap-2 items-center'>
      <img className='h-8'  src={otoLogo} alt="OTO Logo"></img>
      <button onClick={test}>
      <FontAwesomeIcon className='text-slate-50 text-2xl mix-blend-lighten' icon={faBars}/>
      </button>
    </div>
  );
};
export default ModalMenu;