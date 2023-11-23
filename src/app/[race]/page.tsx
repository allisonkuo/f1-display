import CircuitInfo from '@/components/CircuitInfo';
import RaceResultsGrid from '@/components/RaceResults/RaceResultsGrid';
import RaceWeekendSchedule from '@/components/RaceWeekendSchedule';
import WeatherSection from '@/components/WeatherSection';
import Image from 'next/image';
import Link from 'next/link';

export default function RaceDetails() {
  return (
    <div className='flex w-full space-x-4'>
      {/* May have to use a fixed width to get proportion right */}
      <div className='w-1/2 shadow-lg'>
        <CircuitInfo />
      </div>

      <div className='w-1/2 flex flex-col space-y-4'>
        <div className='h-[55px] flex'>
          <div>
            <h3 className='font-display text-2xl text-white'>
              United States Grand Prix
            </h3>
            <h4 className='text-white'>Austin, Texas</h4>
          </div>
          {/* Probably should style this via flex instead of hardcoding a padding, but whatever for now */}
          <div>
            <Link href='/'>
              <Image
                src='/images/F1.svg.png'
                alt='Logo'
                width={100}
                height={50}
                style={{
                  paddingTop: '10px',
                  paddingLeft: '30px',
                }}
              />
            </Link>
          </div>
        </div>

        <div className='h-[250px] flex space-x-4'>
          <div className='w-4/5 shadow-lg'>
            <RaceWeekendSchedule />
          </div>
          <div className='w-1/5 shadow-lg'>
            <WeatherSection />
          </div>
        </div>

        <div className='flex-auto'>
          <RaceResultsGrid />
        </div>
      </div>
    </div>
  );
}
