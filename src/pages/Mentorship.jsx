import React from 'react'
import AltHeader from '../components/AltHeader';
import headerImage from '../assets/mentorship/header.jpg'
import { mentorshipItems } from '../helpers/MentroshipItems';


const Mentorship = () => {
  return (
    <div>
      <AltHeader />

      <section>
        <h1 className='text-amber-400 text-center text-8xl'>Mentorship</h1>
        <p className='text-justify my-4 mx-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh sed pulvinar. Consequat semper viverra nam libero. Sapien pellentesque habitant morbi tristique senectus et netus et. Amet facilisis magna etiam tempor orci eu lobortis elementum. Arcu ac tortor dignissim convallis aenean. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Lobortis elementum nibh tellus molestie nunc non. Mi tempus imperdiet nulla malesuada pellentesque elit. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Dictum at tempor commodo ullamcorper a lacus vestibulum. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna.
        Rhoncus urna neque viverra justo nec ultrices. Risus in hendrerit gravida rutrum. Elementum sagittis vitae et leo. Eu facilisis sed odio morbi quis commodo odio. Egestas sed tempus urna et pharetra. Nisl pretium fusce id velit ut tortor. Eget velit aliquet sagittis id. Lorem ipsum dolor sit amet. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Integer enim neque volutpat ac tincidunt vitae semper. Justo nec ultrices dui sapien eget. Sed elementum tempus egestas sed sed risus pretium quam. Dictum at tempor commodo ullamcorper a lacus vestibulum. Tempor nec feugiat nisl pretium fusce id velit ut.</p>

        <div className='flex flex-col items-center'>
          <img className='w-[90vw]' src={headerImage} alt='Big Tones with Drayden holding drums'></img>
          <br></br>
          <hr className='h-0.5 rounded-md border-0 w-10/12 bg-amber-400 outline-amber-400'></hr>

        <h1 className='text-amber-400 text-center text-7xl'>Experiences</h1>
          {
            mentorshipItems.length?
            mentorshipItems.map((item) => 
              <div className='flex flex-col items-center justify-items-center justify-center'>
                <img className='w-[90vw]' src={item.image} alt={item.caption} />
                <h1 className='text-center text-xl text-amber-400 w-[90vw]'>{item.caption}</h1>
                <br></br>
                <br></br>
              </div>
            )
            : 
            []
          }
          </div>
        
      </section>
    </div>
  );
};

export default Mentorship;