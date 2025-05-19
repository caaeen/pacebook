import {React, useState, useEffect} from 'react'
import Header from './header.jsx'
import Tools from './aside/tools.jsx'
import Feed from './aside/feed.jsx'
const Facebook = () => {
  return (
    <>
        <div className='bg-[#1C1C1D] min-h-svh'>
            <Header/>
            <div className=' w-full max-w-[2590px]  min-h-svh  flex place-self-center '>
              <div className='min-w-[300px] relative   h-full'>
                <Tools/>
              </div>

              <div className='w-full  h-full flex justify-center'>
                <Feed/>
              </div>

              <div className='min-w-[300px] h-full'>

              </div>
            </div>
        </div>
    </>
  )
}

export default Facebook