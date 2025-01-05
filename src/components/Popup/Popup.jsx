import React from 'react'

const Popup = ({orderPopup, setOrderPopup}) => {
  return (
    <div>
        <div className='h-screen w-screen fixed top-0 left-0 bg-black z-50 backdrop-blur-sm'>
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white
            dark:bg-gray-900 dark:text-white duration-200'>
                {/* header  */}
                <div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Popup