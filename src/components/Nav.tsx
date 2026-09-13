import logo from "../assets/logo-text.png"
import burger from "../assets/hamburger.png"

const Nav = () => {
    return (
        <div className="sticky top-0 bg-white z-50">
        <nav className="flex justify-between items-center container mx-auto py-4 px-6 ">
            <a className="md:hidden "><img src={burger} alt="Logo" /></a>
            <a><img className="md:flex justify-right" src={logo} alt="Logo" /></a>
            <ul className="flex gap-6 md:flex hidden ">
                <li><a className="text-[#DB2777]" href="#home">Home</a></li>
                <li><a className="hover:text-[#DB2777]" href="#technologies">Technologies</a></li>
                <li><a className="hover:text-[#DB2777]" href="#projects">Projects</a></li>
                <li><a className="hover:text-[#DB2777]" href="#about">About</a></li>
                <li><a className="hover:text-[#DB2777]" href="#contact">Contact</a></li>
            </ul>
            <div className="flex gap-4">
                <button className="text-sm cursor-pointer font-medium text-gray-600 hover:text-pink-600">Sign In</button>
                <button className="rounded-full cursor-pointer bg-pink-600 p-2 text-sm font-medium text-white hover:bg-pink-700">Sign Up</button>
            </div>
            
        </nav>
        <hr className="border-gray-300" />
        </div>
    );
};

export default Nav;