import CalendarItem from '@/components/Calendar/CalendarItem';
import { races } from '@/lib/constants/races';
import Image from 'next/image';
import Link from 'next/link';

export default function Calendar() {
  return (
    <div className='w-full'>
      <div className='flex'>
        <h2 className='flex-auto text-3xl font-display text-white mb-8'>
          F1 Calendar 2024
        </h2>
        <div className=''>
          {/* Use F1 logo until design own logo? */}
          <Link href='/'>
            <Image
              src='/images/F1.svg.png'
              alt='Logo'
              width={100}
              height={100}
            />
          </Link>
        </div>
      </div>
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
