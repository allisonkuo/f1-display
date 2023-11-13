import React from 'react';

const RemainingSchedule = (): React.ReactNode => {
  return (
    <div className='flex flex-col space-y-8 items-center'>
      <div className='flex-none'>
        <h3 className='font-bold uppercase text-black'>Remaining Schedule</h3>
      </div>
      <div className='flex-none'>
        <button className='border-2 border-slate-300 font-bold uppercase rounded-2xl px-6 py-3'>
          Monaco GP
        </button>
      </div>
      <div className='flex-none'>
        <button className='border-2 border-slate-300 font-bold uppercase rounded-2xl px-6 py-3'>
          Canadian GP
        </button>
      </div>
      <div className='flex-none'>
        <button className='border-2 border-slate-300 font-bold uppercase rounded-2xl px-6 py-3'>
          Spanish GP
        </button>
      </div>

      <div className='flex-none'>
        <button className='bg-slate-300 font-bold rounded-2xl px-4 py-2 text-black'>
          + See More
        </button>
      </div>
    </div>
  );
};

export default RemainingSchedule;
