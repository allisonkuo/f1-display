import React from 'react';
import Image from 'next/image';

type ResultItemVerticalProps = {
  position: string;
  driverName: string;
  imagePath: string;
  isAvailable: boolean;
};

const ResultItemVertical = ({
  position,
  driverName,
  imagePath,
  isAvailable,
}: ResultItemVerticalProps): React.ReactNode => {
  if (isAvailable) {
    return (
      <div className='flex flex-col h-full'>
        <div className='h-1/4 flex justify-center items-end'>
          <p className='font-display text-lg text-white'>{position}</p>
        </div>
        <div className='h-1/4 flex justify-center items-start'>
          <p className='font-display text-lg text-f1-dark-grey pt-2'>
            {driverName}
          </p>
        </div>
        <div className='h-1/2 relative'>
          <Image
            src={imagePath}
            alt='Portrait of driver on pole'
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    );
  }
  return (
    <div className='h-full flex flex-col bg-f1-grey'>
      <div className='h-1/4 flex justify-center items-end'>
        <p className='font-display text-lg text-white'>{position}</p>
      </div>
      <div className='h-1/4 flex justify-center items-start'>
        <p className='font-display text-lg text-f1-light-grey pt-2'>TBD</p>
      </div>
    </div>
  );
};

export default ResultItemVertical;
