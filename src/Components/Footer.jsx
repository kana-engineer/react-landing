const Footer = () => {
    return (
        <div className="App">
            <div className="grid lg:grid-cols-[2fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr] gap-10 px-11 py-12 lg:px-30 lg:py-12 bg-[#263238] lg:h-80 h-240">
                <div className="flex flex-col justify-around gap-10">
                    <img className="w-40" src="/iconss.png" alt="" />
                    <nav>
                        <p className="text-white">Copyright © 2020 Landify UI Kit.</p>
                        <p className="text-white">All rights reserved</p>
                    </nav>

                    <nav className="flex gap-10 ">
                        <i class='text-3xl text-white bg-[#2e3f49] px-2 py-2 rounded-full bx bxl-instagram'></i>
                        <i class='text-3xl text-white bg-[#2e3f49] px-2 py-2 rounded-full bx bxl-github' ></i>
                        <i class='text-3xl text-white bg-[#2e3f49] px-2 py-2 rounded-full bx bxl-twitter' ></i>
                        <i class='text-3xl text-white bg-[#2e3f49] px-2 py-2 rounded-full bx bxl-youtube' ></i>
                    </nav>
                </div>
                <div className="flex flex-col gap-7">
                    <h1 className="text-white text-[20px] font-bold">Company</h1>
                    <nav className="flex flex-col gap-3">
                        <p className="text-[#F5F7FA]">About us</p>
                        <p className="text-[#F5F7FA]">Blog</p>
                        <p className="text-[#F5F7FA]">Contack us</p>
                        <p className="text-[#F5F7FA]">Pricing</p>
                        <p className="text-[#F5F7FA]">Testimonials</p>
                    </nav>
                </div>
                <div className="flex flex-col gap-7">
                    <h1 className="text-white text-[20px] font-bold">Support</h1>
                    <nav className="flex flex-col gap-3">
                        <p className="text-white">Help center</p>
                        <p className="text-white">Terms of service</p>
                        <p className="text-white">Legal</p>
                        <p className="text-white">Privacy police</p>
                        <p className="text-white">Status</p>
                    </nav>
                </div>
                <div className="flex flex-col gap-7">
                    <h1 className="text-white text-[20px] font-bold">Stay up to date</h1>
                    <nav className="flex items-center gap-2 bg-[#2e3f49] justify-around w-60 h-10 rounded">
                        <input className="ml-3 outline-none text-white" placeholder="Your email address" type="text" />
                        <i class='bx bx-send text-white rotate-[-50deg] text-[20px] cursor-pointer mr-3'></i>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Footer;