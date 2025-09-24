import React, { useRef, useState } from 'react'
import Logo from '../assets/images/Logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";



const Navbar = () => {

    const navItemsRef = useRef();
    const [activeHeading, setActiveHeading] = useState(null);
    const [activeSubheading, setActiveSubheading] = useState(null);
    const [hide, setHide] = useState(true);
    const [Subheading, setSubHeadings] = useState(true);
    const links = [
        {
            id: '#temporary-residence',
            label: 'Temporary Residence',
            subheadings: [
                { label: 'Study Application' },
                { label: 'Visitor Visa' },
                { label: 'Super Visa' },
                {
                    label: 'Work Permit',
                    subheadings: [
                        'Spouse Open Work Permit Application',
                        'Post Graduate Work Permit',
                        'Closed Work Permit Application',
                        'Bridge Open Work Permit'
                    ]
                }
            ]
        },
        {
            id: '#permanent-resident',
            label: 'Permanent Resident',
            subheadings: [
                { label: 'Express Entry' },
                { label: 'Provincial Nominee Program' },
                { label: 'Spousal Sponsership Inland' },
                { label: 'Dependent Child' },
                { label: 'Parents And Grandparents Sponsorship Program' }
            ]
        },
        {
            id: '#citizenship',
            label: 'Citizenship'
        },
        {
            id: '#other-services',
            label: 'Other Services',
            subheadings: [
                { label: 'NOC Code Service' },
                { label: 'Document Preview' },
                { label: 'Procedural Fairness Letter' },
                { label: 'Temporary Residence Permit' },
                { label: 'H&C Applicant' },
                { label: 'PR Card Renewal' },
                { label: 'GCMS Notes Review' },
                { label: 'LMIA Processing' },
                { label: 'PRTD Application Service' }
            ]
        }
    ];


    const toggleButton = () => {
        setHide(prev => !prev)
    }
    const ShowHideSubheadingd = () => {
        setSubHeadings(prev => !prev)
    }

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
                        {hide ? <RxHamburgerMenu onClick={toggleButton} size={32} className='text-[#006AAB] lg:hidden md:mr-6 ' /> : <RxCross1 onClick={toggleButton} size={24} className='text-[#006AAB] lg:hidden md:mr-6' />}

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
                            <div className="flex items-center justify-center gap-2 group">
                                <NavLink
                                    to="/our-services"
                                    className={({ isActive }) =>
                                        `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`
                                    }
                                >
                                    Our Services
                                </NavLink>

                                <IoIosArrowDown
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        ShowHideSubheadingd();
                                    }}
                                    className="hidden lg:block cursor-pointer"
                                />
                            </div>


                            <div className='flex md:hidden lg:block'>
                                {!Subheading && (
                                    <div className="absolute top-14 bg-white rounded shadow-lg flex flex-col p-2 min-w-[200px]">
                                        {links.map((link, index) => (
                                            <div key={link.id} className="flex flex-col">
                                                <a
                                                    onClick={() =>
                                                        setActiveHeading(activeHeading === index ? null : index)
                                                    }
                                                    href={link.id}
                                                    className="text-sm text-gray-700 hover:text-blue-600 py-1 px-2 flex items-center justify-between"
                                                >
                                                    {link.label}
                                                    {link.subheadings && <IoIosArrowDown className="ml-2" />}
                                                </a>

                                                {activeHeading === index && link.subheadings && (
                                                    <div className="ml-4 bg-white rounded text-gray-700 p-2 shadow">
                                                        {link.subheadings.map((sub, i) => (
                                                            <div key={i} className="flex flex-col">
                                                                <a
                                                                    onClick={() =>
                                                                        setActiveSubheading(activeSubheading === i ? null : i)
                                                                    }
                                                                    href={`#sub-${i}`}
                                                                    className="text-sm text-gray-700 hover:text-blue-600 flex items-center justify-between mb-1"
                                                                >
                                                                    {sub.label}
                                                                    {sub.subheadings && <IoIosArrowDown className="ml-2" />}
                                                                </a>

                                                                {activeSubheading === i && sub.subheadings && (
                                                                    <div className="ml-4 bg-gray-50 rounded p-2">
                                                                        {sub.subheadings.map((nested, j) => (
                                                                            <a
                                                                                key={j}
                                                                                href={`#nested-${j}`}
                                                                                className="text-sm text-gray-600 hover:text-blue-500 mb-1 block"
                                                                            >
                                                                                {nested}
                                                                            </a>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
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
