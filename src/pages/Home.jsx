import React from 'react'

import VideoBlock from '../components/VideoBlock';
import { youtubePlaylists, ytApiKey } from '../api/ytKey';
import { getMusic } from '../api/SpotifyAlbumsApi';
import { getYtVideos } from '../api/YoutubeVidsApi';

import BigTonesAlbumArt from '../assets/big_tones_album.jpg'
import Viewport from '../helpers/Viewport';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faApple, faSoundcloud, faAmazon } from "@fortawesome/free-brands-svg-icons"




const Home = () => {
  return (
    <div className='flex flex-col items-center justify-items-center'>
        {console.log('Spotify API Call: ', getMusic())}
        {console.log('Youtube API Call: ' ,getYtVideos(youtubePlaylists.greatest, ytApiKey))}
      <section className='min-w-full'>
        {Viewport().width > 640 ? 
        <div className='mb-[-40px]'>
          <img className='object-cover max-h-48 min-w-full
          md:min-h-52 lg:object-none lg:min-h-80 lg:max-h-80 lg:min-w-full' src={BigTonesAlbumArt} alt='OTO Big Tones Album Art' />
          <h1 className='text-8xl text-slate-50 text-center translate-y-[-6.5rem] '>OTO Big Tones</h1>
        </div>
        :
        <div>
          <img className='object-cover h-52 min-w-full
          md:min-h-74 lg:object-none lg:min-h-80 lg:max-h-80 lg:min-w-full' src={BigTonesAlbumArt} alt='OTO Big Tones Album Art' />
          <h1 className=' text-6xl text-slate-50 text-center translate-y-[-4.75rem]'>OTO Big Tones</h1>
        </div>
        
        }
      </section>
      <section className='translate-y-[-2rem] flex flex-col items-center justify-items-center'>
        <h2 className='text-4xl text-amber-400'>Watch Open Ya Eyez From Existence</h2>
        <div>
          <iframe className="md:w-[524px] md:h-[324px] w-full" src="https://www.youtube.com/embed/NnKWiIa6MK4?si=FNzI6JYWxntFEoLc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <h2 className='text-amber-400 text-2xl pt-6'>Stream Existence on Spotify</h2>
        <div className='flex gap-6 flex-row flex items-center lg:flex-row'>
          {Viewport().width < 1024 ? 
        <iframe src="https://open.spotify.com/embed/album/5PXO2ZJvGOTluyBmv6P2PD?utm_source=generator" width="350" height="160" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> : 
          <div className='flex flex-row gap-6'>
            <img className='object-cover w-80 h-[9.5rem] rounded-xl' src={BigTonesAlbumArt} alt='OTO Big Tones Album Art' />
            <iframe src="https://open.spotify.com/embed/album/5PXO2ZJvGOTluyBmv6P2PD?utm_source=generator" width="350" height="160" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
          }
        </div>
        
        <a className='pt-2 text-amber-400 text-2xl underline' href='https://hypeddit.com/bigtones/existencealbum' target='_blank'>And Other Streaming Platforms 
        <br></br>
        <div className='flex flex-row gap-2 justify-center'>
      <FontAwesomeIcon className='text-amber-400' icon={faYoutube}/>
      <FontAwesomeIcon className='text-amber-400' icon={faApple}/>
      <FontAwesomeIcon className='text-amber-400' icon={faSoundcloud}/>
      <FontAwesomeIcon className='text-amber-400' icon={faAmazon}/>

        </div>
        
        </a>
      </section>
      <hr className='h-0.5 rounded-md border-0 w-10/12 bg-amber-400 outline-amber-400'></hr>
      <section>
        <h1 className='text-amber-400 text-2xl pt-2 pb-2 text-center'>More <a href='/videos' className='underline'>Videos</a> By Big Tones</h1>
        <div>
          <VideoBlock playlistId={youtubePlaylists.greatest} apiKey={ytApiKey}/>
        </div>
      </section>
      <hr className='h-px bg-amber-400'></hr>
      <section>
        <h1 className='text-amber-400'>Subscribe To The Mailing List</h1>
        
      </section>
    </div>
  );
};

export default Home;