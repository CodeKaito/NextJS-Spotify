import { PlayCircleIcon } from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const Player = ({ globalCurrentSongId}) => {

  const {data:session} = useSession();
  const [songInfo, setSongInfo] = useState(null);

  async function fetchSongInfo(trackId) {
    if (trackId) {
        const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
            headers: {
                Authorization: `Bearer ${session.accessToken}`
            }
        })
        const data = await response.json()
        setSongInfo(data)
    }
}

async function getCurrentlyPlaying() {
  const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${session.accessToken}`
  }
  })
  const data = await response.json()

}

  useEffect(()=>{
    // fetch song details and play song
    async function f() {
      if (session && session.accessToken) {
        if (!globalCurrentSongId) {
          // get the currently playing song from spotify
        } else {
          // get song info
          await fetchSongInfo(globalCurrentSongId)
        }
      }
    }
    f()
  },[globalCurrentSongId])

  return (
    <div className='h-24 bg-neutral-800 border-r border-neutral-700 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8'>
      <div className='flex items-center space-x-4'>
        {songInfo?.album.images[0].url && <img className='hidden md:inline h-10 w-10' src={songInfo.album.images[0].url} />}
        <div>
          <p className='text-white text-sm'>{songInfo?.name}</p>
          <p className='text-neutral-400 text-xs'>{songInfo?.artists[0]?.name}</p>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <PlayCircleIcon className='h-10 w-10' />
      <div></div>
      </div>
    </div>
  )
}

export default Player;
