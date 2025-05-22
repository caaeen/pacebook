import React from 'react'
import StoryCard from './extra/storyCard'
import PostCard from './extra/postCard'
const Feed = () => {
  return (
    <div className='sm:w-[590px] w-full  h-full py-4'>
        <div className='w-full h-[122px] bg-[#252728] rounded-xl p-3 px-4 '>
            <div className=' flex mb-3 gap-2'>
                <img src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/483588698_1312536043129242_8302059636021443159_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNTmgemJci5-f4X2oeLcSqxrv1tAqgdaLGu_W0CqB1opqLtNuBDqX8XPegXjkLbmOFQp_rK6ZXzib_gvGqrfub&_nc_ohc=7c6xhaBNjfIQ7kNvwHlFecw&_nc_oc=AdkIzYQXefaAf0zgq3Gn2CJ2y63LP6i3EhpFrrxmerzQdVVwfVCgu0uDgXQ_cBt8WFw&_nc_zt=23&_nc_ht=scontent.fcgy1-1.fna&_nc_gid=AqcdDmYuuEl8Fe97f0YxcQ&oh=00_AfJ26Ati-__siWV5bOvXyDzCwB-wq1Eam9sjmwzyJ-ZXDA&oe=682FD25B" className='min-w-[40px] h-[40px] cursor-pointer rounded-full object-cover overflow-hidden' alt="" />
                <input type="text" className='w-full rounded-full bg-[#484849]/50 outline-none px-3 text-white/100' placeholder="What's on your mind, Christopher?"/>
            </div> 
            <hr className='text-white/10'/>
            <div className=''>
                <ul className='grid sm:grid-cols-3 grid-cols-2 text-gray-400 text-[14px] py-2 '>
                    <li className='flex items-center gap-2 cursor-pointer hover:bg-[#333334] rounded-xl justify-center p-2 ease duration-200'>
                        <img className="w-[24px] h-[24px]" src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png?_nc_eui2=AeFFLQvYI50gtxD0Teir7glpueRic5Ym8Wm55GJzlibxaR7Za_NKBoS459TItbiUiGQDFdoHrVnUF2LbpDBTutAL" alt="" />
                        <b>Live Video</b>
                    </li>

                    <li className='flex items-center gap-2 cursor-pointer hover:bg-[#333334] rounded-xl justify-center p-2 ease duration-200'>
                        <img className="w-[24px] h-[24px]" src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeGZRISQOtMiZm01WwEkIgv0kBVQC4m7dx6QFVALibt3HuYgSV0jUDbANqtctaEKxsf5bF8YwkcpbcdmxfI97-yl" alt="" />
                        <b>Photo/Video</b>
                    </li>

                    <li className='sm:flex hidden items-center gap-2 cursor-pointer hover:bg-[#333334] rounded-xl justify-center p-2 ease duration-200'>
                        <img className="w-[24px] h-[24px]" src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeEOywfw9Pm_VlCG0Q69uLRxfPQ6N5_OUfV89Do3n85R9bj1quYX3NIsrRhlXPe4o4WgDEv0p_3xhtdu6lp2XaWh" alt="" />
                        <b>Feeling/Activity</b>
                    </li>
                </ul>
            </div>
        </div>

        {/* Story Cards */}

        <div className='w-full  h-[200px] flex gap-2 my-4 overflow-x-auto'>
            <div className='group cursor-pointer relative min-w-[113px] h-full pb-1.5 bg-[#252728] rounded-xl flex justify-center items-end  overflow-hidden'>
                <img className="opacity-80 absolute top-0 left-0 h-[75%] group-hover:scale-105 ease duration-200 object-cover" src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/483588698_1312536043129242_8302059636021443159_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNTmgemJci5-f4X2oeLcSqxrv1tAqgdaLGu_W0CqB1opqLtNuBDqX8XPegXjkLbmOFQp_rK6ZXzib_gvGqrfub&_nc_ohc=7c6xhaBNjfIQ7kNvwHlFecw&_nc_oc=AdkIzYQXefaAf0zgq3Gn2CJ2y63LP6i3EhpFrrxmerzQdVVwfVCgu0uDgXQ_cBt8WFw&_nc_zt=23&_nc_ht=scontent.fcgy1-1.fna&_nc_gid=AqcdDmYuuEl8Fe97f0YxcQ&oh=00_AfJ26Ati-__siWV5bOvXyDzCwB-wq1Eam9sjmwzyJ-ZXDA&oe=682FD25B"  alt="" />
                <div className=' relative text-white font-medium flex flex-col items-center h-[44px]  justify-end gap-2.5 z-10 bg-[#252728] w-full'>
                    <i className="fa-solid fa-plus p-2 px-2.5 border-[#252728] border-4 -top-5 absolute z-10 bg-[#075CE5] rounded-full"></i>
                    <small>Create Story</small>
                </div>
            </div>

            <StoryCard name={"Ael Constantine"} profile={"https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(23)(81).jpg"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-Is3hwOAJwzS9qXoosFT5phUnOjYcDek5g&s"}/>
            <StoryCard name={"Damian Fushino"} profile={"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJXIIgmBgOoA4-QCzwKNkpt3fS6HCAn7jh7w&s"}/>
            <StoryCard name={"Kianna Rieves"} profile={"https://geediting.com/wp-content/uploads/2023/12/newimagesize-2023-04-02T192008.840.png"} image={"https://i.etsystatic.com/32237469/r/il/72bad1/4009560313/il_570xN.4009560313_q4ps.jpg"}/>
            
        </div>

        {/* Posts Cards */}

        <div className='relative w-full h-full flex flex-col gap-4'>
            <PostCard
              name="Christopher Canada"
              time="5 minutes ago"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
              imgs="https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg"
              like="1.2k"
              comment="100"
              share="80"
            />


            <PostCard
              name="Caen Canada"
              time="10 minutes ago"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
              imgs="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb-X5364VOTRY7CdQdafaKNSmtdMCkQOYqwemseE57YHq9uSp4hK9tff4U-z6uxuPXLjM&usqp=CAU"
              like="1.2k"
              comment="100"
              share="80"
            />

            <PostCard
              name="Caen Canada"
              time="10 minutes ago"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
              imgs="https://images.unsplash.com/photo-1431440869543-efaf3388c585?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWVzdGhldGljJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww"
              like="1.2k"
              comment="100"
              share="80"
            />

            <PostCard
              name="Caen Canada"
              time="10 minutes ago"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
              imgs="https://m.media-amazon.com/images/I/61qbMx4oXJL._AC_UF1000,1000_QL80_.jpg"
              like="1.2k"
              comment="100"
              share="80"
            />


            
        </div>
    </div>
  )
}

export default Feed