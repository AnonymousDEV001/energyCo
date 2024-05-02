import React from 'react'

const Vision = () => {
  return (
    <div className='flex flex-wrap justify-center md:flex-nowrap gap-6 items-center py-10 px-20'>
        <div className='flex flex-col gap-4 w-full md:w-1/2'>
            <h1 className='text-blue-900 text-4xl font-semibold'>People First. Vision Centric.</h1>
            <p>Our differentiator is our people. We’re driven to be the very best and most trusted energy solutions provider dedicated to Finding a Better Way toward a sustainable future. As a family-owned, privately-held company, we’re committed to giving back to those communities most in need—both locally and globally.</p>
            <div>
            <button className='bg-blue-950 text-white px-5 py-3 rounded-full rounded-tl-none'>WHO WE ARE</button>
            </div>
            </div>
        <div className='w-full md:w-1/2'>
            <img src="/Volunteering.webp" className='h-full w-full rounded-b-3xl' alt="" />
        </div>
    </div>
  )
}

export default Vision