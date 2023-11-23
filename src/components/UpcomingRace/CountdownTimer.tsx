import React from 'react';
import CountdownTimerElement from './CountdownTimerElement';

const Countdown = (): React.ReactNode => {
  return (
    <div className='flex space-x-0 pt-2'>
      {/* <CountdownTimerElement time='03' unit='days' />
      <CountdownTimerElement time='12' unit='hrs' />
      <CountdownTimerElement time='47' unit='min' /> */}
      <div className=''>
        <div className='flex flex-col w-[90px] py-3 bg-f1-teal justify-center items-center rounded-l-2xl'>
          <p className='text-white text-5xl font-extrabold'>03</p>
          <p className='text-sm uppercase text-white tracking-widest'>days</p>
        </div>
      </div>
      <div>
        <div className='flex flex-col w-[90px] py-3 bg-f1-teal justify-center items-center border-x border-white'>
          <p className='text-white text-5xl font-extrabold'>12</p>
          <p className='text-sm uppercase text-white tracking-widest'>hrs</p>
        </div>
      </div>
      <div>
        <div className='flex flex-col w-[90px] py-3 bg-f1-teal justify-center items-center rounded-r-2xl'>
          <p className='text-white text-5xl font-extrabold'>47</p>
          <p className='text-sm uppercase text-white tracking-widest'>min</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
