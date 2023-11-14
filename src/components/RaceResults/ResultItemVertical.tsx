import React from 'react';
import Image from 'next/image';

type ResultItemVerticalProps = {
  position: string;
  driverName: string;
  imagePath: string;
};

const ResultItemVertical = ({
  position,
  driverName,
  imagePath,
}: ResultItemVerticalProps): React.ReactNode => {
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
};

export default ResultItemVertical;
