import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const MainFooter = () => {
    return (
        <div className='bg-cover bg-center relative px-4 md:px-28 py-8 md:py-28' style={{ backgroundImage: "url('/bg-3.jpg')" }}>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div>
                    <p className='text-3xl font-medium text-white mb-4'>Our Information</p>
                    <ul className='text-white text-lg font-medium'>
                        <li className='mt-8 flex items-center'><FaAngleRight className='text-xl text-white' /> About Us</li>
                        <li className='mt-4 flex items-center'><FaAngleRight className='text-xl text-white' />Contact Us</li>
                        <li className='mt-4 flex items-center'><FaAngleRight className='text-xl text-white' />Customer Reviews</li>
                        <li className='mt-4 flex items-center'><FaAngleRight className='text-xl text-white' />Success Stories</li>
                        <li className='mt-4 flex items-center'><FaAngleRight className='text-xl text-white' />Business License</li>
                    </ul>
                </div>
                <div>
                    <p className='text-3xl font-medium text-white mb-4'>My Account</p>
                    <ul className='text-white text-lg font-medium'>
                        <li className='mt-8 flex items-center'><FaAngleRight className='text-xl text-white' />Manage Account</li>
                        <li className='mt-4 flex items-center'><FaAngleRight className='text-xl text-white' />Safety Tips</li>
                        <li className='mt-4 flex items-center'><FaAngleRight className='text-xl text-white' />Account Varification</li>
                        <li className='mt-4 flex items-center'><FaAngleRight className='text-xl text-white' />Safety and Security</li>
                        <li className='mt-4 flex items-center'><FaAngleRight className='text-xl text-white' />Membership Level</li>
                    </ul>
                </div>
                <div>
                    <p className='text-3xl font-medium text-white mb-4'>Help Center</p>
                    <ul className='text-white text-lg font-medium'>
                        <li className='mt-8 flex items-center'> <FaAngleRight className='text-xl text-white' />Help center</li>
                        <li className='mt-4 flex items-center'><FaAngleRight className='text-xl text-white' />FAQ</li>
                        <li className='mt-4 flex items-center'><FaAngleRight className='text-xl text-white' />Quick Start Guide</li>
                        <li className='mt-4 flex items-center'><FaAngleRight className='text-xl text-white' />Tutorials</li>
                        <li className='mt-4 flex items-center'><FaAngleRight className='text-xl text-white' />Associate Blog</li>
                    </ul>
                </div>
                <div>
                    <p className='text-3xl font-medium text-white mb-4'>Community</p>
                    <ul className='text-white text-lg font-medium'>
                        <li className='mt-8 flex items-center'> <FaAngleRight className='text-xl text-white' />Privacy policy</li>
                        <li className='mt-4 flex items-center'><FaAngleRight className='text-xl text-white' />End User Agreements</li>
                        <li className='mt-4 flex items-center'><FaAngleRight className='text-xl text-white' />Refund Policy</li>
                        <li className='mt-4 flex items-center'><FaAngleRight className='text-xl text-white' />Cookie policy</li>
                        <li className='mt-4 flex items-center'><FaAngleRight className='text-xl text-white' />Report abuse</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MainFooter