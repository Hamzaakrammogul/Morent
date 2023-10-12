import React from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import { AiFillHeart } from 'react-icons/ai';
import { TbBellFilled } from 'react-icons/tb';
import { MdSettings } from 'react-icons/md';
import filter from '../assets/filter.svg';
import img from '../../images/1.png';

const Header = () => {
    return (
        <div className='h-110 md:h-100 top-0 sticky z-50 md:shadow bg-whity flex place-items-center  '>
            <div className='hidden md:flex container mx-auto justify-between '>
                <div className='w-3/4 flex space-x-10'>
                    <div>
                        <h1 className='text-3xl text-darkSky font-bold'>MORENT</h1>
                    </div>
                    <div className='flex w-1/2 border border-lightGray border-opacity-20 rounded-full p-2 items-center  justify-between '>
                        <form className='flex space-x-5 justify-between align-items-center '>
                            <RiSearch2Line size={20} className=' text-darkGray ' />
                            <input className=' w-[400px] 2xl:w-[500px] outline-none placeholder-darkGray placeholder:text-sm ' type='text' name='search' placeholder='Search something here' />
                        </form>
                        <img src={filter} alt='' />
                    </div>
                </div>
                <div className='flex gap-3 item-center justify-center '>
                    <div className='w-9 h-9 rounded-full border border-lightGray border-opacity-20 text-darkGray flex justify-center items-center'><AiFillHeart size={20} /></div>
                    <div className='w-9 h-9 rounded-full border border-lightGray border-opacity-20 text-darkGray flex justify-center items-center'><TbBellFilled size={20} />
                    </div>
                    <div className='w-9 h-9 rounded-full border border-lightGray border-opacity-20 text-darkGray flex justify-center items-center'><MdSettings size={20} /></div>
                    <div className='w-10 h-10 rounded-full overflow-hidden'><img src={img} alt='header-image' /></div>
                </div>
            </div>

            {/* Mobile */}

            <div className='container mx-2 md:hidden'>
                <div className='flex flex-col'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-3xl text-darkSky font-bold'>MORENT</h1>
                        </div>
                        <div className='w-10 h-10 rounded-full overflow-hidden'>
                            <img src={img} alt='header-image' />
                        </div>
                    </div>
                    <div className='flex justify-between gap-4 mt-10'>
                        <div className='flex items-center w-4/5 border border-lightGray border-opacity-20 p-3 rounded-2xl justify-center  '>
                            <form className='flex ml-2 space-x-5  align-items-center '>
                                <RiSearch2Line size={32} className=' text-darkGray ' />
                                <input className='outline-none placeholder-darkGray placeholder:text-sm ' type='text' name='search' placeholder='Search something here' />
                            </form>
                        </div>
                        <div className=' flex w-16 h-16 border border-lightGray border-opacity-20 rounded-2xl justify-center'>
                            <img className='w-7' src={filter} alt='' />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Header