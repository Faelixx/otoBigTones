import React, { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import NavBarItems from '../helpers/NavBarItems'
import otoLogo from '../assets/otoLogo.png'

import { useLocation, Link } from 'react-router-dom'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"

const MenuButton = () => {
const [open, setOpen] = useState(false);

const toggle = () => setOpen(!open);

let location = useLocation().pathname

  
  return (
    <div className='flex flex-row w-full justify-start'>
      <button className='ml-2' onClick={toggle}>
      <FontAwesomeIcon className='text-slate-50 text-2xl mix-blend-lighten' icon={faBars}/>
      </button>
      <div className='flex flex-row justify-center w-full mr-2'>
        <a href='/'>
          <img className='h-8'  src={otoLogo} alt="OTO Logo"></img>
        </a>
      </div>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <TransitionChild>
                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <DialogTitle className="text-base font-semibold leading-6 text-gray-900">OTO Big Tones</DialogTitle>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">        {NavBarItems().map(item => (
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
        ))}</div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>

    </div>
  );
};
export default MenuButton;