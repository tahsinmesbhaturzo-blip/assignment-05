import logo from "../assets/logo-text.png"

const Nav = () => {
    return (
        <>
        <nav className="flex justify-between items-center container mx-auto py-4 px-6">
            <a><img src={logo} alt="Logo" /></a>
            <ul className="flex gap-6 ">
                <li><a className="text-[#DB2777]" href="#home">Home</a></li>
                <li><a className="hover:text-[#DB2777]" href="#technologies">Technologies</a></li>
                <li><a className="hover:text-[#DB2777]" href="#projects">Projects</a></li>
                <li><a className="hover:text-[#DB2777]" href="#about">About</a></li>
                <li><a className="hover:text-[#DB2777]" href="#contact">Contact</a></li>
            </ul>
            <div className="flex gap-4">
                <button className="btn border-white bg-white hover:text-[#DB2777]">Sign In</button>
                <button className="btn btn-secondary text-white rounded-full">Sign Up</button>
            </div>
            
        </nav>
        <hr className="border-gray-300" />
        </>
    );
};

export default Nav;