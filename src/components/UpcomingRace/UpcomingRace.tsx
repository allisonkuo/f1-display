import Countdown from './CountdownTimer';

const UpcomingRace = () => {
  return (
    <div className='flex flex-col items-center text-center space-y-8 mb-5'>
      <div>
        <h4 className='uppercase font-bold text-f1-teal font-sans'>
          Upcoming Race
        </h4>
      </div>

      <div>
        <h1 className='text-4xl font-bold uppercase text-white font-display'>
          Emilia Romagna GP
        </h1>
      </div>

      <Countdown />
    </div>
  );
};

export default UpcomingRace;
