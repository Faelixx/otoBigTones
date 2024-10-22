import React from 'react';
import { useState, useEffect } from 'react';
import { getYtVideos } from '../api/YoutubeVidsApi';
import ModalVideo from 'react-modal-video';

import 'react-modal-video/scss/modal-video.scss'


const ThumbnailElement = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
    <div className=''>
      <ModalVideo
        channel='youtube'
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId={props.id}
        onClose={() => setOpen(false)}
      />
    </div>
    <div className='border-2 border-amber-400 rounded'>
      <button onClick={() => setOpen(true)}>
      <h1 className='text-center mt-1 text-xl'>{props.title}</h1>
        <img className='hover:brightness-50 sm:h-1/2 md:h-[280px]' src={props.thumbnail} alt={props.title + 'thumbnail'}></img>
      </button>
      
    </div>

      
    </>
  )
}

const VideoModalBlock = (props) => {
  const [videoData, setVideoData] = useState([]);
  
  useEffect(() => {
    getYtVideos(props.playlistId, props.apiKey)
    .then(data => {setVideoData(transformData(data))} ).catch()
  }, []);

  return (
    <div className='flex gap-2 flex-col justify-center md:flex-row md:flex-wrap'>
        {
          videoData.length? videoData.map((videoObj, idx) =>  
          <ThumbnailElement 
          key={idx} 
          id={videoObj.contentDetails.videoId} 
          thumbnail={videoObj.snippet.thumbnails.standard.url}
          title={videoObj.snippet.title}
          />)
          : 
          []
        }
    </div>
  );
};

const transformData = (data) => {
  return data.map((item) => {
    return item
  })
}

export default VideoModalBlock;