import React from 'react'
import BigTonesAlbumArt from '../assets/big_tones_album_home.jpg'


const AltHeader = () => {
  return (
    <div className='mb-[-85px]'>
        <section className='flex flex-col justify-center items-center'>
        <img className='h-[225px] w-[1000px] object-cover object-[center_43%]' src={BigTonesAlbumArt} alt='OTO Big Tones Album Art' />
        <h1 className='text-8xl text-slate-50 text-center translate-y-[-6.5rem]'>OTO Big Tones</h1>
      </section>
    </div>
  );
};

export default AltHeader;