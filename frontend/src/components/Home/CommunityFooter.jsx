import React from 'react'
import { FaDiscord, FaFacebookF, FaFacebookMessenger, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const CommunityFooter = () => {
    return (
        <div className='bg-cover bg-center relative border-b border-gray-400 px-4 md:px-28 py-8 md:py-28' style={{ backgroundImage: "url('/bg (1).jpg')" }}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                    <p className='text-3xl font-medium mb-4'>Newsletter Sign up</p>
                    <div className='relative'>
                        <input type="email" placeholder='Your Email Address' className='w-full py-5 px-4 bg-white border placeholder-black border-white rounded-md' />
                        <button className='absolute right-2 top-[5px] bg-pink-600 text-white py-4 px-5 font-medium rounded-md'>Subscribe Now</button>
                    </div>
                </div>
                <div>
                    <p className='text-3xl font-medium text-black mb-6'>Join Community</p>
                    <div className='flex gap-3'>
                        <div className='bg-white p-4 rounded-md hover:rounded-full text-xl hover:text-2xl text-primary hover:text-pink-600'>
                            <FaTwitter className='' />
                        </div>
                        <div className='bg-white p-4 rounded-md hover:rounded-full text-xl hover:text-2xl text-primary hover:text-pink-600'>
                            <FaFacebookF />
                        </div>
                        <div className='bg-white p-4 rounded-md hover:rounded-full text-xl hover:text-2xl text-primary hover:text-pink-600'>
                            <FaLinkedinIn />
                        </div>
                        <div className='bg-white p-4 rounded-md hover:rounded-full text-xl hover:text-2xl text-primary hover:text-pink-600'>
                            <FaFacebookMessenger />
                        </div>
                        <div className='bg-white p-4 rounded-md hover:rounded-full text-xl hover:text-2xl text-primary hover:text-pink-600'>
                            <FaDiscord />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunityFooter