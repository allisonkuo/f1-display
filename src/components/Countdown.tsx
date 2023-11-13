import React from 'react'
import CountdownElement from './CountdownElement';

const Countdown = (): React.ReactNode => {
  return (
    <div className='flex space-x-6'>
      <CountdownElement time='03' unit='days'/>
      <CountdownElement time='12' unit='hrs' />
      <CountdownElement time='47' unit='min' />
    </div>
  )
}

export default Countdown;