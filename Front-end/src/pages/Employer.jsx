import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import FadeInOnScroll from './FadeInOnScroll';
import axios from 'axios';
import SectionWithImage from '../components/SectionWithImage';
import Footer from '../components/Footer';

const Employer = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URLL}/postJob/getAllPostJob`
      );
      setJobs(response.data.response || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <FadeInOnScroll>
        <SectionWithImage />
        <div className="container mx-auto pt-12 p-6 text-gray-800">
          {/* Intro Section */}
          <h2 className="md:text-2xl text-lg font-bold mb-4">
            Strategic Workforce Solutions for Canadian Employers
          </h2>
          <h2 className="md:text-2xl text-lg font-bold mb-4 text-[#006AAB]">
            At Canadian Dreams Immigration, we specialize in providing transparent and effective immigration solutions tailored to Canadian businesses in high-demand sectors like hospitality, retail, and healthcare. Your growth depends on reliable talent, and we make sure you find it.
          </h2>

          <h2 className="md:text-2xl text-lg font-bold mb-4">
            Our Mission: Connecting Talent with Opportunity
          </h2>
          <h2 className="md:text-2xl text-lg font-bold mb-4 text-[#006AAB]">
            Our mission is to bridge the critical demand-supply gap in the Canadian labor market. We connect forward-thinking employers with pre-vetted, talented foreign workers who are ready to contribute to your business’s growth and success from day one.
          </h2>

          <h2 className="md:text-2xl text-lg font-bold mb-4">
            Why Partner With Us? Your Strategic Advantage
          </h2>
          <h2 className="md:text-2xl text-lg font-bold mb-4 text-[#006AAB]">
            With years of experience and a team of licensed professionals, we understand the unique challenges and needs of your industry. We provide tailored recruitment and immigration solutions, ensuring a seamless, efficient, and fully compliant process for your business.
          </h2>

          {/* Selection Criteria Section */}
          <h3 className="md:text-3xl text-xl font-bold mt-8 md:mt-12 md:mb-6 mb-2">
            Our Rigorous Selection Criteria: Ensuring the Right Fit
          </h3>
          <h3 className="mb-6 md:text-xl">
            A successful hire is more than just matching a resume. <span className='text-[#006AAB] font-bold'>Our multi-faceted selection process ensures that every candidate</span> we recommend is not only qualified but also an excellent long-term cultural fit. Here are the four pillars of our vetting process:
          </h3>

          <ul className='flex flex-col gap-6'>
            <li className='md:text-xl border-2 border-slate-200 p-4 rounded-xl'>
              <span className='text-[#006AAB] font-bold'>A) Qualifications and Experience:</span> We carefully verify educational backgrounds, professional certifications, and relevant work history to ensure candidates have the precise skills your roles require.
            </li>
            <li className='md:text-xl border-2 border-slate-200 p-4 rounded-xl'>
              <span className='text-[#006AAB] font-bold'>B) Language Proficiency:</span> Effective communication is key. We evaluate candidates’ English, French, or other required language skills to ensure they can thrive in your workplace.
            </li>
            <li className='md:text-xl border-2 border-slate-200 p-4 rounded-xl'>
              <span className='text-[#006AAB] font-bold'>C) Cultural Fit:</span> Beyond the resume, we assess adaptability, teamwork, and professional values to ensure alignment with Canadian workplace standards.
            </li>
            <li className='md:text-xl border-2 border-slate-200 p-4 rounded-xl'>
              <span className='text-[#006AAB] font-bold'>D) References and Background Checks:</span> We perform thorough reference and background checks, guaranteeing reliability and trustworthiness in every hire.
            </li>
          </ul>

          <h3 className="md:my-8 my-6 md:text-xl">
            Stop struggling with <span className='text-[#006AAB] font-bold'>talent shortages.</span> Let us provide a streamlined, dependable pipeline of qualified, ready-to-work professionals for your business.
          </h3>
        </div>

      </FadeInOnScroll>

    </div>
  );
};

export default Employer;
