import React from 'react'
import AltHeader from '../components/AltHeader.jsx'
import otoLogo from '../assets/otoLogo.png'
import otoClick from '../assets/epk/otoClick.png'
import tonesPurp from '../assets/epk/tonesPurp.png'
import moonbeams from '../assets/epk/moonbeams.png'
import liveMixtape from '../assets/epk/liveMixtape.png'
import iceCream from '../assets/epk/iceCream.png'

import Viewport from '../helpers/Viewport';

import Footer from '../components/Footer.jsx'
import Navbar from  '../components/Navbar.jsx'

const EPK = () => {
  return (
    <div>
      <AltHeader/>
      <section>
        <h1 className='text-amber-400 text-center text-8xl'>EPK</h1>
        {Viewport().width < 640 ? 
        <div className='text-xl flex flex-col items-center mx-[10px] gap-2'>
          <div className='flex flex-col gap-2'>
            <img className='h-[200px] w-[1000px] object-cover object-[center_23%]' src={tonesPurp} alt='OTO Big Tones Performing' />
          </div>
        <p className='text-slate-200'>Anthony Pasqua aka Big Tones is an Indigenous Recording Artist born in Surrey, BC. He grew up in Regina, SK and has heavy ancestral ties to Treaty 4 Territory coming from Pasqua First Nation #79 & George Gordon First Nation #84. Breaking the cycle of intergenerational trauma, Big Tones uses music as an outlet, finding therapeutic release in storytelling through songwriting.</p>
          <img className='h-[200px] w-[1000px] object-cover object-[center_43%]'  src={otoClick} alt='OTO Group' />
          <div className='w-full flex mt-[-10px]'>
            <p className='text-sm text-amber-400'>OTO Family</p>            
          </div>
        <p className='text-slate-200'>Big Tones is a versatile artist, captivating performer and artist mentor. With a focus on old school hip hop sound, his powerful and soothing voice with intricate flows keeps listeners intrigued lyric after lyric. Big Tones shares his personal experience and offers perspectives on life through the eyes of Indigenous peoples. He moves audiences with his strong stage presence and masterful command of the mic. Big Tones uses hip hop as a vessel to communicate aspects of pain and trauma, moving through to healing, celebration and taking back pride through culture. Recently getting airtime on CBC Radio Active with his new single Creased AF1's Big Tones is striving with a hunger for more. Big Tones has worked as an artist mentor with the Community Arts Mentorship Program, Paved Arts, Creative City Centre Regina and at Kilburn Hall. He appreciates the opportunity to encourage youth voices.</p>
        <img className='h-[75px] w-[80px] mb-[5px]' src={otoLogo} alt='Oto Logo'/>

        </div>
        : 
        <div className='text-xl flex flex-row sm:mx-[10px] md:mx-[50px] lg:mx-[50px] gap-2 md:gap-4'>
          <div className='h-[300px] w-[1800px] flex flex-col items-center'>
          <img className='h-[250px] w-[260px] object-cover'src={tonesPurp} alt='OTO Big Tones Performing' />
          <img className='h-[75px] md:w-[80px] lg:h-[150px] lg:w-[160px] object-cover' src={otoLogo} alt='Oto Logo'/>
          </div>
        <div className='flex flex-col items-center gap-2'>
      <p className='text-slate-200'>Anthony Pasqua aka Big Tones is an Indigenous Recording Artist born in Surrey, BC. He grew up in Regina, SK and has heavy ancestral ties to Treaty 4 Territory coming from Pasqua First Nation #79 & George Gordon First Nation #84. Breaking the cycle of intergenerational trauma, Big Tones uses music as an outlet, finding therapeutic release in storytelling through songwriting. Big Tones is a versatile artist, captivating performer and artist mentor. With a focus on old school hip hop sound, his powerful and soothing voice with intricate flows keeps listeners intrigued lyric after lyric. Big Tones shares his personal experience and offers perspectives on life through the eyes of Indigenous peoples. He moves audiences with his strong stage presence and masterful command of the mic. Big Tones uses hip hop as a vessel to communicate aspects of pain and trauma, moving through to healing, celebration and taking back pride through culture. Recently getting airtime on CBC Radio Active with his new single Creased AF1's Big Tones is striving with a hunger for more. Big Tones has worked as an artist mentor with the Community Arts Mentorship Program, Paved Arts, Creative City Centre Regina and at Kilburn Hall. He appreciates the opportunity to encourage youth voices.</p>
      <img className='h-[250px] w-full xl:w-[800px] object-cover object-[center_48%]' src={otoClick} alt='OTO Group' />
      <div className='w-full xl:w-[800px] flex mt-[-10px]'>
            <p className='text-sm text-amber-400'>OTO Family</p>            
          </div>
          <br></br>
        </div>
      </div> 
        }
        
      </section>
      <div className='flex justify-center'>
        <hr className='h-0.5 rounded-md border-0 w-10/12 bg-amber-400 outline-amber-400'></hr>

      </div>
      <section className='flex flex-col items-center mx-[10px] md:mx-[50px]'>
        <h1 className='text-3xl text-amber-400 text-center my-[10px]'>PRESS PHOTOS</h1>
        <div className='flex flex-col items-center md:flex-row lg:flex-wrap justify-center gap-4'>
          <div>
            <img src={liveMixtape} alt='OTO Big Tones Album Art' />
            <h3 className='text-slate-200 text-center'>Live Mixtape, Saskatoon, SK</h3>
          </div>
          <div>
            <img src={moonbeams} alt='OTO Big Tones Album Art' />
            <h3 className='text-slate-200 text-center'>Moonbeams Show, Coors Event Centre Saskatoon, SK</h3>
          </div>
          <div>
            <img src={iceCream} alt='OTO Big Tones Album Art' />
            <h3 className='text-slate-200 text-center'>Live Mixtape, Saskatoon, SK</h3>
          </div>
        </div>
      </section>
      {/* <section className='pressLinks'>
        <h1 className='altHeader'>
          PRESS
        </h1>
      </section> */}
    </div>
  );
};

export default EPK;