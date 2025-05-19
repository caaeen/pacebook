import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='relative h-[56px]'>
        <div className="header z-20 fixed top-0 left-0 right-0 bg-[#252728] h-[56px] flex items-center justify-between px-4">
            <div className='flex items-center gap-2 w-full'>
                <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="Facebook Logo" className='w-[37px] h-[37px]'/>
                <div className='flex items-center gap-2 text-gray-400 text-[14px] bg-[#333334] rounded-full p-2.5 px-4'>
                   <i className="fa-solid fa-magnifying-glass "></i>
                   <input type="text" placeholder='Search Facebook' className='outline-none text-gray-100'/>
                </div>
            </div>

            <div className='w-full justify-center flex'>
                <ul className='flex items-center gap-5 text-gray-400 '>
                    <li className='py-1'>
                        <div to='/' className='w-[100px] cursor-pointer py-1 flex items-center justify-center hover:bg-[#333334] rounded-[10px] ease duration-200'>
                            <i className="py-2 fa-solid fa-house text-gray-400 text-[20px] "></i>
                        </div>
                    </li>
                    <li className=' py-1'>
                        <div to='/' className='w-[100px] cursor-pointer py-1 flex items-center justify-center hover:bg-[#333334] rounded-[10px] ease duration-200'>
                            <i className="py-2 fa-solid fa-tv text-gray-400 text-[20px]"></i>
                            
                        </div>
                    </li>
                    <li className=' py-1'>
                        <div to='/' className='w-[100px] cursor-pointer py-1 flex items-center justify-center hover:bg-[#333334] rounded-[10px] ease duration-200'>
                            <i className="py-2 fa-solid fa-store text-gray-400 text-[20px]"></i>
                          
                        </div>
                    </li>
                    <li className=' py-1'>
                        <div to='/' className='w-[100px] cursor-pointer py-1 flex items-center justify-center hover:bg-[#333334] rounded-[10px] ease duration-200'>
                            <i className="py-2 fa-solid fa-users text-gray-400 text-[20px]"></i>
                        </div>
                    </li>
                    <li className='py-1'>
                        <div to='/' className='w-[100px] cursor-pointer py-1 flex items-center justify-center hover:bg-[#333334] rounded-[10px] ease duration-200'>
                            <i className="py-2 fa-solid fa-gamepad text-gray-400 text-[20px]"></i>
                       
                        </div>
                    </li>
                    
                    
                </ul>
            </div>

            <div className='w-full flex justify-end items-center gap-2'>
                <div className=' flex items-center'>
                    <i className="text-[20px] fa-solid fa-bars p-2.5 rounded-full text-gray-200 bg-[#333334] cursor-pointer hover:bg-gray-200/30 ease duration-200"></i>
                </div>
                <div className='text-[20px] flex items-center'>
                    <i className="fa-brands fa-facebook-messenger p-2.5 rounded-full text-gray-200 bg-[#333334] cursor-pointer hover:bg-gray-200/30 ease duration-200"></i>
                    
                </div>
                <div className='text-[20px] flex items-center'>
                    <i className="fa-solid fa-bell p-2.5 rounded-full text-gray-200 bg-[#333334] cursor-pointer hover:bg-gray-200/30 ease duration-200"></i>
                </div>

                <div className=' flex items-center relative '>
                    <img src='https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/483588698_1312536043129242_8302059636021443159_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNTmgemJci5-f4X2oeLcSqxrv1tAqgdaLGu_W0CqB1opqLtNuBDqX8XPegXjkLbmOFQp_rK6ZXzib_gvGqrfub&_nc_ohc=7c6xhaBNjfIQ7kNvwHlFecw&_nc_oc=AdkIzYQXefaAf0zgq3Gn2CJ2y63LP6i3EhpFrrxmerzQdVVwfVCgu0uDgXQ_cBt8WFw&_nc_zt=23&_nc_ht=scontent.fcgy1-1.fna&_nc_gid=AqcdDmYuuEl8Fe97f0YxcQ&oh=00_AfJ26Ati-__siWV5bOvXyDzCwB-wq1Eam9sjmwzyJ-ZXDA&oe=682FD25B' className="w-[43px] relative rounded-full cursor-pointer "/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header