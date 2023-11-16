import React from 'react';
import Image from 'next/image';

type TrackStatProps = {
  statName: string;
  statNumber: string;
  isLength: boolean;
};

const TrackStat = ({
  statName,
  statNumber,
  isLength,
}: TrackStatProps): React.ReactNode => {
  const parsedStatName = statName.split(' ');
  return (
    <div className='flex w-full items-center'>
      <div className='flex-auto w-full pr-3'>
        <p className='uppercase text-xs text-end text-white'>
          {parsedStatName[0]}
        </p>
        <p className='uppercase text-xs text-end text-white '>
          {parsedStatName[1]}
        </p>
      </div>
      <div className='flex-auto'>
        <p className='font-bold text-white text-4xl'>{statNumber}</p>
      </div>
      {isLength && (
        <div className='flex-auto'>
          <p className='font-bold text-white text-sm pl-1'>KM</p>
        </div>
      )}
    </div>
  );
};

const CircuitInfo = (): React.ReactNode => {
  return (
    <div className='h-full flex flex-col bg-f1-grey items-center'>
      <h3 className='text-center font-display text-xl text-white mt-9 mb-3'>
        Circuit of the Americas
      </h3>

      <div className='h-1/2 w-full relative'>
        <Image
          src='/images/usgp.avif'
          alt='Circuit map'
          fill
          style={{
            objectFit: 'contain',
            padding: '24px',
          }}
        />
      </div>

      <div className='flex-auto flex w-full space-x-2'>
        <div className='w-3/5 space-y-4 p-3'>
          <TrackStat statName='Number Laps' statNumber='57' isLength={false} />
          <TrackStat
            statName='Circuit Length'
            statNumber='5.51'
            isLength={true}
          />
          <TrackStat
            statName='Race Length'
            statNumber='308.405'
            isLength={true}
          />
        </div>
        <div className='w-2/5'>
          <p className='text-2xs text-white py-2 pl-3 pr-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt,
            corrupti minus molestiae autem aliquam dolores quisquam facere
            quaerat, similique, perspiciatis iure laborum facilis dolorem
            voluptatum non! Neque, ex perferendis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default CircuitInfo;
