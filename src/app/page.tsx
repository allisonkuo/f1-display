import RemainingSchedule from '@/components/RemainingSchedule/RemainingSchedule';
import UpcomingRace from '@/components/UpcomingRace/UpcomingRace';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-row min-h-screen'>
      {/* Left Half */}
      <div className='flex-auto bg-black'>
        <div className='flex flex-col h-full'>
          <div className='flex h-3/5 justify-center'>
            <div className='flex-auto pl-20 pt-24'>
              <Link href='/race'>
                <UpcomingRace />
              </Link>
            </div>
            <div className='w-[105px] h-full relative'>
              {/* a placeholder for the YEAR text */}
              {/* <p className='-rotate-90 text-year translate-y-60 text-f1-red font-extrabold'>
                2024
              </p> */}
              <Image
                src='/images/2024-transparent.png'
                alt='the year'
                fill
                objectFit='contain'
              />
            </div>
          </div>
          <div className='h-2/5 relative'>
            <Image
              src='/images/ferrari-dark-cropped.jpeg'
              alt='Cover image of a Ferrari SF-23'
              fill
              objectFit='cover'
            />
          </div>
        </div>
      </div>

      <div className='w-[300px] pt-24 bg-gradient-to-b from-f1-red to-gradient-dark-red'>
        <RemainingSchedule />
      </div>
    </main>
  );
}
