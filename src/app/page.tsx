import RemainingSchedule from '@/components/RemainingSchedule/RemainingSchedule';
import UpcomingRace from '@/components/UpcomingRace/UpcomingRace';
import Image from 'next/image';
import Link from 'next/link';

async function getRemainingRaces() {
  const res = await fetch(`http://localhost:3000/api/remainingevents/`);
  return res.json();
}

export default async function Home() {
  const res = getRemainingRaces();
  const remainingEvents = await Promise.resolve(res);

  const nextRace = remainingEvents[0];
  const nextThreeAfter = remainingEvents.slice(1);

  return (
    <main className='flex flex-row min-h-screen'>
      {/* Left Half */}
      <div className='flex-auto bg-black'>
        <div className='flex flex-col h-full'>
          <div className='flex h-3/5 justify-center'>
            <div className='flex-auto pl-20 pt-24'>
              <UpcomingRace raceEvent={nextRace} />
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
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
          <div className='h-2/5 relative'>
            <Image
              src='/images/ferrari-dark-cropped.jpeg'
              alt='Cover image of a Ferrari SF-23'
              fill
              style={{
                objectFit: 'cover',
              }}
              priority
            />
          </div>
        </div>
      </div>

      <div className='w-[300px] pt-24 bg-gradient-to-b from-f1-red to-gradient-dark-red'>
        <RemainingSchedule remainingEvents={nextThreeAfter} />
      </div>
    </main>
  );
}
