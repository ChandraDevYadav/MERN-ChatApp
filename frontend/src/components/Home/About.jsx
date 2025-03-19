import React from 'react'

const About = () => {
    return (
        <div className='px-4 md:px-28 py-4 md:py-24'>
            <p className='text-3xl md:text-5xl font-bold text-primary text-center my-6'>Ollya Super Powers</p>
            <p className='text-center mb-14 px-6 md:px-0 font-medium text-gray-500'>Our dating platform is like a breath of fresh air. Clean and trendy <br className='hidden md:block' /> design with ready to use features we are sure you will love.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className='group text-center bg-white py-12 px-6 rounded-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1.5'>
                    <div className='flex justify-center items-center'>
                        <div className='bg-pink-100 p-4 rounded-full'>
                            <img src="/social-media.png" alt="" className='w-14 h-14 group-hover:scale-110 transition-transform duration-300 ease-in-out' />
                        </div>
                    </div>
                    <div>
                        <p className='text-2xl font-bold mt-8 text-primary group-hover:text-red-500 transition-colors duration-300 ease-in-out'>Simple To Use</p>
                        <p className='mt-3 font-medium text-gray-500'>Simple steps to follow to have a matching connection.</p>
                    </div>
                </div>

                <div className='group text-center bg-white py-12 px-6 rounded-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1.5'>
                    <div className='flex justify-center items-center'>
                        <div className='bg-pink-100 p-4 rounded-full'>
                            <img src="/dating.png" alt="" className='w-14 h-14 group-hover:scale-110 transition-transform duration-300 ease-in-out' />
                        </div>
                    </div>
                    <div>
                        <p className='text-2xl font-bold text-primary mt-8 group-hover:text-red-500 transition-colors duration-300 ease-in-out'>Smart Matching</p>
                        <p className='mt-3 font-medium text-gray-500'>Create connections with users that are like you.</p>
                    </div>
                </div>
                <div className='group text-center bg-white py-12 px-6 rounded-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1.5'>
                    <div className='flex justify-center items-center'>
                        <div className='bg-pink-100 p-4 rounded-full'>
                            <img src="/filter.png" alt="" className='w-14 h-14 group-hover:scale-110 transition-transform duration-300 ease-in-out' />
                        </div>
                    </div>
                    <div className='text-center'>
                        <p className='text-2xl font-bold mt-8 text-primary group-hover:text-red-500 transition-colors duration-300 ease-in-out'>Filter Very Fast</p>
                        <p className='mt-3 font-medium text-gray-500'>Don’t waste your time! Find only what you are interested.</p>
                    </div>
                </div>
                <div className='group text-center bg-white py-12 px-6 rounded-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1.5'>
                    <div className='flex justify-center items-center'>
                        <div className='bg-pink-100 p-4 rounded-full'>
                            <img src="/eye-scanner.png" alt="" className='w-14 h-14 group-hover:scale-110 transition-transform duration-300 ease-in-out' />
                        </div>
                    </div>
                    <div className='text-center'>
                        <p className='text-2xl font-bold mt-8 text-primary group-hover:text-red-500 transition-colors duration-300 ease-in-out'>Cool Community</p>
                        <p className='mt-3 font-medium text-gray-500'>BuddyPress network is full of cool members.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About