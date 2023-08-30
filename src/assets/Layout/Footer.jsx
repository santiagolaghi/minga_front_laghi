import React from 'react'

export default function Footer() {
  return (
    <footer className='h-48 md:flex flex-col'>
      <img className="w-full" src="./images/footer.png" alt="" />
      <div className='flex flex-col  pt-2 gap-2 md:flex-row md:justify-around self-center md:w-5/6 items-center md:items-baseline' >
        <p className='w-[64.86px] h-6 text-neutral-800 text-base font-normal'>Home</p>
        <p className='w-[87.83px] h-6 text-neutral-800 text-base font-normal'>Mangas</p>
        <div className='flex md:w-48'>
          <p className="w-[126px] text-orange-500 text-4xl font-medium tracking-widest ">Minga</p>
          <p className='w-[43px] text-black-50 text-[40px] font-extrabold tracking-[16px]'>雪</p>
        </div>
        <div className='flex flex-col gap-2'>
          <img src="./images/Social.svg" alt="" />
          <button className=' h-12 text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-md mb-4'>Donate ♡</button>
        </div>
      </div>
    </footer>
  )
}
