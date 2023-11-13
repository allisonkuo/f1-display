import CalendarItem from '@/components/Calendar/CalendarItem';
import { races } from '@/lib/constants/races';

export default function Calendar() {
  return (
    <div className='w-full'>
      <h2 className='text-3xl font-display text-white mb-8'>
        F1 Calendar 2024
      </h2>

      <div className='grid grid-flow-col grid-rows-6 grid-cols-4 gap-5'>
        {races.map((race) => (
          <CalendarItem
            key={race.name}
            raceName={race.name}
            winner={race.winner}
            isCompleted={race.isCompleted}
          />
        ))}
      </div>
    </div>
  );
}
