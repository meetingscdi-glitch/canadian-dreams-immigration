import React, { useRef, useState } from 'react'
import Logo from '../assets/images/Logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Navbar = () => {

    const navItemsRef = useRef();
    const location = useLocation();
    const [hasAnimated, setHasAnimated] = useState(false);
    const [hide, setHide] = useState(true);
    const [Subheading, setSubHeadings] = useState(true);
    const links = [
        { id: '#temporary-residence', label: 'Temporary Residence' },
        { id: '#permanent-resident', label: 'Permanent Resident' },
        { id: '#citizenship', label: 'Citizenship' },
        { id: '#other-services', label: 'Other Services' }
    ];
    const toggleButton = () => {
        setHide(prev => !prev)
    }
    const ShowHideSubheadingd = () => {
        setSubHeadings(prev => !prev)
    }

    // useGSAP(() => {
    //     const tl = gsap.timeline();
    //     tl.from(navItemsRef.current.children, {
    //         x: -300,
    //         opacity: 0,
    //         duration: 1,
    //         ease: 'power3.out',
    //         stagger: 0.1, // delay between each item
    //     });

    // }, []);

    return (
        <div >
            <div className='bg-[#006AAB] hidden lg:block py-4 px-4'>
                <div className='container mx-auto flex justify-between items-center text-white md:px-3.5 lg:px-0 lg:pl-5'>
                    <div className='flex items-center xl:gap-20 lg:gap-10'>
                        <div className='flex items-center gap-3 lg:-ml-1'>
                            <MdEmail size={28} />
                            <a
                                href="mailto:Canadiandreamsimmigration@gmail.com"
                                className="text-lg poppins-regular transition-colors hover:text-blue-100"
                            >
                                Canadiandreamsimmigration@gmail.com

                            </a>
                        </div>

                        <div className='flex items-center xl:gap-3 gap-1.5 '>
                            <IoCall size={28} />
                            <a
                                href="tel:+1 (416) 434-3155"
                                className="xl:text-lg lg:text-sm poppins-regular transition-colors hover:text-blue-100"
                            >
                                +1 (416) 434-3155,
                            </a>
                            <a
                                href="tel:+1 (416) 434-3155"
                                className="xl:text-lg lg:text-sm poppins-regular transition-colors hover:text-blue-100"
                            >
                                +1 (647) 510-9350,
                            </a>
                            <a
                                href="tel:+1 (416) 434-3155"
                                className="xl:text-lg lg:text-sm poppins-regular transition-colors hover:text-blue-100"
                            >
                                +1 (604) 360-7128
                            </a>
                        </div>

                    </div>
                    <div className='flex items-center gap-3'>
                        <a
                            href="https://www.facebook.com/share/1B4kbs2Xd9/?mibextid=wwXIfr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:cursor-pointer hover:drop-shadow-[1px_-8px_6px_#0F08F7]"
                        >
                            <TiSocialFacebook size={28} />
                        </a>

                        <a
                            href="https://www.instagram.com/canadian.dreams.immigration?igsh=MWl1eDJ1NHN3bGpoeg=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:cursor-pointer hover:drop-shadow-[1px_-8px_6px_#0F08F7]"
                        >
                            <AiFillInstagram size={28} />
                        </a>

                        <div className='hover:cursor-pointer hover:drop-shadow-[1px_-8px_6px_#0F08F7]'><IoLogoTiktok size={28} /></div>
                        <div className='hover:cursor-pointer hover:drop-shadow-[1px_-8px_6px_#0F08F7]'><IoLocationSharp size={28} /></div>
                    </div>
                </div>
            </div>
            {/* NavBarItemsStarting */}
            <nav >
                <div className='lg:flex justify-between  xl:px-0 xl:gap-5 items-center  py-4 container mx-auto relative navbar'>
                    <div className='flex items-center justify-between'>
                        <Link to={'/'}>
                            <img className='md:w-56 w-46 lg:ml-8 xl:ml-4 lg:w-40 xl:w-64 md:ml-10' src={Logo} alt="COMPANY LOGO" />
                        </Link>
                        {hide ? <RxHamburgerMenu onClick={toggleButton} size={32} className='text-[#006AAB] lg:hidden md:mr-6 ' /> : <RxCross1 onClick={toggleButton} size={24} className='text-[#006AAB] lg:hidden' />}

                    </div>
                    <div
                        ref={navItemsRef}
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${hide ? 'max-h-0 lg:max-h-[500px]' : 'max-h-[500px] py-6'
                            } flex flex-col lg:mr-4 xl:mr-0 lg:flex-row lg:items-center gap-4 xl:gap-5 poppins-regular text-lg md:static absolute right-0 bg-white lg:bg-transparent z-10 w-full md:w-auto px-5 md:px-0 navbaritems centerClas `}
                    >
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'} `
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/about-us"
                            className={({ isActive }) =>
                                `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`
                            }
                        >
                            About Us
                        </NavLink>
                        <div className="w-fit">
                            <NavLink to="/our-services"
                                className={({ isActive }) =>
                                    `hover:text-[#006AAB] flex items-center gap-2 ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`
                                }>
                                Our Services <IoIosArrowDown onClick={ShowHideSubheadingd} className='hidden lg:block' />
                            </NavLink>

                            <div className={`absolute ${Subheading ? 'hidden' : ''} top-14 bg-white rounded shadow-lg flex flex-col p-2 min-w-[150px]`}>
                                {links.map((link) => (
                                    <a
                                        onClick={() => {
                                            setSubHeadings(true)
                                        }}
                                        key={link.id}
                                        href={link.id}
                                        className="text-sm text-gray-700 hover:text-blue-600 py-1 px-2"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`
                            }
                        >
                            Blog
                        </NavLink>
                        <NavLink
                            to="/employer"
                            className={({ isActive }) =>
                                `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`
                            }
                        >
                            Employer
                        </NavLink>
                        <NavLink
                            to="/contact-us"
                            className={({ isActive }) =>
                                `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`
                            }
                        >
                            Contact Us
                        </NavLink>
                        <div>
                            <Link to='/contact-us'>
                                <button className='bg-[#F22941] hover:bg-[#da2f42] md:px-2 md:py-2  text-white rounded xl:text-xl text-base xl:py-2 xl:px-4 whitespace-nowrap cursor-pointer'>Book a consultation</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav >
        </div>
    )
}

export default Navbar
