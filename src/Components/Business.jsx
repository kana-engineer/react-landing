const Business = () => {
    return (
        <div className="App">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 grid-rows-1 px-11 py-12 lg:px-30 lg:py-12 bg-[#F5F7FA]">
                 <div className="self-center mb-10">
                    <h1 className="lg:text-5xl text-3xl font-bold mb-2">Helping a local</h1>
                    <h1 className="lg:text-5xl text-3xl mb-2 text-[#4CAF4F] font-bold">business reinvent itself</h1>
                    <p>We reached here with our hard work and dedication</p>
                </div>
                <div className="grid grid-cols-2 gap-20">
                    <nav className="flex gap-10 items-center">
                        <nav>
                            <img className="lg:w-12 w-8" src="/Vector.png" alt="" />
                        </nav>
                        <nav>
                            <h1 className="lg:text-2xl font-bold">2,245,341</h1>
                            <p className="lg:text-1xl text-[10px]">Members</p>
                        </nav>
                    </nav>
                    <nav className="flex gap-10 items-center">  
                        <nav>
                            <img className="lg:w-12 w-8" src="/Vektor2.png" alt="" />
                        </nav>
                        <nav>
                            <h1 className="lg:text-2xl font-bold">46,328</h1>
                            <p className="lg:text-1xl text-[10px]">Cubs</p>
                        </nav>
                    </nav>
                    <nav className="flex gap-10 items-center">
                        <nav>
                            <img className="lg:w-12 w-8" src="/vektor3.png" alt="" />
                        </nav>
                        <nav>
                            <h1 className="lg:text-2xl font-bold">828,867</h1>
                            <p className="lg:text-1xl text-[10px]">Event Booking</p>
                        </nav>
                    </nav>
                    <nav className="flex gap-10 items-center">
                        <nav>
                            <img className="lg:w-12 w-8" src="/vektor4.png" alt="" />
                        </nav>
                        <nav>
                            <h1 className="lg:text-2xl font-bold">1,926,436</h1>
                            <p className="lg:text-1xl text-[10px]">Payments</p>
                        </nav>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Business;