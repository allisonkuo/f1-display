import Countdown from './CountdownTimer';

const UpcomingRace = () => {
  return (
    <div className='flex flex-col items-center text-center space-y-8 mb-4'>
      <div>
        <h3 className='uppercase font-bold text-white font-sans'>
          Upcoming Race
        </h3>
      </div>

      <div>
        <h2 className='text-3xl font-bold uppercase text-white font-display'>
          Emilia Romagna GP
        </h2>
      </div>

      <Countdown />
    </div>
  );
};

export default UpcomingRace;
