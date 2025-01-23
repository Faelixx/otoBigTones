import React from 'react'
import AOS from 'aos';

import { useForm, ValidationError } from '@formspree/react'


const ContactForm = () => {
  const [state, handleSubmit] = useForm("xeoqejpo")
  if (state.succeeded) {
    return <p>Thanks!</p>
  }

  AOS.init();

  return (
    <div data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' className=' flex flex-col items-center'>
      <h1 data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' className='text-2xl text-amber-400 text-left mt-4'>Send an email to Big Tones OTO</h1>
      <form onSubmit={handleSubmit}>
      <div data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' className='flex flex-col mt-2'>
        <label className='text-white' htmlFor="email">
          Email Address
        </label>
        <input
          className="w-96 rounded-sm text-black"
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        
        <label className='text-white'>Message:</label>
        <textarea
          className='rounded-sm text-black'
          id="message"
          name="message"
          />
  
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        />
      <button className='bg-amber-400 rounded-sm mx-10 mt-2' type="submit" disabled={state.submitting}>
        Submit
      </button>
        </div>
    </form>
    </div>
  );
};
export default ContactForm;