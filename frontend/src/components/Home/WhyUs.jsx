import React from 'react'

const WhyUs = () => {
    return (
        <div className='bg-cover bg-center relative px-4 md:px-28 py-8 md:py-28' style={{ backgroundImage: "url('/01.jpg')" }}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex flex-col md:flex-row justify-start items-center gap-6 px-6 py-12 bg-white'>
                    <img src="/wu2.png" alt="" className='w-full md:w-2/3 h-1/2 md:h-full' />
                    <div>
                        <p className='text-primary text-3xl font-bold'>Trust And Safety</p>
                        <p className='text-lg font-medium my-5'>Choose from one of our membership levels and unlock features you need.</p>
                        <button className='px-8 font-medium py-3 bg-blue-300 rounded-sm text-blue-600 hover:rounded-full text-lg'>See More Details</button>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-start items-center gap-6 bg-white px-6 py-12'>
                    <img src="/wu1.png" alt="" className='w-full md:w-2/3 h-1/2 md:h-full' />
                    <div>
                        <p className='text-primary text-3xl font-bold'>Simple...</p>
                        <p className='text-lg font-medium my-5'>Choose from one of our membership levels and unlock features you need.</p>
                        <button className='px-8 font-medium py-3 bg-blue-300 rounded-sm text-blue-600 hover:rounded-full text-lg'>See More Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs