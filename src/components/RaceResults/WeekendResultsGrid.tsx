import React from 'react';
import ResultItemVertical from './ResultItemVertical';
import ResultItemHorizontal from './ResultItemHorizontal';
import QualifyingResults from './QualifyingResults';
import RaceResults from './RaceResults';
import { Suspense } from 'react';

type Props = {
  raceId: string;
};

const WeekendResultsGrid = ({ raceId }: Props): React.ReactNode => {
  return (
    <div className='h-full flex space-x-4'>
      {/* 
        MAY NEED TO ADJUST
        1st + Pole = 268 when stacked chunk is 180px 
        */}

      {/* Pole */}
      <Suspense fallback={<p>Qualifying results are loading...</p>}>
        <div className='flex-auto bg-f1-light-grey shadow-lg'>
          {/* @ts-expect-error Async Server Component */}
          <QualifyingResults raceId={raceId} />
        </div>
      </Suspense>

      {/* total race results width = 134 + 16 + 180 = 330 */}
      <Suspense fallback={<p>Race results are loading...</p>}>
        <div className='w-[330px] flex space-x-4'>
          {/* @ts-expect-error Async Server Component */}
          <RaceResults raceId={raceId} />
        </div>
      </Suspense>
    </div>
  );
};

export default WeekendResultsGrid;
