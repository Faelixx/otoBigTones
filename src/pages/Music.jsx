import React from 'react'

import AltHeader from '../components/AltHeader';
import AlbumBlock from '../components/AlbumBlock.jsx';
import SinglesBlock from '../components/SinglesBlock.jsx';
import { getMusic } from '../api/SpotifyAlbumsApi.jsx'


const Music = () => {
  return (
    <div>
      <AltHeader />
      <section>
        <h1 className='text-amber-400 text-center text-8xl'>Music</h1>
        <br></br>
        <div>
          <div>
            <AlbumBlock />
            <br></br>
            <div className='w-full flex justify-center'>
              <hr className='h-0.5 rounded-md border-0 w-10/12 bg-amber-400 outline-amber-400'></hr>
            </div>

          </div>
              <br></br>
          <div>
            <SinglesBlock />
            <br/>
          </div>
        </div>


      </section>

      
    </div>
  );
};

export default Music;