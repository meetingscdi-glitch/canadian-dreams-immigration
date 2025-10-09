import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SectionWithImage from '../components/SectionWithImage';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import FadeInOnScroll from './FadeInOnScroll';
import axios from 'axios';
import { GoArrowUpRight } from 'react-icons/go';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { RiMenu4Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const OurServices = () => {
  const [togglePannel, setTogglePannel] = useState(false);
  const [services, setServices] = useState([]);
  const [subServices, setSubServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  const baseURL = import.meta.env.VITE_API_URL;
  console.log(subServices, 'subServices');

  const hideShowHandler = (event) => {
    event.stopPropagation();
    setTogglePannel((prev) => !prev);
  };

  // Fetch all services & subServices on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesRes, subServicesRes] = await Promise.all([
          axios.get(`${baseURL}service/getAllServices`),
          axios.get(`${baseURL}subService/getAllSubServices`),
        ]);

        if (servicesRes.data?.response) {
          setServices(servicesRes.data.response);

          // Set default selected service
          const tempResidence = servicesRes.data.response.find(
            (s) => s.name?.toLowerCase().includes('temporary residence')
          );
          const defaultService = tempResidence || servicesRes.data.response[0];
          setSelectedService(defaultService);

          // Auto-select first subcategory if available
          if (defaultService?.subCategories?.length > 0 && subServicesRes.data?.serviceSubCategories) {
            const firstSubCategory = defaultService.subCategories[0];
            const subService = subServicesRes.data.serviceSubCategories.find(
              (sub) => sub.name.trim().toLowerCase() === firstSubCategory.name.trim().toLowerCase()
            );

            if (subService?._id) {
              const response = await axios.get(`${baseURL}subService/getSubServicesById/${subService._id}`);
              if (response.data?.serviceSubCategoryData) {
                setSelectedSubCategory(response.data.serviceSubCategoryData);
              }
            }
          }
        }

        if (subServicesRes.data?.serviceSubCategories) {
          setSubServices(subServicesRes.data.serviceSubCategories);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fetch service by ID
  const fetchServiceById = async (id) => {
    try {
      const response = await axios.get(`${baseURL}service/getServicesById/${id}`);
      if (response.data?.response) {
        setSelectedService(response.data.response);
      }
    } catch (error) {
      console.error('Error fetching service by ID:', error);
    }
  };

  // Handle service click
  const handleServiceClick = (service) => {
    setSelectedService(service);
    setSelectedSubCategory(null);
    fetchServiceById(service._id);
  };

  // Handle subcategory click
  const navigate = useNavigate();

  const handleSubCategoryClick = (subCategory) => {
    const subService = subServices.find(
      (sub) => sub.name.trim().toLowerCase() === subCategory.name.trim().toLowerCase()
    );

    if (subService?._id) {
      navigate(`/services/${subService._id}`);
    }
  };

  if (loading)
    return (
      <div
        className="flex items-center justify-center"
        style={{ minHeight: "calc(100vh - 150px)" }} // adjust 150px if you have Navbar/Footer height
      >
        {/* Spinner or loader */}
        <div
          style={{
            border: "4px solid #f3f3f3",
            borderTop: "4px solid #006AAB", // your theme color
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            animation: "spin 1s linear infinite",
          }}
        />
        <style>
          {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
        </style>
      </div>
    );

  const numberToWord = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];

  return (
    <div>
      {/* Mobile Sidebar */}
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
              <h1 className="text-2xl">{service.name}</h1>
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


      <FadeInOnScroll>
        <SectionWithImage />
      </FadeInOnScroll>

      <FadeInOnScroll>
        {/* <FaGripLines onClick={hideShowHandler} size={24} className='absolute right-6 top-2 text-[#006AAB] z-[1000]'/> */}
        <div className="container mx-auto px-4 md:px-0 relative mt-8">
          <div className="flex justify-between gap-16 md:px-8 py-4 md:mt-0">
            {/* Desktop Sidebar */}
            <div className="flex gap-12 lg:h-[calc(100vh+22rem)]">
              <div className="lg:flex flex-col gap-4  hidden overflow-y-auto h-full bgcontainerserviceRight">
                {services.map((service, index) => (
                  <div key={service._id || index} className="mb-2">
                    <div
                      className={`bg-[#006AAB] text-white px-10 py-10 transition-colors ${selectedService?._id === service._id ? 'bg-[#005a94] ring-2 ring-white' : ''
                        }`}
                    >
                      <h1 className="text-xl">{service.name}</h1>
                      {service.subCategories?.length > 0 ? (
                        <div className="mt-8">
                          {service.subCategories.map((subCat, subIndex) => (
                            <h3
                              key={subIndex}
                              className="flex items-center justify-between text-sm mt-4 cursor-pointer hover:text-gray-300 hover:font-extrabold"
                              onClick={() => handleSubCategoryClick(subCat)}
                            >
                              {subCat.name} <GoArrowUpRight size={20} />
                            </h3>

                          ))}
                        </div>
                      ) : (
                        <div
                          className="flex items-center justify-between text-sm mt-12 cursor-pointer hover:bg-[#005a94]"
                          onClick={() => handleServiceClick(service)}
                        >
                          <span>View Details</span>
                          <GoArrowUpRight size={26} />
                        </div>
                      )}
                      {service.price && (
                        <div className="mt-4 text-sm opacity-90">Price: ${service.price}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Side Content Panel */}
              <div
                className="lg:w-2/3 flex flex-col gap-y-12 lg:gap-y-0 md:gap-y-6 mt-0 relative h-full"
                onClick={() => setTogglePannel(false)}
              >
                <div className="overflow-y-auto h-full bgcontainerservice pr-4">
                  {selectedSubCategory ? (
                    <div className="mt-4 lg:mt-0 flex flex-col gap-6 pb-16">
                      {selectedSubCategory.image && (
                        <img
                          src={selectedSubCategory.image}
                          alt={selectedSubCategory.name}
                          className="w-full bg-cover rounded-lg"
                        />
                      )}

                      <h1 className="md:text-3xl text-2xl border-b md:pb-6 pb-3 border-[#00000040] -mt-2">
                        {selectedSubCategory.name}
                      </h1>

                      {/* DEBUG: Check what data we have */}
                      {console.log("Selected SubCategory Data:", selectedSubCategory)}
                      {console.log("Available header fields:",
                        Object.keys(selectedSubCategory || {}).filter(key => key.includes('header'))
                      )}

                      {/* Then your dynamic mapping */}
                      {/* --- Custom paired section mapping --- */}
                      {(() => {
                        const pairs = [
                          { headerNum: 1, subHeaderNum: 2, paragraphNum: 1 },
                          { headerNum: 3, subHeaderNum: 3, paragraphNum: 2 },
                          { headerNum: 4, subHeaderNum: 4, paragraphNum: 3 },
                          { headerNum: 5, subHeaderNum: 5, paragraphNum: 4 },
                          { headerNum: 6, subHeaderNum: 6, paragraphNum: 5 },
                          { headerNum: 7, subHeaderNum: 7, paragraphNum: 6 }
                        ];

                        const numberToWord = ["One", "Two", "Three", "Four", "Five", "Six", "Seven"];

                        return pairs.map((pair, index) => {
                          const headerKey = `header${numberToWord[pair.headerNum - 1]}`;
                          const subHeaderKey = `SubHeader${numberToWord[pair.subHeaderNum - 1]}`;
                          const paragraphKey = `paragraph${numberToWord[pair.paragraphNum - 1]}`;

                          const header = selectedSubCategory?.[headerKey];
                          const subHeader = selectedSubCategory?.[subHeaderKey];
                          const paragraph = selectedSubCategory?.[paragraphKey];

                          // Only render if we have at least header or subHeader
                          if (!header && !subHeader) return null;

                          return (
                            <div key={index} className="mb-8 border-b border-[#00000020] pb-6 last:border-b-0">
                              {header && (
                                <h4 className="Roboto-500 md:text-2xl text-xl mb-3 text-[#006AAB]">
                                  {header}
                                </h4>
                              )}
                              {subHeader && (
                                <h5 className="md:text-xl text-lg mb-3 font-medium text-gray-700">
                                  {subHeader}
                                </h5>
                              )}
                              {paragraph && (
                                <div
                                  className="md:text-base text-sm text-gray-600 leading-relaxed"
                                  dangerouslySetInnerHTML={{ __html: paragraph }}
                                />
                              )}
                            </div>
                          );
                        });
                      })()}
                    </div>
                  ) : (
                    selectedService?.description && (
                      <div className="md:mt-8 mt-4">
                        <h4 className="md:text-xl text-base">{selectedService.description}</h4>
                      </div>
                    )
                  )}

                  {selectedService?.price && (
                    <div className="mt-12 flex flex-col gap-3 pb-16">
                      <h4 className="Roboto-500 md:text-2xl text-xl">What It Costs</h4>
                      <h4 className="md:text-xl text-lg">Pricing That Fits</h4>
                      <div className="flex items-start gap-2">
                        <IoMdCheckmarkCircleOutline className="text-xl mt-1 shrink-0 text-[#006AAB]" />
                        <h4 className="md:text-xl text-base leading-snug">
                          Service Fee: ${selectedService.price}
                          <br />
                          Note: Prices may vary based on case complexity.
                          <br />
                          Contact us for detailed pricing information.
                        </h4>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Mobile Burger */}
            <div className="absolute -top-8 right-2 p-2">
              <RiMenu4Line className="text-3xl text-[#006AAB] lg:hidden" onClick={hideShowHandler} />
            </div>
          </div>
        </div>


      </FadeInOnScroll>
      <div className='mt-12'>
        <FadeInOnScroll>
          <Testimonial />
        </FadeInOnScroll>
      </div>

      {/* <Footer services={services} subServices={subServices} /> */}
    </div>
  );
};

export default OurServices;
