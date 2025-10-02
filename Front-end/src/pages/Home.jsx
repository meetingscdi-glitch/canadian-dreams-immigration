// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import BannerCarousel from '../components/BannerCarousel'
import CanadianDreams from '../components/CanadianDreams'
import WhyUs from '../components/WhyUs'
import ImmiGrationNeeds from '../components/ImmiGrationNeeds'
import { GoArrowUpRight } from "react-icons/go";
import WhoWeAre from '../components/WhoWeAre'
import Aeroplane from '../assets/smallimages/Aeroplane.png'
import { PiNotebook } from "react-icons/pi";
import HandShake from '../assets/smallimages/Handshake.png'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonial from '../components/Testimonial'
import LatestNews from '../components/LatestNews'
import Faq from '../components/Faq'
import Form from '../components/Form'
import ContactImg from '../assets/images/ContactImg.png'
import Footer from '../components/Footer'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import FadeInOnScroll from './FadeInOnScroll'
import { IoIosArrowRoundForward } from "react-icons/io";
import Email from '../assets/images/Email.jpg'
import { RxCross2 } from "react-icons/rx";



const Home = () => {
    const headingRef = useRef();
    const subheadingRef = useRef();
    const paragraphRef = useRef();
    const [Hide, setHide] = useState(false)
    const hideController = () => {
        setHide(false)
    }
    useEffect(() => {
        const hasSeenModal = localStorage.getItem('hasSeenEmailModal')

        if (!hasSeenModal) {
            const timer = setTimeout(() => {
                setHide(true)
                localStorage.setItem('hasSeenEmailModal', 'true')
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [])

    // Hero animation
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(headingRef.current, {
            y: -100,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
        })
            .from(subheadingRef.current, {
                y: -100,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
            })
            .from(paragraphRef.current, {
                y: -100,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
            });
    }, []);

    return (
        <div>
            {/* Navbar */}
            {/* Hero Carousel */}
            <BannerCarousel />


            {Hide ? (
                <div
                    className='fixed top-0 left-0 w-full h-screen backdrop-blur-md z-20 flex items-center justify-center md:px-12 px-6'
                    onClick={hideController}
                >
                    <div
                        className="flex md:gap-6 justify-center p-6 w-full md:h-[40rem] max-w-4xl rounded-3xl overflow-hidden bg-white shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="h-full w-1/2 rounded hidden md:block">
                            <img className="w-full h-full object-cover rounded" src={ContactImg} alt="Email Banner" />
                        </div>

                        <div className='px-2 w-full md:w-1/2 relative'>
                            <div className='flex items-center justify-center md:mt-4 absolute right-1 md:-right-2 md:-top-7 -top-3'>
                                <RxCross2
                                    className='text-[#006AAB] cursor-pointer'
                                    size={32}
                                    onClick={hideController}
                                />
                            </div>
                            <div>
                                <Form onSuccess={() => setHide(false)} />
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}



            {/* Sections with Fade-in Scroll Animations */}
            <FadeInOnScroll><CanadianDreams /></FadeInOnScroll>
            <FadeInOnScroll><WhyUs /></FadeInOnScroll>
            <FadeInOnScroll><ImmiGrationNeeds /></FadeInOnScroll>

            {/* News Cards */}
            <div className='grid lg:grid-cols-3 xl:gap-20 lg:gap-8 md:gap-12 gap-6 lg:py-8 lg:px-8 md:px-32 xl:px-19 mb-10 py-12    container mx-auto px-5'>
                <div className='bg-[#F4FBFF] lg:py-12 xl:px-14 px-7 md:py-14 py-7 rounded-2xl relative slide-up stagger-1 hover-lift'>
                    <h1 className='absolute lg:-top-2 -top-4 bg-[#006AAB] md:px-5 px-4 py-2 md:py-4 lg:-right-2 -right-1 text-white rounded-xl md:text-xl'>01</h1>
                    <h1 className='md:text-2xl text-xl leading-6 mb-3'>EXPRESS ENTRY DRAW #342 – Here's What Happened</h1>
                    <p className='mb-2 mt-4 lg:mt-0'>In the latest draw focusing on the Provincial Nominee Program (PNP), 825 candidates received invitations to apply for permanent residency. The minimum CRS score was 764.</p>
                    <Link to='/blog' className='text-[#006AAB] text-md lg:absolute  mt-4 lg:mt-0 bottom-4 flex items-center gap-1 hover:text-[#004d7a] transition-colors hover:underline'>
                        Read More <GoArrowUpRight />
                    </Link>
                </div>
                <div className='bg-[#F4FBFF] md:py-12 py-7 xl:px-14 px-7 rounded-2xl relative slide-up stagger-2 hover-lift'>
                    <h1 className='absolute lg:-top-2 -top-4 bg-[#006AAB] md:px-5 px-4 py-2 md:py-4 lg:-right-2 -right-1 text-white rounded-xl md:text-xl'>02</h1>
                    <h1 className='md:text-2xl text-xl leading-6 mb-3'>B.C. PNP Update: Important Changes for 2025</h1>
                    <p className='mb-2 mt-4 lg:mt-0'>British Columbia will accept only 1,100 new PNP applications this year, with a strict focus on high-demand roles like doctors.</p>
                    <Link to='/blog' className='text-[#006AAB] text-md lg:absolute mt-4 lg:mt-0 bottom-4 flex items-center gap-1 hover:text-[#004d7a] transition-colors hover:underline'>
                        Read More <GoArrowUpRight />
                    </Link>
                </div>
                <div className='bg-[#F4FBFF] md:py-12 py-7 xl:px-14 px-7 rounded-2xl relative slide-up stagger-3 hover-lift'>
                    <h1 className='absolute lg:-top-2 -top-4 bg-[#006AAB] md:px-5 px-4 py-2 md:py-4 lg:-right-2 -right-1 text-white rounded-xl md:text-xl'>03</h1>
                    <h1 className='md:text-2xl text-xl leading-6 mb-2'>You're Not Alone on This Journey Join Our 500K+ Strong Community!!!</h1>
                    <p className='mb-2 mt-4 lg:mt-0'>Connect with over half a million people who are also pursuing their Canadian dreams in our active social media groups.</p>
                    <Link to='/contact-us' className='text-[#006AAB] text-md lg:absolute  mt-4 lg:mt-0 bottom-4 flex items-center gap-1 hover:text-[#004d7a] transition-colors hover:underline'>
                        Read More <GoArrowUpRight />
                    </Link>
                </div>
            </div>

            <FadeInOnScroll><WhoWeAre /></FadeInOnScroll>
            <FadeInOnScroll><div className='p-3 mb-3 container mx-auto'>
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold leading-tight text-center mb-3">
                    <span>Your Canadian Dream, </span>Supported Every Step of the Way.
                </h1>
                <h6 className='text-center w-auto lg:w-[60rem] leading-6 md:text-xl text-base mx-auto px-5'>Thinking about moving to Canada can bring up a mix of excitement and questions. We get it. Our mission is to be your trusted partner, offering clear guidance and strong support to help you confidently navigate the immigration process. Let's work together to make your dream a reality.
                </h6>
            </div></FadeInOnScroll>

            {/* Student Visa Cards */}
            <div className='grid lg:grid-cols-3 gap-6 lg:px-8 xl:px-20 md:px-32 pt-4 xl:pb-20 pb-18 lg:py-8 container mx-auto px-5'>
                <Link to='/our-services' className='border-1 border-[#006AAB] rounded-2xl lg:p-8 lg:py-12 p-6 bg-[#F4FBFF] relative hover:bg-[#006AAB] hover:text-white group transition duration-400 cursor-pointer block scale-in stagger-1 hover-lift'>
                    <div className='flex gap-2 lg:flex-col'>
                        <img className='md:w-9 w-6 object-cover mb-3 group-hover:brightness-0 group-hover:invert' src={Aeroplane} alt="" />
                        <h5 className='md:text-3xl text-2xl md:mb-3 '>Student Visa</h5>
                    </div>
                    <h4 className='md:text-lg mb-6'>Imagine starting your studies in Canada focused on your classes and new experiences, not stressed about paperwork. We help international students like you secure the right study permits, making sure your educational journey begins smoothly.</h4>
                    <span className='flex items-center gap-2 hover:underline lg:absolute bottom-6'>Read More <GoArrowUpRight /></span>
                </Link>
                <Link to='/our-services' className='border-1 border-[#006AAB] rounded-2xl lg:p-8 lg:py-12 p-6 bg-[#F4FBFF] relative hover:bg-[#006AAB] hover:text-white group transition duration-400 cursor-pointer block scale-in stagger-2 hover-lift'>
                    <div className='flex gap-2 lg:flex-col'>
                        <PiNotebook className='text-[#006AAB] mb-2 text-3xl md:text-5xl group-hover:brightness-0 group-hover:invert' />
                        <h5 className='md:text-3xl text-2xl mb-3'>Express Entry</h5>
                    </div>
                    <h4 className='md:text-lg mb-6'>The Express Entry system is Canada's main pathway for skilled professionals like you. It can seem competitive, but a well-prepared application makes all the difference. We help you build a strong profile and navigate each step with clarity.</h4>
                    <span className='flex items-center gap-2 hover:underline lg:absolute bottom-6'>Read More <GoArrowUpRight /></span>
                </Link>
                <Link to='/our-services' className='border-1 border-[#006AAB] rounded-2xl lg:p-8 lg:py-12 p-6 bg-[#F4FBFF] relative hover:bg-[#006AAB] hover:text-white group transition duration-400 cursor-pointer block scale-in stagger-3 hover-lift'>
                    <div className='flex gap-2 lg:flex-col'>
                        <img className='md:w-9 w-6 object-cover mb-3 group-hover:brightness-0 group-hover:invert' src={HandShake} alt="" />
                        <h5 className='tmd:text-3xl text-2xl mb-3'>Family Sponsorship</h5>
                    </div>
                    <h4 className='md:text-lg mb-6'>There's nothing more important than having your loved ones close by. The Family Sponsorship program allows you to bring your relatives to Canada to live, study, and work. We help you understand the process and reunite your family.</h4>
                    <span className='flex items-center gap-2 hover:underline lg:absolute bottom-6'>Read More <GoArrowUpRight /></span>
                </Link>
            </div>

            {/* Employer Section */}
            <div className='bg-[#006AAB]'>
                <div className='grid lg:grid-cols-2 px-5 lg:px-8 xl:px-20 md:px-32 xl:py-16 py-12 lg:gap-16 gap-12 container mx-auto'>
                    <div className='bg-white lg:px-12 py-10 px-5 relative pb-28 slide-in-left hover-lift rounded-xl lg:rounded-none'>
                        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold leading-tight lg:mb-5 md:mb-3 mb-2">
                            <span>I'm an</span> Employer
                        </h1>
                        <span className='lg:text-3xl md:text-2xl text-xl lg:mb-5 md:mb-3 mb-2 block'>Your Bridge to Global Talent</span>
                        <p className='lg:text-xl md:text-lg lg:mb-5 md:mb-3'>
                            You've found the perfect candidate overseas. Now, how do you get them here without getting lost in paperwork? We make it simple. Partner with us for end-to-end immigration support that lets you focus on what you do best—running your business. We handle the complexities of Canadian immigration, making the process smooth for you and your new hire.
                        </p>
                        <Link
                            to="/employer"
                            className="flex items-center justify-center w-fit group absolute bottom-12"
                        >
                            <button
                                id="buttonStyle"
                                className="py-2  px-4 pr-8  rounded-l-full rounded-r-4xl text-white lg:mt-3 sm:text-xl mt-5 group-hover:bg-[#1085ce] transition-all duration-100 "
                            >
                                Discover More
                            </button>
                            <div className="bg-[#006AAB] absolute lg:mt-3 mt-5 border-2 border-white rounded-full -right-5 group-hover:-right-7 group-hover:bg-[#1085ce] transition-all duration-100">
                                <IoIosArrowRoundForward size={42} className="text-white transition-all duration-100 group-hover:-rotate-32" />
                            </div>
                        </Link>
                    </div>
                    <div className='bg-white lg:px-12 py-10 relative px-5 pb-28 slide-in-right hover-lift rounded-xl lg:rounded-none'>
                        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold leading-tight lg:mb-5 md:mb-3 mb-2">
                            <span>I AM AN</span> ASPIRANT
                        </h1>
                        <span className='lg:text-3xl md:text-2xl text-xl lg:mb-5 md:mb-3 mb-2 block'>Is Canada On Your Mind? Let's Make It Happen.?</span>
                        <p className='lg:text-xl md:text-lg lg:mb-5 md:mb-3'>
                            Dreaming of a life in Canada but unsure where to start? You're not alone. The immigration system can feel like a maze. That's where we come in. We provide clear, personalized advice that cuts through the noise. With our proven expertise, we'll help you find the fastest route and guide you through each step, making your journey to Canada feel surprisingly straightforward.
                        </p>
                        <Link
                            to="/contact-us"
                            className="flex items-center justify-center  w-fit group absolute bottom-12"
                        >
                            <button
                                id="buttonStyle"
                                className="py-2  px-4 pr-8  rounded-l-full rounded-r-4xl text-white lg:mt-3 sm:text-xl mt-5 group-hover:bg-[#1085ce] transition-all duration-100 "
                            >
                                Start Your Journey
                            </button>
                            <div className="bg-[#006AAB] absolute lg:mt-3 mt-5 border-2 border-white rounded-full -right-5 group-hover:-right-7 group-hover:bg-[#1085ce] transition-all duration-100">
                                <IoIosArrowRoundForward size={42} className="text-white transition-all duration-100 group-hover:-rotate-32" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Remaining Sections */}
            <FadeInOnScroll>
                <WhyChooseUs />
            </FadeInOnScroll>
            <FadeInOnScroll>
                <Testimonial />
            </FadeInOnScroll>
            <FadeInOnScroll>
                <LatestNews />
            </FadeInOnScroll>
            <FadeInOnScroll>
                <Faq />
            </FadeInOnScroll>
        </div >
    )
}

export default Home
