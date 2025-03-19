import React from 'react';

const SearchSect = () => {
    const stories = [
        { id: 1, profileImage: '/se1.jpg', title: 'New York USA', storyImage: '/se11.jpg', date: 'Sep 20, 2024' },
        { id: 2, profileImage: '/se2.jpg', title: 'London UK', storyImage: '/se22.jpg', date: 'Sep 18, 2024' },
        { id: 3, profileImage: '/se3.jpg', title: 'Barcelona Spain', storyImage: '/se33.jpg', date: 'Sep 15, 2024' },
    ];

    const moreStories = [
        { id: 4, profileImage: '/se4.jpg', title: 'Paris France', storyImage: '/se44.jpg', date: 'Sep 12, 2024' },
        { id: 5, profileImage: '/se5.jpg', title: 'Berlin Germany', storyImage: '/se55.jpg', date: 'Sep 10, 2024' },
        { id: 6, profileImage: '/se6.jpg', title: 'Tokyo Japan', storyImage: '/se66.jpg', date: 'Sep 05, 2024' },
    ];

    return (
        <div className='px-4 md:px-28 py-8 md:py-12'>
            <div className='text-center'>
                <p className='text-3xl md:text-5xl font-bold text-primary'>Meet Singles in Your Area</p>
                <p className='mt-6 font-medium'>
                    Listen and learn from our community members and find out tips and tricks to{' '}
                    <br className='hidden md:block' /> meet your love. Join us and be part of a bigger family.
                </p>
            </div>

            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                {stories.map((story, index) => (
                    <div
                        key={story.id}
                        className={`group relative rounded-sm p-2 overflow-hidden shadow-md bg-white transition-shadow duration-300 ease-in-out hover:shadow-xl ${index === 0 ? 'md:col-span-2' : 'md:col-span-1'}`}
                    >
                        <div className="relative  overflow-hidden">
                            <img
                                src={story.profileImage}
                                alt={story.title}
                                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                            />
                            <div className="absolute bottom-2 left-2 text-white px-4 rounded-md">
                                <img src={story.storyImage} alt={story.title} className='w-12 h-12 rounded-full' />
                                <span className="font-semibold text-xl">{story.title}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                {moreStories.map((story, index) => (
                    <div
                        key={story.id}
                        className={`group relative rounded-sm p-2 overflow-hidden shadow-md bg-white transition-shadow duration-300 ease-in-out hover:shadow-xl ${index === 2 ? 'md:col-span-2' : 'md:col-span-1'}`}
                    >
                        <div className="relative  overflow-hidden">
                            <img
                                src={story.profileImage}
                                alt={story.title}
                                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                            />
                            <div className="absolute bottom-2 left-2 text-white px-4 rounded-md">
                                <img src={story.storyImage} alt={story.title} className='w-12 h-12 rounded-full' />
                                <span className="font-semibold text-xl">{story.title}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center mt-10'>
                <button className='bg-pink-300 px-8 py-3 rounded-md hover:rounded-full text-pink-700 font-semibold'>Search Near You</button>
            </div>
        </div>
    );
};

export default SearchSect;
