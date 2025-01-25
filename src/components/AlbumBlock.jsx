import React from 'react';
import { useState, useEffect } from 'react';
import { getMusic } from '../api/SpotifyAlbumsApi.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faApple, faSoundcloud, faAmazon } from "@fortawesome/free-brands-svg-icons"


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
    <>
    <div className='flex gap-2 flex-col md:flex-row md:flex-wrap'>
        {
          albumData.length? albumData.map(
            (albumId, idx) =>
              <div className='w-full'>
              <h1 className='text-amber-400 text-center text-3xl mb-1'>{albumId.name}</h1>
              <div className={'w-full flex flex-col max-[640px] items-center  md:items-start md:flex-row gap-2 md:gap-8 justify-center'}>

                <div>
                  <img className='object-cover object-position object-[center_32%] w-[350px] h-[50px]  md:h-[152px] rounded-xl' src={albumId['images'][1]['url']} alt={albumId.name + ' album art'}></img>
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
    <div className='flex flex-col items-center justify-items-center'>

                <a data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' className='pt-2 text-amber-400 text-2xl underline' href='https://hypeddit.com/bigtones/existencealbum' target='_blank' rel='noreferrer'>And Other Streaming Platforms 
                <br></br>
                <div data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' className='flex flex-row gap-2 justify-center'>
              <FontAwesomeIcon className='text-amber-400' icon={faYoutube}/>
              <FontAwesomeIcon className='text-amber-400' icon={faApple}/>
              <FontAwesomeIcon className='text-amber-400' icon={faSoundcloud}/>
              <FontAwesomeIcon className='text-amber-400' icon={faAmazon}/>
        
                </div></a>
                </div>
  </>
  );
};

const transformData = (data) => {
  return data.map((item) => {
    return item
  })
}

export default AlbumBlock;