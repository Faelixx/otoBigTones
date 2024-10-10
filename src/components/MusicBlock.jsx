import React from 'react';
import { useState, useEffect } from 'react';
import { getMusic } from '../api/SpotifyAlbumsApi.jsx'


const AlbumElement = (props) => {
  return (
    <div>
        <iframe title='Big Tones Album'  src={`https://open.spotify.com/embed/album/${props.id}?utm_source=generator`} width="350" height="160" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  )
}

const AlbumBlock = () => {
  const [albumData, setAlbumData] = useState([]);
  
  useEffect(() => {
    getMusic()
    .then(data => {setAlbumData(transformData(data))} ).catch()
  }, []);

  return (
    <div className='flex gap-2 flex-col justify-center md:flex-row md:flex-wrap'>
        {
          albumData.length? albumData.map((albumId, idx) =>  <AlbumElement key={idx} id={albumId} />) : []
        }
    </div>
  );
};

const transformData = (data) => {
  return data.map((item) => {
    return item.id
  })
}

export default AlbumBlock;