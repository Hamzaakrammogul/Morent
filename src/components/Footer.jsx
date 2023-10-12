import React from 'react'

const Footer = () => {
    return (
        <div className='bg-whity py-16 mt-10'>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 space-y-5'>
                        <h1 className='text-3xl text-darkSky font-bold'>MORENT</h1>
                        <p className='text-md text-darkGray'>Our vision is to provide convenience <br />
                            and help increase your sales business.</p>
                    </div>
                    <div className='md:w-1/2 flex flex-wrap mt-10 md:mt-0 justify-between '>
                        <div className='w-1/2 md:w-1/3'>
                            <h1 className='text-xl text-black font-semibold'>About</h1>
                            <ul className='mt-5 space-y-5'>
                                <li className='text-md text-darkGray'>How it works</li>
                                <li className='text-md text-darkGray'>Featured</li>
                                <li className='text-md text-darkGray'>Partnership</li>
                                <li className='text-md text-darkGray'>Business Relation</li>
                            </ul>
                        </div>
                        <div className='w-1/2 md:w-1/3'>
                            <h1 className='text-xl text-black font-semibold'>Community</h1>
                            <ul className='mt-5 space-y-5'>
                                <li className='text-md text-darkGray'>Events</li>
                                <li className='text-md text-darkGray'>Blog</li>
                                <li className='text-md text-darkGray'>Podcast</li>
                                <li className='text-md text-darkGray'>Invite a friend</li>
                            </ul>
                        </div>
                        <div className='w-1/2 md:w-1/3 mt-10 md:mt-0'>
                            <h1 className='text-xl text-black font-semibold'>Socials</h1>
                            <ul className='mt-5 space-y-5'>
                                <li className='text-md text-darkGray'>Discord</li>
                                <li className='text-md text-darkGray'>Instagram</li>
                                <li className='text-md text-darkGray'>Twitter</li>
                                <li className='text-md text-darkGray'>Facebook</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block w-full border border-lightGray border-opacity-20 my-12' />
                {/* desktop */}
                <div className='hidden md:flex justify-between'>
                    <div className='w-3/4'>
                        <h1 className='font-semibold'>©2022 MORENT. All rights reserved</h1>
                    </div>
                    <div className='flex space-x-10 w-1/4'>
                        <h1 className='font-semibold'>Privacy &amp; Policy </h1>
                        <h1 className='font-semibold'>Terms &amp; Condition </h1>
                    </div>
                </div>

                {/* Mobile */}
                <div className='md:hidden'>
                    <div className='flex justify-between mt-10 '>
                        <div><h1 className='font-semibold'>Privacy &amp; Policy </h1></div>
                        <div><h1 className='font-semibold'>Terms &amp; Condition </h1></div>
                    </div>
                    <div className='mt-10'>
                        <h1 className='font-semibold'>©2022 MORENT. All rights reserved</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer