import React from 'react'
import Heading from '../Shared/Heading'
import brand1 from '../../assets/brand/a.png'
import brand2 from '../../assets/brand/b.png'
import brand3 from '../../assets/brand/c.png'
import brand4 from '../../assets/brand/d.png'

const Partners = () => {
  return (
    <div className='py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10'>
        <div className="container">
            <Heading title={"Our Partners"}/>
            <div className="grid grid-cols-5 gap-3 place-items-center opacity-50">
                <img src={brand1} alt="brand" className='w-[80px] dark:invert'/>
                <img src={brand2} alt="brand" className='w-[80px] dark:invert'/>
                <img src={brand3} alt="brand" className='w-[80px] dark:invert'/>
                <img src={brand4} alt="brand" className='w-[80px] dark:invert'/>
            </div>
        </div>
    </div>
  )
}

export default Partners