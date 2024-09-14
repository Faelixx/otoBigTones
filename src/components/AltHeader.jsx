import React from 'react'
import BigTonesAlbumArt from '../assets/big_tones_album_home.jpg'


const AltHeader = () => {
  return (
    <div>
            <section className='altHeader'>
        <img src={BigTonesAlbumArt} alt='OTO Big Tones Album Art' />
        <h1>OTO Big Tones</h1>
      </section>
    </div>
  );
};

export default AltHeader;