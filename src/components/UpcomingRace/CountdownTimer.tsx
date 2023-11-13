import React from 'react';
import CountdownTimerElement from './CountdownTimerElement';

const Countdown = (): React.ReactNode => {
  return (
    <div className='flex space-x-6'>
      <CountdownTimerElement time='03' unit='days' />
      <CountdownTimerElement time='12' unit='hrs' />
      <CountdownTimerElement time='47' unit='min' />
    </div>
  );
};

export default Countdown;
