import React from 'react';
import Image from 'next/image';

type ResultItemHorizontalProps = {
  position: string;
  driverName: string;
  imagePath: string;
};

const ResultItemHorizontal = ({
  position,
  driverName,
  imagePath,
}: ResultItemHorizontalProps): React.ReactNode => {
  return (
    <div className='flex h-full'>
      <div className='w-1/4 flex justify-end items-center'>
        <p className='font-display text-lg text-white pr-2'>{position}</p>
      </div>
      <div className='w-1/3 flex justify-center items-center'>
        <p className='font-display text-lg text-f1-dark-grey'>{driverName}</p>
      </div>
      <div className='w-5/12 relative'>
        <Image
          src={imagePath}
          alt='Portrait of 2nd Place driver'
          fill
          style={{
            objectFit: 'cover',
            paddingTop: '5px',
          }}
        />
      </div>
    </div>
  );
};

export default ResultItemHorizontal;
