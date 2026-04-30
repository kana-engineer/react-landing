const Smith = () => {
    return (
        <div className="App">
            <div className="grid lg:grid-cols-[550px_1fr] grid-cols-1 px-11 py-12 lg:px-30 lg:py-12">
                <div className="">
                    <img className="lg:w-100 w-100" src="/image 9.png" alt="" />
                </div>
                <div className="">
                    <p className="text-[#717171] lg:mb-10 mb-5">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus <br /> tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida <br /> enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie <br /> mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. <br /> Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, <br /> vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum <br /> id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h2 className="text-2xl text-[#4CAF4F] font-bold mb-3">Tim Smith</h2>
                    <p className="text-[#717171] lg:mb-13 mb-9">British Dragon Boat Racing Assosation</p>
                    <nav className="flex flex-col lg:flex-row lg:gap-15 gap-10">
                        <nav className="flex lg:gap-15 gap-8">
                            <img className="lg:w-8 w-8" src="/logo1.png" alt="" />
                            <img className="lg:w-8 w-8" src="/Logo2.png" alt="" />
                            <img className="lg:w-8 w-8" src="/Logo3.png" alt="" />
                            <img className="lg:w-8 w-8" src="/Logo4.png" alt="" />
                            <img className="lg:w-8 w-8" src="/Logo5.png" alt="" />
                            <img className="lg:w-8 w-8" src="Logo6.png" alt="" />
                        </nav>
                       <nav className="flex items-center gap-2">
                            <button className="text-[#4CAF4F] text-[18px] cursor-pointer">Meet all customers</button>
                            <i class='text-[#4CAF4F] bx bx-right-arrow-alt text-2xl cursor-pointer'></i>
                        </nav>
                    </nav>
                </div>
            </div>
        </div> 
    );
}

export default Smith;