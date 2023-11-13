import Countdown from '@/components/Countdown';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-row min-h-screen'>
      <div className='flex-auto w-2/3 bg-black p-4'>
        {/* Upcoming Race Component */}
        <div className='flex flex-col items-center text-center space-y-8'>
          <div>
            <h3 className='uppercase font-bold text-white'>Upcoming Race</h3>
          </div>

          <div>
            <h2 className='text-3xl font-bold uppercase text-white'>
              Emilia Romagna GP
            </h2>
          </div>

          <Countdown />
        </div>
      </div>

      <div className='flex-auto w-1/3 bg-f1-red p-4'>
        <div className='flex flex-col'>
          <div className='flex-none p-2'>
            <p className='text-white'>Right Side</p>
          </div>
          <div className='flex-none p-2'>
            <p className='text-white'>Test</p>
          </div>
        </div>
      </div>
    </main>
  );
}
