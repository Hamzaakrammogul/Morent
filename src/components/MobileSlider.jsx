import React from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { carData } from '../utils/data';
import fuel from '../assets/fuel.svg'
import wheel from '../assets/wheel.svg'
import passenger from '../assets/Passenger.svg'
import Button from '../UI/Button';
import { AiFillHeart } from 'react-icons/ai';


const MobileSlider = () => {

    return (
        <Swiper
            // install Swiper modules
            modules={[Pagination]}
            pagination={true}
            spaceBetween={1}
            slidesPerView={1}

        >
            {carData.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className='bg-whity md:w-[24%] rounded-lg'>
                        <div className='flex flex-col p-3'>
                            <div className='flex justify-between'>
                                <div className='flex flex-col'>
                                    <h1 className='font-semibold'>{item.carName}</h1>
                                    <p className='text-sm text-lightGray'>{item.carScale}</p>
                                </div>
                                <div className={item.favourite ? 'text-heartRed' : 'text-lightGray'}>
                                    <AiFillHeart size={24} />
                                </div>
                            </div>
                            <div className='mt-5'><img src={item.img} alt='car-image' /></div>
                            <div className='flex justify-between mt-10'>
                                <div className='flex gap-1'><img src={fuel} alt='fuel-svg' /><span className='text-sm text-lightGray'>{item.petrol}L</span></div>
                                <div className='flex gap-1'><img src={wheel} alt='wheel-svg' /><span className='text-sm text-lightGray'>{item.carType}</span></div>
                                <div className='flex gap-1'><img src={passenger} alt='passenger-svg' /><span className='text-sm text-lightGray'>{item.carPeople}People</span></div>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <div className='flex flex-col'>
                                    <span className='text-md font-semibold '>&#36;{item.rent}/<span className='text-sm text-lightGray'>day</span></span><span className=' text-sm '><s className='text-lightGray'>{item.discount}</s></span>
                                </div>
                                <Button style={'bg-darkSky'} BtnTitle={'Rent Now'} />
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

            ))}
        </Swiper>
    );
}


export default MobileSlider;