import React from 'react';

type Props = {
  event: any;
};

const RaceWeekendSchedule = ({ event }: Props): React.ReactNode => {
  return (
    <div className='h-full bg-f1-grey px-6 py-4 space-y-4'>
      <h3 className='font-display text-white text-lg'>Schedule</h3>
      {Array.from(Array(4).keys()).map((x: number) => {
        return (
          <ScheduleLine
            key={x}
            event={event[`Session${x + 1}`]}
            datetime={event[`Session${x + 1}DateUtc`]}
          />
        );
      })}
      {/* 5th session is always race day
       */}
      <ScheduleLine event='RACE DAY' datetime={event['Session5DateUtc']} />
    </div>
  );
};

type ScheduleLineProps = {
  event: string;
  datetime: string;
};

const ScheduleLine = ({
  event,
  datetime,
}: ScheduleLineProps): React.ReactNode => {
  const fontWeight = event === 'RACE DAY' ? 'font-semibold' : 'font-regular';
  const fontColor = event === 'RACE DAY' ? 'text-f1-teal' : 'text-white';

  const pstDateTime = utcToPst(datetime).split(', ');

  const date = pstDateTime[0];
  const time = pstDateTime[1];

  return (
    <div className='grid grid-cols-8'>
      <p className={`col-span-4 text-sm ${fontWeight} ${fontColor}`}>{event}</p>
      <p className={`col-span-3 text-sm ${fontWeight} ${fontColor}`}>{date}</p>
      <p className={`col-span-1 text-sm ${fontWeight} ${fontColor}`}>{time}</p>
    </div>
  );
};

const utcToPst = (epoch: string) => {
  const utcDate = new Date(epoch);
  const pstDate = utcDate.toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
    hour12: false,
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  console.log(pstDate);
  return pstDate;
};

export default RaceWeekendSchedule;
