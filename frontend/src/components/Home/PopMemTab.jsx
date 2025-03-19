import React, { useState } from 'react';
import { FaVenusMars } from 'react-icons/fa';
import { IoMdFemale, IoMdMale } from 'react-icons/io';

const PopMemTab = () => {
    const [activeTab, setActiveTab] = useState('all');

    const members = [
        { id: 1, name: 'Chandra Dev', gender: 'male', age: '32 Years old', image: '/pmb1.jpg' },
        { id: 2, name: 'Indra Dev', gender: 'male', age: '28 Years old', image: '/pmb2.jpg' },
        { id: 3, name: 'Punam Dev', gender: 'female', age: '25 Years old', image: '/pmg1.jpg' },
        { id: 4, name: 'Shritee Thakur', gender: 'female', age: '29 Years old', image: '/pmg2.jpg' },
        { id: 5, name: 'Sachin Kumar', gender: 'male', age: '26 Years old', image: '/pmb3.jpg' },
    ];

    const filteredMembers =
        activeTab === 'all'
            ? members
            : members.filter((member) => member.gender === activeTab);

    return (
        <div className="flex flex-col">
            <div className="flex justify-center items-center space-x-4 mb-6">
                <button
                    onClick={() => setActiveTab('all')}
                    className={`py-2 px-4 border-b-4 text-xs md:text-lg font-semibold flex justify-start items-center gap-2 ${activeTab === 'all' ? 'border-pink-600 text-pink-600' : 'border-transparent'
                        }`}
                >
                    View All <FaVenusMars className='w-4 md:w-6 h-4 md:h-6 text-pink-600' />
                </button>
                <button
                    onClick={() => setActiveTab('male')}
                    className={`py-2 px-4 border-b-4 text-xs md:text-lg font-semibold flex justify-start items-center gap-2 ${activeTab === 'male' ? 'border-pink-600 text-pink-600' : 'border-transparent'
                        }`}
                >
                    Male <IoMdMale className='w-4 md:w-6 h-4 md:h-6 text-blue-700' />
                </button>
                <button
                    onClick={() => setActiveTab('female')}
                    className={`py-2 px-4 border-b-4 text-xs md:text-lg font-semibold flex justify-start items-center gap-2 ${activeTab === 'female' ? 'border-pink-600 text-pink-600' : 'border-transparent'
                        }`}
                >
                    Female <IoMdFemale className='w-4 md:w-6 h-4 md:h-6 text-purple-600' />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 justify-center items-center gap-6">
                {filteredMembers.map((member) => (
                    <div
                        key={member.id}
                        className="group relative bg-white p-4 rounded-md shadow-sm text-center transition-shadow duration-300 ease-in-out hover:shadow-xl"
                    >
                        <div className="relative overflow-hidden rounded-md h-48">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                            />
                            <button className="absolute bottom-3 left-2 bg-green-600 text-white text-sm px-3 rounded-md">
                                Online
                            </button>
                        </div>

                        <h2 className="text-xl font-bold text-primary mt-6">
                            {member.name}
                        </h2>

                        <div className="flex justify-center items-center gap-2">
                            <p className="text-sm text-gray-600 font-medium capitalize">
                                {member.age}
                            </p>
                            <img src="/male (1).png" alt="" className='w-4 h-4' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopMemTab;
