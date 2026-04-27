import React from 'react';

const Content = () => {
    return (
        <div className="App">
            <div className="flex flex-col items-center mt-10">
                <h1 className='lg:text-4xl text-2xl text-center font-bold mb-3'>Our Clients</h1>
                <p className='text-[#717171]'>We have been working with some Fortune 500+ clients</p>
            </div>
            <div className="flex items-center justify-around p-10 mt-10">
                <img className='lg:w-12 w-8' src="/logo1.png" alt="" />
                <img className='lg:w-12 w-8' src="/Logo2.png" alt="" />
                <img className='lg:w-12 w-8' src="/Logo3.png" alt="" />
                <img className='lg:w-12 w-8' src="/Logo4.png" alt="" />
                <img className='lg:w-12 w-8' src="/Logo5.png" alt="" />
                <img className='lg:w-12 w-8' src="/Logo6.png" alt="" />
                <img className='lg:w-12 w-8' src="/Logo7.png" alt="" />
            </div>
            <div className=" flex flex-col items-center mt-10">
                <h1 className='lg:text-4xl text-2xl font-bold mb-3'>Manage your entire community</h1>
                <h2 className='lg:text-4xl text-2xl font-bold mb-3'> in a single system</h2>
                <p className='text-[#717171] mb-3'>Who is Nextcent suitable for?</p>
            </div>
        </div>
    );
}

export default Content;