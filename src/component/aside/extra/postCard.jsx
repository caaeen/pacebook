import React from 'react'

const PostCard = ({ name, time, desc, imgs, like, comment, share }) => {
  return (
    <div className='rounded-xl bg-[#252728] p-3 px-4'>
      <div className='flex items-center gap-2'>
        <img 
          src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/483588698_1312536043129242_8302059636021443159_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNTmgemJci5-f4X2oeLcSqxrv1tAqgdaLGu_W0CqB1opqLtNuBDqX8XPegXjkLbmOFQp_rK6ZXzib_gvGqrfub&_nc_ohc=7c6xhaBNjfIQ7kNvwHlFecw&_nc_oc=AdkIzYQXefaAf0zgq3Gn2CJ2y63LP6i3EhpFrrxmerzQdVVwfVCgu0uDgXQ_cBt8WFw&_nc_zt=23&_nc_ht=scontent.fcgy1-1.fna&_nc_gid=AqcdDmYuuEl8Fe97f0YxcQ&oh=00_AfJ26Ati-__siWV5bOvXyDzCwB-wq1Eam9sjmwzyJ-ZXDA&oe=682FD25B"
          className='min-w-[40px] h-[40px] cursor-pointer rounded-full object-cover overflow-hidden'
          alt="profile"
        />
        <div className='flex flex-col'>
          <b className='text-white'>{name}</b>
          <small className='text-gray-400'>{time}</small>
        </div>
      </div>

      <p className='text-white/100 my-3'>{desc}</p>

      <img className='rounded-xl w-full object-cover' src={imgs} alt="post" />

      <div className='mt-2 flex justify-between'>
        <span className='flex items-center gap-2'>
            <img className='w-[18px] h-[18px]' src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E" alt="" />
            <b className='text-white/70'> {like}</b>
        </span>
        <span className='flex items-center gap-2'>
          <p className='text-white/70'>{comment} comments</p>
          <p className='text-white/70'>{share} shares</p>
        </span>
      </div>

      <hr className='text-white/60 mt-2' />
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
              <i className="fa-solid fa-share text-xl"></i>
              <b>Share</b>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PostCard
