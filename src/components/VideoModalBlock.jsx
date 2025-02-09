import React from 'react';
import AOS from 'aos';

import { useState, useEffect } from 'react';
import { getYtVideos } from '../api/YoutubeVidsApi';
import { VideoElement } from './VideoBlock';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';


import '../styles/swiperMentors.css'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


import '../App.css'

const VideoModalBlock = (props) => {
  const [videoData, setVideoData] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  useEffect(() => {
    getYtVideos(props.playlistId, props.apiKey)
    .then(data => {setVideoData(transformData(data))} ).catch()
  }, [props.playlistId, props.apiKey]);

  AOS.init();


  return (
    <>

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
        {
          videoData.length? videoData.map((videoObj, idx) =>
          <>
            <SwiperSlide>
            <div data-aos='fade-up'  data-aos-duration='1250' className='flex flex-col items-center justify-center my-2'>
            <div className='text-amber-400 py-[8px] px-[12px] absolute top-[0]'>{videoObj.snippet.title}</div>
            <VideoElement videoId={videoObj.contentDetails.videoId} id={videoObj.contentDetails.videoId}/>
            </div>

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
                  videoData.length?
                  videoData.map((videoObj, idx) => 
                    <>
                    <SwiperSlide>
                    <div data-aos='fade-up'  data-aos-duration='1250' className='flex flex-col items-center justify-center my-2'>
                    <img src={videoObj.snippet.thumbnails.standard.url} alt={videoObj.snippet.title + 'Thumbnail'}/>

                    </div>
                    
                    </SwiperSlide>              
                    </>
      
                  )
                  : 
                  []
              }
            </Swiper>
    <div data-aos='fade-up'  data-aos-duration='1250' className='max-w-[600px] m-auto relative'>

    </div>
    </>
  );
};

const transformData = (data) => {
  return data.map((item) => {
    return item
  })
}

/* <Swiper
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
        <p data-aos='fade-up'  data-aos-duration='1250' className="text-center text-3xl mt-4 text-white" >More Videos below</p>
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
              <button data-aos='fade-up'  data-aos-duration='1250'>
                <img src={videoObj.snippet.thumbnails.standard.url} alt={videoObj.snippet.title + 'Thumbnail'}/>
              </button>
            </SwiperSlide>
          )
          :
          []
        }
      </Swiper> */

        //const ThumbnailElement = (props) => {
        //   const [isOpen, setOpen] = useState(false);
        
        //   AOS.init();
        
        //   return (
        //     <>
        //       <ModalVideo
        //         channel='youtube'
        //         youtube={{ mute: 0, autoplay: 0 }}
        //         isOpen={isOpen}
        //         videoId={props.id}
        //         onClose={() => setOpen(false)}
        //       />
        //     <div data-aos='fade-up'  data-aos-duration='1250' className='border-x-2 border-amber-400/25 rounded relative mt-[-280px]'>
        //       <button className='hover:brigtness-50' onClick={() => setOpen(true)}>
        //         <div className='flex flex-col justify-center items-center justify-items-center translate-y-56 lg:translate-y-72'>
        //           <div><br></br></div>
        //           <div><br></br></div>
        //           <div><br></br></div>
        //           <div><br></br></div>
        //           <div><br></br></div>
        //           <FontAwesomeIcon className='text-amber-400 text-8xl' icon={faPlay} />
        //         </div>
        //         <img data-aos='fade-up'  data-aos-duration='1250' src={props.thumbnail} alt={props.title + 'thumbnail'}></img>
        //       </button>
        //       <h1 data-aos='fade-up'  data-aos-duration='1250' className='text-center mt-1 text-3xl text-center text-amber-400'>{props.title}</h1>
        
        //     </div>
        
        
        //     </>
        //   )
        // }

export default VideoModalBlock;