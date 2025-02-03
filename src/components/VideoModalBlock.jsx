import React from 'react';
import AOS from 'aos';

import { useState, useEffect } from 'react';
import { getYtVideos } from '../api/YoutubeVidsApi';
import { VideoElement } from './VideoBlock';

import '../App.css'

const VideoModalBlock = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    getYtVideos(props.playlistId, props.apiKey)
    .then(data => {setVideoData(transformData(data))} ).catch()
  }, [props.playlistId, props.apiKey]);

  AOS.init();

  const upSlide = () => {
    videoData.length - 1 > activeSlide?
    setActiveSlide(activeSlide + 1)
    :
    setActiveSlide(activeSlide);
  }

  const downSlide = () => {
    activeSlide === 0? 
    setActiveSlide(activeSlide)
    :
    setActiveSlide(activeSlide - 1)
  }

  return (
    <>
    <div data-aos='fade-up'  data-aos-duration='1250' className='max-w-[1000px] m-auto relative'>
      {
        videoData.length? videoData.map((videoObj, idx) =>
          activeSlide === idx? 
        <div className=' fade'>
        <div className='text-amber-400 py-[8px] px-[12px] absolute top-[0]'>{videoObj.snippet.title}</div>
        <div><VideoElement videoId={videoObj.contentDetails.videoId} id={videoObj.contentDetails.videoId}/></div>
      </div>
        : 
          
          <div className='hidden fade'>
            <div className='text-amber-400 py-[8px] px-[12px] absolute top-[0]'>{videoObj.snippet.title}</div>
            <div><VideoElement videoId={videoObj.contentDetails.videoId} id={videoObj.contentDetails.videoId}/></div>
          </div>
        ) 
        : 
        []
      }
      <button className='cursor-pointer absolute top-[50%] w-auto mt-[-22px] p-[16px] bg-white font-bold text-base transition-[0.6s ease] rounded-[3px 0 0 3px] select-none right-[0] hover:bg-[rgba(0,0,0,0.8)]' onClick={()=> upSlide()}>&#10095;</button>
      <button className='cursor-pointer absolute top-[50%] w-auto mt-[-22px] p-[16px] bg-white font-bold text-base transition-[0.6s ease] rounded-[3px 0 0 3px] select-none  hover:bg-[rgba(0,0,0,0.8)]' onClick={()=> downSlide()}>&#10094;</button>
    </div>
    <div>
      {
        videoData.length? videoData.map((idx) => {
          idx === activeSlide? 
            <span className='cursor-pointer h-[15px] w-[15px] my-0 mx-[2px] bg-[#717171] rounded-[50%] inline-block transition-[background-color 0.6s ease]'></span>
            : 
            <span className='cursor-pointer h-[15px] w-[15px] my-0 mx-[2px] bg-[#bbb] rounded-[50%] inline-block transition-[background-color 0.6s ease]'></span>
        }) 
        : 
        []
      }
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