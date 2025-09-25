import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import OurServices from './pages/OurServices'
import Blog from './pages/Blog'
import Employer from './pages/Employer'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import TermsAndCondition from './pages/TermsAndCondition'
import ScrollToTop from './components/ScrollToTop'
import ServiceDetail from './components/ServiceDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import axios from 'axios'
import Loader from './components/Loader'
const App = () => {
  const baseURL = import.meta.env.VITE_API_URL;

  const [services, setServices] = useState([]);
  const [subServices, setSubServices] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(services, 'services1111');

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
        }
        if (subServicesRes.data?.serviceSubCategories) {
          setSubServices(subServicesRes.data.serviceSubCategories);
          console.log('SubServices fetched:', subServicesRes.data.serviceSubCategories);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  return (
    <Router>
      <ScrollToTop />
      <Navbar services={services} subServices={subServices} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/our-services' element={<OurServices />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/employer' element={<Employer />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/privacy-policy' element={<Policy />} />
        <Route path='/terms-and-condition' element={<TermsAndCondition />} />
        <Route path='*' element={<NotFound />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
      </Routes>
      <Footer services={services} subServices={subServices} />

    </Router>
  )
}

export default App
