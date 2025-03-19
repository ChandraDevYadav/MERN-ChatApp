import React from 'react'

const AvailableOn = () => {
    return (
        <div className='bg-cover bg-center relative px-4 md:px-28 pt-8 md:py-28' style={{ backgroundImage: "url('/01.jpg')" }}>
            <div>
                <p className='text-xl md:text-3xl text-pink-600'>Easy Connect To Everyone</p>
                <p className='text-3xl md:text-5xl font-bold text-primary mt-4 mb-6'>Download App Our Ollya</p>
                <p className='text-xl text-gray-500 pr-2 md:pr-32'>You find us, finally and you are already in love. More than 5.000.000 around the world already shared the same experience andng ares uses our system Joining us today just got easier!</p>
                <div className='flex justify-start items-center gap-6 mt-12'>
                    <div className=''>
                        <img src="/d1.jpg" alt="" className='rounded-sm shadow-sm' />
                    </div>
                    <div>
                        <img src="/d2.jpg" alt="" className='rounded-sm shadow-sm' />
                    </div>
                </div>
                <div className='flex justify-center items-center mt-12'>
                    <div>
                        <img src="/ao.png" alt="" className='rounded-sm shadow-sm' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvailableOn