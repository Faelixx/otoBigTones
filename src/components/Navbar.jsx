import React from 'react'
import otoLogo from '../assets/otoLogo.png'
import NavBarItems from '../helpers/NavBarItems';

const Navbar = () => {
    return ( 
      <div>
        <div className='flex gap-8 items-center justify-center text-slate-50'>
        <img className='h-8'  src={otoLogo} alt="OTO Logo"></img>
        {NavBarItems().map(item => (
          <a className="text-lg" href={item.link}>{item.text}</a>
        ))}
      </div>
    </div>
  );
};
export default Navbar;