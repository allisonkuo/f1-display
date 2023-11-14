import React from 'react';
import Image from 'next/image';

type CalendarItemProps = {
  raceName: string;
  winner: string;
  isCompleted: boolean;
};

const CalendarItem = ({
  raceName,
  winner,
  isCompleted,
}: CalendarItemProps): React.ReactNode => {
  const borderColor = isCompleted ? 'border-f1-teal' : 'border-slate-300';

  return (
    <div
      className={`flex bg-f1-grey border-2 rounded-2xl shadow-lg ${borderColor}`}
    >
      <div className='flex-auto w-3/4'>
        <p className='pl-4 py-5 text-white font-semibold uppercase text-xs'>
          {raceName}
        </p>
      </div>

      <div className='flex-auto w-1/4 relative'>
        {winner && winner.length > 0 ? (
          <Image
            src='/images/drivers/max-verstappen-transparent.png'
            alt={`Portrait of ${winner}`}
            fill
            style={{
              objectFit: 'cover',
            }}
            className='pt-2 rounded-br-2xl'
          />
        ) : null}
      </div>
    </div>
  );
};

export default CalendarItem;
