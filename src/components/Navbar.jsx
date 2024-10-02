import React from 'react'
import otoLogo from '../assets/otoLogo.png'

const Navbar = () => {

  const menuItems = [
    { icon: 'timer-icon.png', text: 'Home', link: '/' },
    { icon: 'calendar-icon.png', text: 'EPK', link: '/epk' },
    { icon: 'tasks-icon.png', text: 'Music', link: '/music' },
    { icon: 'achievement-icon.png', text: 'Video', link: '/videos' },
    { icon: 'achievement-icon.png', text: 'Tour', link: '/tour' },
    { icon: 'achievement-icon.png', text: 'Mentorship', link: '/mentorship' },
    { icon: 'achievement-icon.png', text: 'Contact', link: '/contact' },
  ];

    return ( 
      <div>
        <div className='flex gap-8 items-center justify-center text-slate-50'>
        <img className='h-8'  src={otoLogo} alt="OTO Logo"></img>
        {menuItems.map(item => (
          <a className="text-lg" href={item.link}>{item.text}</a>
        ))}
      </div>
    </div>
  );
};
export default Navbar;