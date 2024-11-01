import React from 'react';
import { useState, useEffect } from 'react';
import { getMusic } from '../api/SpotifySinglesApi.jsx'
import Viewport from '../helpers/Viewport';



const SingleElement = (props) => {
  return (
    <>
    {
      Viewport().width > 640? 
      <div>
        <iframe src={`https://open.spotify.com/embed/playlist/${props.id}?utm_source=generator`} width="740" height="400" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      :
      <div>
        <h1 className='text-amber-400 text-center text-3xl'>Singles</h1>
        <iframe src={`https://open.spotify.com/embed/playlist/${props.id}?utm_source=generator`} width="350" height="160" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

      </div> 
    }
    </>
  )
}

const SinglesBlock = () => {
  const [albumData, setAlbumData] = useState([]);
  
  useEffect(() => {
    getMusic()
    .then(data => {setAlbumData(data)} ).catch()
  }, []);

  return (
    <div className='flex gap-2 flex-col md:flex-row md:flex-wrap'>
      <div className='w-full'>
          <div className={'w-full flex flex-col max-[640px]:items-center  md:items-start md:flex-row max-[640px]:gap-2 md:gap-8 justify-center'}>
            <div className=''>
              <SingleElement id={albumData.id} />
            </div>
          </div>

        </div>
    </div>
      );
};


export default SinglesBlock;