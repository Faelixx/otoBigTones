import React from 'react'

import AltHeader from '../components/AltHeader';
import MusicBlock from '../components/MusicBlock.jsx';
import { getMusic } from '../api/SpotifyAlbumsApi.jsx'


const Music = () => {
  return (
    <div>
      <AltHeader />
      <section>
        <h1 className='text-amber-400 text-center text-6xl'>Music</h1>
        <br></br>
        <div>
          <h1 className='text-amber-400 text-center text-3xl'>Albums</h1>
          <div>
            <MusicBlock />
          </div>
        </div>


      </section>

      
    </div>
  );
};

export default Music;