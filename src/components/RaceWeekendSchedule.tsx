import React from 'react';

type RaceWeekendScheduleProps = {
  raceId: string;
};

async function getRaceSchedule(raceId: string) {
  const res = await fetch(`http://localhost:3000/api/raceschedule/${raceId}`);
  return res.json();
}

const RaceWeekendSchedule = async ({
  raceId,
}: RaceWeekendScheduleProps): Promise<React.ReactNode> => {
  const res = getRaceSchedule(raceId);
  const schedule = await Promise.resolve(res);

  const parsedSchedule = JSON.parse(schedule['data']);
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

const utcToPst = (epoch: string) => {
  const utcDate = new Date(epoch);
  return utcDate.toLocaleString('en-GB', {
    timeZone: 'America/Los_Angeles',
  });
};

export default RaceWeekendSchedule;
