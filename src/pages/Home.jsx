import React from 'react'
import BigTonesAlbumArt from '../assets/big_tones_album_home.jpg'

const Home = () => {
  return (
    <div>
      <section className='homeHeader'>
        <img src={BigTonesAlbumArt} alt='OTO Big Tones Album Art' />
        <h1>OTO Big Tones</h1>
      </section>
      <section className='homeBody'>
        <h2>Watch Open Ya Eyez From Existence</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/NnKWiIa6MK4?si=FNzI6JYWxntFEoLc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h2>Stream Existence on Spotify</h2>
        <div className='existenceAlbum'>
        <img src={BigTonesAlbumArt} alt='OTO Big Tones Album Art' />
        <iframe src="https://open.spotify.com/embed/album/5PXO2ZJvGOTluyBmv6P2PD?utm_source=generator" width="65%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <a href='https://hypeddit.com/bigtones/existencealbum' target='_blank'>And Other Streaming Platforms</a>
      </section>
      <hr></hr>
      <section>
        <h1 className='altHeader'>More Videos By Big Tones</h1>
      </section>
      <hr></hr>
      <section>
        <h1 className='altHeader'>Subscribe To The Mailing List</h1>
        
      </section>
    </div>
  );
};

export default Home;