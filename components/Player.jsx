import { PlayCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Player = () => {
  return (
    <div className='h-24 bg-neutral-800 border-r border-neutral-700 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8'>
      <div className='flex items-center space-x-4'>
        {/* Song details */}
      </div>
      <div className='flex items-center justify-center'>
        <PlayCircleIcon className='h-10 w-10' />
      <div></div>
      </div>
    </div>
  )
}

export default Player;
