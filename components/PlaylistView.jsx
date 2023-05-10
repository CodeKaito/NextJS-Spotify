import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const colors = [
  "from-indigo-500",
  "from-red-500",
  "from-blue-500"
]

function PlaylistView({ globalPlaylistId }) {

  const { data: session } = useSession()
  const [playlistData, setPlaylistData ] = useState(null);

  useEffect(() => {
    async function f() {
      if (session && session.accessToken) {
        const response = await fetch(`https://api.spotify.com/v1/playlists/${globalPlaylistId}`, {
          headers: {
            Authorization: `Bearer ${session.accessToken}`
          }
        })
        const data = await response.json()
        setPlaylistData(data);
      }
    }
    f();
  }, [session, globalPlaylistId])
  

  return (
    <div className='flex-grow h-screen'>
        <header className='text-white sticky top-0 h-20 z-10 text-4xl bg-neutral-800 p-8 flex items-center font-bold'>
          <div>{playlistData?.name}</div>
        </header>
        <div className='absolute z-20 top-5 right-8 flex items-center bg-black bg-opacity-70 text-white space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2'>
          <img className='rounded-full w-7 h-7' src={session?.user.image} alt='profile pic'/>
          <p className='text-sm'>Logout</p>
          <ChevronDownIcon className='h-5 w-5'/>
        </div>
        <div className='relative -top-20 h-screen overflow-y-scroll bg-neutral-900'>
          <section className=''></section>
        </div>
    </div>
  )
}

export default PlaylistView
