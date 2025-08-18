import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FaBars, FaCartShopping } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const navItems = [
    { path: "/", label: "Furniture" },
    { path: "/shop", label: "Shop" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" }
];

const NavItems = ({ toggleMenu }) => {
    return (
        <ul className='flex flex-col md:flex-row items-center md:space-x-7 gap-7'>
            {
                navItems.map((item, index) => (
                    <li key={index} onClick={toggleMenu}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-primary font-semibold"
                                    : "hover:text-primary"
                            }
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    );
};

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"}`}>
            <nav className='container max-w-screen-xl mx-auto flex justify-between items-center py-6 px-4'>
                {/* logo */}
                <Link to="/" className='font-bold text-xl'>Panto</Link>

                {/* hamburger menu for mobile */}
                <div onClick={toggleMenu} className='md:hidden text-xl cursor-pointer hover:text-primary'>
                    {isMenuOpen ? null : <FaBars />}
                </div>

                {/* desktop menu items */}
                <div className='hidden md:block'>
                    <NavItems />
                </div>

                {/* mobile menu items */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-black opacity-80 flex flex-col items-center justify-center space-y-7 text-white transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
                    <div className='absolute top-5 right-5 text-xl cursor-pointer' onClick={toggleMenu}>
                        <FaTimes />
                    </div>
                    <NavItems toggleMenu={toggleMenu} />
                </div>

                {/* cart icon */}
                <div className='hidden md:block cursor-pointer relative'>
                    <FaCartShopping className='text-xl' />
                    <sup className='absolute -top-1 -right-2 bg-primary text-white w-4 h-4 rounded-full flex items-center justify-center text-xs'>0</sup>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
