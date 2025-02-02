import React from 'react';
import { useState, useEffect } from 'react';
import { getYtVideos } from '../api/YoutubeVidsApi';

const srcDocStyle = (videoId) => {
  return (
    `<style>
          * {
          padding: 0:
          margin: 0;
          overflow: hidden;
          }

          body, html {
            height: 100%;
          }

          img, svg {
            position: absolute;
            width: 100%;
            top: 0;
            bottom: 0;
            margin: auto;
          }
            
            svg {
              filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
              transition: all 250ms ease-in-out;
              }

              body:hover svg {
              filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
              transform: scale(1.2);
              }
          </style>
          <a href='https://www.youtube.com/embed/${videoId}?si=FNzI6JYWxntFEoLc'>
            <img src='https://img.youtube.com/vi/${videoId}/maxresdefault.jpg'>
            <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
            
          </a>
          `
  )
}

export const VideoElement = (props) => {
  return (
    <div>
        <iframe 
        loading='lazy'
        title={props.videoId}
        srcDoc={srcDocStyle(props.id)}
        width="325" 
        height="210"
        src={`https://www.youtube.com/embed/${props.id}`}>

        </iframe>
    </div>
  )
}

const VideoBlock = (props) => {
  const [videoData, setVideoData] = useState([]);
  
  useEffect(() => {
    getYtVideos(props.playlistId, props.apiKey)
    .then(data => {setVideoData(transformData(data))} ).catch()
  }, [props.playlistId, props.apiKey]);

  return (
    <div className='flex gap-2 flex-col justify-center md:flex-row md:flex-wrap'>
        {
          videoData.length? videoData.map((videoId, idx) =>  <VideoElement key={idx} id={videoId} />) : []
        }
    </div>
  );
};

const transformData = (data) => {
  return data.map((item) => {
    return item.contentDetails.videoId
  })
}

export default VideoBlock;