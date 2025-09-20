import CanadianDreamImg from '../assets/images/Building.webp'
import AboutCanadianImg from '../assets/images/AboutCanadian.png'
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import staticText from '../content/staticData';
import { IoIosArrowRoundForward } from "react-icons/io";

const CanadianDreams = () => {
    const Location = useLocation();
    const currentpath = Location.pathname;
    const ImageRoutes = {
        '/': {
            image: CanadianDreamImg,
            heading: 'About Us'
        },
        '/about-us': {
            image: AboutCanadianImg,
        },

    };
    const { image } = ImageRoutes[currentpath];

    return (
        <div className='grid lg:grid-cols-2 gap-2 md:gap-0 lg:py-20 py-8  px-5 md:px-10 lg:px-0 container mx-auto '>
            <div className='xl:pl-20 xl:pr-12 lg:ml-8 xl:ml-0 overflow-hidden' >
                <img className='md:rounded-3xl rounded-xl w-full h-full object-cover' src={image} alt="BuildingImg" />
            </div>
            <div className='lg:ml-8 xl:ml-0 overflow-hidden'>
                <h6 className='text-[#006AAB] md:text-lg mt-4 md:mt-6 lg:mt-0 flex items-center text-base'><TfiLayoutLineSolid size={28} />About Us</h6>
                <h1 className='lg:text-5xl text-3xl md:text-4xl lg:mt-1.5 sm:mt-2'>Canadian Dreams</h1>
                <h1 className="lg:text-5xl text-3xl md:text-4xl font-bold lg:w-3/4 lg:leading-tight lg:mt-1.5">
                    Immigration <span>& Worldwide Services Ltd.</span>
                </h1>
                <p className='xl:w-5/6 lg:mb-6  mt-3 text-base sm:text-xl xl:mr-12 mr-8'>Is a federally incorporated and CICC-licensed Canadian immigration consultancy firm headquartered in Brampton, Ontario. Founded with the vision of delivering ethical, transparent, and result-oriented immigration services, we take pride in being a trusted partner for individuals, families, and businesses navigating Canada’s complex immigration landscape.</p>
                <Link
                    to="/contact-us"
                    className="flex items-center justify-center relative w-fit group"
                >
                    <button
                        id="buttonStyle"
                        className="py-2  px-4 pr-8  rounded-l-full rounded-r-4xl text-white lg:mt-3 sm:text-xl mt-5 group-hover:bg-[#1085ce] transition-all duration-100"
                    >
                        {staticText.ctaTexts[2]}
                    </button>
                    <div className="bg-[#006AAB] absolute lg:mt-3 mt-5 border-2 border-white rounded-full -right-5 group-hover:-right-7 group-hover:bg-[#1085ce] transition-all duration-100">
                        <IoIosArrowRoundForward size={42} className="text-white transition-all duration-100 group-hover:-rotate-32" />
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default CanadianDreams
