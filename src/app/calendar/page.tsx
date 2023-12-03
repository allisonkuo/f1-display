import CalendarItem from '@/components/Calendar/CalendarItem';
import NotAvailable from '@/components/NotAvailable';
import Image from 'next/image';
import Link from 'next/link';

export default async function Calendar() {
  const res = await fetch('http://localhost:3000/api/calendar/2024');
  const races = await res.json();

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
      {races.length == 0 ? (
        <NotAvailable />
      ) : (
        <div className='grid grid-flow-col grid-rows-6 grid-cols-4 gap-5'>
          {races.map((race: any) => (
            <Link key={race.RoundNumber} href={`/race/${race.RoundNumber}`}>
              <CalendarItem
                raceName={race.EventName.replace('Grand Prix', 'GP')}
                winner={'Max Verstappen'}
                isCompleted={race.HasEventCompleted}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
