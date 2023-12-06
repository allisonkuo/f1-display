import CircuitInfo from '@/components/CircuitInfo';
import WeekendResultsGrid from '@/components/RaceResults/WeekendResultsGrid';
import RaceWeekendSchedule from '@/components/RaceWeekendSchedule';
import WeatherSection from '@/components/WeatherSection';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

async function getEvent(raceId: string) {
  const res = await fetch(`http://localhost:3000/api/events/${raceId}`);
  return res.json();
}

export default async function RaceDetails({
  params,
}: {
  params: { id: string };
}) {
  const res = getEvent(params.id);
  const event = await Promise.resolve(res);

  console.log(event);

  return (
    <div className='flex w-full space-x-4'>
      {/* May have to use a fixed width to get proportion right */}
      <div className='w-1/2 shadow-lg'>
        <CircuitInfo />
      </div>

      <div className='w-1/2 flex flex-col space-y-4'>
        <div className='h-[55px] flex'>
          <div className='flex-auto'>
            <h3 className='font-display text-2xl text-white'>
              {event.EventName}
            </h3>
            <h4 className='text-white'>
              {event.Location}, {event.Country}
            </h4>
          </div>
          {/* Probably should style this via flex instead of hardcoding a padding, but whatever for now */}
          <div className='w-[70px]'>
            <Link href='/'>
              <Image
                src='/images/F1.svg.png'
                alt='Logo'
                width={70}
                height={50}
                style={{
                  paddingTop: '10px',
                }}
              />
            </Link>
          </div>
        </div>

        <div className='h-[250px] flex space-x-4'>
          <div className='w-4/5 shadow-lg'>
            <Suspense fallback={<p>Race schedule loading...</p>}>
              <RaceWeekendSchedule event={event} />
            </Suspense>
          </div>
          <div className='w-1/5 shadow-lg'>
            <WeatherSection />
          </div>
        </div>

        <div className='flex-auto'>
          <WeekendResultsGrid raceId={params.id} />
        </div>
      </div>
    </div>
  );
}
