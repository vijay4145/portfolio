import React from 'react'

export const Achievements = () => {
  return (
    <>
    <div id='achievements' className='mt-1 p-5 text-lg flex flex-col flex-wrap'>
        <h5>𝘼𝙘𝙝𝙞𝙚𝙫𝙚𝙢𝙚𝙣𝙩𝙨 :</h5>
      <div data-aos="fade-right" id='tag' className='flex flex-wrap gap-3'>
        <div className='bg-purple-200 max-sm:text-base max-w-fit px-3 py-1 rounded-lg shadow-md'>
          2nd Rank in SIES bug4ever
        </div>
        <div className='bg-purple-200 max-sm:text-base max-w-fit px-3 py-1 rounded-lg shadow-md'>
          Global Rank 184 in Coderush
        </div>
        <div className='bg-purple-200 max-sm:text-base max-w-fit px-3 py-1 rounded-lg shadow-md'>
          Global rank 96 in Codechef contest
        </div>
        <div className='bg-purple-200 max-sm:text-base max-w-fit px-3 py-1 rounded-lg shadow-md'>
          594⭐ in GeeksforGeeks
        </div>
        <div className='bg-purple-200 max-sm:text-base max-w-fit px-3 py-1 rounded-lg shadow-md'>
          Selected for SIH hackathon (institute level)
        </div>
      </div>
    </div>
    </>
  )
}
