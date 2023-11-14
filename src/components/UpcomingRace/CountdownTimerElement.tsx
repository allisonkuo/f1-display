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
      <div className='flex w-[90px] h-[90px] bg-f1-teal rounded-3xl justify-center items-center m-1'>
        <p className='text-5xl font-bold text-white'>{time}</p>
      </div>

      {/* <div className='flex w-20 h-20 justify-center items-center'>
        <p className='text-7xl font-bold text-f1-teal'>{time}</p>
      </div> */}
      <p className='text-lg uppercase text-white tracking-widest'>{unit}</p>
    </div>
  );
};

export default CountdownTimerElement;
