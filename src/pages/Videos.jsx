import React from 'react'
import AltHeader from '../components/AltHeader';
import VideoBlock from '../components/VideoBlock.jsx';

import { getMusic } from '../api/SpotifyAlbumsApi';
import { getYtVideos } from '../api/YoutubeVidsApi';
import { youtubePlaylists, ytApiKey } from '../api/ytKey';


const Videos = () => {
  return (
    <div>
      <AltHeader />
      <section>
        <h1 className='text-amber-400 text-center text-7xl'>Videos</h1>
        <br></br>
      </section>
      <section>
          <h1 className='text-amber-400 text-center text-5xl'>Music Videos</h1>
          <div className='flex items-center flex-col flex-wrap md:flex-row'>
            <VideoBlock playlistId={youtubePlaylists.releases} apiKey={ytApiKey}/>
          </div>
          <div className='flex flex-col items-center'>
            <hr className='h-0.5 rounded-md border-0 w-10/12 bg-amber-400 outline-amber-400'></hr>
          </div>
      </section>
      <section>
          <h1 className='text-amber-400 text-center text-5xl'>Performance Recaps</h1>
          <div className='flex items-center justify-center flex-col md:flex-wrap md:flex-row'>
            <VideoBlock playlistId={youtubePlaylists.recaps} apiKey={ytApiKey}/>
          </div>

      </section>
    </div>
  );
};

export default Videos;