import React from 'react'

const StoryCard = ({name, image, profile}) => {
  return (
    <div className='cursor-pointer relative w-[113px] p-3 h-full pb-1.5 bg-[#252728] rounded-xl flex justify-center items-end  overflow-hidden'>
        <img className="opacity-80 absolute top-0 left-0 w-full h-full hover:scale-105 ease duration-200 object-cover" src={image}  alt="" />
        <div className='flex flex-col justify-between items-start h-full w-full z-10 text-white'>
            <img className="w-[40px] h-[40px] border-4 border-blue-600 object-cover rounded-full shadow-md" src={profile} alt="" />
            <small><b>{name}</b></small>
        </div>
    </div>
  )
}

export default StoryCard