import React from 'react'
import otoLogo from '../assets/otoLogo.png'
import NavBarItems from '../helpers/NavBarItems';

import { useLocation } from 'react-router-dom'


const Navbar = () => {
  let location = useLocation().pathname
  
    return ( 
      <div>
        <div className='flex gap-8 items-center justify-center text-slate-50'>
        <img className='h-8'  src={otoLogo} alt="OTO Logo"></img>
        {NavBarItems().map(item => (
          
            location === item.link?

            <a className="text-lg text-amber-400 underline" href={item.link}>{item.text}</a>
            :
            <a className="text-lg hover:text-amber-400" href={item.link}>{item.text}</a>

          
        ))}
      </div>
    </div>
  );
};
export default Navbar;