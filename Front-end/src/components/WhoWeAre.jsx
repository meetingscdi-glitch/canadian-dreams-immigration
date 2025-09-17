
import WhoWeImg from '../assets/images/WhoWeImg.png'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const WhoWeAre = () => {
    Link
    return (
        
        <div className='bg-[#F4FBFF]'>
            <div className='grid lg:grid-cols-2 lg:py-18 lg:mb-12 mb-8 py-8 px-5 md:px-10 lg:px-0 container mx-auto'>
            <div className='xl:ml-20 lg:ml-8 xl:mr-12  rounded-xl overflow-hidden'>
                <div className='w-full h-full bg-cover'>
                    <img className=' w-full bg-cover h-full lg:rounded-3xl ' src={WhoWeImg} alt="Smile" />
                </div>
            </div>
            <div className='lg:ml-10 xl:ml-0 overflow-hidden'>
                <h6 className='text-[#006AAB] text-lg lg:mt-0 mt-6 flex items-center'><TfiLayoutLineSolid size={28}/>Who we are</h6>
                <span className='lg:text-5xl md:text-4xl text-3xl block md:mt-4 lg:mt-0'>Best Immigration</span>
                <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold lg:w-2/3 leading-tight lg:mt-1.5">
                    and Visa Consultation.
                </h1>
                <p className='lg:w-5/6 mb-6 mt-3 md:text-lg lg:mr-12'>Looking for expert immigration and visa consultation? We provide professional guidance on visas, permanent residency, work permits, and study permits to help you achieve your dream of moving abroad. Let’s make your journey smooth and stress-free!</p>
                <h5 className='poppins-regular flex items-center md:text-lg lg:mb-6 mb-4'>
                    <IoMdCheckmarkCircleOutline size={25} color='#006AAB' className='mr-2' />
                    Expert guidance on visas & PR
                </h5>
                <h5 className='poppins-regular flex items-center md:text-lg lg:mb-6 mb-4'>
                    <IoMdCheckmarkCircleOutline size={25} color='#006AAB' className='mr-2' />
                    Work & study permit assistance 
                </h5>
                <h5 className='poppins-regular flex items-center md:text-lg lg:mb-6 mb-4'>
                    <IoMdCheckmarkCircleOutline size={25} color='#006AAB' className='mr-2' />
                    Hassle-free application process
                </h5>
                <h5 className='poppins-regular flex items-center md:text-lg lg:mb-6 mb-4'>
                    <IoMdCheckmarkCircleOutline size={25} color='#006AAB' className='mr-2' />
                    Personalized immigration solutions
                </h5>

                 <Link
                    to="/privacy-policy"
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
        </div>
    )
}

export default WhoWeAre
