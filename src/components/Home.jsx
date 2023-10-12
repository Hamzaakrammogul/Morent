import React from 'react';
import car1 from '../../images/2.png';
import car2 from '../../images/3.png';
import LocationCard from '../UI/LocationCard';
import HeroCard from '../UI/HeroCard';
import ArrowBtn from '../UI/ArrowBtn';
import ProductCard from '../UI/ProductCard';
import { carData, carData1 } from '../utils/data';
import MobileSlider from './MobileSlider';

const Home = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className='flex mx-2 md:mx-0 space-x-5'>

                    {/* Left side */}
                    <HeroCard
                        BgStyle={'bg-lightSky'}
                        heading={<>The Best Platform <br />for Car Rental</>}
                        description={<>Ease of doing a car rental safely and<br /> reliably. Of course at a low price.</>}
                        BtnStyle={'bg-darkSky'}
                        BtnTitle={'Rental Car'}
                        img={car1}
                    />

                    {/* Right side */}
                    <HeroCard
                        BgStyle={'bg-darkSky hidden md:flex'}
                        heading={<>Easy way to rent a<br /> car at a low price</>}
                        description={<>Providing cheap car rental services<br /> and safe and comfortable facilities.</>}
                        BtnStyle={'bg-lightSky'}
                        BtnTitle={'Rental Car'}
                        img={car2}
                    />
                </div>

                {/* Second section */}

                <div className='container flex flex-col items-center justify-between mt-7 md:flex-row'>
                    <LocationCard mt={'-mb-4 md:-mb-0'} insideBg={'bg-darkSky'} outsideBg={'bg-lightSky'} title={'Pick-up'} />
                    <ArrowBtn />
                    <LocationCard mt={'-mt-4 md:-mt-0'} insideBg={'bg-lightSky'} outsideBg={'bg-darkSky'} title={'Drop-Off'} />
                </div>

                {/* Third Section */}
                <div className='flex justify-between mt-5'>
                    <h1 className='text-lightGray'>Popular Car</h1>
                    <button className='text-darkSky border-none'>View All</button>
                </div>
                <div className='hidden md:flex  space-x-4 mt-5'>
                    {carData.map((item) => (
                        <ProductCard key={item.id} carName={item.carName} carScale={item.carScale} img={item.img}
                            petrol={item.petrol} favourite={item.favourite} rent={item.rent} discount={item.discount} carType={item.carType} />
                    ))}
                </div>
                <div className='md:hidden mt-5'>
                    <MobileSlider />
                </div>
                {/* Fourth Section */}

                <div className='flex flex-col mt-5'>
                    <div><h1 className='text-lightGray'>Recommended</h1></div>
                    <div className='flex flex-col md:flex-row flex-wrap gap-4 mt-5'>
                        {carData1.map((item) => (
                            <ProductCard key={item.id} carName={item.carName} carScale={item.carScale} img={item.img}
                                petrol={item.petrol} favourite={item.favourite} rent={item.rent} discount={item.discount} carType={item.carType} />
                        ))}
                    </div>

                </div>
            </div>

        </>
    );
}

export default Home