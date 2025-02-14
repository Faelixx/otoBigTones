import React from 'react';
import AOS from 'aos';
import BigTonesAlbumArt from '../assets/big_tones_album_home.webp';



const AltHeader = () => {
  AOS.init();

  return (
    <div data-aos='fade-up'  data-aos-duration='1250' className='mb-[-85px]'>
        <section className='flex flex-col justify-center items-center'>
        <img className='h-[225px] w-[1000px] object-cover object-[center_43%]' src={BigTonesAlbumArt} alt='OTO Big Tones Album Art' loading='eager'/>
        <h1 className='text-8xl text-slate-50 text-center translate-y-[-6.5rem]'>OTO Big Tones</h1>
      </section>
    </div>
  );
};

export default AltHeader;