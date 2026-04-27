import React from 'react';

const Content = () => {
    return (
        <div className="">
            <div className="flex flex-col items-center mt-10">
                <h1 className='text-4xl font-bold mb-3'>Our Clients</h1>
                <p className='text-[#717171]'>We have been working with some Fortune 500+ clients</p>
            </div>
            <div className="flex items-center justify-around p-10 mt-10">
                <img className='w-12' src="/logo1.png" alt="" />
                <img className='w-12' src="/Logo2.png" alt="" />
                <img className='w-12' src="/Logo3.png" alt="" />
                <img className='w-12' src="/Logo4.png" alt="" />
                <img className='w-12' src="/Logo5.png" alt="" />
                <img className='w-12' src="/Logo6.png" alt="" />
                <img className='w-12' src="/Logo7.png" alt="" />
            </div>
            <div className=" flex flex-col items-center mt-10">
                <h1 className='text-4xl font-bold mb-3'>Manage your entire community</h1>
                <h2 className='text-4xl font-bold mb-3'> in a single system</h2>
                <p className='text-[#717171] mb-3'>Who is Nextcent suitable for?</p>
            </div>
        </div>
    );
}

export default Content;