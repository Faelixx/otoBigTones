import React from 'react'
import  Card  from '@mui/material/Card'
import  CardContent  from '@mui/material/CardContent'
import  CardHeader  from '@mui/material/CardHeader'

import { calendarId } from './calKey.jsx'
import { ytApiKey } from './ytKey.jsx'
import { useState, useEffect } from 'react';

const CalendarEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return (
    <Card classname='w-full max-w-2xl mx-auto'>
      <CardContent className='p-6'>
        <p className='text-center'>Loading upcoming dates...</p>
      </CardContent>
    </Card>
  );

  if (error) return (
    <Card className='w-full max-w-2xl mx-auto'>
      <CardContent className='p-6'>
        <p className='text-center text-amber-600'>Error: {error}</p>
      </CardContent>
    </Card>
  );

  return (
    <div>
      <Card className='w-20 max-w-2xl mx-auto'>
        <CardContent>
          <p>Upcoming Tour Dates</p>
        </CardContent>
      </Card>
    </div>
  );
};
export default CalendarEvents;