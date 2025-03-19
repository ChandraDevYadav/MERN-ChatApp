import React from 'react';

const SuccessStories = () => {
    const successStories = [
        {
            id: 1,
            category: 'Entertainment',
            title: 'A Journey of Love',
            name: 'John Doe',
            date: '2023-05-01',
            profileImage: '/s1.jpg',
            storyImage: '/p1.jpg'
        },
        {
            id: 2,
            category: 'Attraction',
            title: 'The Perfect Match',
            name: 'Jane Smith',
            date: '2023-06-15',
            profileImage: '/s2.jpg',
            storyImage: '/p2.jpg'
        },
        {
            id: 3,
            category: 'Love Stories',
            title: 'Finding True Happiness',
            name: 'Emily Johnson',
            date: '2023-07-20',
            profileImage: '/s3.jpg',
            storyImage: '/p3.jpg'
        },
    ];

    return (
        <div>
            <div className='text-center'>
                <p className='text-3xl md:text-5xl font-bold text-primary'>Ollya Success Stories</p>
                <p className='mt-6 font-medium text-md md:text-lg text-gray-500'>Listen and learn from our community members and find out tips and tricks to <br className='hidden md:block' /> meet your love. Join us and be part of a bigger family.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-28 py-8 md:py-12">
                {successStories.map(story => (
                    <div
                        key={story.id}
                        className="group relative rounded-lg overflow-hidden shadow-md bg-white p-3 transition-shadow duration-300 ease-in-out hover:shadow-xl"
                    >
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={story.profileImage}
                                alt={story.title}
                                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                            />
                            <div className="absolute bottom-2 left-2 bg-opacity-70 bg-pink-600 text-white px-4 rounded-md">
                                <span className="font-semibold text-sm">{story.category}</span>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-xl md:text-2xl">{story.title}</h3>
                            <div className='flex justify-start items-center gap-2 md:gap-4 mt-3 md:mt-5'>
                                <img src={story.storyImage} alt={story.title} className='w-12 md:w-9 h-12 md:h-9 rounded-full' />
                                <div>
                                    <p className="text-lg md:text-xl text-primary font-bold">{story.name}</p>
                                    <p className="text-sm md:text-md text-gray-600 font-medium">{story.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    );
};

export default SuccessStories;
