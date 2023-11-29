import React from 'react';
import ResultItemVertical from './ResultItemVertical';
import ResultItemHorizontal from './ResultItemHorizontal';

type RaceResultsGridProps = {
  results: any;
};

const RaceResultsGrid = ({
  results,
}: RaceResultsGridProps): React.ReactNode => {
  const pole = JSON.parse(results['pole']);
  const podium = JSON.parse(results['podium']);

  console.log(pole);
  console.log(podium);

  return (
    <div className='h-full flex space-x-4'>
      {/* 
        MAY NEED TO ADJUST
        1st + Pole = 268 when middle chunk is 180px 
        */}

      {/* Pole */}
      <div className='flex-auto bg-f1-light-grey shadow-lg'>
        <ResultItemVertical
          position='Pole'
          driverName={pole['Abbreviation']}
          imagePath='/images/drivers/lando-norris-transparent.png'
        />
      </div>

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
    </div>
  );
};

export default RaceResultsGrid;
