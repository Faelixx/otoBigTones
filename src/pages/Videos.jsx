import React from 'react'
import AOS from 'aos';

import AltHeader from '../components/AltHeader';
import VideoModalBlock from '../components/VideoModalBlock.jsx';

import { youtubePlaylists, ytApiKey } from '../api/ytKey';


const Videos = () => {

  AOS.init();
  return (
    <div>
      <AltHeader />
      <section>
          <h1 data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' className='text-amber-400 text-center text-8xl'>Music Videos</h1>
          <br></br>
          <div className=''>
            <VideoModalBlock playlistId={youtubePlaylists.releases} apiKey={ytApiKey}/>
          </div>
          <div className='flex flex-col items-center'>
            <hr className='h-0.5 rounded-md border-0 w-10/12 bg-amber-400 outline-amber-400'></hr>
          </div>
      </section>
      {/* <section>
          <h1 className='text-amber-400 text-center text-5xl mt-4'>Live Performances</h1>
          <br></br>
          <div className=''>
            <VideoModalBlock playlistId={youtubePlaylists.performances} apiKey={ytApiKey}/>
          </div>

      </section> */}
      <section>
          <h1 className='text-amber-400 text-center text-5xl mt-4'>Event Recaps</h1>
          <br></br>
          <div className=''>
            <VideoModalBlock playlistId={youtubePlaylists.recaps} apiKey={ytApiKey}/>
          </div>

      </section>
    </div>
  );
};

export default Videos;