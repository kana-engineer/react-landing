const Caring = () => {
    return (
        <div className="Add px-11 py-12 lg:px-30 lg:py-12">
            <div className="">
                <div className="flex items-center justify-center flex-col">
                    <h1 className="text-3xl font-bold mb-5">Caring is the new marketing</h1>
                    <p className="text-center text-[#717171]">The Nextcent blog is the best place to read about the latest membership insights, <br /> trends and more. See who's joining the community, read about how our community <br /> are increasing their membership income and lot's more.</p>
                </div>
            </div>
            <div className="flex justify-center lg:flex-row flex-col gap-16 mt-15">
                <div className="flex flex-col items-center justify-center mb-25">
                    <img className="w-120" src="/image 18.png" alt="" />
                    <nav className="bg-[#F5F7FA] shadow px-10 py-8 rounded flex flex-col items-center gap-5 absolute mt-80 z-10">
                        <h2 className="text-[#717171] text-[21px] text-center">Creating Streamlined <br /> Safeguarding Processes with <br /> OneRen</h2>
                        <nav className="flex items-center gap-3">
                            <button className="text-[#4CAF4F] cursor-pointer">Readmore</button>
                            <i class='bx bx-right-arrow-alt text-[#4CAF4F] cursor-pointer'></i>
                        </nav>
                    </nav>
                </div>
                <div className="flex flex-col items-center justify-center mb-25">
                    <img className="w-120" src="/image 19.png" alt="" />
                    <nav className="bg-[#F5F7FA] shadow px-10 py-8 rounded flex flex-col items-center gap-5 absolute mt-80 z-10">
                        <h2 className="text-[#717171] text-[21px] text-center">What are your safeguarding <br /> responsibilities and how can <br /> you manage them?</h2>
                        <nav className="flex items-center gap-3">
                            <button className="text-[#4CAF4F] cursor-pointer">Readmore</button>
                            <i class='bx bx-right-arrow-alt text-[#4CAF4F] cursor-pointer'></i>
                        </nav>
                    </nav>
                </div>
                <div className="flex flex-col items-center justify-center mb-25">
                    <img className="w-120" src="/image 20.png" alt="" />
                    <nav className="bg-[#F5F7FA] shadow px-10 py-8 rounded flex flex-col items-center gap-5 absolute mt-80 z-10">
                        <h2 className="text-[#717171] text-[21px] text-center">Revamping the Membership <br /> Model with Triathlon <br /> Australia</h2>
                        <nav className="flex items-center gap-3">
                            <button className="text-[#4CAF4F] cursor-pointer">Readmore</button>
                            <i class='bx bx-right-arrow-alt text-[#4CAF4F] cursor-pointer'></i>
                        </nav>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Caring;