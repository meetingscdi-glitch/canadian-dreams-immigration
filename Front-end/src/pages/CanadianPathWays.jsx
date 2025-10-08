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
      <div className='container mx-auto '>
        <div className='flex flex-col  gap-6 mt-16 mb-4'>
          <h1 className='mx-auto w-fit text-4xl'>Explore the Pathway, Just for you.</h1>
          <h4 className='w-fit mx-auto'>Welcome to our dedicated resource for aspiring immigrants. This section simplifies your journey by connecting you directly to official government websites for all available immigration programs. Organized into Federal and Provincial categories, it provides a clear and streamlined way to access reliable, up-to-date information.</h4>
        </div>
        <div className='grid grid-cols-2 gap-12 px-12 py-4 mt-6'>
          <div className='relative bg-white hover:border border-gray-200 z-[999] rounded-xl cursor-pointer group'>
            {/* Image */}
            <img
              className='w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 rounded-xl'
              src={FederalImg}
              alt="FederalProgramImg"
            />
            {/* Content */}
            <div className='absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-center gap-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
              <h1 className='w-fit mx-auto text-2xl flex items-center gap-3'>
                Federal Programs
                <RiGovernmentLine className='group-hover:rotate-[360deg] group-hover:bg-[#006AAB] text-white p-2 text-[35px] rounded-full transition-transform duration-500' />
              </h1>
              <h5 className='text-center text-lg'>
                Canada’s federal immigration programs, like Express Entry, target skilled workers, students, and families for permanent residence, supporting growth and diversity.
              </h5>
              <Link
                to={'/canadian-pathways-provincial'}
                className="bg-[#006AAB] inline-block text-white text-lg px-4 py-2 rounded-lg hover:bg-[#064268] transition-colors duration-200 mt-3 w-fit mx-auto"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className='relative bg-white hover:border border-gray-200 z-[999] rounded-xl cursor-pointer group'>
            {/* Image */}
            <img
              className='w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 rounded-xl'
              src={ProvincialProgramsImg}
              alt="FederalProgramImg"
            />
            {/* Content */}
            <div className='absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-center gap-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
              <h1 className='w-fit mx-auto text-2xl flex items-center gap-3'>
                Provincial Programs
                <TbCurrentLocation className='group-hover:rotate-[360deg] group-hover:bg-[#006AAB] text-white p-2 text-[35px] rounded-full transition-transform duration-500' />
              </h1>
              <h5 className='text-center text-lg'>
                Canadian provincial immigration programs allow provinces to nominate individuals with skills and experience tailored to local labor market needs.
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
        <div className='flex flex-col  gap-6 mt-12 mb-4 pb-12'>
          <h1 className='mx-auto w-fit text-4xl'>Not sure which pathway suits you?</h1>
          <h4 className='text-lg  text-center w-2/3 mx-auto'>Book a consultation with us to assess your eligibility and receive personalized guidance to help you navigate the immigration process with confidence.</h4>
        </div>
      </div>
    </div>
  )
}

export default CanadianPathWays