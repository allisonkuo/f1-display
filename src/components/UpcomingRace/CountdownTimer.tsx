import React from 'react';
import CountdownTimerElement from './CountdownTimerElement';

type Props = {
  raceTimeEpoch: number;
};

const Countdown = ({ raceTimeEpoch }: Props): React.ReactNode => {
  const currentTimeEpoch = Date.now();

  // This should never happen, but just in case
  if (currentTimeEpoch > raceTimeEpoch) {
    return (
      <div>
        <p className='text-white'>This race has already passed.</p>
      </div>
    );
  }

  const timeDiff = raceTimeEpoch - currentTimeEpoch;
  const formattedTimeDiff = secondsToDhm(timeDiff);

  console.log(timeDiff);
  console.log(formattedTimeDiff);

  return (
    <div className='flex space-x-0 pt-2'>
      {/* <CountdownTimerElement time='03' unit='days' />
      <CountdownTimerElement time='12' unit='hrs' />
      <CountdownTimerElement time='47' unit='min' /> */}
      <div className=''>
        <div className='flex flex-col w-[90px] py-3 bg-f1-teal justify-center items-center rounded-l-2xl'>
          <p className='text-white text-5xl font-extrabold'>
            {formattedTimeDiff.days}
          </p>
          <p className='text-sm uppercase text-white tracking-widest'>days</p>
        </div>
      </div>
      <div>
        <div className='flex flex-col w-[90px] py-3 bg-f1-teal justify-center items-center border-x border-black'>
          <p className='text-white text-5xl font-extrabold'>
            {formattedTimeDiff.hours}
          </p>
          <p className='text-sm uppercase text-white tracking-widest'>hrs</p>
        </div>
      </div>
      <div>
        <div className='flex flex-col w-[90px] py-3 bg-f1-teal justify-center items-center rounded-r-2xl'>
          <p className='text-white text-5xl font-extrabold'>
            {formattedTimeDiff.mins}
          </p>
          <p className='text-sm uppercase text-white tracking-widest'>min</p>
        </div>
      </div>
    </div>
  );
};

const secondsToDhm = (epoch: number) => {
  const days = Math.floor(epoch / (3600 * 24));
  epoch -= days * 3600 * 24;

  const hours = Math.floor(epoch / 3600);
  epoch -= hours * 3600;

  const mins = Math.floor(epoch / 60);

  return {
    days: days,
    hours: hours,
    mins: mins,
  };
};

export default Countdown;
