const Cards = () => {
    return (
        <div className="App">
            <div className="flex items-center lg:justify-around flex-col lg:flex-row px-11 py-12 lg:px-30 lg:py-12 mt-15">
                <div className="flex flex-col justify-center items-center mb-10">
                    <img className="w-20 mb-5" src="/Icon.png" alt="" />
                    <h1 className="lg:text-3xl text-2xl sm:2xl font-bold">Membership</h1>
                    <h1 className="lg:text-3xl text-2xl sm:2xl font-bold mb-5">Organisations</h1>
                    <p className="text-[#717171]">Our membership management</p>
                    <p className="text-[#717171]">software provides full automation of </p>
                    <p className="text-[#717171]">membership renewals and payments</p>
                </div>
                <div className="flex flex-col justify-center items-center mb-10">
                    <img className="w-20 mb-5" src="/Icon(1).png" alt="" />
                    <h1 className="lg:text-3xl text-2xl sm:2xl font-bold">National</h1>
                    <h1 className="lg:text-3xl text-2xl sm:2xl font-bold mb-5">Associations</h1>
                    <p className="text-[#717171]">Our membership management</p>
                    <p className="text-[#717171]">software provides full automation of </p>
                    <p className="text-[#717171]">membership renewals and payments</p>
                </div>
                <div className="flex flex-col items-center justify-center mb-10">
                    <img className="w-20 self-center mb-5" src="/icons.png" alt="" />
                    <h1 className="lg:text-3xl text-2xl sm:2xl font-bold">Clubs And</h1>
                    <h1 className="lg:text-3xl text-2xl sm:2xl font-bold mb-5">Groups</h1>
                    <p className="text-[#717171]">Our membership management</p>
                    <p className="text-[#717171]">software provides full automation of </p>
                    <p className="text-[#717171]">membership renewals and payments</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;