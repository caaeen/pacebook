import React from 'react'

const SponsorCard = ({image, title, lnk}) => {
  return (
    <div className='w-full flex item-center gap-3 items-center'>
        <img src={image} className='object-cover w-[180px] h-[180px] bg-[#252728] rounded-md'/>
        <div className=' text-white/80 text-wrap  flex flex-col'>
            <b className='mb-1'>{title}</b>
            <small className='text-white/70'>{lnk}</small>
        </div>
    </div>

    
  )
}

export default SponsorCard