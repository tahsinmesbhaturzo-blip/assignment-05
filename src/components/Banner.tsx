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
        </>
    );
};

export default Banner;