import React from 'react'
import Icon from './Icon';

const LocationCard = ({ insideBg, outsideBg, title, mt }) => {
    return (

        <div className={`bg-whity ${mt} container flex flex-col space-y-3 rounded-lg py-7  md:px-7 md:w-[45%] md:space-x-1`}>
            <div className='flex space-x-2 items-center'>
                <Icon insideBg={insideBg} outsideBg={outsideBg} />
                <h1 className='font-semibold'>{title}</h1>
            </div>
            <div className='flex space-x-1 md:space-x-5'>
                <div className='flex flex-col w-1/3 md:1/4'>
                    <form className='flex'>
                        <div className='flex flex-col'>
                            <label className='font-bold text-sm' htmlFor="City" >Locations</label>
                            <select className='bg-whity border-none outline-none text-lightGray' name='City' id='City'>
                                <option value='' disabled selected hidden >select city</option>
                                <option value='New York'>New York</option>
                                <option value='California'>California</option>
                                <option value='Los Angels'>Los Angels</option>
                                <option value='New York'>New York</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div className='h-80px border border-lightGray border-opacity-30 ' />
                <div className='w-1/3 md:w-1/4 flex flex-col'>
                    <label className='font-bold text-sm' htmlFor='date'>Date</label>
                    <input className='text-lightGray outline-none' name='date' id='date' type='date' />
                </div>
                <div className='h-80px border border-lightGray border-opacity-30' />

                <div className='w-1/3 md:w-1/4 flex flex-col'>
                    <label className='font-bold text-sm' htmlFor='time'>Time</label>
                    <input className='text-lightGray outline-none' name='time' id='time' type='time' />
                </div>
            </div>
        </div>
    )
}
export default LocationCard;