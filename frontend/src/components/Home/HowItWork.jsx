import React from 'react'
import VerticalTabs from './VerticalTabs'

const HowItWork = () => {
    return (
        <div className='bg-cover bg-center relative py-8 md:py-28 px-4 md:px-28' style={{ backgroundImage: "url('/01.jpg')" }}>
            <p className='text-3xl md:text-5xl mb-8 md:mb-14 font-bold text-primary text-center'>How Does it Work</p>
            <div className="grid grid-cols-1 gap-6">
                <div className=''>
                    <div>
                        <VerticalTabs />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWork