import React from 'react'
import AltHeader from '../components/AltHeader';
import VideoModalBlock from '../components/VideoModalBlock';

import headerImage from '../assets/mentorship/header.jpg';
import { useState } from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import { mentorshipItems } from '../helpers/MentroshipItems';
import { youtubePlaylists, ytApiKey } from '../api/ytKey';


import '../styles/swiperMentors.css'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


const Mentorship = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <AltHeader />

      <section>
        <h1 className='text-amber-400 text-center text-8xl'>Mentorship</h1>
        <div className='flex flex-col justify-center'>
        <p className='text-justify my-4 mx-4 md:mx-10 lg:mx-[15vw] text-xl text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh sed pulvinar. Consequat semper viverra nam libero. Sapien pellentesque habitant morbi tristique senectus et netus et. Amet facilisis magna etiam tempor orci eu lobortis elementum. Arcu ac tortor dignissim convallis aenean. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Lobortis elementum nibh tellus molestie nunc non. Mi tempus imperdiet nulla malesuada pellentesque elit. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Dictum at tempor commodo ullamcorper a lacus vestibulum. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna.
        Rhoncus urna neque viverra justo nec ultrices. Risus in hendrerit gravida rutrum. Elementum sagittis vitae et leo. Eu facilisis sed odio morbi quis commodo odio. Egestas sed tempus urna et pharetra. Nisl pretium fusce id velit ut tortor. Eget velit aliquet sagittis id. Lorem ipsum dolor sit amet. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Integer enim neque volutpat ac tincidunt vitae semper. Justo nec ultrices dui sapien eget. Sed elementum tempus egestas sed sed risus pretium quam. Dictum at tempor commodo ullamcorper a lacus vestibulum. Tempor nec feugiat nisl pretium fusce id velit ut.</p>

        </div>

        <div className='flex flex-col items-center justify-center'>
          <img className='sm:h-[225px] sm:w-[1000px] lg:h-96 md:w-[70vw] object-cover object-[center_43%] sm:mx-4 md:mx-20' src={headerImage} alt='Big Tones with Drayden holding drums'></img>
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
              <div className='flex flex-col items-center justify-center my-2'>
                <img className='sm:h-[225px] sm:w-[1000px] md:h-96 md:w-[70vw] object-cover object-[center_43%]' src={item.image} alt={item.caption} />
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
              <div className='flex flex-col items-center justify-center my-2'>
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