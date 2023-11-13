import React from 'react';

type CountdownElementProps = {
  time: string;
  unit: string;
}

const CountdownElement = ({time, unit}: CountdownElementProps): React.ReactNode => {
  return (
    <div>
      <div className='flex w-20 h-20 bg-f1-teal rounded-3xl justify-center items-center mb-3'>
        <p className='text-2xl font-bold text-white'>{time}</p>
      </div>
      <p className='text-lg uppercase text-white'>{unit}</p>
    </div>
  );
};

export default CountdownElement;
