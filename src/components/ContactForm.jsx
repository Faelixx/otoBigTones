import React from 'react'
import { useForm, ValidationError } from '@formspree/react'


const ContactForm = () => {
  const [state, handleSubmit] = useForm("xeoqejpo")
  if (state.succeeded) {
    return <p>Thanks!</p>
  }
  return (
    <div className=' flex flex-col items-center'>
      <h1 className='text-2xl text-amber-400 text-left mt-4'>Send an email to Big Tones OTO</h1>
      <form onSubmit={handleSubmit}>
      <div className='flex flex-col mt-2 text-white'>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          className="w-96 rounded-sm"
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        
        <label>Message:</label>
        <textarea
          className='rounded-sm'
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