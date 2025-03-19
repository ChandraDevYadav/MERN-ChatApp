import React from 'react'

const HeroSection = () => {


    return (
        <div className='bg-cover bg-center relative py-6 md:py-28 pl-2 md:pl-28' style={{ backgroundImage: "url('/bg.jpg')" }}>
            <div className="grid grid-cols-1 md:grid-cols-5">
                <div className='col-span-2 order-2 md:order-1'>
                    <div className='bg-white rounded-md py-14 px-10 mr-2'>
                        <h1 className='text-4xl font-bold text-[#213366]'>Find Your Ture Love</h1>
                        <p className='text-[#555] text-lg font-medium mt-4'>Serious dating with your perfect match is just a click away.</p>
                        <div className='mt-8'>
                            <p className='font-medium'>I am </p>
                            <div className="grid grid-cols-2 gap-y-4 gap-x-4 py-4">
                                <div>
                                    <div className='flex justify-between items-center border-2 border-gray-400 py-3 px-4 rounded-md'>
                                        <div className='flex justify-center items-center gap-3'>
                                            <input
                                                type="radio"
                                                id="custom-checkbox"
                                                className="form-checkbox h-4 w-4 text-red-600 rounded focus:ring-red-500"
                                            />
                                            <label htmlFor="" className=''>Male</label>
                                        </div>
                                        <img src="/male.png" className='w-5 h-5' alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-between items-center border-2 border-gray-400 py-3 px-4 rounded-md'>
                                        <div className='flex justify-center items-center gap-3'>
                                            <input
                                                type="radio"
                                                id="custom-checkbox"
                                                className="form-checkbox h-4 w-4 text-red-600 rounded focus:ring-red-500"
                                            />
                                            <label htmlFor="" className=''>Female</label>
                                        </div>
                                        <img src="/female.png" className='w-5 h-5' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <p className='font-medium'> Looking for</p>
                            <div className="grid grid-cols-2 gap-y-4 gap-x-4 py-4">
                                <div>
                                    <div className='flex justify-between items-center border-2 border-gray-400 py-3 px-4 rounded-md'>
                                        <div className='flex justify-center items-center gap-3'>
                                            <input
                                                type="radio"
                                                id="custom-checkbox"
                                                className="form-checkbox h-4 w-4 text-red-600 rounded focus:ring-red-500"
                                            />
                                            <label htmlFor="" className=''>Male</label>
                                        </div>
                                        <img src="/male.png" className='w-5 h-5' alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-between items-center border-2 border-gray-400 py-3 px-4 rounded-md'>
                                        <div className='flex justify-center items-center gap-3'>
                                            <input
                                                type="radio"
                                                id="custom-checkbox"
                                                className="form-checkbox h-4 w-4 text-red-600 rounded focus:ring-red-500"
                                            />
                                            <label htmlFor="" className=''>Female</label>
                                        </div>
                                        <img src="/female.png" className='w-5 h-5' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <p className='font-medium'>Age</p>
                            <div className="grid grid-cols-2 gap-y-4 gap-x-4 py-4">
                                <div>
                                    <div className=''>
                                        <select name="" id="" defaultValue='ages' className='focus:ring-pink-600 w-full py-3 px-3 border-2 border-gray-400 rounded-md'>
                                            <option value="ages">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <div className=''>
                                        <select name="" id="" defaultValue='ages' className='focus:ring-pink-600 w-full py-3 px-3 border-2 border-gray-400 rounded-md'>
                                            <option value="ages">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-1 gap-x-4 py-2">
                                <div>
                                    <p className='mb-4 font-medium'>Country</p>
                                    <div className=''>
                                        <select name="" id="" defaultValue='nepal' className='focus:ring-pink-600 w-full py-3 px-3 border-2 border-gray-400 rounded-md'>
                                            <option value="nepal">Nepal</option>
                                            <option value="india">India</option>
                                            <option value="bangladesh">Bangaladesh</option>
                                            <option value="srilanka">Sri-Lanka</option>
                                            <option value="pakistan">Pakistan</option>
                                            <option value="china">china</option>
                                            <option value="russia">Russia</option>
                                            <option value="usa">USA</option>
                                            <option value="canada">Canada</option>
                                            <option value="brazil">Brazil</option>
                                            <option value="argentina">Argentina</option>
                                            <option value="qatar">Qatar</option>
                                            <option value="uae">UAE</option>
                                            <option value="iraq">Iraq</option>
                                            <option value="afghanistan">Afghanistan</option>
                                            <option value="poland">Poland</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-y-4 gap-x-4 py-4">
                                <div>
                                    <button className='px-6 py-4 rounded-md bg-pink-300 text-pink-600 w-full font-semibold'>Find Your Partner</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 order-1 md:order-2 ml-2 md:ml-32'>
                    <div className="w-full mb-6">
                        <img
                            src="/01.png"
                            alt="Animated"
                            className="w-full h-[20rem] md:h-[50rem] animate-moveUpDown"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection