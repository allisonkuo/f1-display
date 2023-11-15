import CircuitInfo from '@/components/CircuitInfo';
import RaceResultsGrid from '@/components/RaceResults/RaceResultsGrid';
import RaceWeekendSchedule from '@/components/RaceWeekendSchedule';
import WeatherSection from '@/components/WeatherSection';
import Image from 'next/image';

export default function RaceCalendar() {
  return (
    <div className='flex w-full space-x-4'>
      {/* May have to use a fixed width to get proportion right */}
      <div className='w-1/2'>
        <CircuitInfo />
      </div>

      <div className='w-1/2 flex flex-col space-y-4'>
        <div className='h-[55px]'>
          <h3 className='font-display text-2xl text-white'>
            United States Grand Prix
          </h3>
          <h4 className='text-white'>Austin, Texas</h4>
        </div>

        <div className='h-[250px] flex space-x-4'>
          <div className='w-4/5'>
            <RaceWeekendSchedule />
          </div>
          <div className='w-1/5'>
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
