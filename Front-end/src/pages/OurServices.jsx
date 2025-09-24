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

const OurServices = () => {
  const [togglePannel, setTogglePannel] = useState(false);
  const [services, setServices] = useState([]);
  const [subServices, setSubServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  const baseURL = import.meta.env.VITE_API_URL;

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
  const handleSubCategoryClick = async (subCategory) => {
    const subService = subServices.find(
      (sub) => sub.name.trim().toLowerCase() === subCategory.name.trim().toLowerCase()
    );

    if (subService?._id) {
      try {
        const response = await axios.get(`${baseURL}subService/getSubServicesById/${subService._id}`);
        if (response.data?.serviceSubCategoryData) {
          setSelectedSubCategory(response.data.serviceSubCategoryData);
        }
      } catch (error) {
        console.error('Error fetching sub-service:', error);
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

      <Navbar />

      <FadeInOnScroll>
        <SectionWithImage />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <div className="container mx-auto px-4 md:px-0 relative">
          <div className="flex justify-between gap-16 md:px-8 xl:px-24 py-10 md:mt-10">
            {/* Desktop Sidebar */}
            <div className="lg:flex flex-col gap-4 w-1/3 hidden">
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
                            className="flex items-center justify-between text-sm mt-4 cursor-pointer hover:text-gray-200"
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
                    {service.price && <div className="mt-4 text-sm opacity-90">Price: ${service.price}</div>}
                  </div>
                </div>
              ))}
            </div>

            {/* Service Content */}
            <div
              className="lg:w-2/3 flex flex-col gap-y-12 lg:gap-y-0 md:gap-y-6 mt-0 relative"
              onClick={() => setTogglePannel(false)}
            >
              {/* Mobile Burger */}
              <div className="absolute -top-8 md:-top-12 right-0">
                <RiMenu4Line className="text-3xl text-[#006AAB] lg:hidden" onClick={hideShowHandler} />
              </div>

              <div>
                {selectedSubCategory ? (
                  <div className="md:mt-4 lg:mt-8 flex flex-col gap-6">
                    {selectedSubCategory.image && (
                      <img
                        src={selectedSubCategory.image}
                        alt={selectedSubCategory.name}
                        className="w-full rounded-lg"
                        style={{ marginTop: '-32px' }}
                      />
                    )}
                    <h1 className="md:text-3xl text-2xl border-b md:pb-6 pb-3 border-[#00000040] -mt-2">
                      {selectedSubCategory.name}
                    </h1>
                    {['headerOne', 'headerThree', 'headerFour', 'headerFive', 'headerSix', 'headerSeven'].map((key, idx) => (
                      selectedSubCategory[key] && (
                        <div key={idx}>
                          <h4 className="Roboto-500 md:text-2xl text-xl">{selectedSubCategory[key]}</h4>
                          {selectedSubCategory[`SubHeader${key.slice(-3)}`] && (
                            <h5 className="md:text-lg text-base mt-2">{selectedSubCategory[`SubHeader${key.slice(-3)}`]}</h5>
                          )}
                          {selectedSubCategory[`paragraph${idx + 1}`] && (
                            <div
                              className="md:text-base text-sm mt-2"
                              dangerouslySetInnerHTML={{ __html: selectedSubCategory[`paragraph${idx + 1}`] }}
                            />
                          )}
                        </div>
                      )
                    ))}
                  </div>
                ) : (
                  selectedService?.description && (
                    <div className="md:mt-8 mt-4">
                      <h4 className="md:text-xl text-base">{selectedService.description}</h4>
                    </div>
                  )
                )}

                {selectedService?.price && (
                  <div className="mt-12 flex flex-col gap-3">
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
        </div>
      </FadeInOnScroll>

      <div className="lg:mt-20">
        <FadeInOnScroll>
          <Testimonial />
        </FadeInOnScroll>
      </div>

      <Footer />
    </div>
  );
};

export default OurServices;
