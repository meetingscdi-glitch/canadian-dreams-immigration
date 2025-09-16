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
      const response = await axios.get('http://localhost:3500/api/postJob/getAllPostJob');
      setJobs(response.data.response || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <FadeInOnScroll>
        <SectionWithImage />
        <div className="container mx-auto pt-12 p-6 text-gray-800">
          <h2 className="md:text-2xl text-lg font-bold mb-4">
            At Canada Immigration, we specialize in providing transparent immigration services to Canadian businesses in the hospitality, retail, and healthcare industries.
          </h2>
          <h2 className="md:text-2xl text-lg font-bold mb-4 text-[#006AAB]">
            Our mission is to bridge the demand-supply gap by connecting employers with talented foreign workers who can contribute to the growth and success of their businesses.
          </h2>
          <h2 className="md:text-2xl text-lg font-bold mb-4">
            With years of experience and a team of licensed professionals, Career Canada Immigration understands the specific needs and challenges faced by employers in these industries. We offer tailored solutions to ensure a seamless recruitment and immigration process.
          </h2>

          <h3 className="md:text-3xl text-xl font-bold mt-8 md:mt-12 md:mb-6 mb-2 text-[#006AAB]">
            Our Selection Criteria
          </h3>
          <h3 className="mb-6 md:text-xl ">
            We follow a <span className='text-[#006AAB] font-[100px]'>rigorous selection process </span> to ensure that the foreign workers we recommend to employers are not only a right fit according to your job description but also a great cultural fit.
          </h3>
          <ul className='flex flex-col gap-6'>
            <li className='md:text-xl border-2 border-slate-200 p-4 rounded-xl' ><span className='text-[#006AAB] font-bold'>A) Qualifications and Experience: </span>
              We carefully assess candidates' educational background, certifications, and relevant work experience to ensure they possess the necessary skills for the specific job roles.
            </li>
            <li className='md:text-xl border-2 border-slate-200 p-4 rounded-xl' ><span className='text-[#006AAB] font-bold'>B) Language Proficiency: </span>Strong communication skills are essential for effective integration into the Canadian workplace. We evaluate candidates' language proficiency in English or any other language, depending on the requirements.
            </li>
            <li className='md:text-xl border-2 border-slate-200 p-4 rounded-xl' ><span className='text-[#006AAB] font-bold'>C) Cultural Fit: </span>C We consider the cultural compatibility of candidates with Canadian work environments, emphasizing adaptability, teamwork, and a positive work ethic.
            </li>
            <li className='md:text-xl border-2 border-slate-200 p-4 rounded-xl' ><span className='text-[#006AAB] font-bold'>D) References and Background Checks: </span> We conduct thorough reference checks and background verifications to validate candidates' credentials and ensure their reliability and trustworthiness.
            </li>
          </ul>
          <h3 className="md:my-8 my-6 md:text-xl">
            We follow a <span className='text-[#006AAB] font-[100px]'>rigorous selection process </span> to ensure that the foreign workers we recommend to employers are not only a right fit according to your job description but also a great cultural fit.
          </h3>
        </div>
      </FadeInOnScroll>

      <Footer />
      {/* <div className="container py-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: '100px' }}>
              <div className="mb-4">
                <p className="text-uppercase text-primary fw-bold mb-2" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>
                  OPENING IN OUR COMPANY
                </p>
                <h1 className="display-6 fw-bold text-dark mb-0">
                  Job openings and career opportunities
                </h1>
              </div>
            </div>
          </div>
          
          <div className="col-lg-8">
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }}></div>
                <p className="mt-3 text-muted">Loading opportunities...</p>
              </div>
            ) : jobs.length > 0 ? (
              <div className="d-flex flex-column gap-4">
                {jobs.map((job, index) => (
                  <FadeInOnScroll key={job._id}>
                    <div 
                      className="job-card p-4 bg-white rounded-3 shadow-sm border-0 position-relative"
                      style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                      onClick={() => setSelectedJob(job)}
                    >
                      <div className="d-flex justify-content-between align-items-start">
                        <div className="flex-grow-1">
                          <div className="d-flex align-items-center mb-2">
                            <h4 className="fw-bold text-dark mb-0 me-2">{job.job}</h4>
                            <span className="badge bg-primary bg-opacity-10 text-primary px-2 py-1">
                              {job.department || 'General'}
                            </span>
                          </div>
                          
                          <p className="text-muted mb-3" style={{ fontSize: '0.95rem' }}>
                            {job.headerOne || 'Join our team and make a difference'}
                          </p>
                          
                          <div className="d-flex flex-wrap gap-3 mb-0">
                            {job.jobType && (
                              <div className="d-flex align-items-center text-muted">
                                <i className="fas fa-clock me-2 text-primary"></i>
                                <span style={{ fontSize: '0.9rem' }}>{job.jobType}</span>
                              </div>
                            )}
                            {job.payScale && (
                              <div className="d-flex align-items-center text-muted">
                                <i className="fas fa-dollar-sign me-2 text-success"></i>
                                <span style={{ fontSize: '0.9rem' }}>{job.payScale}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="text-end ms-3">
                          {job.location && (
                            <div className="bg-light rounded-pill px-3 py-1 mb-2">
                              <small className="text-muted fw-medium">{job.location}</small>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </FadeInOnScroll>
                ))}
              </div>
            ) : (
              <div className="text-center py-5">
                <div className="mb-4">
                  <i className="fas fa-search text-muted" style={{ fontSize: '4rem' }}></i>
                </div>
                <h4 className="text-muted mb-3">No Job Openings Available</h4>
                <p className="text-muted">Check back soon for new opportunities!</p>
              </div>
            )}
          </div>
        </div>
      </div> */}

      {/* Job Detail Modal */}
      {/* {selectedJob && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content border-0" style={{ borderRadius: '15px' }}>
              <div className="modal-header border-0 bg-primary text-white" style={{ borderRadius: '15px 15px 0 0' }}>
                <div className="d-flex align-items-center">
                  <div className="bg-white rounded-circle p-2 me-3">
                    <i className="fas fa-briefcase text-primary"></i>
                  </div>
                  <div>
                    <h5 className="modal-title fw-bold mb-0">{selectedJob.job}</h5>
                    <small className="opacity-75">{selectedJob.department}</small>
                  </div>
                </div>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setSelectedJob(null)}
                ></button>
              </div>
              
              <div className="modal-body p-4">
                {selectedJob.image && (
                  <div className="mb-4">
                    <img 
                      src={selectedJob.image} 
                      alt={selectedJob.job}
                      className="img-fluid rounded"
                      style={{ maxHeight: '300px', width: '100%', objectFit: 'cover' }}
                    />
                  </div>
                )}
                
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="bg-light rounded p-3">
                      <i className="fas fa-clock text-primary me-2"></i>
                      <strong>Job Type:</strong> {selectedJob.jobType || 'Not specified'}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bg-light rounded p-3">
                      <i className="fas fa-map-marker-alt text-primary me-2"></i>
                      <strong>Location:</strong> {selectedJob.location || 'Not specified'}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bg-light rounded p-3">
                      <i className="fas fa-dollar-sign text-success me-2"></i>
                      <strong>Salary:</strong> {selectedJob.payScale || 'Negotiable'}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bg-light rounded p-3">
                      <i className="fas fa-calendar text-info me-2"></i>
                      <strong>Posted:</strong> {new Date(selectedJob.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                {selectedJob.headerOne && (
                  <div className="mb-4">
                    <h6 className="fw-bold text-dark mb-2">
                      <i className="fas fa-info-circle text-primary me-2"></i>Job Description
                    </h6>
                    <p className="text-muted">{selectedJob.headerOne}</p>
                  </div>
                )}
                
                {selectedJob.headerTwo && (
                  <div className="mb-4">
                    <h6 className="fw-bold text-dark mb-2">
                      <i className="fas fa-list-ul text-primary me-2"></i>Requirements
                    </h6>
                    <p className="text-muted">{selectedJob.headerTwo}</p>
                  </div>
                )}
              </div>
              
              <div className="modal-footer border-0 p-4">
                <button 
                  type="button" 
                  className="btn btn-outline-secondary me-2" 
                  onClick={() => setSelectedJob(null)}
                >
                  Close
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary"
                >
                  <i className="fas fa-paper-plane me-2"></i>Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}

      {/* <style jsx>{`
        .job-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
        }
      `}</style> */}

    </div>
  );
};

export default Employer;
