import React, { useRef } from 'react'
import WhyusImg from '../assets/images/WhyUS.webp'
import AboutWhyUs from '../assets/images/NewImg.webp'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';
import staticText from '../content/staticData';
gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
    const location = useLocation();
    const currentpath = location.pathname;

    const ImageRoutes = {
        '/': {
            image: WhyusImg,
        },
        '/about-us': {
            image: AboutWhyUs,
        },
    };

    const { image } = ImageRoutes[currentpath] || ImageRoutes['/'];
    const WhyUsText = useRef();
    const WhyUsImg = useRef();

    // Conditional content for /about-us
    const content = currentpath === '/about-us' ? (
        <>
            <p className='mb-3 mt-4 md:text-xl text-base'>
                Your Canadian dream is unique, and your journey should be too. At Canadian Dreams Immigration, we don’t use generic templates. Instead, we design a strategy that aligns with your goals—whether it’s studying, building a career, or reuniting with family in Canada.
            </p>

            <p className='md:mb-6 md:text-xl text-lg md:mt-6'>
                Why choose us as your trusted partner?
            </p>

            <div className='mt-4 space-y-4'>
                {[
                    {
                        title: "Integrity & Care",
                        text: "We handle your dreams with honesty and attention to detail. Your success is our reputation."
                    },
                    {
                        title: "Clear Communication",
                        text: "No surprises or confusion. We keep you informed at every step so you feel confident and supported."
                    },
                    {
                        title: "End-to-End Guidance",
                        text: "From your first consultation to final approval, our team is with you every step, navigating the complexities so you don’t have to."
                    },
                    {
                        title: "Proven Success",
                        text: "Our track record speaks for itself, with high approval rates and countless success stories from clients worldwide."
                    }
                ].map((item, index) => (
                    <div key={index} className='flex items-start md:text-lg text-base poppins-regular gap-2'>
                        <h5 key={index} className='poppins-regular flex items-center mb-4 md:text-lg text-base mt-4'>
                            <IoMdCheckmarkCircleOutline size={25} color='#006AAB' className='mr-0' />
                        </h5>
                        <div className='leading-relaxed'>
                            <strong>{item.title}:</strong> {item.text}
                        </div>
                    </div>
                ))}
            </div>


            <p className='md:text-lg text-base mt-4 font-semibold'>
                Ready to start your Canadian journey? Let’s write your success story together.
            </p>
        </>
    ) : (
        <>
            <p className='mb-3 mt-4 md:text-xl text-base'>
                At Canadian Dreams Immigration, we know every journey to Canada is different. We take the time to understand your goals and provide solutions tailored to your needs—whether it’s studying, working, or joining your family.
            </p>

            <p className='md:mb-6 md:text-xl text-lg md:mt-6'>
                What Sets Us Apart:
            </p>

            {staticText.whyChoosePoints.slice(0, 4).map((point, index) => (
                <h5 key={index} className='poppins-regular flex items-center mb-4 md:text-lg text-base mt-4'>
                    <IoMdCheckmarkCircleOutline size={30} color='#006AAB' className='mr-2' />
                    {point}
                </h5>
            ))}

            <p className='md:text-lg text-base'>Proven Success – A strong track record of approvals and satisfied clients worldwide.</p>
        </>
    );


    return (
        <div className='bg-[#F4FBFF]'>
            <div className='grid lg:grid-cols-2 lg:py-16 py-8 lg:mb-16 mb-8 container mx-auto px-5 md:px-10 lg:px-0'>
                <div className='xl:ml-12 lg:pl-8 xl:mr-12 order-2 lg:order-1 mt-6 lg:mt-0'>
                    <div className='overflow-hidden' ref={WhyUsText}>
                        <h1 className='lg:text-5xl md:text-4xl text-3xl lg:mt-1.5'>Why Us?</h1>
                        {content}
                    </div>
                </div>
                <div className='overflow-hidden xl:mr-20 lg:ml-10 xl:ml-0 lg:pr-8 order-1 lg:order-2'>
                    <img className='md:rounded-3xl rounded-xl w-full h-full object-cover' ref={WhyUsImg} src={image} alt="WhyusImg" />
                </div>
            </div>
        </div>
    )
}

export default WhyUs
