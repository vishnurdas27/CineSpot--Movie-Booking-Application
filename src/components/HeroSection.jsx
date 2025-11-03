import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    
    const navigate=useNavigate()

  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36  bg-cover bg-center h-screen'
    style={{ backgroundImage: `url(${assets.bgImage})` }}>
        <img src={assets.LokahLogo} alt='' className='max-h-11 lg:h-11 mt-20' />
        <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold'>
            Lokah <br/> Chapter 1: Chandra
        </h1>
        <div className='flex items-center gap-4 text-gray-300'>
            <span>Action | Adventure | Sci-Fi | Mythological Fiction</span>
            <div className='flex items-center gap-1'>
                <CalendarIcon className='w-4.5 h-4.5' /> 2025
            </div>
            <div className='flex items-center gap-1'>
                <ClockIcon className='w-4.5 h-4.5' /> 2h 31m
            </div>
        </div>
        <p className='max-w-md text-gray-300'>Chandra, a young woman, arrives in Bengaluru with a mission.
             Her neighbor, Sunny, sets out to unravel the mystery about her and they are on an unexpected adventure ride together.
        </p>
        <button onClick={()=>navigate('/movies')} className='flex items-center gap-1 text-black px-6 py-3 text-sm
         bg-primary hover:bg-primary-dull hover:translate-x-0.5 transition rounded-full font-medium cursor-pointer'>
            Explore Movies
            <ArrowRight className='w-5 h-5' />
        </button>
    </div>
  )
}

export default HeroSection