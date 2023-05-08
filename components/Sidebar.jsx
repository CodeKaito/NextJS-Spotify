import React from 'react'
import { HomeIcon } from '@heroicons/react/24/outline'

function Sidebar() {
  return (
    <div className='w-64 text-neutral-400 grow-0 shrink-0 h-screen overflow-hidden border-r border-neutral-800 flex flex-col px-4 space-y-4'>
      <div className=''>SPOTIFY</div>
      <div>
        <button><HomeIcon className='h-5 w-5' />Home</button>
      </div>
    </div>
  )
}

export default Sidebar
