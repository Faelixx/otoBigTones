import React from 'react'
import AltHeader from '../components/AltHeader';

import CalendarEvents from '../api/CalendarEvents.jsx'


const Tour = () => {
  return (
    <div>
      <AltHeader />

      <section>
        <CalendarEvents/>
      </section>
    </div>
  );
};

export default Tour;