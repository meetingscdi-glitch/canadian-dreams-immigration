import React, { useState, useEffect, useRef } from 'react';
import FooterImg from '../assets/images/FooterImg.png';
import Logo from '../assets/images/Logo.png';
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { TiSocialYoutube } from "react-icons/ti";
import { IoLogoTiktok, IoLocationSharp, IoCall } from "react-icons/io5";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import staticText from '../content/staticData';

const Footer = ({ services, subServices }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeServiceIndex, setActiveServiceIndex] = useState(null);
    const dropdownRef = useRef();

    // Close dropdown if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveServiceIndex(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSubServiceClick = (subCategory, service) => {
        const fullSubService = subServices.find(
            (s) => s.name.trim().toLowerCase() === subCategory.name.trim().toLowerCase()
        );
        if (!fullSubService?._id) return;
        setActiveServiceIndex(null);
        navigate(`/services/${fullSubService._id}`);
    };

    return (
        <div className="md:mt-20 w-full h-full text-white relative mt-12 bg-black pb-2">
            {/* Banner */}
            <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 mx-5 md:mx-0 px-5 sm:ml-14 py-5 md:ml-0 bg-[#006AAB] sm:px-4 md:px-12 sm:py-6 sm:w-5/6 md:w-5/6 lg:w-3/4 xl:w-2/3 rounded-xl md:py-8 flex justify-between gap-4 z-10">
                <div>
                    <h4 className="lg:text-2xl sm:text-xl poppins-regular">Let’s Discuss &</h4>
                    <h5 className="lg:text-2xl sm:text-xl font-bold md:leading-tight leading-5 md:mt-1.5 poppins-600">
                        Start Visa Consultations
                    </h5>
                </div>
                <Link to='/contact-us'>
                    <button className="bg-white cursor-pointer hover:scale-104 transition-all duration-200 text-[#006AAB] md:px-10 px-2 lg:text-2xl sm:text-xl rounded-xl whitespace-nowrap text-sm my-2 md:my-0 py-2.5">
                        Let’s Get Started
                    </button>
                </Link>
            </div>

            {/* Background Image */}
            <img src={FooterImg} alt="Footer Background" className="w-full h-full object-cover hidden xl:block pb-20 xl:pb-0 footerimg" />

            {/* Footer Content */}
            <div className="absolute xl:top-28 lg:top-2 left-0 right-0 md:px-8 xl:px-0 xl:container xl:mx-auto bg-[#000000] xl:bg-transparent pt-14 md:pt-28 lg:pt-28 xl:pt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full xl:justify-between mx-auto xl:gap-4 lg:gap-y-12 md:px-0 py-5 md:py-0">

                    {/* Logo & Social */}
                    <div className="flex flex-col md:gap-6 gap-3 xl:w-[22rem] px-5">
                        <Link to={'/'}>
                            <img className="md:w-64 w-44" src={Logo} alt="Logo" />
                        </Link>
                        <h5 className="poppins-regular md:text-lg text-md md:leading-8">{staticText.footerText}</h5>
                        <div>
                            <h5 className="poppins-regular md:mb-0 text-xl">Follow Us</h5>
                            <div className="flex gap-4 mt-2">
                                <a
                                    href="https://www.facebook.com/share/1M6rNDDtyZ/?mibextid=wwXIfr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <TiSocialFacebook
                                        className="bg-white text-black p-1 rounded cursor-pointer hover:rounded-full hover:bg-[#108CEC] hover:text-white transition duration-300"
                                        size={32}
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/canadian.dreams.immigration?igsh=Zm5zcXR0dTNvdTJu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiFillInstagram
                                        className="bg-white text-black p-1 rounded cursor-pointer hover:bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#515bd4] hover:rounded-full hover:text-white transition duration-300"
                                        size={32}
                                    />
                                </a>
                                <a
                                    href="https://www.tiktok.com/@canadiandreams1?_t=ZS-9002oFxqNSq&_r=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IoLogoTiktok
                                        className="bg-white text-black p-1 rounded cursor-pointer hover:bg-[#006AAB]  hover:rounded-full transition duration-300 hover:text-white"
                                        size={32}
                                    />
                                </a>
                                <a
                                    href="https://maps.app.goo.gl/6urHVPQhfNLVmSoV6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MdLocationOn
                                        className="bg-white text-black p-1 rounded cursor-pointer hover:rounded-full transition duration-300 hover:bg-[#006AAB] hover:text-white"
                                        size={32}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col md:gap-3 mt-4 md:mt-0 px-5 lg:ml-12 xl:ml-0">
                        <h5 className="poppins-500 text-xl mb-3 mt-5 md:mt-0 lg:mt-0 -ml-1">Quick Links</h5>
                        <Link to="/about-us"><h5 className="poppins-regular md:text-md text-sm mb-3">About Us</h5></Link>
                        <Link to="/our-services"><h5 className="poppins-regular md:text-md text-sm mb-3">Our Services</h5></Link>
                        <Link to="/blog"><h5 className="poppins-regular md:text-md text-sm mb-3">Blog</h5></Link>
                        <Link to="/"><h5 className="poppins-regular md:text-md text-sm mb-3">Home</h5></Link>
                        <Link to="/contact-us"><h5 className="poppins-regular md:text-md text-sm mb-3">Contact Us</h5></Link>
                    </div>

                    {/* Services (Footer version like Navbar) */}
                    <div ref={dropdownRef} className="flex flex-col md:gap-3 mt-3 md:mt-6 lg:mt-0 px-5">
                        <h5 className="poppins-500 text-xl mb-2">Services</h5>
                        {services?.length > 0 ? (
                            services.map((service, index) => (
                                <div key={service._id} className="relative">
                                    <h5
                                        className="poppins-regular md:text-md text-sm mb-3 cursor-pointer flex justify-between items-center"
                                        onClick={() =>
                                            setActiveServiceIndex(prev => (prev === index ? null : index))
                                        }
                                    >
                                        {service.name}
                                        {service.subCategories?.length > 0 && <span className="ml-2">▼</span>}
                                    </h5>

                                    {/* Dropdown with scroll hidden */}
                                    {activeServiceIndex === index && service.subCategories?.length > 0 && (
                                        <div
                                            style={{
                                                minHeight: "100px",
                                                maxHeight: "180px",
                                                width: "250px",
                                                overflowY: "scroll",
                                                top: "100%",
                                                left: 0,
                                                position: "absolute",
                                                zIndex: 50,
                                                backgroundColor: "#000",
                                                color: "#fff",
                                                borderRadius: "0.5rem",
                                                padding: "0.5rem",
                                                boxShadow: "0px 4px 8px rgba(0,0,0,0.5)",
                                                border: "1px solid #006AAB", // <-- Added border
                                                scrollbarWidth: "none", // Firefox
                                                msOverflowStyle: "none", // IE 10+
                                            }}
                                        >
                                            {service.subCategories.map((sub, i) => (
                                                <span
                                                    key={i}
                                                    className="py-1 px-2 hover:text-blue-400 cursor-pointer block"
                                                    onClick={() => handleSubServiceClick(sub, service)}
                                                >
                                                    {sub.name}
                                                </span>
                                            ))}
                                            {/* Hide scrollbar for Webkit */}
                                            <style>
                                                {`
            div::-webkit-scrollbar {
                display: none;
            }
            `}
                                            </style>
                                        </div>
                                    )}

                                </div>
                            ))
                        ) : (
                            <p className="text-sm text-gray-400">Loading...</p>
                        )}
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col mt-3 lg:mt-0 px-5">
                        <h5 className="poppins-500 text-xl mb-5 mt-2 xl:mt-0">Contact Us</h5>
                        <h5 className="poppins-regular md:text-md text-sm flex items-start -ml-1.5 gap-2">
                            <IoLocationSharp className="xl:text-3xl text-2xl shrink-0" />
                            {staticText.contactDetails.address}
                        </h5>
                        <h5 className="poppins-regular md:text-lg text-sm mt-5 flex flex-wrap items-start gap-2">
                            <MdEmail className="xl:text-3xl text-2xl shrink-0" />
                            <a href={`mailto:${staticText.contactDetails.email}`} className="transition-colors  text-sm break-words max-w-[200px] w-full">
                                {staticText.contactDetails.email}
                            </a>
                        </h5>
                        <div className="poppins-regular md:text-md text-sm flex flex-col mt-5 items-start gap-1.5">
                            <div className="flex items-center gap-3">
                                <IoCall className="xl:text-3xl text-2xl shrink-0" />
                                <h5 className='font-bold'>Contact Numbers:</h5>
                            </div>
                            <div className="flex flex-col ml-10 gap-0">
                                {staticText.contactDetails.phone.map((number, index) => (
                                    <a key={index} href={`tel:${number}`} className="transition-colors font-bold">
                                        {number}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-600 sm:mt-8">
                    <div className="container mx-auto px-4 text-white py-4 flex items-center flex-col gap-4 md:flex-row justify-between">
                        <p className="text-sm">ICWTT © 2024. All Rights Reserved.</p>
                        <div className="flex justify-center gap-4 text-sm">
                            <Link to="/privacy-policy">Privacy Policy</Link>
                            <Link to="/terms-and-condition">Terms & Conditions</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
