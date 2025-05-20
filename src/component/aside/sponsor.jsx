import React from 'react'
import SponsorCard from './extra/sponsorCard'
const Sponsor = () => {
  return (
    <div className=' w-full relative flex flex-col gap-3 h-full pt-5'>
         <b className='text-[17px] font-semibold text-white/60'>Sponsored</b>
         <SponsorCard title={"Enjoying exploring Singapore"} lnk={"cebupacificair.com"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX1H_10xaQvlvTjPjhQ3vpMkOzrHj91R8IsA&s"}/>
         <SponsorCard title={"Be a Better Writer, Starting Today"} lnk={"grammarly.com"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpUvnkc7flAiPWVy2UgO_TzInqKOY5pSbvyQ&s"}/>
    </div>
  )
}

export default Sponsor