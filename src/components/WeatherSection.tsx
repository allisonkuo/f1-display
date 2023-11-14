import Image from 'next/image';
import React from 'react';

type WeatherItemProps = {
  imagePath: string;
  altText: string;
};

const WeatherItem = ({
  imagePath,
  altText,
}: WeatherItemProps): React.ReactNode => {
  return (
    <div className='flex-auto p-2'>
      <Image src={imagePath} alt={altText} width={80} height={80} />
      <p className='text-sm text-center text-white mt-2'>76 &deg;F</p>
    </div>
  );
};

const WeatherSection = (): React.ReactNode => {
  return (
    <div className='flex flex-col h-full bg-f1-grey p-2'>
      <WeatherItem
        imagePath='/images/partlycloudyagain.svg'
        altText='Icon of forecasted weather'
      />
      <WeatherItem
        imagePath='/images/windy.svg'
        altText='Icon of forecasted wind'
      />
    </div>
  );
};

export default WeatherSection;
