import React from 'react'
import BigTonesAlbumArt from '../assets/big_tones_album_home.jpg'
import otoClick from '../assets/epk/otoClick.png'
import tonesPurp from '../assets/epk/tonesPurp.png'
import moonbeams from '../assets/epk/moonbeams.png'
import liveMixtape from '../assets/epk/liveMixtape.png'
import iceCream from '../assets/epk/iceCream.png'
import Footer from '../components/Footer.jsx'

const EPK = () => {
  return (
    <div>
      <section className='altHeader'>
        <img src={BigTonesAlbumArt} alt='OTO Big Tones Album Art' />
        <h1>OTO Big Tones</h1>
      </section>
      <section>
        <h1 className='altHeader'>EPK</h1>
        <img src={tonesPurp} alt='OTO Big Tones Performing' />
        <img src={otoClick} alt='OTO Group' />
        <p>Anthony Pasqua aka Big Tones is an Indigenous Recording Artist born in Surrey, BC. He grew up in Regina, SK and has heavy ancestral ties to Treaty 4 Territory coming from Pasqua First Nation #79 & George Gordon First Nation #84. Breaking the cycle of intergenerational trauma, Big Tones uses music as an outlet, finding therapeutic release in storytelling through songwriting. Big Tones is a versatile artist, captivating performer and artist mentor. With a focus on old school hip hop sound, his powerful and soothing voice with intricate flows keeps listeners intrigued lyric after lyric. Big Tones shares his personal experience and offers perspectives on life through the eyes of Indigenous peoples. He moves audiences with his strong stage presence and masterful command of the mic. Big Tones uses hip hop as a vessel to communicate aspects of pain and trauma, moving through to healing, celebration and taking back pride through culture. Recently getting airtime on CBC Radio Active with his new single Creased AF1's Big Tones is striving with a hunger for more. Big Tones has worked as an artist mentor with the Community Arts Mentorship Program, Paved Arts, Creative City Centre Regina and at Kilburn Hall. He appreciates the opportunity to encourage youth voices.</p>
      </section>
      <hr></hr>
      <section className='pressPhotos'>
        <h1>PRESS PHOTOS</h1>
        <img src={liveMixtape} alt='OTO Big Tones Album Art' />
        <h3>Live Mixtape, Saskatoon, SK</h3>
        <img src={moonbeams} alt='OTO Big Tones Album Art' />
        <h3>Moonbeams Show, Coors Event Centre Saskatoon, SK</h3>
        <img src={iceCream} alt='OTO Big Tones Album Art' />
        <h3>Live Mixtape, Saskatoon, SK</h3>
      </section>
      <hr></hr>
      <section className='pressLinks'>
        <h1 className='altHeader'>
          PRESS
        </h1>
      </section>
      <Footer />
    </div>
  );
};

export default EPK;