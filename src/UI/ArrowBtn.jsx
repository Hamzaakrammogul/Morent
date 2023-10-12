import React from 'react'
import { GoArrowSwitch } from 'react-icons/go';
const ArrowBtn = () => {
    return (
        <div className='  flex justify-center z-10'>
            <button className=' w-20 h-20 md:w-16 p-3 md:h-16 rounded-xl bg-darkSky flex items-center justify-center shadow-lg shadow-darkSky  text-whity '><GoArrowSwitch size={20} style={{ transform: 'rotate(90deg)' }} /></button>

        </div>
    );
}

export default ArrowBtn;