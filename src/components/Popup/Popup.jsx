import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'

const Popup = ({orderPopup,handleOrderPopup }) => {
  return (
    <div>
        <div className=' h-screen w-screen fixed top-0 left-0 bg-black z-50 backdrop-blur-sm'>
            <div className='w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white
            dark:bg-gray-900 dark:text-white duration-200 rounded-md'>
                {/* header  */}
                <div className='flex items-center justify-center'>
                    <h1>Order Now</h1>
                    <div>
                    <IoCloseOutline className='text-2xl cursor-pointer'/>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Popup