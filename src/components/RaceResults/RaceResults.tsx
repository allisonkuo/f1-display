import React from 'react';
import ResultItemVertical from './ResultItemVertical';
import ResultItemHorizontal from './ResultItemHorizontal';

type Props = {
  raceId: string;
};

async function getRaceInfo(raceId: string) {
  const res = await fetch(`http://localhost:3000/api/race/${raceId}`);
  return res.json();
}

const RaceResults = async ({ raceId }: Props): Promise<React.ReactNode> => {
  const res = getRaceInfo(raceId);
  const podium = await Promise.resolve(res);

  console.log(podium);

  return (
    <>
      {/* 1st Place */}
      <div className='w-[134px] bg-f1-teal shadow-lg'>
        <ResultItemVertical
          position='1'
          driverName={podium[0]['Abbreviation']}
          imagePath='/images/drivers/max-verstappen-transparent.png'
        />
      </div>

      {/* 2nd and 3rd */}
      <div className=' w-[180px] flex-none flex flex-col space-y-4'>
        {/* 2nd Place */}
        <div className='h-1/2 bg-f1-teal shadow-lg'>
          <ResultItemHorizontal
            position='2'
            driverName={podium[1]['Abbreviation']}
            imagePath='/images/drivers/lewis-hamilton-transparent.png'
          />
        </div>

        {/* 3rd Place */}
        <div className='h-1/2 bg-f1-teal shadow-lg'>
          <ResultItemHorizontal
            position='3'
            driverName={podium[2]['Abbreviation']}
            imagePath='/images/drivers/charles-leclerc-transparent.png'
          />
        </div>
      </div>
    </>
  );
};

export default RaceResults;
