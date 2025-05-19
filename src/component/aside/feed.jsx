import React from 'react'
import StoryCard from './extra/storyCard'
const Feed = () => {
  return (
    <div className='w-[590px]  h-full py-4'>
        <div className='w-full h-[122px] bg-[#252728] rounded-xl p-3 px-4 '>
            <div className=' flex mb-3 gap-2'>
                <img src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/483588698_1312536043129242_8302059636021443159_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNTmgemJci5-f4X2oeLcSqxrv1tAqgdaLGu_W0CqB1opqLtNuBDqX8XPegXjkLbmOFQp_rK6ZXzib_gvGqrfub&_nc_ohc=7c6xhaBNjfIQ7kNvwHlFecw&_nc_oc=AdkIzYQXefaAf0zgq3Gn2CJ2y63LP6i3EhpFrrxmerzQdVVwfVCgu0uDgXQ_cBt8WFw&_nc_zt=23&_nc_ht=scontent.fcgy1-1.fna&_nc_gid=AqcdDmYuuEl8Fe97f0YxcQ&oh=00_AfJ26Ati-__siWV5bOvXyDzCwB-wq1Eam9sjmwzyJ-ZXDA&oe=682FD25B" className='min-w-[40px] h-[40px] cursor-pointer rounded-full object-cover overflow-hidden' alt="" />
                <input type="text" className='w-full rounded-full bg-[#484849]/50 outline-none px-3 text-white/100' placeholder="What's on your mind, Christopher?"/>
            </div> 
            <hr className='text-white/10'/>
            <div className=''>
                <ul className='grid grid-cols-3 text-gray-400 text-[14px] py-2 '>
                    <li className='flex items-center gap-2 cursor-pointer hover:bg-[#333334] rounded-xl justify-center p-2 ease duration-200'>
                        <img className="w-[24px] h-[24px]" src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png?_nc_eui2=AeFFLQvYI50gtxD0Teir7glpueRic5Ym8Wm55GJzlibxaR7Za_NKBoS459TItbiUiGQDFdoHrVnUF2LbpDBTutAL" alt="" />
                        <b>Live Video</b>
                    </li>

                    <li className='flex items-center gap-2 cursor-pointer hover:bg-[#333334] rounded-xl justify-center p-2 ease duration-200'>
                        <img className="w-[24px] h-[24px]" src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeGZRISQOtMiZm01WwEkIgv0kBVQC4m7dx6QFVALibt3HuYgSV0jUDbANqtctaEKxsf5bF8YwkcpbcdmxfI97-yl" alt="" />
                        <b>Photo/Video</b>
                    </li>

                    <li className='flex items-center gap-2 cursor-pointer hover:bg-[#333334] rounded-xl justify-center p-2 ease duration-200'>
                        <img className="w-[24px] h-[24px]" src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeEOywfw9Pm_VlCG0Q69uLRxfPQ6N5_OUfV89Do3n85R9bj1quYX3NIsrRhlXPe4o4WgDEv0p_3xhtdu6lp2XaWh" alt="" />
                        <b>Feeling/Activity</b>
                    </li>
                </ul>
            </div>
        </div>

        {/* Story Cards */}

        <div className='w-full h-[200px] flex gap-2 my-4 '>
            <div className='cursor-pointer relative w-[113px] h-full pb-1.5 bg-[#252728] rounded-xl flex justify-center items-end  overflow-hidden'>
                <img className="opacity-80 absolute top-0 left-0 h-[75%] hover:scale-105 ease duration-200 object-cover" src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/483588698_1312536043129242_8302059636021443159_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNTmgemJci5-f4X2oeLcSqxrv1tAqgdaLGu_W0CqB1opqLtNuBDqX8XPegXjkLbmOFQp_rK6ZXzib_gvGqrfub&_nc_ohc=7c6xhaBNjfIQ7kNvwHlFecw&_nc_oc=AdkIzYQXefaAf0zgq3Gn2CJ2y63LP6i3EhpFrrxmerzQdVVwfVCgu0uDgXQ_cBt8WFw&_nc_zt=23&_nc_ht=scontent.fcgy1-1.fna&_nc_gid=AqcdDmYuuEl8Fe97f0YxcQ&oh=00_AfJ26Ati-__siWV5bOvXyDzCwB-wq1Eam9sjmwzyJ-ZXDA&oe=682FD25B"  alt="" />
                <div className='relative text-white font-medium flex flex-col items-center h-[44px]  justify-end gap-2.5 z-10 bg-[#252728] w-full'>
                    <i className="fa-solid fa-plus p-2 px-2.5 border-[#252728] border-4 -top-5 absolute z-10 bg-[#075CE5] rounded-full"></i>
                    <small>Create Story</small>
                </div>
            </div>

            <StoryCard name={"Ael Constantine"} profile={"https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(23)(81).jpg"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-Is3hwOAJwzS9qXoosFT5phUnOjYcDek5g&s"}/>
            <StoryCard name={"Damian Fushino"} profile={"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJXIIgmBgOoA4-QCzwKNkpt3fS6HCAn7jh7w&s"}/>
            <StoryCard name={"Kianna Rieves"} profile={"https://geediting.com/wp-content/uploads/2023/12/newimagesize-2023-04-02T192008.840.png"} image={"https://i.etsystatic.com/32237469/r/il/72bad1/4009560313/il_570xN.4009560313_q4ps.jpg"}/>
        </div>

        {/* Posts Cards */}

        <div className='relative w-full h-full'>
            <div className='rounded-xl bg-[#252728] p-3 px-4'>
                <div className='flex items-center gap-2'>
                    <img src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/483588698_1312536043129242_8302059636021443159_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNTmgemJci5-f4X2oeLcSqxrv1tAqgdaLGu_W0CqB1opqLtNuBDqX8XPegXjkLbmOFQp_rK6ZXzib_gvGqrfub&_nc_ohc=7c6xhaBNjfIQ7kNvwHlFecw&_nc_oc=AdkIzYQXefaAf0zgq3Gn2CJ2y63LP6i3EhpFrrxmerzQdVVwfVCgu0uDgXQ_cBt8WFw&_nc_zt=23&_nc_ht=scontent.fcgy1-1.fna&_nc_gid=AqcdDmYuuEl8Fe97f0YxcQ&oh=00_AfJ26Ati-__siWV5bOvXyDzCwB-wq1Eam9sjmwzyJ-ZXDA&oe=682FD25B" className='min-w-[40px] h-[40px] cursor-pointer rounded-full object-cover overflow-hidden' alt="" />
                    <div className='flex flex-col'>
                        <b className='text-white'>Christopher Canada</b>
                        <small className='text-gray-400'>5 minutes ago</small>
                    </div>
                </div>
                <p className='text-white/100 my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                <img className='rounded-xl' src="https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg" alt="" />
                <div className='mt-2 flex justify-between'>
                    <span className='flex items-center gap-2'>
                        <img className='w-[18px] h-[18px]' src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E" alt="" />
                        <b className='text-white/70'> 1.2k</b>
                    </span>

                    <span className='flex items-center gap-2'>
                        
                        <p className='text-white/70'> 100 comments </p>
                        <p className='text-white/70'> 80 shares </p>
                    </span>
                    
                </div>
                <hr className='text-white/60 mt-2'/>
                <div className='w-full mt-2'>
                    <ul className='grid grid-cols-3 text-white/70'>
                        <li>
                            <div className='flex items-center gap-2 cursor-pointer hover:bg-[#333334] rounded-md justify-center p-2 ease duration-200'>
                                <i className="fa-regular fa-thumbs-up text-xl"></i>
                                <b>Like</b>
                            </div>
                        </li>
                        <li>
                            <div className='flex items-center gap-2 cursor-pointer hover:bg-[#333334] rounded-md justify-center p-2 ease duration-200'>
                                <i className="fa-regular fa-comment text-xl"></i>
                                <b>Comment</b>
                            </div>
                        </li>
                        <li>
                            <div className='flex items-center gap-2 cursor-pointer hover:bg-[#333334] rounded-md justify-center p-2 ease duration-200'>
                               
                                <div
                                  style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v4/yf/r/BJodMze09RX.png?_nc_eui2=AeGWe6jUzUKBIYs7KZ4qE634jua2hthOKL2O5raG2E4ovZbkLpGEgbb5hPVrBmt6_2XpBjocAxfSAQI0quCMJSX0")',
                                    backgroundPosition: "0px -924px",
                                    backgroundSize: "21px 1252px",
                                    width: "20px",
                                    height: "20px",
                                    backgroundRepeat: "no-repeat",
                                    display: "inline-block",
                                    filter: "invert(1) brightness(0.8)" 
                                  }}
                                />

                                <b>Share</b>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feed