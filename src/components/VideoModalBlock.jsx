import React from 'react';
import { useState, useEffect } from 'react';
import { getYtVideos } from '../api/YoutubeVidsApi';
import ModalVideo from 'react-modal-video';


import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, } from "@fortawesome/free-solid-svg-icons"


import '../styles/swiper.css'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import 'react-modal-video/scss/modal-video.scss'


const ThumbnailElement = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel='youtube'
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId={props.id}
        onClose={() => setOpen(false)}
      />
    <div className='border-x-2 border-amber-400/25 rounded relative mt-[-280px]'>
      <button className='hover:brigtness-50' onClick={() => setOpen(true)}>
        <div className='flex flex-col justify-center items-center justify-items-center translate-y-56 lg:translate-y-72'>
          <div><br></br></div>
          <div><br></br></div>
          <div><br></br></div>
          <div><br></br></div>
          <div><br></br></div>
          <FontAwesomeIcon className='text-amber-400 text-8xl' icon={faPlay} />
        </div>
        <img className='' src={props.thumbnail} alt={props.title + 'thumbnail'}></img>
      </button>
      <h1 className='text-center mt-1 text-3xl text-center text-amber-600'>{props.title}</h1>

    </div>


    </>
  )
}

const VideoModalBlock = (props) => {
  const [videoData, setVideoData] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    getYtVideos(props.playlistId, props.apiKey)
    .then(data => {setVideoData(transformData(data))} ).catch()
  }, []);

  return (
    <div className='flex gap-2 flex-col justify-center md:flex-row md:flex-wrap'>

      <Swiper
        style={{
          '--swiper-navigation-color': '#FFC052',
          '--swiper-pagination-color': '#FFC052',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <p className="text-center text-3xl mt-4" >See more Videos below</p>
        {
          videoData.length? videoData.map((videoObj, idx) =>
          <>
            <SwiperSlide>
            <ThumbnailElement
              key={idx}
              id={videoObj.contentDetails.videoId}
              thumbnail={videoObj.snippet.thumbnails.standard.url}
              title={videoObj.snippet.title}
          />
            </SwiperSlide>
          </>
          )
          :
          []
        }
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          videoData.length? videoData.map((videoObj, idx) =>
            <SwiperSlide>
              <button>
                <img src={videoObj.snippet.thumbnails.standard.url} alt={videoObj.snippet.title + 'Thumbnail'}/>
              </button>
            </SwiperSlide>
          )
          :
          []
        }
      </Swiper>
    </div>
  );
};

const transformData = (data) => {
  return data.map((item) => {
    return item
  })
}

export default VideoModalBlock;