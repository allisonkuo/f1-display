import RemainingSchedule from '@/components/RemainingSchedule/RemainingSchedule';
import UpcomingRace from '@/components/UpcomingRace/UpcomingRace';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-row min-h-screen'>
      <div className='w-2/3 bg-black'>
        <div className='flex flex-col h-full'>
          <div className='flex h-3/5 justify-center items-end'>
            <div className='w-5/6 pl-20'>
              <UpcomingRace />
            </div>
            <div className='w-1/6 h-full'>
              {/* a placeholder for the YEAR text */}
              <p className='-rotate-90 text-year translate-y-60 text-f1-red font-extrabold'>
                2024
              </p>
            </div>
          </div>
          <div className='h-2/5 relative'>
            <Image
              src='/images/ferrari-dark-cropped.jpeg'
              alt='Picture of the author'
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>

      <div className='w-1/3 pt-24 bg-gradient-to-b from-f1-red to-gradient-dark-red'>
        <RemainingSchedule />
      </div>
    </main>
  );
}
