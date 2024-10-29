import React from 'react'
import AltHeader from '../components/AltHeader.jsx';

import ContactForm from '../components/ContactForm.jsx';

import BigTonesContactPic from '../assets/contact/1.jpg'

const Contact = () => {

  const socials = [
    {
      platform: 'Facebook',
      link: 'https://www.facebook.com/bigtonesbaby/',
      shorthand: 'facebook.com/bigtonesbaby'
    },
    {
      platform: 'YouTube',
      link: 'https://www.youtube.com/@bigtones8541',
      shorthand: 'youtube.com/@bigtones8541'
    },
    {
      platform: 'Instagram',
      link: 'https://www.instagram.com/bigtones.oto/',
      shorthand: 'instagram.com/bigtones.oto'
    },
    {
      platform: 'Email',
      link: 'bigtones1deuce1@gmail.com',
      shorthand: 'bigtones1deuce1@gmail.com',
      mailto: 'bigtones1deuce1@gmail.com'
    },

  ];

  return (
    <div>
      <AltHeader />
      <section>
        <h1 className='text-amber-400 text-center text-8xl'>Contact</h1>
        <div className='flex items-center justify-center gap-4'>
          <div>
            <img className='w-[250px]' src={BigTonesContactPic} alt='Big Tones On Stage'></img>
          </div>
          <div className='flex flex-col'>
            {socials.map(item => (
              
              item.mailto? 
              <div className='flex flex-row gap-3 items-baseline'>
              <div className='min-w-16'>
                <h1 className='text-xl text-right'>{item.platform + ":"}</h1>
              </div>
              <div className='min-w-48'>
                <a className='text-2xl text-amber-400 text-left' href={'mailto:' + item.link}>{item.shorthand}</a>
              </div>
            
              </div>
              :


              <div className='flex flex-row gap-3 items-baseline'>
                <div className='min-w-16'>
                  <h1 className='text-xl text-right'>{item.platform + ":"}</h1>
                </div>
                <div className='min-w-48'>
                  <a className='text-2xl text-amber-400 text-left' target='_blank' rel='noreferrer' href={item.link}>{item.shorthand}</a>
                </div>
              
              </div>
            ))}
          </div>

        </div>
      <ContactForm />
      </section>
    </div>
  );
};

export default Contact;