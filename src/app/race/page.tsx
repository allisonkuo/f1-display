import RaceWeekendSchedule from '@/components/RaceWeekendSchedule';
import WeatherSection from '@/components/WeatherSection';

export default function RaceCalendar() {
  return (
    <div className='flex w-full space-x-4'>
      {/* May have to use a fixed width to get proportion right */}
      <div className='w-1/2 bg-lime-300'>
        <h3>Circuit Info Section</h3>
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

        <div className='flex-auto bg-rose-300'></div>
      </div>
    </div>
  );
}
