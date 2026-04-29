const Design = () => {
    return (
        <div className="App">
            <div className=" px-11 py-12 lg:px-30 lg:py-12 grid lg:grid-cols-2 grid-cols-1 items-center-safe">
                <div className="">
                    <img className="lg:w-120 w-90" src="/pana.png" alt="" />
                </div>
                <div className="">
                    <h1 className="lg:text-5xl text-3xl font-bold mb-5 mt-10">How to design your site footer like <br /> we did</h1>
                    <p className="text-[#717171] mb-10">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt <br /> molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at <br /> libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta <br /> nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer <br /> in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi <br /> ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <button className="py-2 px-8 text-white mt-5 bg-[#4CAF4F]">Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default Design;