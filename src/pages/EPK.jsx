import React from 'react'
import AltHeader from '../components/AltHeader.jsx'
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
        <h1 className='text-7xl text-amber-400 text-center'>EPK</h1>
        {Viewport().width < 640 ? <div className='text-xl flex flex-col justify-items-center mx-[10px] gap-2'>
          <div className='flex flex-col gap-2'>
            <img className='h-[200px] w-[1000px] object-cover object-[center_23%]' src={tonesPurp} alt='OTO Big Tones Performing' />
          </div>
        <p className='flex items-center text-slate-200'>Anthony Pasqua aka Big Tones is an Indigenous Recording Artist born in Surrey, BC. He grew up in Regina, SK and has heavy ancestral ties to Treaty 4 Territory coming from Pasqua First Nation #79 & George Gordon First Nation #84. Breaking the cycle of intergenerational trauma, Big Tones uses music as an outlet, finding therapeutic release in storytelling through songwriting.</p>
            <img className='h-[200px] w-[1000px] object-cover object-[center_43%]'  src={otoClick} alt='OTO Group' />
        <p className='flex items-center text-slate-200'>Big Tones is a versatile artist, captivating performer and artist mentor. With a focus on old school hip hop sound, his powerful and soothing voice with intricate flows keeps listeners intrigued lyric after lyric. Big Tones shares his personal experience and offers perspectives on life through the eyes of Indigenous peoples. He moves audiences with his strong stage presence and masterful command of the mic. Big Tones uses hip hop as a vessel to communicate aspects of pain and trauma, moving through to healing, celebration and taking back pride through culture. Recently getting airtime on CBC Radio Active with his new single Creased AF1's Big Tones is striving with a hunger for more. Big Tones has worked as an artist mentor with the Community Arts Mentorship Program, Paved Arts, Creative City Centre Regina and at Kilburn Hall. He appreciates the opportunity to encourage youth voices.</p>
          <br></br>
        </div>
        : Viewport().width < 768 ?
        <div className='text-xl flex flex-col items-center justify-items-center sm:mx-[10px] md:mx-[50px] lg:mx-[150px] gap-2 md:gap-4'>
          <div className='flex flex-row gap-2'>
            <img className='size-80' src={tonesPurp} alt='OTO Big Tones Performing' />
        <p className='flex items-center text-slate-200'>Anthony Pasqua aka Big Tones is an Indigenous Recording Artist born in Surrey, BC. He grew up in Regina, SK and has heavy ancestral ties to Treaty 4 Territory coming from Pasqua First Nation #79 & George Gordon First Nation #84. Breaking the cycle of intergenerational trauma, Big Tones uses music as an outlet, finding therapeutic release in storytelling through songwriting. Big Tones is a versatile artist, captivating performer and artist mentor. With a focus on old school hip hop sound, his powerful and soothing voice with intricate flows keeps listeners intrigued lyric after lyric. Big Tones shares his personal experience and offers perspectives on life through the eyes of Indigenous peoples. He moves audiences with his strong stage presence and masterful command of the mic. Big Tones uses hip hop as a vessel to communicate aspects of pain and trauma, moving through to healing, celebration and taking back pride through culture. Recently getting airtime on CBC Radio Active with his new single Creased AF1's Big Tones is striving with a hunger for more. Big Tones has worked as an artist mentor with the Community Arts Mentorship Program, Paved Arts, Creative City Centre Regina and at Kilburn Hall. He appreciates the opportunity to encourage youth voices.</p>
          </div>
            <img className='h-[250px] w-[500px] object-cover ' src={otoClick} alt='OTO Group' />
            <br></br>
        </div> : 
        }
        
      </section>
      <div className='flex justify-center'>
        <hr className='h-0.5 rounded-md border-0 w-10/12 bg-amber-400 outline-amber-400'></hr>

      </div>
      <section className='md:flex md:flex-row md:flex-wrap justify-center'>
        <h1 className='text-slate-200'>PRESS PHOTOS</h1>
        <img src={liveMixtape} alt='OTO Big Tones Album Art' />
        <h3 className='text-slate-200'>Live Mixtape, Saskatoon, SK</h3>
        <img src={moonbeams} alt='OTO Big Tones Album Art' />
        <h3 className='text-slate-200'>Moonbeams Show, Coors Event Centre Saskatoon, SK</h3>
        <img src={iceCream} alt='OTO Big Tones Album Art' />
        <h3 className='text-slate-200'>Live Mixtape, Saskatoon, SK</h3>
      </section>
      <hr></hr>
      <section className='pressLinks'>
        <h1 className='altHeader'>
          PRESS
        </h1>
      </section>
    </div>
  );
};

export default EPK;