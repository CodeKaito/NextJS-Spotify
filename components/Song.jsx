import React from 'react'

const Song = ({sno, track}) => {
  return (
    <div className='grid grid-cols-2 text-neutral-400 text-sm py-4 px-5 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-default'>
      <div className='flex items-center space-x-4'>
        <p className='w-5'>{sno + 1}</p>
        <img className='h-10 w-10' src={track.album.images[0].url} alt="track-album" />
        <div>
            <p className='w-36 lg:w-64 truncate text-white text-base'>{track.name}</p>
            <p>
                {
                    track.artists.map((artist, i) => {
                        return (
                            <>
                                <span className='hover:underline cursor-pointer'>{artist.name}</span>
                                <span>{i != track.artists.length - 1 ? "," :null}</span>
                            </>
                        )
                    })
                }
            </p>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <p className='w-40 truncate'></p>
      </div>
    </div>
  )
}

export default Song
