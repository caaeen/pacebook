import {React, useState, useEffect} from 'react'
import Header from './header.jsx'
import Tools from './aside/tools.jsx'
import Feed from './aside/feed.jsx'
import Sponsor from './aside/sponsor.jsx'
import Assorted from './aside/assorted.jsx'
const Facebook = () => {
  return (
    <>
        <div className='bg-[#1C1C1D] min-h-svh'>
            <Header/>
            <div className=' w-full max-w-[2590px]  min-h-svh  flex place-self-center '>
              <div className='min-w-[350px] relative  lg:flex hidden h-full'>
                <Tools/>
              </div>

              <div className='w-full  h-full flex justify-center'>
                <Feed/>
              </div>

              <div className='min-w-[350px] max-w-[350px] xl:flex  relative h-full hidden flex-col'>
                <div className='fixed w-[345px] flex flex-col  h-full overflow-y-hidden hover:overflow-y-auto'>
                  <Sponsor/>
                  <hr className='my-4 text-white/30'/>
                  <Assorted/>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Facebook