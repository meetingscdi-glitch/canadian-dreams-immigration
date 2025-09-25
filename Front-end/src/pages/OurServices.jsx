// // import React, { useState, useEffect } from 'react';
// // import Navbar from '../components/Navbar';
// // import SectionWithImage from '../components/SectionWithImage';
// // import Testimonial from '../components/Testimonial';
// // import Footer from '../components/Footer';
// // import FadeInOnScroll from './FadeInOnScroll';
// // import axios from 'axios';
// // import { GoArrowUpRight } from 'react-icons/go';
// // import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
// // import { RiMenu4Line } from 'react-icons/ri';

// // const OurServices = () => {
// //   const [togglePannel, setTogglePannel] = useState(false);
// //   const [services, setServices] = useState([]);
// //   const [subServices, setSubServices] = useState([]);
// //   const [selectedService, setSelectedService] = useState(null);
// //   const [selectedSubCategory, setSelectedSubCategory] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   const baseURL = import.meta.env.VITE_API_URL;
// //   console.log(subServices, 'subServices');

// //   const hideShowHandler = (event) => {
// //     event.stopPropagation();
// //     setTogglePannel((prev) => !prev);
// //   };

// //   // Fetch all services & subServices on mount
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const [servicesRes, subServicesRes] = await Promise.all([
// //           axios.get(`${baseURL}service/getAllServices`),
// //           axios.get(`${baseURL}subService/getAllSubServices`),
// //         ]);

// //         if (servicesRes.data?.response) {
// //           setServices(servicesRes.data.response);

// //           // Set default selected service
// //           const tempResidence = servicesRes.data.response.find(
// //             (s) => s.name?.toLowerCase().includes('temporary residence')
// //           );
// //           const defaultService = tempResidence || servicesRes.data.response[0];
// //           setSelectedService(defaultService);

// //           // Auto-select first subcategory if available
// //           if (defaultService?.subCategories?.length > 0 && subServicesRes.data?.serviceSubCategories) {
// //             const firstSubCategory = defaultService.subCategories[0];
// //             const subService = subServicesRes.data.serviceSubCategories.find(
// //               (sub) => sub.name.trim().toLowerCase() === firstSubCategory.name.trim().toLowerCase()
// //             );

// //             if (subService?._id) {
// //               const response = await axios.get(`${baseURL}subService/getSubServicesById/${subService._id}`);
// //               if (response.data?.serviceSubCategoryData) {
// //                 setSelectedSubCategory(response.data.serviceSubCategoryData);
// //               }
// //             }
// //           }
// //         }

// //         if (subServicesRes.data?.serviceSubCategories) {
// //           setSubServices(subServicesRes.data.serviceSubCategories);
// //         }
// //       } catch (error) {
// //         console.error('Error fetching services:', error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   // Fetch service by ID
// //   const fetchServiceById = async (id) => {
// //     try {
// //       const response = await axios.get(`${baseURL}service/getServicesById/${id}`);
// //       if (response.data?.response) {
// //         setSelectedService(response.data.response);
// //       }
// //     } catch (error) {
// //       console.error('Error fetching service by ID:', error);
// //     }
// //   };

// //   // Handle service click
// //   const handleServiceClick = (service) => {
// //     setSelectedService(service);
// //     setSelectedSubCategory(null);
// //     fetchServiceById(service._id);
// //   };

// //   // Handle subcategory click
// //   const handleSubCategoryClick = async (subCategory) => {
// //     const subService = subServices.find(
// //       (sub) => sub.name.trim().toLowerCase() === subCategory.name.trim().toLowerCase()
// //     );

// //     if (subService?._id) {
// //       try {
// //         const response = await axios.get(`${baseURL}subService/getSubServicesById/${subService._id}`);
// //         if (response.data?.serviceSubCategoryData) {
// //           setSelectedSubCategory(response.data.serviceSubCategoryData);
// //         }
// //       } catch (error) {
// //         console.error('Error fetching sub-service:', error);
// //         setSelectedSubCategory(subCategory);
// //       }
// //     } else {
// //       setSelectedSubCategory(subCategory);
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="flex justify-center items-center min-h-screen">
// //         <div className="text-xl">Loading services...</div>
// //       </div>
// //     );
// //   }
// //   const numberToWord = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];

// //   return (
// //     <div>
// // {/* Mobile Sidebar */}
// // <div
// //   className={`w-5/6 h-screen fixed top-0 left-0 bg-white z-[999] shadow-xl overflow-y-auto py-10 px-3 transform transition-transform duration-300 ease-in-out ${togglePannel ? 'translate-x-0' : '-translate-x-full'
// //     } lg:hidden`}
// // >
// //   <div className="flex flex-col">
// //     {services.map((service, index) => (
// //       <div
// //         key={service._id || index}
// //         className={`bg-[#006AAB] text-white px-4 py-5 transition-colors mb-2 ${selectedService?._id === service._id ? 'bg-[#005a94]' : ''
// //           }`}
// //       >
// //         <h1 className="text-2xl">{service.name}</h1>
// //         {service?.subCategories?.length > 0 ? (
// //           <div className="mt-6">
// //             {service.subCategories.map((subCat, subIndex) => (
// //               <h3
// //                 key={subIndex}
// //                 className="flex items-center justify-between text-md mt-4 cursor-pointer hover:text-gray-200"
// //                 onClick={() => handleSubCategoryClick(subCat)}
// //               >
// //                 {subCat.name} <GoArrowUpRight size={20} />
// //               </h3>
// //             ))}
// //           </div>
// //         ) : (
// //           <div
// //             className="flex items-center justify-between text-md mt-6 cursor-pointer hover:bg-[#005a94]"
// //             onClick={() => handleServiceClick(service)}
// //           >
// //             <span>View Details</span>
// //             <GoArrowUpRight size={26} />
// //           </div>
// //         )}
// //       </div>
// //     ))}
// //   </div>
// // </div>

// //       <Navbar />

// //       <FadeInOnScroll>
// //         <SectionWithImage />
// //       </FadeInOnScroll>

// //       <FadeInOnScroll>
// //         <div className="container mx-auto px-4 md:px-0 relative">
// //           <div className="flex justify-between gap-16 md:px-8 xl:px-24 py-10 md:mt-10">
// //             {/* Desktop Sidebar */}
// //             <div className="lg:flex flex-col gap-4 w-1/3 hidden">
// //               {services.map((service, index) => (
// //                 <div key={service._id || index} className="mb-2">
// //                   <div
// //                     className={`bg-[#006AAB] text-white px-10 py-10 transition-colors ${selectedService?._id === service._id ? 'bg-[#005a94] ring-2 ring-white' : ''
// //                       }`}
// //                   >
// //                     <h1 className="text-xl">{service.name}</h1>
// //                     {service.subCategories?.length > 0 ? (
// //                       <div className="mt-8">
// //                         {service.subCategories.map((subCat, subIndex) => (
// //                           <h3
// //                             key={subIndex}
// //                             className="flex items-center justify-between text-sm mt-4 cursor-pointer hover:text-gray-200"
// //                             onClick={() => handleSubCategoryClick(subCat)}
// //                           >
// //                             {subCat.name} <GoArrowUpRight size={20} />
// //                           </h3>
// //                         ))}
// //                       </div>
// //                     ) : (
// //                       <div
// //                         className="flex items-center justify-between text-sm mt-12 cursor-pointer hover:bg-[#005a94]"
// //                         onClick={() => handleServiceClick(service)}
// //                       >
// //                         <span>View Details</span>
// //                         <GoArrowUpRight size={26} />
// //                       </div>
// //                     )}
// //                     {service.price && <div className="mt-4 text-sm opacity-90">Price: ${service.price}</div>}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Service Content */}
// //             <div
// //               className="lg:w-2/3 flex flex-col gap-y-12 lg:gap-y-0 md:gap-y-6 mt-0 relative"
// //               onClick={() => setTogglePannel(false)}
// //             >
// //               {/* Mobile Burger */}
// //               <div className="absolute -top-8 md:-top-12 right-0">
// //                 <RiMenu4Line className="text-3xl text-[#006AAB] lg:hidden" onClick={hideShowHandler} />
// //               </div>

// //               <div>
// //                 {selectedSubCategory ? (
// //                   <div className="md:mt-4 lg:mt-8 flex flex-col gap-6">
// //                     {selectedSubCategory.image && (
// //                       <img
// //                         src={selectedSubCategory.image}
// //                         alt={selectedSubCategory.name}
// //                         className="w-full rounded-lg"
// //                         style={{ marginTop: '-32px' }}
// //                       />
// //                     )}
// //                     <h1 className="md:text-3xl text-2xl border-b md:pb-6 pb-3 border-[#00000040] -mt-2">
// //                       {selectedSubCategory.name}
// //                     </h1>
// //                     {/* // put this above the map (inside the component, before return or before you use it) */}

// //                     {/* // ...then in your JSX, replace the existing map with this: */}
// //                     {[1, 2, 3, 4, 5, 6, 7].map((num) => {
// //                       const word = numberToWord[num - 1];
// //                       const headerKey = `header${word}`;
// //                       const subHeaderKey = `SubHeader${word}`;
// //                       const paragraphKey = `paragraph${word}`;

// //                       const header = selectedSubCategory?.[headerKey];
// //                       const subHeader = selectedSubCategory?.[subHeaderKey];
// //                       const paragraph = selectedSubCategory?.[paragraphKey];

// //                       if (!header) return null;

// //                       return (
// //                         <div key={num} className="mb-6">
// //                           <h4 className="Roboto-500 md:text-2xl text-xl">{header}</h4>

// //                           {subHeader && (
// //                             <h5 className="md:text-lg text-base mt-2">{subHeader}</h5>
// //                           )}

// //                           {paragraph && (
// //                             <div
// //                               className="md:text-base text-sm mt-2"
// //                               dangerouslySetInnerHTML={{ __html: paragraph }}
// //                             />
// //                           )}
// //                         </div>
// //                       );
// //                     })}

// //                   </div>
// //                 ) : (
// //                   selectedService?.description && (
// //                     <div className="md:mt-8 mt-4">
// //                       <h4 className="md:text-xl text-base">{selectedService.description}</h4>
// //                     </div>
// //                   )
// //                 )}

// //                 {selectedService?.price && (
// //                   <div className="mt-12 flex flex-col gap-3">
// //                     <h4 className="Roboto-500 md:text-2xl text-xl">What It Costs</h4>
// //                     <h4 className="md:text-xl text-lg">Pricing That Fits</h4>
// //                     <div className="flex items-start gap-2">
// //                       <IoMdCheckmarkCircleOutline className="text-xl mt-1 shrink-0 text-[#006AAB]" />
// //                       <h4 className="md:text-xl text-base leading-snug">
// //                         Service Fee: ${selectedService.price}
// //                         <br />
// //                         Note: Prices may vary based on case complexity.
// //                         <br />
// //                         Contact us for detailed pricing information.
// //                       </h4>
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </FadeInOnScroll>

// //       <div className="lg:mt-20">
// //         <FadeInOnScroll>
// //           <Testimonial />
// //         </FadeInOnScroll>
// //       </div>

// //       <Footer />
// //     </div>
// //   );
// // };

// // export default OurServices;


// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import SectionWithImage from '../components/SectionWithImage';
// import Testimonial from '../components/Testimonial';
// import Footer from '../components/Footer';
// import FadeInOnScroll from './FadeInOnScroll';
// import axios from 'axios';
// import { GoArrowUpRight } from 'react-icons/go';
// import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
// import { RiMenu4Line } from 'react-icons/ri';
// import { useLocation } from 'react-router-dom';

// const OurServices = () => {
//   const [togglePannel, setTogglePannel] = useState(false);
//   const [services, setServices] = useState([]);
//   const [subServices, setSubServices] = useState([]);
//   const [selectedService, setSelectedService] = useState(null);
//   const [selectedSubCategory, setSelectedSubCategory] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const baseURL = import.meta.env.VITE_API_URL;
//   const location = useLocation();
//   const [expandedServiceIndex, setExpandedServiceIndex] = useState(null);

//   const numberToWord = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];

//   const hideShowHandler = (event) => {
//     event.stopPropagation();
//     setTogglePannel((prev) => !prev);
//   };

//   // Fetch all services & subServices on mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [servicesRes, subServicesRes] = await Promise.all([
//           axios.get(`${baseURL}service/getAllServices`),
//           axios.get(`${baseURL}subService/getAllSubServices`),
//         ]);

//         if (servicesRes.data?.response) {
//           setServices(servicesRes.data.response);
//           if (subServicesRes.data?.serviceSubCategories) setSubServices(subServicesRes.data.serviceSubCategories);

//           // Auto-select first service by default
//           const defaultService = servicesRes.data.response[0];
//           setSelectedService(defaultService);

//           if (defaultService?.subCategories?.length > 0) {
//             const firstSubCategory = defaultService.subCategories[0];
//             const subService = subServicesRes.data.serviceSubCategories.find(
//               (sub) => sub.name.trim().toLowerCase() === firstSubCategory.name.trim().toLowerCase()
//             );

//             if (subService?._id) {
//               const response = await axios.get(`${baseURL}subService/getSubServicesById/${subService._id}`);
//               if (response.data?.serviceSubCategoryData) setSelectedSubCategory(response.data.serviceSubCategoryData);
//             }
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching services:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   // Listen for footer click selecting sub-category
//   useEffect(() => {
//     const handleSelectSubCategory = (e) => {
//       const subCategoryData = e.detail;
//       setSelectedSubCategory(subCategoryData);

//       // Scroll to service section
//       const element = document.getElementById(subCategoryData.serviceName.toLowerCase().replace(/\s+/g, '-'));
//       element?.scrollIntoView({ behavior: 'smooth', block: 'start' });

//       // Set selected service
//       const service = services.find(
//         (s) => s._id === subCategoryData.serviceId
//       );
//       if (service) setSelectedService(service);
//     };

//     window.addEventListener('selectSubCategory', handleSelectSubCategory);
//     return () => window.removeEventListener('selectSubCategory', handleSelectSubCategory);
//   }, [services]);

//   const handleServiceClick = async (service) => {
//     setSelectedService(service);
//     setSelectedSubCategory(null);

//     if (service.subCategories?.length > 0) {
//       const firstSubCategory = service.subCategories[0];
//       const subService = subServices.find(
//         (sub) => sub.name.trim().toLowerCase() === firstSubCategory.name.trim().toLowerCase()
//       );
//       if (subService?._id) {
//         const response = await axios.get(`${baseURL}subService/getSubServicesById/${subService._id}`);
//         if (response.data?.serviceSubCategoryData) setSelectedSubCategory(response.data.serviceSubCategoryData);
//       }
//     }
//   };

//   const handleSubCategoryClick = async (subCategory) => {
//     const subService = subServices.find(
//       (sub) => sub.name.trim().toLowerCase() === subCategory.name.trim().toLowerCase()
//     );

//     if (subService?._id) {
//       try {
//         const response = await axios.get(`${baseURL}subService/getSubServicesById/${subService._id}`);
//         if (response.data?.serviceSubCategoryData) setSelectedSubCategory(response.data.serviceSubCategoryData);
//       } catch (error) {
//         console.error(error);
//         setSelectedSubCategory(subCategory);
//       }
//     } else setSelectedSubCategory(subCategory);
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="text-xl">Loading services...</div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {/* Mobile Sidebar */}
//       <div
//         className={`w-5/6 h-screen fixed top-0 left-0 bg-white z-[999] shadow-xl overflow-y-auto py-10 px-3 transform transition-transform duration-300 ease-in-out ${togglePannel ? 'translate-x-0' : '-translate-x-full'
//           } lg:hidden`}
//       >
//         <div className="flex flex-col">
//           {services.map((service, index) => (
//             <div
//               key={service._id || index}
//               className={`bg-[#006AAB] text-white px-4 py-5 transition-colors mb-2 ${selectedService?._id === service._id ? 'bg-[#005a94]' : ''
//                 }`}
//             >
//               <h1 className="text-2xl">{service.name}</h1>
//               {service?.subCategories?.length > 0 ? (
//                 <div className="mt-6">
//                   {service.subCategories.map((subCat, subIndex) => (
//                     <h3
//                       key={subIndex}
//                       className="flex items-center justify-between text-md mt-4 cursor-pointer hover:text-gray-200"
//                       onClick={() => handleSubCategoryClick(subCat)}
//                     >
//                       {subCat.name} <GoArrowUpRight size={20} />
//                     </h3>
//                   ))}
//                 </div>
//               ) : (
//                 <div
//                   className="flex items-center justify-between text-md mt-6 cursor-pointer hover:bg-[#005a94]"
//                   onClick={() => handleServiceClick(service)}
//                 >
//                   <span>View Details</span>
//                   <GoArrowUpRight size={26} />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       <Navbar />

//       <FadeInOnScroll>
//         <SectionWithImage />
//       </FadeInOnScroll>

//       <FadeInOnScroll>
//         <div className="container mx-auto px-4 md:px-0 relative">
//           <div className="flex justify-between gap-16 md:px-8 xl:px-24 py-10 md:mt-10">
//             {/* Sidebar */}
//             <div className="lg:flex flex-col gap-4 w-1/3 hidden">
//               {services.map((service, index) => (
//                 <div key={service._id || index} id={service.name.toLowerCase().replace(/\s+/g, '-')}>
//                   <div
//                     className={`bg-[#006AAB] text-white px-10 py-10 transition-colors ${selectedService?._id === service._id ? 'bg-[#005a94] ring-2 ring-white' : ''}`}
//                   >
//                     <h1 className="text-xl">{service.name}</h1>
//                     {service.subCategories?.length > 0 && (
//                       <div className="mt-8">
//                         {service.subCategories.map((subCat, subIndex) => (
//                           <h3
//                             key={subIndex}
//                             className="flex items-center justify-between text-sm mt-4 cursor-pointer hover:text-gray-200"
//                             onClick={() => handleSubCategoryClick(subCat)}
//                           >
//                             {subCat.name} <GoArrowUpRight size={20} />
//                           </h3>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Service Content */}
//             <div className="lg:w-2/3 flex flex-col gap-y-12 lg:gap-y-0 md:gap-y-6 mt-0 relative" onClick={() => setTogglePannel(false)}>
//               {selectedSubCategory ? (
//                 <div className="md:mt-4 lg:mt-1 flex flex-col gap-6">
//                   {selectedSubCategory.image && <img src={selectedSubCategory.image} alt={selectedSubCategory.name} className="w-full rounded-lg" />}
//                   <h1 className="md:text-3xl text-2xl border-b md:pb-6 pb-3 border-[#00000040] -mt-2">{selectedSubCategory.name}</h1>

//                   {[1, 2, 3, 4, 5, 6, 7].map((num) => {
//                     const word = numberToWord[num - 1];
//                     const headerKey = `header${word}`;
//                     const subHeaderKey = `SubHeader${word}`;
//                     const paragraphKey = `paragraph${word}`;

//                     const header = selectedSubCategory?.[headerKey];
//                     const subHeader = selectedSubCategory?.[subHeaderKey];
//                     const paragraph = selectedSubCategory?.[paragraphKey];

//                     if (!header) return null;
//                     return (
//                       <div key={num} className="mb-6">
//                         <h4 className="Roboto-500 md:text-2xl text-xl">{header}</h4>
//                         {subHeader && <h5 className="md:text-lg text-base mt-2">{subHeader}</h5>}
//                         {paragraph && <div className="md:text-base text-sm mt-2" dangerouslySetInnerHTML={{ __html: paragraph }} />}
//                       </div>
//                     );
//                   })}
//                 </div>
//               ) : selectedService?.description && (
//                 <div className="md:mt-8 mt-4">
//                   <h4 className="md:text-xl text-base">{selectedService.description}</h4>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </FadeInOnScroll>

//       <FadeInOnScroll>
//         <Testimonial />
//       </FadeInOnScroll>

//       <Footer services={services} subServices={subServices} />
//     </div>
//   );
// };

// export default OurServices;


// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import SectionWithImage from '../components/SectionWithImage';
// import Testimonial from '../components/Testimonial';
// import Footer from '../components/Footer';
// import FadeInOnScroll from './FadeInOnScroll';
// import axios from 'axios';
// import { GoArrowUpRight } from 'react-icons/go';
// import { RiMenu4Line } from 'react-icons/ri';
// import { useLocation } from 'react-router-dom';

// const OurServices = () => {
//   const [togglePannel, setTogglePannel] = useState(false);
//   const [services, setServices] = useState([]);
//   const [subServices, setSubServices] = useState([]);
//   const [selectedService, setSelectedService] = useState(null);
//   const [selectedSubCategory, setSelectedSubCategory] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const baseURL = import.meta.env.VITE_API_URL;
//   const location = useLocation();
//   const numberToWord = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];

//   const hideShowHandler = (event) => {
//     event.stopPropagation();
//     setTogglePannel((prev) => !prev);
//   };

//   // Fetch all services & subServices on mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [servicesRes, subServicesRes] = await Promise.all([
//           axios.get(`${baseURL}service/getAllServices`),
//           axios.get(`${baseURL}subService/getAllSubServices`),
//         ]);

//         if (servicesRes.data?.response) {
//           setServices(servicesRes.data.response);
//           if (subServicesRes.data?.serviceSubCategories) setSubServices(subServicesRes.data.serviceSubCategories);

//           // Handle navigation state from Footer
//           const { scrollToService } = location.state || {};
//           let defaultService = servicesRes.data.response[0];
//           if (scrollToService) {
//             const service = servicesRes.data.response.find(
//               (s) => s.name.toLowerCase().replace(/\s+/g, '-') === scrollToService
//             );
//             if (service) defaultService = service;
//           }

//           setSelectedService(defaultService);

//           if (defaultService?.subCategories?.length > 0) {
//             const firstSubCategory = defaultService.subCategories[0];
//             const subService = subServicesRes.data.serviceSubCategories.find(
//               (sub) => sub.name.trim().toLowerCase() === firstSubCategory.name.trim().toLowerCase()
//             );

//             if (subService?._id) {
//               const response = await axios.get(`${baseURL}subService/getSubServicesById/${subService._id}`);
//               if (response.data?.serviceSubCategoryData) setSelectedSubCategory(response.data.serviceSubCategoryData);
//             }
//           }

//           // Scroll to service if specified in navigation state
//           if (scrollToService) {
//             const element = document.getElementById(scrollToService);
//             element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching services:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [location.state]);

//   // Handle service selection from Navbar
//   useEffect(() => {
//     const handleSelectService = async (e) => {
//       const { service, serviceId } = e.detail;
//       setSelectedService(service);
//       setSelectedSubCategory(null);

//       // Scroll to service
//       const element = document.getElementById(serviceId);
//       element?.scrollIntoView({ behavior: 'smooth', block: 'start' });

//       // Open first subservice if available
//       if (service.subCategories?.length > 0) {
//         const firstSubCategory = service.subCategories[0];
//         const subService = subServices.find(
//           (sub) => sub.name.trim().toLowerCase() === firstSubCategory.name.trim().toLowerCase()
//         );
//         if (subService?._id) {
//           try {
//             const response = await axios.get(`${baseURL}subService/getSubServicesById/${subService._id}`);
//             if (response.data?.serviceSubCategoryData) setSelectedSubCategory(response.data.serviceSubCategoryData);
//           } catch (error) {
//             console.error('Error fetching subservice:', error);
//           }
//         }
//       }
//     };

//     window.addEventListener('selectService', handleSelectService);
//     return () => window.removeEventListener('selectService', handleSelectService);
//   }, [services, subServices]);

//   // Handle subservice selection from Navbar or Sidebar
//   useEffect(() => {
//     const handleSelectSubService = async (e) => {
//       const { subCategory, service, serviceId } = e.detail;
//       setSelectedService(service);

//       // Scroll to service
//       const element = document.getElementById(serviceId);
//       element?.scrollIntoView({ behavior: 'smooth', block: 'start' });

//       // Select the specific subservice
//       const subService = subServices.find(
//         (sub) => sub.name.trim().toLowerCase() === subCategory.name.trim().toLowerCase()
//       );
//       if (subService?._id) {
//         try {
//           const response = await axios.get(`${baseURL}subService/getSubServicesById/${subService._id}`);
//           if (response.data?.serviceSubCategoryData) setSelectedSubCategory(response.data.serviceSubCategoryData);
//         } catch (error) {
//           console.error('Error fetching subservice:', error);
//           setSelectedSubCategory(subCategory);
//         }
//       } else {
//         setSelectedSubCategory(subCategory);
//       }
//     };

//     window.addEventListener('selectSubService', handleSelectSubService);
//     return () => window.removeEventListener('selectSubService', handleSelectSubService);
//   }, [services, subServices]);

//   // Handle subCategory selection from Footer
//   useEffect(() => {
//     const handleSelectSubCategory = (e) => {
//       const subCategoryData = e.detail;
//       setSelectedSubCategory(subCategoryData);

//       // Scroll to service section
//       const element = document.getElementById(subCategoryData.serviceName.toLowerCase().replace(/\s+/g, '-'));
//       element?.scrollIntoView({ behavior: 'smooth', block: 'start' });

//       // Set selected service
//       const service = services.find((s) => s._id === subCategoryData.serviceId);
//       if (service) setSelectedService(service);
//     };

//     window.addEventListener('selectSubCategory', handleSelectSubCategory);
//     return () => window.removeEventListener('selectSubCategory', handleSelectSubCategory);
//   }, [services]);

//   const handleServiceClick = async (service) => {
//     setSelectedService(service);
//     setSelectedSubCategory(null);

//     if (service.subCategories?.length > 0) {
//       const firstSubCategory = service.subCategories[0];
//       const subService = subServices.find(
//         (sub) => sub.name.trim().toLowerCase() === firstSubCategory.name.trim().toLowerCase()
//       );
//       if (subService?._id) {
//         try {
//           const response = await axios.get(`${baseURL}subService/getSubServicesById/${subService._id}`);
//           if (response.data?.serviceSubCategoryData) setSelectedSubCategory(response.data.serviceSubCategoryData);
//         } catch (error) {
//           console.error('Error fetching subservice:', error);
//         }
//       }
//     }
//   };

//   const handleSubCategoryClick = async (subCategory) => {
//     const subService = subServices.find(
//       (sub) => sub.name.trim().toLowerCase() === subCategory.name.trim().toLowerCase()
//     );

//     if (subService?._id) {
//       try {
//         const response = await axios.get(`${baseURL}subService/getSubServicesById/${subService._id}`);
//         if (response.data?.serviceSubCategoryData) setSelectedSubCategory(response.data.serviceSubCategoryData);
//       } catch (error) {
//         console.error('Error fetching subservice:', error);
//         setSelectedSubCategory(subCategory);
//       }
//     } else {
//       setSelectedSubCategory(subCategory);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="text-xl">Loading services...</div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {/* Mobile Sidebar */}
//       <div
//         className={`w-5/6 h-screen fixed top-0 left-0 bg-white z-[999] shadow-xl overflow-y-auto py-10 px-3 transform transition-transform duration-300 ease-in-out ${togglePannel ? 'translate-x-0' : '-translate-x-full'
//           } lg:hidden`}
//       >
//         <div className="flex flex-col">
//           {services.map((service, index) => (
//             <div
//               key={service._id || index}
//               className={`bg-[#006AAB] text-white px-4 py-5 transition-colors mb-2 ${selectedService?._id === service._id ? 'bg-[#005a94]' : ''
//                 }`}
//             >
//               <h1 className="text-2xl" onClick={() => handleServiceClick(service)}>
//                 {service.name}
//               </h1>
//               {service?.subCategories?.length > 0 ? (
//                 <div className="mt-6">
//                   {service.subCategories.map((subCat, subIndex) => (
//                     <h3
//                       key={subIndex}
//                       className="flex items-center justify-between text-md mt-4 cursor-pointer hover:text-gray-200"
//                       onClick={() => handleSubCategoryClick(subCat)}
//                     >
//                       {subCat.name} <GoArrowUpRight size={20} />
//                     </h3>
//                   ))}
//                 </div>
//               ) : (
//                 <div
//                   className="flex items-center justify-between text-md mt-6 cursor-pointer hover:bg-[#005a94]"
//                   onClick={() => handleServiceClick(service)}
//                 >
//                   <span>View Details</span>
//                   <GoArrowUpRight size={26} />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       <Navbar />

//       <FadeInOnScroll>
//         <SectionWithImage />
//       </FadeInOnScroll>

//       <FadeInOnScroll>
//         <div className="container mx-auto px-4 md:px-0 relative">
//           <div className="flex justify-between gap-16 md:px-8 xl:px-24 py-10 md:mt-10">
//             {/* Sidebar */}
//             <div className="lg:flex flex-col gap-4 w-1/3 hidden">
//               {services.map((service, index) => (
//                 <div key={service._id || index} id={service.name.toLowerCase().replace(/\s+/g, '-')}>
//                   <div
//                     className={`bg-[#006AAB] text-white px-10 py-10 transition-colors ${selectedService?._id === service._id ? 'bg-[#005a94] ring-2 ring-white' : ''
//                       }`}
//                     onClick={() => handleServiceClick(service)}
//                   >
//                     <h1 className="text-xl">{service.name}</h1>
//                     {service.subCategories?.length > 0 && (
//                       <div className="mt-8">
//                         {service.subCategories.map((subCat, subIndex) => (
//                           <h3
//                             key={subIndex}
//                             className="flex items-center justify-between text-sm mt-4 cursor-pointer hover:text-gray-200"
//                             onClick={() => handleSubCategoryClick(subCat)}
//                           >
//                             {subCat.name} <GoArrowUpRight size={20} />
//                           </h3>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Service Content */}
//             <div
//               className="lg:w-2/3 flex flex-col gap-y-12 lg:gap-y-0 md:gap-y-6 mt-0 relative"
//               onClick={() => setTogglePannel(false)}
//             >
//               {selectedSubCategory ? (
//                 <div className="md:mt-4 lg:mt-1 flex flex-col gap-6">
//                   {selectedSubCategory.image && (
//                     <img src={selectedSubCategory.image} alt={selectedSubCategory.name} className="w-full rounded-lg" />
//                   )}
//                   <h1 className="md:text-3xl text-2xl border-b md:pb-6 pb-3 border-[#00000040] -mt-2">
//                     {selectedSubCategory.name}
//                   </h1>

//                   {[1, 2, 3, 4, 5, 6, 7].map((num) => {
//                     const word = numberToWord[num - 1];
//                     const headerKey = `header${word}`;
//                     const subHeaderKey = `SubHeader${word}`;
//                     const paragraphKey = `paragraph${word}`;

//                     const header = selectedSubCategory?.[headerKey];
//                     const subHeader = selectedSubCategory?.[subHeaderKey];
//                     const paragraph = selectedSubCategory?.[paragraphKey];

//                     if (!header) return null;
//                     return (
//                       <div key={num} className="mb-6">
//                         <h4 className="Roboto-500 md:text-2xl text-xl">{header}</h4>
//                         {subHeader && <h5 className="md:text-lg text-base mt-2">{subHeader}</h5>}
//                         {paragraph && <div className="md:text-base text-sm mt-2" dangerouslySetInnerHTML={{ __html: paragraph }} />}
//                       </div>
//                     );
//                   })}
//                 </div>
//               ) : (
//                 selectedService?.description && (
//                   <div className="md:mt-8 mt-4">
//                     <h4 className="md:text-xl text-base">{selectedService.description}</h4>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>
//         </div>
//       </FadeInOnScroll>

//       <FadeInOnScroll>
//         <Testimonial />
//       </FadeInOnScroll>

//       <Footer services={services} subServices={subServices} />
//     </div>
//   );
// };

// export default OurServices;


import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SectionWithImage from '../components/SectionWithImage';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import FadeInOnScroll from './FadeInOnScroll';
import axios from 'axios';
import { GoArrowUpRight } from 'react-icons/go';
import { RiMenu4Line } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';

const OurServices = () => {
  const [togglePannel, setTogglePannel] = useState(false);
  const [services, setServices] = useState([]);
  const [subServices, setSubServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseURL = import.meta.env.VITE_API_URL;
  const location = useLocation();
  const numberToWord = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];

  const hideShowHandler = (event) => {
    event.stopPropagation();
    setTogglePannel((prev) => !prev);
  };

  // Fetch services and subservices
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesRes, subServicesRes] = await Promise.all([
          axios.get(`${baseURL}service/getAllServices`),
          axios.get(`${baseURL}subService/getAllSubServices`),
        ]);

        if (servicesRes.data?.response) {
          setServices(servicesRes.data.response);
          console.log('Services fetched:', servicesRes.data.response);
          if (subServicesRes.data?.serviceSubCategories) {
            setSubServices(subServicesRes.data.serviceSubCategories);
            console.log('SubServices fetched:', subServicesRes.data.serviceSubCategories);
          }

          const { scrollToService } = location.state || {};
          let defaultService = servicesRes.data.response[0];
          if (scrollToService) {
            const service = servicesRes.data.response.find(
              (s) => s.name.toLowerCase().replace(/\s+/g, '-') === scrollToService
            );
            if (service) defaultService = service;
          }

          setSelectedService(defaultService);

          if (defaultService?.subCategories?.length > 0) {
            const firstSubCategory = defaultService.subCategories[0];
            const subService = subServicesRes.data.serviceSubCategories.find(
              (sub) => sub.name.trim().toLowerCase() === firstSubCategory.name.trim().toLowerCase()
            );

            if (subService?._id) {
              const response = await axios.get(`${baseURL}subService/getSubServicesById/${subService._id}`);
              if (response.data?.serviceSubCategoryData) {
                setSelectedSubCategory(response.data.serviceSubCategoryData);
                console.log('Default SubCategory set:', response.data.serviceSubCategoryData);
              }
            }
          }

          if (scrollToService) {
            const element = document.getElementById(scrollToService);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              console.log('Scrolled to service:', scrollToService);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [location.state]);

  // Handle service selection from Navbar
  useEffect(() => {
    const handleSelectService = async (e) => {
      const { service, serviceId } = e.detail;
      setSelectedService(service);
      setSelectedSubCategory(null);

      const element = document.getElementById(serviceId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        console.log('Scrolled to service:', service.name);
      }

      if (service.subCategories?.length > 0) {
        const firstSubCategory = service.subCategories[0];
        const subService = subServices.find(
          (sub) => sub.name.trim().toLowerCase() === firstSubCategory.name.trim().toLowerCase()
        );
        if (subService?._id) {
          try {
            const response = await axios.get(`${baseURL}subService/getSubServicesById/${subService._id}`);
            if (response.data?.serviceSubCategoryData) {
              setSelectedSubCategory(response.data.serviceSubCategoryData);
              console.log('SubCategory set for service:', response.data.serviceSubCategoryData);
            }
          } catch (error) {
            console.error('Error fetching subservice:', error);
          }
        }
      }
    };

    window.addEventListener('selectService', handleSelectService);
    return () => window.removeEventListener('selectService', handleSelectService);
  }, [services, subServices]);

  // Handle subservice selection from Navbar or Sidebar
  useEffect(() => {
    const handleSelectSubService = async (e) => {
      const { subCategory, service, serviceId } = e.detail;
      setSelectedService(service);

      const element = document.getElementById(serviceId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        console.log('Scrolled to service for subservice:', service.name);
      }

      const subService = subServices.find(
        (sub) => sub.name.trim().toLowerCase() === subCategory.name.trim().toLowerCase()
      );
      if (subService?._id) {
        try {
          const response = await axios.get(`${baseURL}subService/getSubServicesById/${subService._id}`);
          if (response.data?.serviceSubCategoryData) {
            setSelectedSubCategory(response.data.serviceSubCategoryData);
            console.log('SubCategory set:', response.data.serviceSubCategoryData);
          }
        } catch (error) {
          console.error('Error fetching subservice:', error);
          setSelectedSubCategory(subCategory);
        }
      } else {
        setSelectedSubCategory(subCategory);
      }
    };

    window.addEventListener('selectSubService', handleSelectSubService);
    return () => window.removeEventListener('selectSubService', handleSelectSubService);
  }, [services, subServices]);

  // Handle subCategory selection from Footer
  useEffect(() => {
    const handleSelectSubCategory = (e) => {
      const subCategoryData = e.detail;
      setSelectedSubCategory(subCategoryData);

      const element = document.getElementById(subCategoryData.serviceName.toLowerCase().replace(/\s+/g, '-'));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        console.log('Scrolled to service from footer:', subCategoryData.serviceName);
      }

      const service = services.find((s) => s._id === subCategoryData.serviceId);
      if (service) {
        setSelectedService(service);
        console.log('Service set from footer:', service.name);
      }
    };

    window.addEventListener('selectSubCategory', handleSelectSubCategory);
    return () => window.removeEventListener('selectSubCategory', handleSelectSubCategory);
  }, [services]);

  const handleServiceClick = async (service) => {
    setSelectedService(service);
    setSelectedSubCategory(null);

    if (service.subCategories?.length > 0) {
      const firstSubCategory = service.subCategories[0];
      const subService = subServices.find(
        (sub) => sub.name.trim().toLowerCase() === firstSubCategory.name.trim().toLowerCase()
      );
      if (subService?._id) {
        try {
          const response = await axios.get(`${baseURL}subService/getSubServicesById/${subService._id}`);
          if (response.data?.serviceSubCategoryData) {
            setSelectedSubCategory(response.data.serviceSubCategoryData);
            console.log('SubCategory set from sidebar:', response.data.serviceSubCategoryData);
          }
        } catch (error) {
          console.error('Error fetching subservice:', error);
        }
      }
    }
  };

  const handleSubCategoryClick = async (subCategory) => {
    const subService = subServices.find(
      (sub) => sub.name.trim().toLowerCase() === subCategory.name.trim().toLowerCase()
    );

    if (subService?._id) {
      try {
        const response = await axios.get(`${baseURL}subService/getSubServicesById/${subService._id}`);
        if (response.data?.serviceSubCategoryData) {
          setSelectedSubCategory(response.data.serviceSubCategoryData);
          console.log('SubCategory set from sidebar click:', response.data.serviceSubCategoryData);
        }
      } catch (error) {
        console.error('Error fetching subservice:', error);
        setSelectedSubCategory(subCategory);
      }
    } else {
      setSelectedSubCategory(subCategory);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading services...</div>
      </div>
    );
  }

  return (
    <div>
      <div
        className={`w-5/6 h-screen fixed top-0 left-0 bg-white z-[999] shadow-xl overflow-y-auto py-10 px-3 transform transition-transform duration-300 ease-in-out ${togglePannel ? 'translate-x-0' : '-translate-x-full'
          } lg:hidden`}
      >
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div
              key={service._id || index}
              className={`bg-[#006AAB] text-white px-4 py-5 transition-colors mb-2 ${selectedService?._id === service._id ? 'bg-[#005a94]' : ''
                }`}
            >
              <h1 className="text-2xl" onClick={() => handleServiceClick(service)}>
                {service.name}
              </h1>
              {service?.subCategories?.length > 0 ? (
                <div className="mt-6">
                  {service.subCategories.map((subCat, subIndex) => (
                    <h3
                      key={subIndex}
                      className="flex items-center justify-between text-md mt-4 cursor-pointer hover:text-gray-200"
                      onClick={() => handleSubCategoryClick(subCat)}
                    >
                      {subCat.name} <GoArrowUpRight size={20} />
                    </h3>
                  ))}
                </div>
              ) : (
                <div
                  className="flex items-center justify-between text-md mt-6 cursor-pointer hover:bg-[#005a94]"
                  onClick={() => handleServiceClick(service)}
                >
                  <span>View Details</span>
                  <GoArrowUpRight size={26} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Navbar />

      <FadeInOnScroll>
        <SectionWithImage />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <div className="container mx-auto px-4 md:px-0 relative">
          <div className="flex justify-between gap-16 md:px-8 xl:px-24 py-10 md:mt-10">
            <div className="lg:flex flex-col gap-4 w-1/3 hidden">
              {services.map((service, index) => (
                <div key={service._id || index} id={service.name.toLowerCase().replace(/\s+/g, '-')}>
                  <div
                    className={`bg-[#006AAB] text-white px-10 py-10 transition-colors ${selectedService?._id === service._id ? 'bg-[#005a94] ring-2 ring-white' : ''
                      }`}
                    onClick={() => handleServiceClick(service)}
                  >
                    <h1 className="text-xl">{service.name}</h1>
                    {service.subCategories?.length > 0 && (
                      <div className="mt-8">
                        {service.subCategories.map((subCat, subIndex) => (
                          <h3
                            key={subIndex}
                            className="flex items-center justify-between text-sm mt-4 cursor-pointer hover:text-gray-200"
                            onClick={() => handleSubCategoryClick(subCat)}
                          >
                            {subCat.name} <GoArrowUpRight size={20} />
                          </h3>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="lg:w-2/3 flex flex-col gap-y-12 lg:gap-y-0 md:gap-y-6 mt-0 relative"
              onClick={() => setTogglePannel(false)}
            >
              {selectedSubCategory ? (
                <div className="md:mt-4 lg:mt-1 flex flex-col gap-6">
                  {selectedSubCategory.image ? (
                    <img
                      src={selectedSubCategory.image}
                      alt={selectedSubCategory.name}
                      className="w-full rounded-lg"
                      onError={() => console.error('Image failed to load:', selectedSubCategory.image)}
                    />
                  ) : (
                    <div className="text-red-500">No image available for {selectedSubCategory.name}</div>
                  )}
                  <h1 className="md:text-3xl text-2xl border-b md:pb-6 pb-3 border-[#00000040] -mt-2">
                    {selectedSubCategory.name}
                  </h1>

                  {[1, 2, 3, 4, 5, 6, 7].map((num) => {
                    const word = numberToWord[num - 1];
                    const headerKey = `header${word}`;
                    const subHeaderKey = `SubHeader${word}`;
                    const paragraphKey = `paragraph${word}`;

                    const header = selectedSubCategory?.[headerKey];
                    const subHeader = selectedSubCategory?.[subHeaderKey];
                    const paragraph = selectedSubCategory?.[paragraphKey];

                    if (!header) return null;
                    return (
                      <div key={num} className="mb-6">
                        <h4 className="Roboto-500 md:text-2xl text-xl">{header}</h4>
                        {subHeader && <h5 className="md:text-lg text-base mt-2">{subHeader}</h5>}
                        {paragraph && <div className="md:text-base text-sm mt-2" dangerouslySetInnerHTML={{ __html: paragraph }} />}
                      </div>
                    );
                  })}
                </div>
              ) : (
                selectedService?.description && (
                  <div className="md:mt-8 mt-4">
                    <h4 className="md:text-xl text-base">{selectedService.description}</h4>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <Testimonial />
      </FadeInOnScroll>

      <Footer services={services} subServices={subServices} />
    </div>
  );
};

export default OurServices;
