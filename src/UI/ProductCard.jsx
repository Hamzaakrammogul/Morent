import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import fuel from '../assets/fuel.svg'
import wheel from '../assets/wheel.svg'
import passenger from '../assets/Passenger.svg'
import Button from './Button';

const ProductCard = ({ carName, carScale, img, petrol, carType, carPeople, rent, discount, favourite }) => {
    return (
        <div className='bg-whity md:w-[24%] rounded-lg'>
            <div className='flex flex-col p-3'>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold'>{carName}</h1>
                        <p className='text-sm text-lightGray'>{carScale}</p>
                    </div>
                    <div className={favourite ? 'text-heartRed' : 'text-lightGray'}>
                        <AiFillHeart size={24} />
                    </div>
                </div>
                <div className='mt-5'><img src={img} alt='car-image' /></div>
                <div className='flex justify-between mt-10'>
                    <div className='flex gap-1'><img src={fuel} alt='fuel-svg' /><span className='text-sm text-lightGray'>{petrol}L</span></div>
                    <div className='flex gap-1'><img src={wheel} alt='wheel-svg' /><span className='text-sm text-lightGray'>{carType}</span></div>
                    <div className='flex gap-1'><img src={passenger} alt='passenger-svg' /><span className='text-sm text-lightGray'>{carPeople}People</span></div>
                </div>
                <div className='flex justify-between mt-5'>
                    <div className='flex flex-col'>
                        <span className='text-md font-semibold '>&#36;{rent}/<span className='text-sm text-lightGray'>day</span></span><span className=' text-sm '><s className='text-lightGray'>{discount}</s></span>
                    </div>
                    <Button style={'bg-darkSky'} BtnTitle={'Rent Now'} />
                </div>
            </div>
        </div>

    );
}

export default ProductCard