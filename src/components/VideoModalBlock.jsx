import React from 'react';
import AOS from 'aos';

import { useState, useEffect } from 'react';
import { getYtVideos } from '../api/YoutubeVidsApi';
import { VideoElement } from './VideoBlock';

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
    <div data-aos='fade-up'  data-aos-duration='1250' className='max-w-[600px] m-auto relative'>
      {videoData.length? videoData.map((videoObj, idx) => 
      <ThumbnailElement 
      key={idx}
      id={videoObj.contentDetails.videoId}
      thumbnail={videoObj.snippet.thumbnails.standard.url}
      title={videoObj.snippet.title}
      />)
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
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId={props.id}
                onClose={() => setOpen(false)}
              />
                  <div data-aos='fade-up'  data-aos-duration='1250' className='border-x-2 border-amber-400/25 rounded relative mt-[-280px]'>
      <button className='hover:brigtness-50' onClick={() => setOpen(true)}>
        <div className='flex flex-col justify-center items-center justify-items-center translate-y-56 lg:translate-y-72'>

        </div>
        <img data-aos='fade-up'  data-aos-duration='1250' src={props.thumbnail} alt={props.title + 'thumbnail'}></img>
      </button>
      <h1 data-aos='fade-up'  data-aos-duration='1250' className='text-center mt-1 text-3xl text-center text-amber-400'>{props.title}</h1>

    </div>              
        
        
            </>
          )
        }

export default VideoModalBlock;