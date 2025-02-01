import React from 'react';
import { useState, useEffect } from 'react';
import { getYtVideos } from '../api/YoutubeVidsApi';

const VideoElement = (props) => {
  return (
    <div>
        <iframe 
        loading='lazy'
        title={props.videoId}
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