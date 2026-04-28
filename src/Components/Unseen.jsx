const Unseen = () => {
    return (
        <div className="App">
            <div className="flex lg:justify-around flex-col lg:flex-row lg:p-20 p-10 items-center">
                <div className="mb-10">
                    <img className="lg:w-120 w-90" src="/rafiki.png" alt="" />
                </div>
                <div className="">
                    <h1 className="lg:text-5xl text-3xl font-bold lg:mb-10 mb-5">The unseen of spending three <br /> years at Pixelgrade</h1>
                    <p className="text-[#717171] lg:text-1xl lg:mt-10 mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br /> sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed <br /> porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. <br /> Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <button className="bg-[#4CAF4F] py-3 px-8 text-white lg:mt-15 mt-10">Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default Unseen;