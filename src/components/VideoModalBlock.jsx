import React from 'react';
import AOS from 'aos';

import { useState, useEffect } from 'react';
import { getYtVideos } from '../api/YoutubeVidsApi';

import ModalVideo from 'react-modal-video'

import 'react-modal-video/scss/modal-video.scss'

import '../App.css'

const VideoModalBlock = (props) => {
  const [videoData, setVideoData] = useState([]);
  
  useEffect(() => {
    getYtVideos(props.playlistId, props.apiKey)
    .then(data => {setVideoData(transformData(data))} ).catch()
  }, [props.playlistId, props.apiKey]);

  AOS.init();


  return (
    <>
    <div className='flex flex-row flex-wrap justify-center gap-2 m-auto max-w-[1200px]'>
      {videoData.length? videoData.map((videoObj, idx) =>
      <div className=''>
        <ThumbnailElement 
          key={idx}
          id={videoObj.contentDetails.videoId}
          thumbnail={videoObj.snippet.thumbnails.standard.url}
          title={videoObj.snippet.title}
        />
      </div>
    )
      : 
      []}
    </div>
    </>
  );
};

const transformData = (data) => {
  return data.map((item) => {
    return item
  })
}

        const ThumbnailElement = (props) => {
          const [isOpen, setOpen] = useState(false);
        
          AOS.init();
        
          return (
            <>
              <ModalVideo
                channel='youtube'
                youtube={{ mute: 0, autoplay: 1 }}
                isOpen={isOpen}
                videoId={props.id}
                onClose={() => setOpen(false)}
              />
            <div className=''>
              <button className='duration-300 ease-in-out hover:scale-y-[1.1] hover:scale-x-[1.04]' onClick={() => setOpen(true)}>
              <div className='h-[180px] w-[320px] flex flex-col items-center relative'>
                <img 
                  src={props.thumbnail} 
                  alt={props.title + 'thumbnail'}
                  className='h-[180px] w-[320px] border-2 border-amber-400/25 rounded duration-300 ease-in-out hover:opacity-50'
                  >
                  </img>
                <h1 className='text-center text-lg text-center text-amber-200 absolute max-w-[200px]'>{props.title}</h1>
                <div className='w-[64px] h-[64px] absolute top-[64px]'>
                  <svg className='' xwwmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='#FFC052' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>

                </div>

              </div>
              </button>
    </div>              
        
        
            </>
          )
        }

export default VideoModalBlock;