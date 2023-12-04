import Link from 'next/link';
import Countdown from './CountdownTimer';

type Props = {
  raceEvent: any;
};

const UpcomingRace = ({ raceEvent }: Props) => {
  console.log(raceEvent);
  if (raceEvent == undefined) {
    return (
      <div className='flex flex-col items-center text-center space-y-8'>
        <div>
          <h4 className='uppercase font-bold text-f1-teal font-sans'>
            Upcoming Race
          </h4>
        </div>

        <div>
          <h1 className='text-3xl font-medium text-white mt-3 mb-2'>
            Gotta wait til
          </h1>
          <h1 className='text-3xl font-medium text-white'>next year :(</h1>
        </div>
      </div>
    );
  }
  return (
    <Link href={`/race/${raceEvent.RoundNumber}`}>
      <div className='flex flex-col items-center text-center space-y-8'>
        <div>
          <h4 className='uppercase font-bold text-f1-teal font-sans'>
            Upcoming Race
          </h4>
        </div>

        <div>
          <h1 className='text-4xl font-bold uppercase text-white font-display'>
            {raceEvent.EventName != undefined &&
              raceEvent.EventName.replace('Grand Prix', 'GP')}
          </h1>
        </div>

        <Countdown />
      </div>
    </Link>
  );
};

export default UpcomingRace;
