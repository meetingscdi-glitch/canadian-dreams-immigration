// import React, { useEffect, useRef, useState } from 'react'
// import Logo from '../assets/images/Logo.png'
// import { RxHamburgerMenu } from "react-icons/rx";
// import { Link, NavLink } from 'react-router-dom';
// import { IoIosArrowDown } from "react-icons/io";
// import { MdEmail } from "react-icons/md";
// import { IoCall } from "react-icons/io5";
// import { TiSocialFacebook } from "react-icons/ti";
// import { AiFillInstagram } from "react-icons/ai";
// import { IoLogoTiktok } from "react-icons/io5";
// import { IoLocationSharp } from "react-icons/io5";
// import { RxCross1 } from "react-icons/rx";
// import axios from 'axios';



// const Navbar = () => {
//     const baseURL = import.meta.env.VITE_API_URL;
//     const [services, setServices] = useState([]);
//     const [subServices, setSubServices] = useState([]);
//     const [selectedService, setSelectedService] = useState(null);
//     const [selectedSubCategory, setSelectedSubCategory] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const navItemsRef = useRef();
//     const [activeHeading, setActiveHeading] = useState(null);
//     const [activeSubheading, setActiveSubheading] = useState(null);
//     const [hide, setHide] = useState(true);
//     const [Subheading, setSubHeadings] = useState(true);
//     const links = [
//         {
//             id: '#temporary-residence',
//             label: 'Temporary Residence',
//             subheadings: [
//                 { label: 'Study Application' },
//                 { label: 'Visitor Visa' },
//                 { label: 'Super Visa' },
//                 {
//                     label: 'Work Permit',
//                     subheadings: [
//                         'Spouse Open Work Permit Application',
//                         'Post Graduate Work Permit',
//                         'Closed Work Permit Application',
//                         'Bridge Open Work Permit'
//                     ]
//                 }
//             ]
//         },
//         {
//             id: '#permanent-resident',
//             label: 'Permanent Resident',
//             subheadings: [
//                 { label: 'Express Entry' },
//                 { label: 'Provincial Nominee Program' },
//                 { label: 'Spousal Sponsership Inland' },
//                 { label: 'Dependent Child' },
//                 { label: 'Parents And Grandparents Sponsorship Program' }
//             ]
//         },
//         {
//             id: '#citizenship',
//             label: 'Citizenship'
//         },
//         {
//             id: '#other-services',
//             label: 'Specialized Services',
//             subheadings: [
//                 { label: 'NOC Code Service' },
//                 { label: 'Document Preview' },
//                 { label: 'Procedural Fairness Letter' },
//                 { label: 'Temporary Residence Permit' },
//                 { label: 'H&C Applicant' },
//                 { label: 'PR Card Renewal' },
//                 { label: 'GCMS Notes Review' },
//                 { label: 'LMIA Processing' },
//                 { label: 'PRTD Application Service' }
//             ]
//         }
//     ];


//     const toggleButton = () => {
//         setHide(prev => !prev)
//     }
//     const ShowHideSubheadingd = () => {
//         setSubHeadings(prev => !prev)
//     }

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const [servicesRes, subServicesRes] = await Promise.all([
//                     axios.get(`${baseURL}service/getAllServices`),
//                     axios.get(`${baseURL}subService/getAllSubServices`),
//                 ]);

//                 if (servicesRes.data?.response) {
//                     setServices(servicesRes.data.response);

//                     // Set default selected service
//                     const tempResidence = servicesRes.data.response.find(
//                         (s) => s.name?.toLowerCase().includes('temporary residence')
//                     );
//                     const defaultService = tempResidence || servicesRes.data.response[0];
//                     setSelectedService(defaultService);

//                     // Auto-select first subcategory if available
//                     if (defaultService?.subCategories?.length > 0 && subServicesRes.data?.serviceSubCategories) {
//                         const firstSubCategory = defaultService.subCategories[0];
//                         const subService = subServicesRes.data.serviceSubCategories.find(
//                             (sub) => sub.name.trim().toLowerCase() === firstSubCategory.name.trim().toLowerCase()
//                         );

//                         if (subService?._id) {
//                             const response = await axios.get(`${baseURL}subService/getSubServicesById/${subService._id}`);
//                             if (response.data?.serviceSubCategoryData) {
//                                 setSelectedSubCategory(response.data.serviceSubCategoryData);
//                             }
//                         }
//                     }
//                 }

//                 if (subServicesRes.data?.serviceSubCategories) {
//                     setSubServices(subServicesRes.data.serviceSubCategories);
//                 }
//             } catch (error) {
//                 console.error('Error fetching services:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     console.log(subServices, 'subServices');
//     console.log(services, 'services');


//     return (
//         <div >
//             <div className='bg-[#006AAB] hidden lg:block py-4 px-4'>
//                 <div className='container mx-auto flex justify-between items-center text-white md:px-3.5 lg:px-0 lg:pl-5'>
//                     <div className='flex items-center xl:gap-20 lg:gap-10'>
//                         <div className='flex items-center gap-3 lg:-ml-1'>
//                             <MdEmail size={28} />
//                             <a
//                                 href="mailto:Canadiandreamsimmigration@gmail.com"
//                                 className="text-lg poppins-regular transition-colors hover:text-blue-100"
//                             >
//                                 Canadiandreamsimmigration@gmail.com

//                             </a>
//                         </div>

//                         <div className='flex items-center xl:gap-3 gap-1.5 '>
//                             <IoCall size={28} />
//                             <a
//                                 href="tel:+1 (416) 434-3155"
//                                 className="xl:text-lg lg:text-sm poppins-regular transition-colors hover:text-blue-100"
//                             >
//                                 +1 (416) 434-3155,
//                             </a>
//                             <a
//                                 href="tel:+1 (416) 434-3155"
//                                 className="xl:text-lg lg:text-sm poppins-regular transition-colors hover:text-blue-100"
//                             >
//                                 +1 (647) 510-9350,
//                             </a>
//                             <a
//                                 href="tel:+1 (416) 434-3155"
//                                 className="xl:text-lg lg:text-sm poppins-regular transition-colors hover:text-blue-100"
//                             >
//                                 +1 (604) 360-7128
//                             </a>
//                         </div>

//                     </div>
//                     <div className='flex items-center gap-3'>
//                         <a
//                             href="https://www.facebook.com/share/1B4kbs2Xd9/?mibextid=wwXIfr"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="hover:cursor-pointer hover:drop-shadow-[1px_-8px_6px_#0F08F7]"
//                         >
//                             <TiSocialFacebook size={28} />
//                         </a>

//                         <a
//                             href="https://www.instagram.com/canadian.dreams.immigration?igsh=MWl1eDJ1NHN3bGpoeg=="
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="hover:cursor-pointer hover:drop-shadow-[1px_-8px_6px_#0F08F7]"
//                         >
//                             <AiFillInstagram size={28} />
//                         </a>

//                         <div className='hover:cursor-pointer hover:drop-shadow-[1px_-8px_6px_#0F08F7]'><IoLogoTiktok size={28} /></div>
//                         <div className='hover:cursor-pointer hover:drop-shadow-[1px_-8px_6px_#0F08F7]'><IoLocationSharp size={28} /></div>
//                     </div>
//                 </div>
//             </div>
//             {/* NavBarItemsStarting */}
//             <nav >
//                 <div className='lg:flex justify-between  xl:px-0 xl:gap-5 items-center  py-4 container mx-auto relative navbar'>
//                     <div className='flex items-center justify-between'>
//                         <Link to={'/'}>
//                             <img className='md:w-56 w-46 lg:ml-8 xl:ml-4 lg:w-40 xl:w-64 md:ml-10' src={Logo} alt="COMPANY LOGO" />
//                         </Link>
//                         {hide ? <RxHamburgerMenu onClick={toggleButton} size={32} className='text-[#006AAB] lg:hidden md:mr-6 ' /> : <RxCross1 onClick={toggleButton} size={24} className='text-[#006AAB] lg:hidden md:mr-6' />}

//                     </div>
//                     <div
//                         ref={navItemsRef}
//                         className={`overflow-hidden transition-all duration-500 ease-in-out ${hide ? 'max-h-0 lg:max-h-[500px]' : 'max-h-[500px] py-6'
//                             } flex flex-col lg:mr-4 xl:mr-0 lg:flex-row lg:items-center gap-4 xl:gap-5 poppins-regular text-lg md:static absolute right-0 bg-white lg:bg-transparent z-10 w-full md:w-auto px-5 md:px-0 navbaritems centerClas `}
//                     >
//                         <NavLink
//                             to="/"
//                             className={({ isActive }) =>
//                                 `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'} `
//                             }
//                         >
//                             Home
//                         </NavLink>

//                         <NavLink
//                             to="/about-us"
//                             className={({ isActive }) =>
//                                 `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`
//                             }
//                         >
//                             About Us
//                         </NavLink>
//                         <div className="w-fit">
//                             <div className="flex items-center justify-center gap-2 group">
//                                 <NavLink
//                                     to="/our-services"
//                                     className={({ isActive }) =>
//                                         `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`
//                                     }
//                                 >
//                                     Our Services
//                                 </NavLink>

//                                 <IoIosArrowDown
//                                     onClick={(e) => {
//                                         e.stopPropagation();
//                                         ShowHideSubheadingd();
//                                     }}
//                                     className="hidden lg:block cursor-pointer"
//                                 />
//                             </div>


//                             <div className='flex md:hidden lg:block'>
//                                 {!Subheading && (
//                                     <div className="absolute top-14 bg-white rounded shadow-lg flex flex-col p-2 min-w-[200px]">
//                                         {links.map((link, index) => (
//                                             <div key={link.id} className="flex flex-col">
//                                                 <a
//                                                     onClick={() =>
//                                                         setActiveHeading(activeHeading === index ? null : index)
//                                                     }
//                                                     href={link.id}
//                                                     className="text-sm text-gray-700 hover:text-blue-600 py-1 px-2 flex items-center justify-between"
//                                                 >
//                                                     {link.label}
//                                                     {link.subheadings && <IoIosArrowDown className="ml-2" />}
//                                                 </a>

//                                                 {activeHeading === index && link.subheadings && (
//                                                     <div className="ml-4 bg-white rounded text-gray-700 p-2 shadow">
//                                                         {link.subheadings.map((sub, i) => (
//                                                             <div key={i} className="flex flex-col">
//                                                                 <a
//                                                                     onClick={() =>
//                                                                         setActiveSubheading(activeSubheading === i ? null : i)
//                                                                     }
//                                                                     href={`#sub-${i}`}
//                                                                     className="text-sm text-gray-700 hover:text-blue-600 flex items-center justify-between mb-1"
//                                                                 >
//                                                                     {sub.label}
//                                                                     {sub.subheadings && <IoIosArrowDown className="ml-2" />}
//                                                                 </a>

//                                                                 {activeSubheading === i && sub.subheadings && (
//                                                                     <div className="ml-4 bg-gray-50 rounded p-2">
//                                                                         {sub.subheadings.map((nested, j) => (
//                                                                             <a
//                                                                                 key={j}
//                                                                                 href={`#nested-${j}`}
//                                                                                 className="text-sm text-gray-600 hover:text-blue-500 mb-1 block"
//                                                                             >
//                                                                                 {nested}
//                                                                             </a>
//                                                                         ))}
//                                                                     </div>
//                                                                 )}
//                                                             </div>
//                                                         ))}
//                                                     </div>
//                                                 )}
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>


//                         </div>

//                         <NavLink
//                             to="/blog"
//                             className={({ isActive }) =>
//                                 `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`
//                             }
//                         >
//                             Blog
//                         </NavLink>
//                         <NavLink
//                             to="/employer"
//                             className={({ isActive }) =>
//                                 `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`
//                             }
//                         >
//                             Employer
//                         </NavLink>
//                         <NavLink
//                             to="/contact-us"
//                             className={({ isActive }) =>
//                                 `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`
//                             }
//                         >
//                             Contact Us
//                         </NavLink>
//                         <div>
//                             <Link to='/contact-us'>
//                                 <button className='bg-[#F22941] hover:bg-[#da2f42] md:px-2 md:py-2  text-white rounded xl:text-xl text-base xl:py-2 xl:px-4 whitespace-nowrap cursor-pointer'>Book a consultation</button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </nav >
//         </div>
//     )
// }

// export default Navbar


// import React, { useEffect, useRef, useState } from 'react';
// import Logo from '../assets/images/Logo.png';
// import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
// import { Link, NavLink } from 'react-router-dom';
// import { IoIosArrowDown } from 'react-icons/io';
// import { IoCall, IoLocationSharp, IoLogoTiktok } from 'react-icons/io5';
// import { MdEmail } from 'react-icons/md';
// import { TiSocialFacebook } from 'react-icons/ti';
// import { AiFillInstagram } from 'react-icons/ai';
// import axios from 'axios';

// const Navbar = () => {
//     const baseURL = import.meta.env.VITE_API_URL;
//     const [services, setServices] = useState([]);
//     const [subServices, setSubServices] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [hide, setHide] = useState(true);
//     const [showSubheadings, setShowSubheadings] = useState(false);
//     const [activeServiceIndex, setActiveServiceIndex] = useState(null); // Track active service for subservice display
//     const navItemsRef = useRef();
//     const dropdownRef = useRef();

//     const toggleButton = () => setHide((prev) => !prev);
//     const toggleSubheadings = () => {
//         setShowSubheadings((prev) => !prev);
//         console.log('Toggled showSubheadings:', !showSubheadings);
//     };

//     // Fetch services and subservices
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const [servicesRes, subServicesRes] = await Promise.all([
//                     axios.get(`${baseURL}service/getAllServices`),
//                     axios.get(`${baseURL}subService/getAllSubServices`),
//                 ]);

//                 if (servicesRes.data?.response) {
//                     setServices(servicesRes.data.response);
//                     console.log('Services fetched:', servicesRes.data.response);
//                 }
//                 if (subServicesRes.data?.serviceSubCategories) {
//                     setSubServices(subServicesRes.data.serviceSubCategories);
//                     console.log('SubServices fetched:', subServicesRes.data.serviceSubCategories);
//                 }
//             } catch (error) {
//                 console.error('Error fetching services:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     // Close dropdown on outside click
//     useEffect(() => {
//         const handleOutsideClick = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setShowSubheadings(false);
//                 setActiveServiceIndex(null);
//                 console.log('Outside click: Closed dropdown and subservices');
//             }
//         };

//         document.addEventListener('mousedown', handleOutsideClick);
//         return () => {
//             document.removeEventListener('mousedown', handleOutsideClick);
//         };
//     }, []);

//     // Handle service click: Scroll to service and open first subservice
//     const handleServiceClick = (service, index) => {
//         const serviceId = service.name.toLowerCase().replace(/\s+/g, '-');
//         window.dispatchEvent(
//             new CustomEvent('selectService', {
//                 detail: { service, serviceId },
//             })
//         );
//         setShowSubheadings(false);
//         setActiveServiceIndex(null);
//         console.log('Service clicked:', service.name, 'Index:', index);
//     };

//     // Handle subservice click: Scroll to service and select specific subservice
//     const handleSubServiceClick = (subCategory, service) => {
//         const serviceId = service.name.toLowerCase().replace(/\s+/g, '-');
//         window.dispatchEvent(
//             new CustomEvent('selectSubService', {
//                 detail: { subCategory, service, serviceId },
//             })
//         );
//         setShowSubheadings(false);
//         setActiveServiceIndex(null);
//         console.log('Subservice clicked:', subCategory.name, 'Service:', service.name);
//     };

//     // Toggle subservice visibility on service click
//     const toggleSubServices = (index) => {
//         setActiveServiceIndex((prev) => (prev === index ? null : index));
//         console.log('Toggled subservices for index:', index);
//     };

//     // Handle hover to show subservices
//     const handleMouseEnter = (index) => {
//         setActiveServiceIndex(index);
//         console.log('Hovered over service index:', index);
//     };

//     const handleMouseLeave = () => {
//         setActiveServiceIndex(null);
//         console.log('Mouse left service, closed subservices');
//     };

//     return (
//         <div>
//             {/* Top Bar */}
//             <div className="bg-[#006AAB] hidden lg:block py-4 px-4">
//                 <div className="container mx-auto flex justify-between items-center text-white md:px-3.5 lg:px-0 lg:pl-5">
//                     <div className="flex items-center xl:gap-20 lg:gap-10">
//                         <div className="flex items-center gap-3 lg:-ml-1">
//                             <MdEmail size={28} />
//                             <a
//                                 href="mailto:Canadiandreamsimmigration@gmail.com"
//                                 className="text-lg poppins-regular transition-colors hover:text-blue-100"
//                             >
//                                 Canadiandreamsimmigration@gmail.com
//                             </a>
//                         </div>
//                         <div className="flex items-center xl:gap-3 gap-1.5">
//                             <IoCall size={28} />
//                             <a href="tel:+1 (416) 434-3155" className="xl:text-lg lg:text-sm poppins-regular transition-colors hover:text-blue-100">
//                                 +1 (416) 434-3155,
//                             </a>
//                             <a href="tel:+1 (647) 510-9350" className="xl:text-lg lg:text-sm poppins-regular transition-colors hover:text-blue-100">
//                                 +1 (647) 510-9350,
//                             </a>
//                             <a href="tel:+1 (604) 360-7128" className="xl:text-lg lg:text-sm poppins-regular transition-colors hover:text-blue-100">
//                                 +1 (604) 360-7128
//                             </a>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-3">
//                         <a href="https://www.facebook.com/share/1B4kbs2Xd9/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
//                             <TiSocialFacebook size={28} className="hover:cursor-pointer hover:drop-shadow-[1px_-8px_6px_#0F08F7]" />
//                         </a>
//                         <a href="https://www.instagram.com/canadian.dreams.immigration?igsh=MWl1eDJ1NHN3bGpoeg==" target="_blank" rel="noopener noreferrer">
//                             <AiFillInstagram size={28} className="hover:cursor-pointer hover:drop-shadow-[1px_-8px_6px_#0F08F7]" />
//                         </a>
//                         <IoLogoTiktok size={28} className="hover:cursor-pointer hover:drop-shadow-[1px_-8px_6px_#0F08F7]" />
//                         <IoLocationSharp size={28} className="hover:cursor-pointer hover:drop-shadow-[1px_-8px_6px_#0F08F7]" />
//                     </div>
//                 </div>
//             </div>

//             {/* Navbar */}
//             <nav>
//                 <div className="lg:flex justify-between xl:px-0 xl:gap-5 items-center py-4 container mx-auto relative navbar">
//                     <div className="flex items-center justify-between">
//                         <Link to="/">
//                             <img className="md:w-56 w-46 lg:ml-8 xl:ml-4 lg:w-40 xl:w-64 md:ml-10" src={Logo} alt="COMPANY LOGO" />
//                         </Link>
//                         {hide ? (
//                             <RxHamburgerMenu onClick={toggleButton} size={32} className="text-[#006AAB] lg:hidden md:mr-6" />
//                         ) : (
//                             <RxCross1 onClick={toggleButton} size={24} className="text-[#006AAB] lg:hidden md:mr-6" />
//                         )}
//                     </div>
//                     <div
//                         ref={navItemsRef}
//                         className={`overflow-hidden transition-all duration-500 ease-in-out ${hide ? 'max-h-0 lg:max-h-[500px]' : 'max-h-[500px] py-6'
//                             } flex flex-col lg:mr-4 xl:mr-0 lg:flex-row lg:items-center gap-4 xl:gap-5 poppins-regular text-lg md:static absolute right-0 bg-white lg:bg-transparent z-10 w-full md:w-auto px-5 md:px-0 navbaritems centerClas`}
//                     >
//                         <NavLink
//                             to="/"
//                             className={({ isActive }) => `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`}
//                         >
//                             Home
//                         </NavLink>
//                         <NavLink
//                             to="/about-us"
//                             className={({ isActive }) => `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`}
//                         >
//                             About Us
//                         </NavLink>
//                         <div className="w-fit" ref={dropdownRef}>
//                             <div className="flex items-center justify-center gap-2 group">
//                                 <NavLink
//                                     to="/our-services"
//                                     className={({ isActive }) => `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`}
//                                 >
//                                     Our Services
//                                 </NavLink>
//                                 <IoIosArrowDown onClick={toggleSubheadings} className="hidden lg:block cursor-pointer" />
//                             </div>
//                             {showSubheadings && (
//                                 <div className="absolute top-14 bg-white rounded shadow-lg flex flex-col p-2 min-w-[200px] z-20">
//                                     {services.map((service, index) => (
//                                         <div
//                                             key={service._id || index}
//                                             className="flex flex-col"
//                                             onMouseEnter={() => handleMouseEnter(index)}
//                                             onMouseLeave={handleMouseLeave}
//                                         >
//                                             <div
//                                                 className="text-sm text-gray-700 hover:text-blue-600 py-1 px-2 flex items-center justify-between cursor-pointer"
//                                                 onClick={() => {
//                                                     toggleSubServices(index);
//                                                     handleServiceClick(service, index);
//                                                 }}
//                                             >
//                                                 {service.name}
//                                                 {service.subCategories?.length > 0 && <IoIosArrowDown className="ml-2" />}
//                                             </div>
//                                             {activeServiceIndex === index && service.subCategories?.length > 0 && (
//                                                 <div className="ml-4 bg-white rounded text-gray-700 p-2 shadow">
//                                                     {service.subCategories.map((sub, i) => (
//                                                         <div
//                                                             key={i}
//                                                             onClick={() => handleSubServiceClick(sub, service)}
//                                                             className="text-sm text-gray-700 hover:text-blue-600 py-1 px-2 cursor-pointer"
//                                                         >
//                                                             {sub.name}
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             )}
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                         <NavLink
//                             to="/blog"
//                             className={({ isActive }) => `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`}
//                         >
//                             Blog
//                         </NavLink>
//                         <NavLink
//                             to="/employer"
//                             className={({ isActive }) => `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`}
//                         >
//                             Employer
//                         </NavLink>
//                         <NavLink
//                             to="/contact-us"
//                             className={({ isActive }) => `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`}
//                         >
//                             Contact Us
//                         </NavLink>
//                         <div>
//                             <Link to="/contact-us">
//                                 <button className="bg-[#F22941] hover:bg-[#da2f42] md:px-2 md:py-2 text-white rounded xl:text-xl text-base xl:py-2 xl:px-4 whitespace-nowrap cursor-pointer">
//                                     Book a consultation
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default Navbar;


// import React, { useEffect, useRef, useState } from 'react';
// import Logo from '../assets/images/Logo.png';
// import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { IoIosArrowDown } from 'react-icons/io';
// import { IoCall, IoLocationSharp, IoLogoTiktok } from 'react-icons/io5';
// import { MdEmail } from 'react-icons/md';
// import { TiSocialFacebook } from 'react-icons/ti';
// import { AiFillInstagram } from 'react-icons/ai';
// import axios from 'axios';

// const Navbar = ({ services, subServices }) => {

//     const [loading, setLoading] = useState(true);
//     const [hide, setHide] = useState(true);
//     const [showSubheadings, setShowSubheadings] = useState(false);
//     const [activeServiceIndex, setActiveServiceIndex] = useState(null);
//     const navItemsRef = useRef();
//     const dropdownRef = useRef();

//     const toggleButton = () => setHide((prev) => !prev);
//     const toggleSubheadings = () => {
//         setShowSubheadings((prev) => !prev);
//         console.log('Toggled showSubheadings:', !showSubheadings);
//     };

//     useEffect(() => {
//         const handleOutsideClick = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setShowSubheadings(false);
//                 setActiveServiceIndex(null);
//                 console.log('Outside click: Closed dropdown and subservices');
//             }
//         };

//         document.addEventListener('mousedown', handleOutsideClick);
//         return () => {
//             document.removeEventListener('mousedown', handleOutsideClick);
//         };
//     }, []);

//     const handleServiceClick = (service, index) => {
//         const serviceId = service.name.toLowerCase().replace(/\s+/g, '-');
//         window.dispatchEvent(
//             new CustomEvent('selectService', {
//                 detail: { service, serviceId },
//             })
//         );
//         setShowSubheadings(false);
//         setActiveServiceIndex(null);
//         console.log('Service clicked:', service.name, 'Index:', index);
//     }; const navigate = useNavigate();

//     const handleSubServiceClick = (subCategory, service) => {
//         console.log("subCategory passed:", subCategory);

//         // Find the full object with _id from subServices
//         const fullSubService = subServices.find(
//             (s) => s.name.trim().toLowerCase() === subCategory.name.trim().toLowerCase()
//         );

//         console.log("Matched fullSubService:", fullSubService);

//         if (!fullSubService?._id) {
//             console.warn("No matching subService found with _id for:", subCategory.name);
//             return;
//         }

//         setShowSubheadings(false);
//         setActiveServiceIndex(null);

//         navigate(`/services/${fullSubService._id}`);
//     };


//     return (
//         <div>
//             <div className="bg-[#006AAB] hidden lg:block py-4 px-4">
//                 <div className="container mx-auto flex justify-between items-center text-white md:px-3.5 lg:px-0 lg:pl-5">
//                     <div className="flex items-center xl:gap-20 lg:gap-10">
//                         <div className="flex items-center gap-3 lg:-ml-1">
//                             <MdEmail size={28} />
//                             <a href="mailto:Canadiandreamsimmigration@gmail.com" className="text-lg poppins-regular transition-colors hover:text-blue-100">
//                                 Canadiandreamsimmigration@gmail.com
//                             </a>
//                         </div>
//                         <div className="flex items-center xl:gap-3 gap-1.5">
//                             <IoCall size={28} />
//                             <a href="tel:+1 (416) 434-3155" className="xl:text-lg lg:text-sm poppins-regular transition-colors hover:text-blue-100">
//                                 +1 (416) 434-3155,
//                             </a>
//                             <a href="tel:+1 (647) 510-9350" className="xl:text-lg lg:text-sm poppins-regular transition-colors hover:text-blue-100">
//                                 +1 (647) 510-9350,
//                             </a>
//                             <a href="tel:+1 (604) 360-7128" className="xl:text-lg lg:text-sm poppins-regular transition-colors hover:text-blue-100">
//                                 +1 (604) 360-7128
//                             </a>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-3">
//                         <a href="https://www.facebook.com/share/1B4kbs2Xd9/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
//                             <TiSocialFacebook size={28} className="hover:cursor-pointer hover:drop-shadow-[1px_-8px_6px_#0F08F7]" />
//                         </a>
//                         <a href="https://www.instagram.com/canadian.dreams.immigration?igsh=MWl1eDJ1NHN3bGpoeg==" target="_blank" rel="noopener noreferrer">
//                             <AiFillInstagram size={28} className="hover:cursor-pointer hover:drop-shadow-[1px_-8px_6px_#0F08F7]" />
//                         </a>
//                         <a href="https://www.tiktok.com/@canadiandreams1?_t=ZS-9002oFxqNSq&_r=1" target="_blank" rel="noopener noreferrer">
//                             <IoLogoTiktok size={28} className="hover:cursor-pointer hover:drop-shadow-[1px_-8px_6px_#0F08F7]" />
//                         </a>
//                         <a
//                             href="https://share.google/NWvY7FJq2kavn1Yw1"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <IoLocationSharp
//                                 size={28}
//                                 className="hover:cursor-pointer hover:drop-shadow-[1px_-8px_6px_#0F08F7]"
//                             />
//                         </a>
//                     </div>
//                 </div>
//             </div>

//             <nav>
//                 <div className="lg:flex justify-between xl:px-0 xl:gap-5 items-center py-4 container mx-auto relative navbar">
//                     <div className="flex items-center justify-between">
//                         <Link to="/">
//                             <img className="md:w-56 w-46 lg:ml-8 xl:ml-4 lg:w-40 xl:w-64 md:ml-10" src={Logo} alt="COMPANY LOGO" />
//                         </Link>
//                         {hide ? (
//                             <RxHamburgerMenu onClick={toggleButton} size={32} className="text-[#006AAB] lg:hidden md:mr-6" />
//                         ) : (
//                             <RxCross1 onClick={toggleButton} size={24} className="text-[#006AAB] lg:hidden md:mr-6" />
//                         )}
//                     </div>
//                     <div
//                         ref={navItemsRef}
//                         className={`overflow-hidden transition-all duration-500 ease-in-out ${hide ? 'max-h-0 lg:max-h-[500px]' : 'max-h-[500px] py-6'
//                             } flex flex-col lg:mr-4 xl:mr-0 lg:flex-row lg:items-center gap-4 xl:gap-5 poppins-regular text-lg md:static absolute right-0 bg-white lg:bg-transparent z-10 w-full md:w-auto px-5 md:px-0 navbaritems centerClas`}
//                     >
//                         <NavLink
//                             to="/"
//                             className={({ isActive }) => `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`}
//                         >
//                             Home
//                         </NavLink>
//                         <NavLink
//                             to="/about-us"
//                             className={({ isActive }) => `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`}
//                         >
//                             About Us
//                         </NavLink>
//                         <div className="w-fit" ref={dropdownRef}>
//                             <div className="flex items-center justify-center gap-2 group">
//                                 <NavLink
//                                     to="/our-services"
//                                     className={({ isActive }) => `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`}
//                                 >
//                                     Our Services
//                                 </NavLink>
//                                 <IoIosArrowDown onClick={toggleSubheadings} className="hidden lg:block cursor-pointer" />
//                             </div>
//                             {showSubheadings && (
//                                 <div className="absolute top-14 bg-white rounded shadow-lg flex flex-col p-2 min-w-[200px] z-20">
//                                     {services.map((service, index) => (
//                                         <div
//                                             key={service._id || index}
//                                             className="flex flex-col"
//                                             onMouseEnter={() => {
//                                                 setActiveServiceIndex(index);
//                                                 console.log('Hovered over service:', service.name);
//                                             }}
//                                             onMouseLeave={() => {
//                                                 setActiveServiceIndex(null);
//                                                 console.log('Mouse left service:', service.name);
//                                             }}
//                                         >
//                                             <div
//                                                 className="text-sm text-gray-700 hover:text-blue-600 py-1 px-2 flex items-center justify-between cursor-pointer"
//                                                 onClick={() => handleServiceClick(service, index)}
//                                             >
//                                                 {service.name}
//                                                 {service.subCategories?.length > 0 && <IoIosArrowDown className="ml-2" />}
//                                             </div>
//                                             {activeServiceIndex === index && service.subCategories?.length > 0 && (
//                                                 <div className="ml-4 bg-white rounded text-gray-700 p-2 shadow">
//                                                     {service.subCategories.map((sub, i) => (
//                                                         <div
//                                                             key={i}
//                                                             onClick={() => handleSubServiceClick(sub, service)}
//                                                             className="text-sm text-gray-700 hover:text-blue-600 py-1 px-2 cursor-pointer"
//                                                         >
//                                                             {sub.name}
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             )}
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                         <NavLink
//                             to="/blog"
//                             className={({ isActive }) => `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`}
//                         >
//                             Blog
//                         </NavLink>
//                         <NavLink
//                             to="/employer"
//                             className={({ isActive }) => `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`}
//                         >
//                             Employer
//                         </NavLink>
//                         <NavLink
//                             to="/contact-us"
//                             className={({ isActive }) => `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`}
//                         >
//                             Contact Us
//                         </NavLink>
//                         <div>
//                             <Link to="/contact-us">
//                                 <button className="bg-[#F22941] hover:bg-[#da2f42] md:px-2 md:py-2 text-white rounded xl:text-xl text-base xl:py-2 xl:px-4 whitespace-nowrap cursor-pointer">
//                                     Book a consultation
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default Navbar;


import React, { useEffect, useRef, useState } from 'react';
import Logo from '../assets/images/Logo.png';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { IoCall, IoLocationSharp, IoLogoTiktok } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { TiSocialFacebook } from 'react-icons/ti';
import { AiFillInstagram } from 'react-icons/ai';

const Navbar = ({ services, subServices }) => {
    const [hide, setHide] = useState(true);
    const [showSubheadings, setShowSubheadings] = useState(false);
    const [activeServiceIndex, setActiveServiceIndex] = useState(null);
    const navItemsRef = useRef();
    const dropdownRef = useRef();
    const navigate = useNavigate();

    const toggleButton = () => setHide((prev) => !prev);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowSubheadings(false);
                setActiveServiceIndex(null);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleServiceClick = (service, index) => {
        setActiveServiceIndex(null);
    };

    const handleSubServiceClick = (subCategory, service) => {
        const fullSubService = subServices.find(
            (s) => s.name.trim().toLowerCase() === subCategory.name.trim().toLowerCase()
        );
        if (!fullSubService?._id) return;
        setShowSubheadings(false);
        setActiveServiceIndex(null);
        navigate(`/services/${fullSubService._id}`);
    };

    return (
        <div>
            {/* Top Bar */}
            {/* Moblile Bottom Blue Section */}
            <div className="flex items-center justify-between   bg-[#006AAB] py-3.5 text-white lg:hidden">
                <div className='container mx-auto px-3 md:px-10'>
                    <div className="flex items-center xl:gap-3 gap-1.5">
                        <IoCall className='text-[16px] sm:text-[28px]' />
                        <a href="tel:+14164343155" className="text-sm sm:text-base xl:text-lg lg:text-sm poppins-regular hover:text-blue-100 transition-colors">
                            +1 (416) 434-3155,
                        </a>
                        <a href="tel:+16475109350" className="text-sm sm:text-base xl:text-lg lg:text-sm poppins-regular hover:text-blue-100 transition-colors">
                            +1 (647) 510-9350,
                        </a>
                        <a href="tel:+16043607128" className="text-sm sm:text-base xl:text-lg lg:text-sm poppins-regular hover:text-blue-100 transition-colors">
                            +1 (604) 360-7128
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-[#006AAB] hidden lg:block py-4 px-4">
                <div className="container mx-auto flex justify-between items-center text-white md:px-3.5 lg:px-0 lg:pl-5">
                    <div className="flex items-center  xl:gap-20 lg:gap-10">
                        <div className="flex items-center gap-3 lg:-ml-1">
                            <MdEmail size={28} />
                            <a href="mailto:Canadiandreamsimmigration@gmail.com" className="text-lg poppins-regular hover:text-blue-100 transition-colors">
                                Canadiandreamsimmigration@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center xl:gap-3 gap-1.5">
                        <IoCall size={28} />
                        <a href="tel:+14164343155" className="xl:text-lg lg:text-sm poppins-regular hover:text-blue-100 transition-colors">
                            +1 (416) 434-3155,
                        </a>
                        <a href="tel:+16475109350" className="xl:text-lg lg:text-sm poppins-regular hover:text-blue-100 transition-colors">
                            +1 (647) 510-9350,
                        </a>
                        <a href="tel:+16043607128" className="xl:text-lg lg:text-sm poppins-regular hover:text-blue-100 transition-colors">
                            +1 (604) 360-7128
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <a href="https://www.facebook.com/share/1M6rNDDtyZ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                            <TiSocialFacebook size={28} className="hover:drop-shadow-[1px_-8px_6px_#0F08F7]" />
                        </a>
                        <a href="https://www.instagram.com/canadian.dreams.immigration?igsh=Zm5zcXR0dTNvdTJu" target="_blank" rel="noopener noreferrer">
                            <AiFillInstagram size={28} className="hover:drop-shadow-[1px_-8px_6px_#0F08F7]" />
                        </a>
                        <a href="https://www.tiktok.com/@canadiandreams1?_t=ZS-9002oFxqNSq&_r=1" target="_blank" rel="noopener noreferrer">
                            <IoLogoTiktok size={28} className="hover:drop-shadow-[1px_-8px_6px_#0F08F7]" />
                        </a>
                        <a href="https://maps.app.goo.gl/6urHVPQhfNLVmSoV6" target="_blank" rel="noopener noreferrer">
                            <IoLocationSharp size={28} className="hover:drop-shadow-[1px_-8px_6px_#0F08F7]" />
                        </a>
                    </div>
                </div>
            </div>
            {/* Navbar */}
            <nav>
                <div className="lg:flex justify-between xl:px-0 xl:gap-5 items-center py-4 container mx-auto relative navbar">
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <img className="md:w-56 w-46 lg:ml-8 xl:ml-4 lg:w-40 xl:w-64 md:ml-10" src={Logo} alt="COMPANY LOGO" />
                        </Link>
                        <div className="flex items-center gap-3 lg:hidden">
                            <a
                                href="https://www.facebook.com/share/1M6rNDDtyZ/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <TiSocialFacebook className="text-[#006AAB] text-[24px] md:text-[28px]" />
                            </a>
                            <a
                                href="https://www.instagram.com/canadian.dreams.immigration?igsh=Zm5zcXR0dTNvdTJu"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillInstagram className="text-[#006AAB] text-[24px] md:text-[28px]" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@canadiandreams1?_t=ZS-9002oFxqNSq&_r=1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IoLogoTiktok className="text-[#006AAB] text-[24px] md:text-[28px]" />
                            </a>
                            <a
                                href="https://maps.app.goo.gl/6urHVPQhfNLVmSoV6"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IoLocationSharp className="text-[#006AAB] text-[24px] md:text-[28px]" />
                            </a>
                        </div>

                        {hide ? (
                            <RxHamburgerMenu onClick={toggleButton} size={32} className="text-[#006AAB] lg:hidden md:mr-6" />
                        ) : (
                            <RxCross1 onClick={toggleButton} size={32} className="text-[#006AAB] lg:hidden md:mr-6" />
                        )}
                    </div>

                    <div
                        ref={navItemsRef}
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${hide ? 'max-h-0 lg:max-h-[500px]' : 'max-h-[1000px] py-6'
                            } flex flex-col lg:mr-4 xl:mr-0 lg:flex-row lg:items-center gap-4 xl:gap-5 poppins-regular text-lg md:static absolute right-0 bg-white lg:bg-transparent z-10 w-full md:w-auto px-5 md:px-0 navbaritems centerClas`}
                    >
                        <NavLink to="/" className={({ isActive }) => `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`}>
                            Home
                        </NavLink>
                        <NavLink to="/about-us" className={({ isActive }) => `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`}>
                            About Us
                        </NavLink>

                        {/* Our Services Dropdown */}
                        <div className="w-fit" ref={dropdownRef}>
                            <div
                                className="flex items-center justify-between cursor-pointer py-2 px-2 lg:px-0"

                            >
                                <NavLink to={'/our-services'} className={({ isActive }) => `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`}>Our Services</NavLink>
                                <IoIosArrowDown className={`ml-2 transform transition-transform duration-200 ${showSubheadings ? 'rotate-180' : ''}`} onClick={() => setShowSubheadings(prev => !prev)} />
                            </div>

                            {showSubheadings && (
                                <div
                                    className="flex flex-col lg:absolute lg:top-14 bg-white lg:shadow-lg lg:rounded p-2 z-20 w-full lg:w-auto"
                                    style={{ border: "1px solid #ddd" }}
                                >
                                    {services.map((service, index) => (
                                        <div key={service._id || index} className="flex flex-col">
                                            <div
                                                className="flex items-center justify-between text-gray-700 hover:text-[#006AAB] py-1 px-2 cursor-pointer"
                                                onClick={() =>
                                                    setActiveServiceIndex(prev => (prev === index ? null : index))
                                                }
                                            >
                                                {service.name}
                                                {service.subCategories?.length > 0 && <IoIosArrowDown className={`ml-2 transform transition-transform duration-200 ${activeServiceIndex === index ? 'rotate-180' : ''}`} />}
                                            </div>
                                            {activeServiceIndex === index && service.subCategories?.length > 0 && (
                                                <div className="ml-4 flex flex-col bg-gray-50 rounded p-2">
                                                    {service.subCategories.map((sub, i) => (
                                                        <div
                                                            key={i}
                                                            onClick={() => handleSubServiceClick(sub, service)}
                                                            className="text-sm text-gray-700 hover:text-[#006AAB] py-1 px-2 cursor-pointer"
                                                        >
                                                            {sub.name}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <NavLink to="/blog" className={({ isActive }) => `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`}>
                            Blog
                        </NavLink>
                        <NavLink to="/employer" className={({ isActive }) => `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`}>
                            Employer
                        </NavLink>
                        <NavLink to="/contact-us" className={({ isActive }) => `hover:text-[#006AAB] ${isActive ? 'text-[#006AAB] font-semibold' : 'text-black'}`}>
                            Contact Us
                        </NavLink>

                        <div>
                            <a
                                href="https://wa.me/14164343155?text=Hello ! How can we help you today. Please leave us a detailed message and one of our team members will get back to you. Thanks"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="bg-[#F22941] hover:bg-[#da2f42] md:px-2 md:py-2 text-white rounded xl:text-xl text-base xl:py-2 xl:px-4 whitespace-nowrap cursor-pointer">
                                    Book a consultation
                                </button>
                            </a>

                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;
