import React from 'react'
import Button from './Button'

const HeroCard = ({ heading, description, BtnTitle, img, BtnStyle, BgStyle }) => {
    return (

        <div className={`flex container flex-col md:w-[50%] ${BgStyle} rounded-xl  mt-7 space-y-5 pt-5 pl-5 2xl:p-10 `}>
            <div> <h1 className='text-3xl text-whity font-semibold '>{heading}</h1></div>
            <div><p className='text-sm text-whity '>{description}</p></div>
            <Button style={BtnStyle} BtnTitle={BtnTitle} />
            <div >
                <img className='w-[65%] -mt-5 md:-mt-20 2xl:-mt-28 mx-auto' src={img} alt='hero-card-image' />
            </div>
        </div>
    );
}

export default HeroCard