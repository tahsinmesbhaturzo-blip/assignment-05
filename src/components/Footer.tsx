import logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <>
         <hr className='border-gray-300 pb-3' />
        <div className="flex container mx-auto justify-between py-5">
           
            <div>
                <img src={logo} alt="Logo" />
                <p className="text-gray-500 py-5" >Curated tools, technologies, and resources <br /> for developers building
modern software.</p>
                <div className='flex gap-4'>
                    <a href="#">Github</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
               <h1 className='text-xl font-bold'>PRODUCTS</h1>
                <a href="#">Home</a>
                <a href="#">Technologies</a>
                <a href="#">Projects</a>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-xl font-bold">COMPANY</h1>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Careers</a>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-xl font-bold">LEGAL</h1>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
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
