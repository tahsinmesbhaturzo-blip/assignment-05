import banner from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <>
        <div className="flex flex-row items-center justify-between container mx-auto py-4 px-6">
            <div>
                <h1 className="text-6xl font-bold pb-5">Build Your Ideal <br /> <span className="bg-linear-to-r  from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span></h1>
                <p className="text-lg text-gray-600 mt-4">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>
                <div>
                    
                </div>
            </div>
            <img className="" src={banner} alt="Banner" />
        </div>
        </>
    );
};

export default Banner;