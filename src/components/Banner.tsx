import banner from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <>
        <div className="flex flex-row">
            <div>
                <h1 className="text-5xl font-bold text-[#DB2777]">Build Your Dream Website</h1>
            </div>
            <img className="" src={banner} alt="Banner" />
        </div>
        </>
    );
};

export default Banner;