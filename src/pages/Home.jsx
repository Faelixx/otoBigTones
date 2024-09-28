import React from 'react'
import BigTonesAlbumArt from '../assets/big_tones_album.jpg'
import Viewport from '../helpers/Viewport';


const Home = () => {
  return (
    <div className='flex flex-col items-center justify-items-center'>
      {console.log(Viewport())}
      <section className='min-w-full'>
        <img className='object-cover max-h-36 min-w-full lg:object-none lg:min-h-80 lg:max-h-80 lg:min-w-full' src={BigTonesAlbumArt} alt='OTO Big Tones Album Art' />
        <h1 className=' text-6xl text-slate-50 text-center translate-y-[-4.75rem]'>OTO Big Tones</h1>
      </section>
      <section className='translate-y-[-2rem] flex flex-col items-center justify-items-center'>
        <h2 className='text-2xl text-amber-400'>Watch Open Ya Eyez From Existence</h2>
        <div>
          <iframe className="lg:w-[524px] lg:h-[324px] w-full" src="https://www.youtube.com/embed/NnKWiIa6MK4?si=FNzI6JYWxntFEoLc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <h2 className='text-amber-400 text-2xl'>Stream Existence on Spotify</h2>
        <div className='flex gap-6 flex-col flex items-center lg:flex-row'>
          {Viewport().width < 1024 ? <></> : <img className='object-cover w-80 h-[9.5rem] rounded-xl' src={BigTonesAlbumArt} alt='OTO Big Tones Album Art' />}
        <iframe src="https://open.spotify.com/embed/album/5PXO2ZJvGOTluyBmv6P2PD?utm_source=generator" width="350" height="160" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <a className='text-amber-400' href='https://hypeddit.com/bigtones/existencealbum' target='_blank'>And Other Streaming Platforms</a>
      </section>
      <hr className='h-0.5 rounded-md border-0 w-10/12 bg-amber-400 outline-amber-400'></hr>
      <section>
        <h1 className='text-amber-400'>More Videos By Big Tones</h1>
      </section>
      <hr className='h-px bg-amber-400'></hr>
      <section>
        <h1 className='text-amber-400'>Subscribe To The Mailing List</h1>
        
      </section>
    </div>
  );
};

export default Home;