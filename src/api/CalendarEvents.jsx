import React from 'react'
import AOS from 'aos';

import { calendarId } from './calKey.jsx'
import { ytApiKey } from './ytKey.jsx'
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons"

const CalendarEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  const card2 = 'flex flex-row md:max-w-[60%] sm:max-w-[80%] sm:mx-2 md:mx-auto bg-zinc-900 rounded-md my-2 p-2'
  const card1 = 'flex flex-row md:max-w-[60%] sm:max-w-[80%] sm:mx-2 md:mx-auto bg-zinc-950 rounded-md my-2 p-2'

  const CALENDAR_ID = calendarId;
  const API_KEY = ytApiKey;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const timeMin = new Date().toISOString();
        const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&timeMin=${timeMin}&orderBy=startTime&singleEvents=true&maxResults=50`

        const response = await fetch(url);
        if (!response.ok) throw new Error('failed to fetch events');

        const data = await response.json();
        const formattedEvents = data.items.map(event => ({
          id: event.id,
          title: event.summary,
          start: new Date(event.start.dateTime || event.start.date),
          location: event.location || 'TBA',
          description: event.description || ''
        }));

        setEvents(formattedEvents);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  AOS.init();
  if (loading) return (
    <div data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' className='md:max-w-[60%] sm:max-w-[80%] sm:mx-2 md:mx-auto bg-zincs-900'>
    <p className='text-center'>Loading upcoming dates...</p>
    </div> 
  );

  if (error) return (
    <div data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' className='md:max-w-[60%] sm:max-w-[80%] sm:mx-2 md:mx-auto bg-zinc-900'>
        <p className='text-center text-amber-600'>Error: {error}</p>
        </div>

  );


  return (
    <div className='sm:mx-2'>
    <div className={card1}>
      <p data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' className='text-5xl m-2 text-amber-400'>Upcoming Dates</p>
      </div>
      {
        events.length?
        events.map((e) => 
          <div data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' className={events.indexOf(e) % 2 === 0? card2 : card1}>
            <div data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250'>
            <FontAwesomeIcon className='text-amber-400 text-5xl' icon={faCalendarCheck} />
            </div>
            <div className='w-full'>
              <p data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' className='text-2xl mx-2 pr-4 text-amber-400'>{e.title}</p>
              {e.description ? 
              <a data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' href={e.description} target='_blank' rel='noreferrer'className='text-xl mx-2 text-white'>Get tickets here!</a>
              :
              <></>
              }
            </div>
            <div data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' className='flex flex-col w-full justify-end items-end'>
            <p data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' className='text-2xl text-amber-400'>{e.location}</p>
            <div>
              <p data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' className='text-3xl text-white'>{e.start.toLocaleDateString()}</p>
            </div>
            </div>
          </div>
        )
        :
        <div data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' className={card2}>
        <p data-aos='fade-up' data-aos-delay='50' data-aos-duration='1250' className='text-2xl m-2 text-amber-400'>Follow Big Tones for all show announcements!</p>
        </div>
      }
    </div>
  );
};
export default CalendarEvents;