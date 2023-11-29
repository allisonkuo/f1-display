import React from 'react';

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

  const pstDate = utcToPst(datetime).split(', ');

  return (
    <div className='grid grid-cols-8'>
      <p className={`col-span-4 text-sm ${fontWeight} ${fontColor}`}>{event}</p>
      <p className={`col-span-3 text-sm ${fontWeight} ${fontColor}`}>
        {pstDate[0]}
      </p>
      <p className={`col-span-1 text-sm ${fontWeight} ${fontColor}`}>
        {pstDate[1].replace(/(:\d{2}| [AP]M)$/, '')}
      </p>
    </div>
  );
};

type RaceWeekendScheduleProps = {
  schedule: any;
};

const RaceWeekendSchedule = ({
  schedule,
}: RaceWeekendScheduleProps): React.ReactNode => {
  const parsedSchedule = JSON.parse(schedule);
  console.log(parsedSchedule);

  return (
    <div className='h-full bg-f1-grey px-6 py-4 space-y-4'>
      <h3 className='font-display text-white text-lg'>Schedule</h3>
      <ScheduleLine
        event='Free Practice 1'
        datetime={parsedSchedule['Session1DateUtc']}
      />
      <ScheduleLine
        event='Free Practice 2'
        datetime={parsedSchedule['Session2DateUtc']}
      />
      <ScheduleLine
        event='Free Practice 3'
        datetime={parsedSchedule['Session3DateUtc']}
      />
      <ScheduleLine
        event='Qualifying'
        datetime={parsedSchedule['Session4DateUtc']}
      />
      <ScheduleLine
        event='RACE DAY'
        datetime={parsedSchedule['Session5DateUtc']}
      />
    </div>
  );
};

const utcToPst = (epoch: string) => {
  const utcDate = new Date(epoch);
  return utcDate.toLocaleString('en-GB', {
    timeZone: 'America/Los_Angeles',
  });
};

export default RaceWeekendSchedule;
