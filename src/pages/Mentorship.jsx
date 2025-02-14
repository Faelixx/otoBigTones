import React from 'react'
import AOS from 'aos';

import AltHeader from '../components/AltHeader';
import VideoModalBlock from '../components/VideoModalBlock';

import headerImage from '../assets/mentorship/header.webp';
import { useState } from 'react';

import { mentorshipItems } from '../helpers/MentroshipItems';
import { youtubePlaylists, ytApiKey } from '../api/ytKey';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';


import '../styles/swiperMentors.css'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


const Mentorship = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  AOS.init();

  return (
    <div>
      <AltHeader />

      <section>
        <h1 data-aos='fade-up'  data-aos-duration='1250' className='text-amber-400 text-center text-8xl'>Mentorship</h1>
        <div data-aos='fade-up'  data-aos-duration='1250' className='flex flex-col justify-center'>
        <p data-aos='fade-up'  data-aos-duration='1250' className='text-justify my-4 mx-4 md:mx-10 lg:mx-[15vw] text-xl text-white'>Big Tones has worked as an artist mentor with the Community Arts Mentorship Program, Paved Arts, Creative City Centre Regina, LIVE Arts and Kilburn Hall. Big Tones offers a variety of workshops that blend culture, traditional drumming and Hip Hop for the youth to experience music and take culture back while doing so. Big Tones has worked as an artist mentor in many communities including: Beardy’s and Okemasis’, Buffalo Narrows, Beauval, Stanley Mission, Grandmother’s Bay, Hall Lake, Lac La Ronge, Sucker River, Little Red River, and Hatchet Lake.</p>

        </div>

        <div data-aos='fade-up'  data-aos-duration='1250' className='flex flex-col items-center justify-center'>
          <img data-aos='fade-up'  data-aos-duration='1250' className='sm:h-[225px] sm:w-[1000px] lg:h-96 md:w-[70vw] object-cover object-[center_43%] sm:mx-4 md:mx-20' src={headerImage} alt='Big Tones with Drayden holding drums'></img>
          <br></br>
          <hr className='h-0.5 rounded-md border-0 w-10/12 bg-amber-400 outline-amber-400 mt-4'></hr>
        <h1 className='text-amber-400 text-center text-7xl mt-4'>Experiences</h1>
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
            mentorshipItems.length?
            mentorshipItems.map((item) => 
              <>
              <SwiperSlide>
              <div data-aos='fade-up'  data-aos-duration='1250' className='flex flex-col items-center justify-center my-2'>
                <img data-aos='fade-up'  data-aos-duration='1250' className='sm:h-[225px] sm:w-[1000px] md:h-96 md:w-[70vw] object-cover object-[center_43%]' src={item.image} alt={item.caption} />
                <h1 className='text-xl text-amber-400 w-[90vw]'>{item.caption}</h1>
                <br></br>
                <br></br>
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
            mentorshipItems.length?
            mentorshipItems.map((item) => 
              <>
              <SwiperSlide>
              <div data-aos='fade-up'  data-aos-duration='1250' className='flex flex-col items-center justify-center my-2'>
                <img className='sm:h-[225px] sm:w-[1000px] md:h-96 md:w-[70vw] object-cover object-[center_43%]' src={item.image} alt={item.caption} />
              </div>
              
              </SwiperSlide>              
              </>

            )
            : 
            []
        }
      </Swiper>
          
          <hr className='h-0.5 rounded-md border-0 w-10/12 bg-amber-400 outline-amber-400 my-4'></hr>
          </div>
        
      </section>
      <section>
      <div className='flex flex-col items-center justify-center mx-16 my-2'>
            <VideoModalBlock playlistId={youtubePlaylists.mentorship} apiKey={ytApiKey}/>
          </div>
      </section>
    </div>
  );
};

export default Mentorship;