import React from 'react'
import PopMemTab from './PopMemTab'

const PopMember = () => {
    return (
        <div className='px-4 md:px-28 py-8 md:py-24'>
            <p className='text-3xl md:text-6xl font-bold text-primary text-center my-6'>Most Popular Members</p>
            <p className='text-center mb-14 font-medium text-gray-500'>Learn from them and try to make it to this board. This will for sure boost you visibility and increase your chances to find you loved one.</p>

            <div className="grid grid-cols-1 gap-6">
                <div>
                    <PopMemTab />
                    <div className='flex justify-center items-center mt-10'>
                        <button className='bg-pink-300 px-8 py-3 rounded-md hover:rounded-full text-pink-700 font-semibold'>See More Popular</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopMember