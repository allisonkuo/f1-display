import React from 'react';

type CountdownTimerElementProps = {
  time: string;
  unit: string;
};

const CountdownTimerElement = ({
  time,
  unit,
}: CountdownTimerElementProps): React.ReactNode => {
  return (
    <div className='mt-2'>
      <div className='flex w-20 h-20 bg-f1-teal rounded-3xl justify-center items-center mb-3'>
        <p className='text-3xl font-bold text-white'>{time}</p>
      </div>
      <p className='text-lg uppercase text-white'>{unit}</p>
    </div>
  );
};

export default CountdownTimerElement;
