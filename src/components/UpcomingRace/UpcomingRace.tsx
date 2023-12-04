import Countdown from './CountdownTimer';

type Props = {
  event: any;
};

const UpcomingRace = ({ event }: Props) => {
  console.log(event);
  return (
    <div className='flex flex-col items-center text-center space-y-8'>
      <div>
        <h4 className='uppercase font-bold text-f1-teal font-sans'>
          Upcoming Race
        </h4>
      </div>

      <div>
        <h1 className='text-4xl font-bold uppercase text-white font-display'>
          {event.EventName != undefined &&
            event.EventName.replace('Grand Prix', 'GP')}
        </h1>
      </div>

      <Countdown />
    </div>
  );
};

export default UpcomingRace;
