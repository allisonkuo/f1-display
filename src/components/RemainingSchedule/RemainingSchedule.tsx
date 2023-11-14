import React from 'react';
import Link from 'next/link';

const RemainingSchedule = (): React.ReactNode => {
  return (
    <div className='flex flex-col space-y-8 items-center'>
      <div className='flex-none'>
        <h3 className='font-bold uppercase text-black'>Remaining Schedule</h3>
      </div>
      <div className='flex-none'>
        <button className='border-2 border-slate-300 font-semibold uppercase rounded-2xl px-6 py-3 text-xs text-white shadow-lg'>
          Monaco GP
        </button>
      </div>
      <div className='flex-none'>
        <button className='border-2 border-slate-300 font-semibold uppercase rounded-2xl px-6 py-3 text-xs text-white shadow-lg'>
          Canadian GP
        </button>
      </div>
      <div className='flex-none'>
        <button className='border-2 border-slate-300 font-semibold uppercase rounded-2xl px-6 py-3 text-xs text-white shadow-lg'>
          Spanish GP
        </button>
      </div>

      <div className='flex-none'>
        <button className='bg-slate-300 font-semibold rounded-2xl px-4 py-2 text-xs text-black'>
          <Link href='/calendar'>+ See More</Link>
        </button>
      </div>
    </div>
  );
};

export default RemainingSchedule;
