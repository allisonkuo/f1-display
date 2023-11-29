import { parse } from 'path';
import React from 'react';

type ScheduleLineProps = {
  event: string;
  date: string;
  time: string;
};

const ScheduleLine = ({
  event,
  date,
  time,
}: ScheduleLineProps): React.ReactNode => {
  const fontWeight = event === 'RACE DAY' ? 'font-semibold' : 'font-regular';
  const fontColor = event === 'RACE DAY' ? 'text-f1-teal' : 'text-white';

  return (
    <div className='grid grid-cols-8'>
      <p className={`col-span-4 text-sm ${fontWeight} ${fontColor}`}>{event}</p>
      <p className={`col-span-3 text-sm ${fontWeight} ${fontColor}`}>{date}</p>
      <p className={`col-span-1 text-sm ${fontWeight} ${fontColor}`}>{time}</p>
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

  // convert time to pst here?
  const seshOne = parsedSchedule['Session1DateUtc'];
  const pstDate = utcToPst(seshOne);
  console.log(pstDate);

  return (
    <div className='h-full bg-f1-grey px-6 py-4 space-y-4'>
      <h3 className='font-display text-white text-lg'>Schedule</h3>
      <ScheduleLine event='Free Practice 1' date='Fri, Oct 22' time='11:00' />
      <ScheduleLine event='Free Practice 2' date='Fri, Oct 22' time='15:00' />
      <ScheduleLine event='Free Practice 3' date='Sat, Oct 23' time='11:30' />
      <ScheduleLine event='Qualifying' date='Sat, Oct 23' time='15:30' />
      <ScheduleLine event='RACE DAY' date='Sun, Oct 24' time='13:00' />
    </div>
  );
};

const utcToPst = (epoch: string) => {
  const utcDate = new Date(epoch);
  return utcDate.toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
  });
};

export default RaceWeekendSchedule;
