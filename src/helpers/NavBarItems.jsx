import React from 'react'

const NavBarItems = () => {
  const menuItems = [
    { icon: 'timer-icon.png', text: 'Home', link: '/' },
    { icon: 'calendar-icon.png', text: 'EPK', link: '/epk' },
    { icon: 'tasks-icon.png', text: 'Music', link: '/music' },
    { icon: 'achievement-icon.png', text: 'Video', link: '/videos' },
    { icon: 'achievement-icon.png', text: 'Tour', link: '/tour' },
    { icon: 'achievement-icon.png', text: 'Mentorship', link: '/mentorship' },
    { icon: 'achievement-icon.png', text: 'Contact', link: '/contact' },
  ];
  return menuItems;
};
export default NavBarItems;