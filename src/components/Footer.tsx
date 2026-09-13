import logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <div>
            <hr className='border-gray-300 pb-3' />
            <img src={logo} alt="Logo" />
            <hr className='border-gray-300 pt-3 container mx-auto'  />
        </div>
    );
};

export default Footer;
