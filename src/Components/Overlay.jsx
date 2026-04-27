import React from 'react';

const Overlay = () => {
    return (
        <div className="flex flex-col items-center lg:flex-row lg:justify-between px-11 py-12 lg:px-30 lg:py-12 bg-[#F5F7FA]">
            <div className="flex flex-col gap-7">
                <h1 className='lg:text-7xl text-4xl font-semibold'>Lessons and insights</h1>
                <h2 className='lg:text-6xl text-[#4CAF4F] text-3xl'>from 8 years</h2>
                <p className='lg:text-2xl text-[#717171]'>Where to grow your business as a photographer: site or social media</p>
                <button  className="bg-[#4CAF4F] px-3 py-2 text-white lg:self-start cursor-pointer">Register</button>
            </div>
            <div className="pt-20">
                <img className='lg:w-118 lg:h-120.75' src="/Illustration.png" alt="ilustration" />
            </div>
        </div>
    );
}

export default Overlay;