import React from 'react';

type CalendarItemProps = {
  name: string;
  isCompleted: boolean;
};

const CalendarItem = ({
  name,
  isCompleted,
}: CalendarItemProps): React.ReactNode => {
  const borderColor = isCompleted ? 'border-f1-teal' : 'border-slate-300';

  return (
    <div
      className={`bg-f1-grey px-4 py-5 border-2 rounded-2xl shadow-lg ${borderColor}`}
    >
      <p className='text-white font-semibold uppercase text-xs'>{name}</p>
    </div>
  );
};

export default CalendarItem;
