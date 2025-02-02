import React from 'react'
import otoLogo from '../assets/otoLogo.webp'
import NavBarItems from '../helpers/NavBarItems';

import { useLocation, Link } from 'react-router-dom'


const Navbar = () => {
  let location = useLocation().pathname
  
    return ( 
      <div>
        <div className='flex gap-8 items-center justify-center text-slate-50'>
        <img className='h-8'  src={otoLogo} alt="OTO Logo"></img>
        {NavBarItems().map(item => (
          
            location === item.link?

            <div className="text-lg text-amber-400 underline">
            <Link to={item.link}>
            {item.text}
            </Link>
            
            </div>
            :
            <div className="text-lg text-white hover:text-amber-400">
            <Link to={item.link}>
            {item.text}
            </Link>
            
            </div>

          
        ))}
      </div>
    </div>
  );
};
export default Navbar;