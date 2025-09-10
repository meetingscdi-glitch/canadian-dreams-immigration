import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import HeaderImg from '../assets/images/Headerimg.png';
import Vancouver from '../assets/images/Vancouver.jpg';
import Vancouver1 from '../assets/images/Vancouver1.jpg';
import CiccLogo from '../assets/images/Cicclogo.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const BannerCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const headingRef = useRef();
    const subheadingRef = useRef();
    const paragraphRef = useRef();

    // Slide change animation
    const animateSlide = () => {
        const tl = gsap.timeline();
        tl.fromTo([headingRef.current, subheadingRef.current, paragraphRef.current],
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
        );
    };

    // Initial animation
    useGSAP(() => {
        animateSlide();
    }, [currentSlide]);

    const bannerData = [
        {
            heading: "CICC REGISTERED",
            subheading: "All your immigration needs, expertly managed under one roof.",
            paragraph: "Thinking of moving to Canada? Enjoy better careers, top education, and a great quality of life in a welcoming country!",
            image: HeaderImg,
            animation: "slideInLeft"
        },
        {
            heading: "STUDY IN CANADA",
            subheading: "Transform your future with world-class Canadian education.",
            paragraph: "Access top universities, gain valuable work experience, and build your path to permanent residency through our expert student visa services.",
            image: Vancouver1,
            animation: "fadeInUp"
        },
        {
            heading: "EXPERT IMMIGRATION",
            subheading: "Your trusted partner for Canadian immigration success.",
            paragraph: "With proven expertise in Express Entry, PNP, and family sponsorship, we guide you through every step of your Canadian journey.",
            image: Vancouver,
            animation: "slideInRight"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        beforeChange: (current, next) => setCurrentSlide(next),
        customPaging: () => (
            <div className="w-3 h-3 bg-white/50 rounded-full hover:bg-white transition-all duration-300"></div>
        ),
        dotsClass: "slick-dots custom-dots"
    };

    return (
        <div className="banner-carousel">
            <Slider {...settings}>
                {bannerData.map((banner, index) => (
                    <div key={index}>
                        <div className='w-full relative'>
                            <div className='xl:h-[47rem] h-[50vh] w-full overflow-hidden'>
                                <div className='absolute top-0 left-0 bg-gradient-to-r from-[#000000DE] to-transparent w-full h-full z-10'></div>
                                <img
                                    className={`w-full h-full object-cover transition-transform duration-1000 ${currentSlide === index ? 'scale-110' : 'scale-100'
                                        }`}
                                    src={banner.image}
                                    alt={banner.heading}
                                />
                            </div>
                            <div className='container mx-auto absolute top-0 left-0 right-0 z-20'>
                                <img className='xl:w-64 lg:w-50 w-42 absolute right-3 top-3' src={CiccLogo} alt="CICC IMAGE" />
                                <div className={`absolute xl:top-[16rem] top-[6rem] text-[#FFFFFF] px-5 md:pl-10 lg:ml-5 lg:pl-0 ${currentSlide === index ? `animate-${banner.animation}` : 'opacity-0'
                                    }`}>
                                    <h1 className='xl:text-[5rem] text-4xl md:text-6xl md:mb-0 leading-14' ref={index === currentSlide ? headingRef : null}>
                                        {banner.heading}
                                    </h1>
                                    <h2
                                        className='lg:text-2xl lg:w-2/3 lg:leading-8 xl:text-3xl md:text-xl text-base tracking-wider xl:w-3/4 xl:leading-12 leading-6 md:leading-5 md:mb-3 pb-2 xl:mt-6 md:mt-6 lg:mt-4'
                                        ref={index === currentSlide ? subheadingRef : null}
                                    >
                                        {banner.subheading}
                                    </h2>
                                    <p
                                        className='text-base md:text-xl lg:leading-8 md:leading-8 xl:leading-8 md:w-3/5'
                                        ref={index === currentSlide ? paragraphRef : null}
                                    >
                                        {banner.paragraph}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BannerCarousel;
