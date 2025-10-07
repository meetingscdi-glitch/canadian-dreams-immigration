import React, { useRef } from 'react'
import CanadaPassportImg from '../assets/images/CanadaPassportImg.png'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
const WhyChooseUs = () => {
    const WhyChooseImg = useRef();
    const whyChooseText = useRef();
    // useGSAP(() => {
    //         gsap.from(WhyChooseImg.current, {
    //             delay: 0.5,
    //             y: '-100%',
    //             duration: 0.8,
    //             ease: 'bounce.out',
    //             scrollTrigger:{
    //                 scroller: 'body',
    //                 trigger: WhyChooseImg.current,
    //                 // markers: true,
    //                 start: 'top -2%',
    //                 end: 'bottom 80%',
    //                 // scrub: 1
    //             }

    //         });

    //         gsap.from(whyChooseText.current.children, {
    //             delay: 1,
    //             x: '-100%',
    //             duration: 0.7,
    //             scrollTrigger: {
    //                 trigger: whyChooseText.current,
    //                 scroller: 'body',
    //                 // markers:true,
    //                 start: 'top 90%',
    //                 end: 'bottom 40%',
    //                 scrub: 1
    //             },
    //         });

    //     })
    return (
        <div className='bg-[#F4FBFF] '>
            <div className='flex flex-col-reverse lg:grid lg:grid-cols-2  xl:py-20  py-10 md:px-8 container mx-auto'>
                <div className='xl:pl-20 xl:pr-12  px-5 lg:px-0 overflow-hidden' >
                    <div className='overflow-hidden' ref={whyChooseText}>
                        <h6 className='text-[#006AAB] text-lg mb-2 mt-6 flex items-center'><TfiLayoutLineSolid size={28} />Why Choose Us?</h6>
                        <h4 className='lg:text-5xl md:text-4xl text-3xl'>We Make Your Canadian</h4>
                        <h5 className="lg:text-5xl md:text-4xl text-3xl font-bold  lg:leading-tight lg:mt-1.5">
                            Dream Achievable.                        </h5>

                        <p className=' mb-3 mt-3 md:text-lg xl:w-[34rem]'>Moving to a new country is a big step—you need a partner you can trust to get things right. We provide fast, reliable immigration services that take the stress out of the process. With our expert support, you can move forward knowing every detail is handled carefully and correctly.
                        </p>

                        <h5 className='poppins-regular flex items-center mb-5 md:text-lg'>
                            <span className='text-xl  md:text-3xl'>
                                <IoMdCheckmarkCircleOutline color='#006AAB' className='mr-2' />
                            </span>
                            Global Connection: We understand both your home country's context and Canada's requirements, creating a smooth bridge for your transition.
                        </h5>
                        <h5 className='poppins-regular flex items-center mb-5 md:text-lg'>
                            <span className='text-xl md:text-3xl'>
                                <IoMdCheckmarkCircleOutline color='#006AAB' className='mr-2' />
                            </span>
                            Expert Visa Processing: Our team knows the system inside and out—we help you avoid common mistakes that cause delays.
                        </h5>
                        <h5 className='poppins-regular flex items-center mb-5 md:text-lg'>
                            <span className='text-xl md:text-3xl'>
                                <IoMdCheckmarkCircleOutline color='#006AAB' className='mr-2' />
                            </span>
                            Fastest Working Process: We're efficient without cutting corners, helping you reach Canada sooner.
                        </h5>
                        {/* <h5 className='poppins-regular flex items-center mb-5 md:text-lg'>
                            <span className='text-xl md:text-3xl'>
                                <IoMdCheckmarkCircleOutline color='#006AAB' className='mr-2' />
                            </span>
                            High Approval Rates and Proven Track Record: We're proud of our success in helping people like you achieve their immigration goals.
                        </h5> */}
                        {/* <h5 className='poppins-regular flex items-center mb-5 md:text-lg'>
                            <span className='text-xl md:text-3xl'>
                                <IoMdCheckmarkCircleOutline color='#006AAB' className='mr-2' />
                            </span>
                            Expert Support Panel
                        </h5> */}
                        <Link
                            to="/terms-and-condition"
                            className="flex items-center justify-center relative w-fit group"
                        >
                            <button
                                id="buttonStyle"
                                className="py-2  px-4 pr-8  rounded-l-full rounded-r-4xl text-white lg:mt-3 sm:text-xl mt-5 group-hover:bg-[#1085ce] transition-all duration-100"
                            >
                                Read More
                            </button>
                            <div className="bg-[#006AAB] absolute lg:mt-3 mt-5 border-2 border-white rounded-full -right-5 group-hover:-right-7 group-hover:bg-[#1085ce] transition-all duration-100">
                                <IoIosArrowRoundForward size={42} className="text-white transition-all duration-100 group-hover:-rotate-32" />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='overflow-hidden xl:pl-8 xl:pr-14 px-5 lg:ml-12 lg:px-0' >
                    <img className='rounded-3xl w-full h-full bg-cover' ref={WhyChooseImg} src={CanadaPassportImg} alt="WhyusImg" />
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
