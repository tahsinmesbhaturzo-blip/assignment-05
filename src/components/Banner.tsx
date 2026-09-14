import banner from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <>
        <div className="md:flex flex-row items-center justify-between container mx-auto py-4 px-6 ">
            <div>
                <h1 className="text-5xl font-bold pb-5">Build Your Ideal <br /> <span className="bg-linear-to-r  from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span></h1>
                <p className="text-[18px] text-gray-600 mt-4">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>
                <div className="flex gap-4 mt-6">
                  <button className="btn bg-linear-to-r  from-orange-500 via-pink-500 to-purple-600 py-5 px-4 rounded-lg text-white font-bold" >Explore Technologies</button>
                  <button className="btn rounded-lg  bg-white py-5 px-6 text-gray-500 font-bold"  >Learn More</button>
                </div>
            </div>
            <img className="" src={banner} alt="Banner" />
        </div>
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-[#14213D]" >Explore the <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Technologies</span></h1>
            <p className="mt-3 text-lg text-[#7A8BA6]">Pick one technology per category to build your ideal stack.</p>
        </div>
        </>
    );
};

export default Banner;