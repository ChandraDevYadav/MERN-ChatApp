import React, { useState } from 'react';

const VerticalTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    // Tabs with text and image
    const tabs = [
        { text: 'Search Your Partner', image: '/search.png' },
        { text: '100% Match People', image: '/using-phone.png' },
        { text: 'Find Out Partner', image: '/eye-scanner.png' },
        { text: 'Live The Story', image: '/dating (2).png' },
    ];

    // Content for each tab with title and image
    const tabContent = [
        { title: 'Search Your Partner', content: 'The simple steps to follow to have great experience using ollya. all you have to do is follows your gut and awesome your heart!', image: '/05.png' },
        { title: '100% Match People', content: 'The simple steps to follow to have great experience using ollya. all you have to do is follows your gut and awesome your heart!', image: '/06.png' },
        { title: 'Find Out Partner', content: 'The simple steps to follow to have great experience using ollya. all you have to do is follows your gut and awesome your heart!', image: '/07.png' },
        { title: 'Live The Story', content: 'The simple steps to follow to have great experience using ollya. all you have to do is follows your gut and awesome your heart!', image: '/08.png' },
    ];

    return (
        <div className="flex flex-col md:flex-row">
            {/* Tabs Column */}
            <div className="w-full md:w-[60%] flex justify-center md:justify-start bg-white pr-6 pb-4 md:pb-14">
                <div className='flex flex-col justify-center md:justify-start items-center'>
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`w-full py-4 px-12 md:px-8 flex items-center space-x-3 text-left text-lg font-medium transition-all ${activeTab === index
                                ? 'bg-[#f9f9f9] text-red-600 px-12 md:px-8'
                                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            <img src={tab.image} alt={tab.text} className="w-10 h-10" />
                            <span>{tab.text}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content Area */}
            <div className="grid grid-cols-1 md:grid-cols-6 justify-center items-center gap-0 md:gap-12 px-2 md:px-16 bg-[#f9f9f9] py-6 md:py-24">
                <div className='col-span-2'>
                    <div>
                        <img src={tabContent[activeTab].image} alt={tabContent[activeTab].title} className="w-full p-6 md:p-0" />
                    </div>
                </div>
                <div className='col-span-4'>
                    <div className='px-2 md:px-0'>
                        <h1 className="text-3xl text-[#f24570] font-bold mb-4">{tabContent[activeTab].title}</h1>
                        <p className="mb-4 text-[1.125rem] text-gray-600 font-medium">{tabContent[activeTab].content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerticalTabs;
