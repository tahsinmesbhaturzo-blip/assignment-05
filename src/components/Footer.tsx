import logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <>
         <hr className='border-gray-300 pb-3' />
        <div className="xl:flex container mx-auto justify-between py-5 ">
           
            <div >
                <img className='container mx-auto h-10 w-35' src={logo} alt="Logo" />
                <p className="text-gray-500 py-5 md:flex text-center" >Curated tools, technologies, and resources <br /> for developers building
                    modern software.</p>
                <div className='flex gap-4 md:flex justify-center'>
                    <a  href="#">Github</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
            <div className='xl:flex flex-col gap-3 md:flex hidden'>
               <h1 className='text-[15px] font-bold'>PRODUCTS</h1>
                <a className='text-gray-500' href="#">Home</a>
                <a className='text-gray-500' href="#">Technologies</a>
                <a className='text-gray-500' href="#">Projects</a>
            </div>
            <div className="xl:flex flex-col gap-3 md:flex hidden">
                <h1 className="text-[15px] font-bold">COMPANY</h1>
                <a className='text-gray-500' href="#">About</a>
                <a className='text-gray-500' href="#">Contact</a>
                <a className='text-gray-500' href="#">Careers</a>
            </div>
            <div className="xl:flex flex-col gap-3 md:flex hidden  ">
                <h1 className="text-[15px] font-bold">LEGAL</h1>
                <a className='text-gray-500' href="#">Privacy Policy</a>
                <a className='text-gray-500' href="#">Terms of Service</a>
            </div>
            
        </div>
         <hr className='border-gray-300 pb-3 container mx-auto' />
        <div className='container mx-auto py-5 flex justify-between'>
        <p className='text-gray-400'>© 2026 Dev Stack. All rights reserved.</p>
        <p className='text-gray-400'>Privacy</p>
        </div>
        </>
    );
};

export default Footer;
