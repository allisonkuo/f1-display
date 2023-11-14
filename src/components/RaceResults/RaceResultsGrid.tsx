import React from 'react';

const RaceResultsGrid = (): React.ReactNode => {
  return (
    <div className='h-full flex space-x-4'>
      {/* 1st Place */}
      <div className='flex-auto bg-f1-teal'></div>

      {/* 2nd and 3rd */}
      <div className=' w-[62px] flex-auto flex flex-col space-y-4'>
        <div className='h-1/2 bg-f1-teal'></div>
        <div className='h-1/2 bg-f1-teal'></div>
      </div>

      {/* Pole */}
      <div className='flex-auto bg-f1-light-grey'></div>
    </div>
  );
};

export default RaceResultsGrid;
