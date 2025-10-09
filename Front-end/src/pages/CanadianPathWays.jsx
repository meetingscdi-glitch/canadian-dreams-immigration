import React from 'react'
import SectionWithImage from '../components/SectionWithImage'
import FederalImg from '../assets/federalpathwaysimages/Federal Programs (3).jpg'
import ProvincialProgramsImg from '../assets/provincialpathwaysimages/ProvincialProgramsImg.jpg'
import { RiGovernmentLine } from "react-icons/ri";
import { TbCurrentLocation } from "react-icons/tb";
import { Link } from 'react-router-dom';
const CanadianPathWays = () => {

  return (
    <div>
      <SectionWithImage />
      <div className='container mx-auto px-4 md:px-6'>
        {/* Intro Section */}
        <div className='flex flex-col gap-3 sm:gap-6 sm:mt-16 mb-4 mt-4'>
          <h1 className='lg:mx-auto md:w-fit text-xl sm:text-3xl md:text-4xl'>
            Explore the Pathway Made Just for You
          </h1>
          <h4 className='w-fit mx-auto text-base sm:text-lg lg:px-14'>
            Welcome to our dedicated resource for aspiring immigrants. This section simplifies your journey by connecting you directly to official government websites for all available immigration programs. Organized into Federal and Provincial categories, it provides a clear, streamlined way to access reliable, up-to-date information.
          </h4>
        </div>

        {/* Programs Grid */}
        <div className='grid sm:grid-cols-2 gap-8 md:gap-10 lg:px-12 md:py-4 mt-6'>
          {/* Federal Programs */}
          <div className='relative bg-white hover:border border-gray-200 z-[999] rounded-xl cursor-pointer group'>
            <img
              className='w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 rounded-xl'
              src={FederalImg}
              alt="Federal Programs"
            />
            <div className='absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-center gap-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
              <h1 className='w-fit mx-auto text-2xl flex items-center gap-3'>
                Federal Programs
                <RiGovernmentLine className='group-hover:rotate-[360deg] group-hover:bg-[#006AAB] text-white p-2 text-[35px] rounded-full transition-transform duration-500' />
              </h1>
              <h5 className='text-center text-lg'>
                Explore Canada’s federal immigration programs like Express Entry, which welcome skilled workers, students, and families seeking permanent residence while supporting national growth and diversity.
              </h5>
              <Link
                to={'/canadian-pathways-federal'}
                className="bg-[#006AAB] inline-block text-white text-lg px-4 py-2 rounded-lg hover:bg-[#064268] transition-colors duration-200 mt-3 w-fit mx-auto"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Provincial Programs */}
          <div className='relative bg-white hover:border border-gray-200 z-[999] rounded-xl cursor-pointer group'>
            <img
              className='w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 rounded-xl'
              src={ProvincialProgramsImg}
              alt="Provincial Programs"
            />
            <div className='absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-center gap-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
              <h1 className='w-fit mx-auto text-2xl flex items-center gap-3'>
                Provincial Programs
                <TbCurrentLocation className='group-hover:rotate-[360deg] group-hover:bg-[#006AAB] text-white p-2 text-[35px] rounded-full transition-transform duration-500' />
              </h1>
              <h5 className='text-center text-lg'>
                Canadian provincial immigration programs allow provinces to nominate skilled individuals based on local labor market needs, helping you find opportunities tailored to your expertise.
              </h5>
              <Link
                to={'/canadian-pathways-provincial'}
                className="bg-[#006AAB] inline-block text-white text-lg px-4 py-2 rounded-lg hover:bg-[#064268] transition-colors duration-200 mt-3 w-fit mx-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Consultation Section */}
        <div className='flex flex-col gap-3 sm:gap-4 md:gap-6 mt-6 lg:mt-12 lg:mb-4 pb-10 lg:pb-12'>
          <h1 className='lg:mx-auto md:w-fit text-xl sm:text-3xl md:text-4xl'>
            Not sure which pathway suits you?
          </h1>
          <h4 className='lg:text-lg lg:text-center text-base lg:w-2/3 mx-auto'>
            Book a consultation with our experts to assess your eligibility and get personalized guidance, helping you confidently navigate the Canadian immigration process.
          </h4>
        </div>
      </div>

    </div>
  )
}

export default CanadianPathWays
