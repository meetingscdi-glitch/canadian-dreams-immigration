// import React, { useEffect, useState } from 'react';
// import FooterImg from '../assets/images/FooterImg.png';
// import Logo from '../assets/images/Logo.png';
// import { TiSocialFacebook } from "react-icons/ti";
// import { AiFillInstagram } from "react-icons/ai";
// import { TiSocialYoutube } from "react-icons/ti";
// import { IoLogoTiktok, IoLocationSharp, IoCall } from "react-icons/io5";
// import { MdEmail } from "react-icons/md";
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import staticText from '../content/staticData';
// import axios from 'axios';

// const Footer = ({ services, subServices }) => {
//     const baseURL = import.meta.env.VITE_API_URL;
//     const navigate = useNavigate();
//     const location = useLocation();

//     // Scroll to service and open first sub-service
//     const scrollToService = async (serviceName) => {
//         const serviceId = serviceName.toLowerCase().replace(/\s+/g, '-');

//         if (location.pathname !== '/our-services') {
//             navigate('/our-services', { state: { scrollToService: serviceId } });
//         } else {
//             const element = document.getElementById(serviceId);
//             element?.scrollIntoView({ behavior: 'smooth', block: 'start' });

//             const service = services.find(s => s.name.toLowerCase() === serviceName.toLowerCase());
//             if (service?.subCategories?.length > 0) {
//                 const firstSubCategory = service.subCategories[0];
//                 const subService = subServices.find(
//                     sub => sub.name.trim().toLowerCase() === firstSubCategory.name.trim().toLowerCase()
//                 );

//                 if (subService?._id) {
//                     try {
//                         const response = await axios.get(`${baseURL}subService/getSubServicesById/${subService._id}`);
//                         if (response.data?.serviceSubCategoryData) {
//                             window.dispatchEvent(new CustomEvent('selectSubCategory', {
//                                 detail: { ...response.data.serviceSubCategoryData, serviceName: service.name, serviceId: service._id }
//                             }));
//                         }
//                     } catch (err) {
//                         console.error(err);
//                     }
//                 } else {
//                     window.dispatchEvent(new CustomEvent('selectSubCategory', {
//                         detail: { ...firstSubCategory, serviceName: service.name, serviceId: service._id }
//                     }));
//                 }
//             }
//         }
//     };

//     return (
//         <div className="md:mt-20 w-full h-full text-white relative mt-12 bg-black pb-2">
//             {/* Banner */}
//             <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 mx-5 md:mx-0 px-5 sm:ml-14 py-5 md:ml-0 bg-[#006AAB] sm:px-4 md:px-12 sm:py-6 sm:w-5/6 md:w-5/6 lg:w-3/4 xl:w-2/3 rounded-xl md:py-8 flex justify-between gap-4 z-10">
//                 <div>
//                     <h4 className="lg:text-2xl sm:text-xl poppins-regular">Let’s Discuss &</h4>
//                     <h5 className="lg:text-2xl sm:text-xl font-bold md:leading-tight leading-5 md:mt-1.5 poppins-600">
//                         Start Visa Consultations
//                     </h5>
//                 </div>
//                 <Link to='/contact-us'>
//                     <button className="bg-white cursor-pointer hover:scale-104 transition-all duration-200 text-[#006AAB] md:px-10 px-2 lg:text-2xl sm:text-xl rounded-xl whitespace-nowrap text-sm my-2 md:my-0 py-2.5">
//                         Let’s Get Started
//                     </button>
//                 </Link>
//             </div>

//             {/* Background Image */}
//             <img
//                 src={FooterImg}
//                 alt="Footer Background"
//                 className="w-full h-full object-cover hidden xl:block pb-20 xl:pb-0 footerimg"
//             />

//             {/* Footer Content */}
//             <div className="absolute xl:top-28 lg:top-2 left-0 right-0 md:px-8 xl:px-0 xl:container xl:mx-auto bg-[#000000] xl:bg-transparent pt-14 md:pt-28 lg:pt-28 xl:pt-0">
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full xl:justify-between mx-auto xl:gap-4 lg:gap-y-12 md:px-0 py-5 md:py-0">

//                     {/* Logo & Social */}
//                     <div className="flex flex-col md:gap-6 gap-3 xl:w-[22rem] px-5">
//                         <Link to={'/'}>
//                             <img className="md:w-64 w-44" src={Logo} alt="Logo" />
//                         </Link>
//                         <h5 className="poppins-regular md:text-lg text-md md:leading-8">
//                             {staticText.footerText}
//                         </h5>
//                         <div>
//                             <h5 className="poppins-regular md:mb-0 text-xl">Follow Us</h5>
//                             <div className="flex gap-4 mt-2">
//                                 <a href="https://www.facebook.com/share/1B4kbs2Xd9/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
//                                     <TiSocialFacebook className="bg-white text-black p-1 rounded cursor-pointer hover:drop-shadow-[1px_-8px_6px_#006AAB]" size={32} />
//                                 </a>
//                                 <a href="https://www.instagram.com/canadian.dreams.immigration?igsh=MWl1eDJ1NHN3bGpoeg==" target="_blank" rel="noopener noreferrer">
//                                     <AiFillInstagram className="bg-white text-black p-1 rounded cursor-pointer hover:drop-shadow-[1px_-8px_6px_#006AAB]" size={32} />
//                                 </a>
//                                 <TiSocialYoutube className="bg-white text-black p-1 rounded cursor-pointer hover:drop-shadow-[1px_-8px_6px_#006AAB]" size={32} />
//                                 <IoLogoTiktok className="bg-white text-black p-1 rounded cursor-pointer hover:drop-shadow-[1px_-8px_6px_#006AAB]" size={32} />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Quick Links */}
//                     <div className="flex flex-col md:gap-3 mt-4 md:mt-0 px-5 lg:ml-12 xl:ml-0">
//                         <h5 className="poppins-500 text-xl mb-3 mt-5 md:mt-0 lg:mt-0 -ml-1">Quick Links</h5>
//                         <Link to="/about-us"><h5 className="poppins-regular md:text-md text-sm mb-3">About Us</h5></Link>
//                         <Link to="/our-services"><h5 className="poppins-regular md:text-md text-sm mb-3">Our Services</h5></Link>
//                         <Link to="/blog"><h5 className="poppins-regular md:text-md text-sm mb-3">Blog</h5></Link>
//                         <Link to="/"><h5 className="poppins-regular md:text-md text-sm mb-3">Home</h5></Link>
//                         <Link to="/contact-us"><h5 className="poppins-regular md:text-md text-sm mb-3">Contact Us</h5></Link>
//                     </div>

//                     {/* Services (Dynamic Links with scroll + open first sub-service) */}
//                     <div className="flex flex-col md:gap-3 mt-3 md:mt-6 lg:mt-0 px-5">
//                         <h5 className="poppins-500 text-xl mb-2">Services</h5>
//                         {services?.length > 0 ? (
//                             services?.map(service => (
//                                 <h5
//                                     key={service._id}
//                                     className="poppins-regular md:text-md text-sm mb-3 cursor-pointer"
//                                     onClick={() => scrollToService(service.name)}
//                                 >
//                                     {service.name}
//                                 </h5>
//                             ))
//                         ) : (
//                             <p className="text-sm text-gray-400">Loading...</p>
//                         )}
//                     </div>

//                     {/* Contact Info */}
//                     <div className="flex flex-col mt-3 lg:mt-0 px-5">
//                         <h5 className="poppins-500 text-xl mb-5 mt-2 xl:mt-0">Contact Us</h5>
//                         <h5 className="poppins-regular md:text-md text-sm flex items-start -ml-1.5 gap-2">
//                             <IoLocationSharp className="xl:text-3xl text-2xl shrink-0" />
//                             {staticText.contactDetails.address}
//                         </h5>
//                         <h5 className="poppins-regular md:text-lg text-sm mt-5 flex flex-wrap items-start gap-2">
//                             <MdEmail className="xl:text-3xl text-2xl shrink-0" />
//                             <a href={`mailto:${staticText.contactDetails.email}`} className="transition-colors hover:font-bold text-sm break-words max-w-[200px] w-full">
//                                 {staticText.contactDetails.email}
//                             </a>
//                         </h5>

//                         <div className="poppins-regular md:text-md text-sm flex flex-col mt-5 items-start gap-1.5">
//                             <div className="flex items-center gap-3">
//                                 <IoCall className="xl:text-3xl text-2xl shrink-0" />
//                                 <span>Contact Numbers:</span>
//                             </div>
//                             <div className="flex flex-col ml-10 gap-0">
//                                 {staticText.contactDetails.phone.map((number, index) => (
//                                     <a key={index} href={`tel:${number}`} className="transition-colors hover:font-bold">
//                                         {number}
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Bar */}
//                 <div className="border-t border-gray-600 sm:mt-8">
//                     <div className="container mx-auto px-4 text-white py-4 flex items-center flex-col gap-4 md:flex-row justify-between">
//                         <p className="text-sm">ICWTT © 2024. All Rights Reserved.</p>
//                         <div className="flex justify-center gap-4 text-sm">
//                             <Link to="/privacy-policy">Privacy Policy</Link>
//                             <Link to="/terms-and-condition">Terms & Conditions</Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Footer;


import React, { useEffect } from 'react';
import FooterImg from '../assets/images/FooterImg.png';
import Logo from '../assets/images/Logo.png';
import { TiSocialFacebook } from 'react-icons/ti';
import { AiFillInstagram } from 'react-icons/ai';
import { TiSocialYoutube } from 'react-icons/ti';
import { IoLogoTiktok, IoLocationSharp, IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import staticText from '../content/staticData';
import axios from 'axios';

const Footer = ({ services, subServices }) => {
    const baseURL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToService = async (serviceName) => {
        const serviceId = serviceName.toLowerCase().replace(/\s+/g, '-');
        console.log('Footer: Attempting to scroll to service:', serviceName, 'ID:', serviceId);

        if (location.pathname !== '/our-services') {
            console.log('Footer: Navigating to /our-services with state:', { scrollToService: serviceId });
            navigate('/our-services', { state: { scrollToService: serviceId } });
        } else {
            const element = document.getElementById(serviceId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                console.log('Footer: Scrolled to service:', serviceName);
            } else {
                console.error('Footer: Element not found for ID:', serviceId);
            }

            const service = services.find((s) => s.name.toLowerCase() === serviceName.toLowerCase());
            if (service?.subCategories?.length > 0) {
                const firstSubCategory = service.subCategories[0];
                const subService = subServices.find(
                    (sub) => sub.name.trim().toLowerCase() === firstSubCategory.name.trim().toLowerCase()
                );

                if (subService?._id) {
                    try {
                        const response = await axios.get(`${baseURL}subService/getSubServicesById/${subService._id}`);
                        if (response.data?.serviceSubCategoryData) {
                            window.dispatchEvent(
                                new CustomEvent('selectSubCategory', {
                                    detail: { ...response.data.serviceSubCategoryData, serviceName: service.name, serviceId: service._id },
                                })
                            );
                            console.log('Footer: Dispatched selectSubCategory:', response.data.serviceSubCategoryData);
                        }
                    } catch (err) {
                        console.error('Footer: Error fetching subservice:', err);
                    }
                } else {
                    window.dispatchEvent(
                        new CustomEvent('selectSubCategory', {
                            detail: { ...firstSubCategory, serviceName: service.name, serviceId: service._id },
                        })
                    );
                    console.log('Footer: Dispatched selectSubCategory (no API):', firstSubCategory);
                }
            } else {
                console.log('Footer: No subcategories found for service:', serviceName);
            }
        }
    };

    return (
        <div className="md:mt-20 w-full h-full text-white relative mt-12 bg-black pb-2">
            <div className="absolute md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 mx-5 md:mx-0 px-5 sm:ml-14 py-5 md:ml-0 bg-[#006AAB] sm:px-4 md:px-12 sm:py-6 sm:w-5/6 md:w-5/6 lg:w-3/4 xl:w-2/3 rounded-xl md:py-8 flex justify-between gap-4 z-10">
                <div>
                    <h4 className="lg:text-2xl sm:text-xl poppins-regular">Let’s Discuss &</h4>
                    <h5 className="lg:text-2xl sm:text-xl font-bold md:leading-tight leading-5 md:mt-1.5 poppins-600">
                        Start Visa Consultations
                    </h5>
                </div>
                <Link to="/contact-us">
                    <button className="bg-white cursor-pointer hover:scale-104 transition-all duration-200 text-[#006AAB] md:px-10 px-2 lg:text-2xl sm:text-xl rounded-xl whitespace-nowrap text-sm my-2 md:my-0 py-2.5">
                        Let’s Get Started
                    </button>
                </Link>
            </div>

            <img src={FooterImg} alt="Footer Background" className="w-full h-full object-cover hidden xl:block pb-20 xl:pb-0 footerimg" />

            <div className="absolute xl:top-28 lg:top-2 left-0 right-0 md:px-8 xl:px-0 xl:container xl:mx-auto bg-[#000000] xl:bg-transparent pt-14 md:pt-28 lg:pt-28 xl:pt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full xl:justify-between mx-auto xl:gap-4 lg:gap-y-12 md:px-0 py-5 md:py-0">
                    <div className="flex flex-col md:gap-6 gap-3 xl:w-[22rem] px-5">
                        <Link to="/">
                            <img className="md:w-64 w-44" src={Logo} alt="Logo" />
                        </Link>
                        <h5 className="poppins-regular md:text-lg text-md md:leading-8">{staticText.footerText}</h5>
                        <div>
                            <h5 className="poppins-regular md:mb-0 text-xl">Follow Us</h5>
                            <div className="flex gap-4 mt-2">
                                <a href="https://www.facebook.com/share/1B4kbs2Xd9/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                                    <TiSocialFacebook className="bg-white text-black p-1 rounded cursor-pointer hover:drop-shadow-[1px_-8px_6px_#006AAB]" size={32} />
                                </a>
                                <a href="https://www.instagram.com/canadian.dreams.immigration?igsh=MWl1eDJ1NHN3bGpoeg==" target="_blank" rel="noopener noreferrer">
                                    <AiFillInstagram className="bg-white text-black p-1 rounded cursor-pointer hover:drop-shadow-[1px_-8px_6px_#006AAB]" size={32} />
                                </a>
                                {/* <TiSocialYoutube className="bg-white text-black p-1 rounded cursor-pointer hover:drop-shadow-[1px_-8px_6px_#006AAB]" size={32} /> */}
                                <a href="https://www.tiktok.com/@canadiandreams1?_t=ZS-9002oFxqNSq&_r=1" target="_blank" rel="noopener noreferrer">
                                    <IoLogoTiktok className="bg-white text-black p-1 rounded cursor-pointer hover:drop-shadow-[1px_-8px_6px_#006AAB]" size={32} />
                                </a>
                                <a
                                    href="https://share.google/NWvY7FJq2kavn1Yw1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IoLocationSharp
                                        size={28}
                                        className="hover:cursor-pointer hover:drop-shadow-[1px_-8px_6px_#0F08F7]"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:gap-3 mt-4 md:mt-0 px-5 lg:ml-12 xl:ml-0">
                        <h5 className="poppins-500 text-xl mb-3 mt-5 md:mt-0 lg:mt-0 -ml-1">Quick Links</h5>
                        <Link to="/about-us">
                            <h5 className="poppins-regular md:text-md text-sm mb-3">About Us</h5>
                        </Link>
                        <Link to="/our-services">
                            <h5 className="poppins-regular md:text-md text-sm mb-3">Our Services</h5>
                        </Link>
                        <Link to="/blog">
                            <h5 className="poppins-regular md:text-md text-sm mb-3">Blog</h5>
                        </Link>
                        <Link to="/">
                            <h5 className="poppins-regular md:text-md text-sm mb-3">Home</h5>
                        </Link>
                        <Link to="/contact-us">
                            <h5 className="poppins-regular md:text-md text-sm mb-3">Contact Us</h5>
                        </Link>
                    </div>

                    <div className="flex flex-col md:gap-3 mt-3 md:mt-6 lg:mt-0 px-5">
                        <h5 className="poppins-500 text-xl mb-2">Services</h5>
                        {services?.length > 0 ? (
                            services.map((service) => (
                                <h5
                                    key={service._id}
                                    className="poppins-regular md:text-md text-sm mb-3 cursor-pointer"
                                    onClick={() => scrollToService(service.name)}
                                >
                                    {service.name}
                                </h5>
                            ))
                        ) : (
                            <p className="text-sm text-gray-400">Loading...</p>
                        )}
                    </div>

                    <div className="flex flex-col mt-3 lg:mt-0 px-5">
                        <h5 className="poppins-500 text-xl mb-5 mt-2 xl:mt-0">Contact Us</h5>
                        <h5 className="poppins-regular md:text-md text-sm flex items-start -ml-1.5 gap-2">
                            <IoLocationSharp className="xl:text-3xl text-2xl shrink-0" />
                            {staticText.contactDetails.address}
                        </h5>
                        <h5 className="poppins-regular md:text-lg text-sm mt-5 flex flex-wrap items-start gap-2">
                            <MdEmail className="xl:text-3xl text-2xl shrink-0" />
                            <a href={`mailto:${staticText.contactDetails.email}`} className="transition-colors hover:font-bold text-sm break-words max-w-[200px] w-full">
                                {staticText.contactDetails.email}
                            </a>
                        </h5>
                        <div className="poppins-regular md:text-md text-sm flex flex-col mt-5 items-start gap-1.5">
                            <div className="flex items-center gap-3">
                                <IoCall className="xl:text-3xl text-2xl shrink-0" />
                                <span>Contact Numbers:</span>
                            </div>
                            <div className="flex flex-col ml-10 gap-0">
                                {staticText.contactDetails.phone.map((number, index) => (
                                    <a key={index} href={`tel:${number}`} className="transition-colors hover:font-bold">
                                        {number}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

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
