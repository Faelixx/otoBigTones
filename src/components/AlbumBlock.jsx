import React from 'react';
import { useState, useEffect } from 'react';
import { getMusic } from '../api/SpotifyAlbumsApi.jsx'


const AlbumElement = (props) => {
  return (
    <div>
        <iframe src={`https://open.spotify.com/embed/album/${props.id}?utm_source=generator`} width="350" height="160" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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
    <div className='flex gap-2 flex-col md:flex-row md:flex-wrap'>
        {
        albumData.length? albumData.map(
          (albumId, idx) =>
            <div className='w-full'>
                <h1 className='text-amber-400 text-center text-3xl'>{albumId.name}</h1>
              <div className={'w-full flex flex-col max-[640px]:items-center  md:items-start md:flex-row gap-2 md:gap-8 justify-center'}>

                <div>
                  <img className='object-cover object-position object-[center_32%] w-[350px] h-[50px]  md:h-[152px] rounded-xl' src={albumId['images'][1]['url']}></img>
                </div>
                <div>
                  <AlbumElement key={idx} id={albumId.id} />
                </div>
              </div>

              </div>
        )
        : []
        }
    </div>
  );
};

const transformData = (data) => {
  return data.map((item) => {
    return item
  })
}

export default AlbumBlock;