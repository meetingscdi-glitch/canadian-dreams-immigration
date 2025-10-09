import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { newsAPI } from '../services/api';
import { Link } from "react-router-dom";

// const LatestNewsData = [
//   {
//     name: "Mark Huff",
//     position: "Businessman",
//     img: "https://randomuser.me/api/portraits/men/82.jpg",
//     text: "Far far away, behind the word mountains...",
//   },
//   {
//     name: "Rodel Golez",
//     position: "Entrepreneur",
//     img: "https://randomuser.me/api/portraits/men/83.jpg",
//     text: "Separated they live in Bookmarksgrove right at the coast of the Semantics.",
//   },
//   {
//     name: "Ken Bosh",
//     position: "Designer",
//     img: "https://randomuser.me/api/portraits/men/84.jpg",
//     text: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
//   },
//   {
//     name: "John Doe",
//     position: "Developer",
//     img: "https://randomuser.me/api/portraits/men/85.jpg",
//     text: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
//   },
//   {
//     name: "Alex Smith",
//     position: "Marketer",
//     img: "https://randomuser.me/api/portraits/men/86.jpg",
//     text: "Even the all-powerful Pointing has no control about the blind texts.",
//   },
//   {
//     name: "Sam Wilson",
//     position: "Manager",
//     img: "https://randomuser.me/api/portraits/men/87.jpg",
//     text: "One day however a small line of blind text by the name of Lorem Ipsum decided to leave.",
//   },
// ];

const LatestNews = () => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [navReady, setNavReady] = useState(false);
  const [news, setNews] = useState([]);
  console.log(news);

  useEffect(() => {
    setNavReady(true);
  }, []);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await newsAPI.getAllLatestNews();
        // console.log(response.data.response[0].image);

        setNews(response.data.response);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="py-12 bg-[#F4FBFF] px-0.5 relative md:px-14 xl:px-32 mb-8 md:mt-3">
      <div className="container mx-auto px-4 relative">
        {/* Heading */}
        <div className="text-center mb-10">
          <h5 className='md:text-5xl text-3xl mx-auto w-full text-center'>Latest News</h5>
        </div>

        {/* Swiper */}
        {navReady && (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{
              clickable: true,
              el: ".custom-pagination", // move dots outside
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {news?.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="mb-4 rounded-b-xl shadow overflow-hidden md:mb-10 h-full min-h-[29rem] md:min-h-[30rem] flex flex-col bg-white relative">
                  <div className="flex flex-col">
                    <img src={t.image} alt="NewsImage" className="h-64 object-cover" />
                    <div className="px-3 mt-5 md:p-4 lg:p-6">
                      <h1
                        className="text-2xl font-medium"
                        dangerouslySetInnerHTML={{ __html: t.heading }}
                      />
                      <h3
                        className="text-lg mt-4 mb-3 lg:mb-6"
                        dangerouslySetInnerHTML={{ __html: t.paragraph }}
                      />
                      <Link
                        to='/blog'
                        className='text-[#006AAB] text-md lg:absolute bottom-3 flex items-center gap-1 hover:text-[#004d7a] transition-colors hover:underline pb-5 md:pb-0'
                      >
                        Read More <GoArrowUpRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        )}

        {/* Custom Buttons - positioned on left/right */}
        <div className="relative bg-[#F4FBFF] pb-2 mt-10 md:mt-0 md:pb-0">
          <button
            ref={prevRef}
            className="absolute w-fit -bottom-7 h-10 lg:bottom-0  left-1/4 md:-left-16 md:-top-[15rem] lg:-top-[15rem] md:-translate-y-1/2 bg-[#006AAB] text-white p-3 rounded-full shadow hover:bg-[#2580b9] cursor-pointer transition mb-4 md:mb-0"
          >
            <FaArrowLeft />
          </button>
          <button
            ref={nextRef}
            className="absolute -bottom-7 h-10 lg:bottom-0  right-1/4  md:-right-16  md:-top-[15rem] lg:-top-[15rem] md:-translate-y-1/2 bg-[#006AAB] text-white p-3 rounded-full shadow hover:bg-[#2580b9] cursor-pointer transition mb-4 md:mb-0"
          >
            <FaArrowRight />
          </button>

          {/* Pagination Dots Below */}
          {/* Pagination Dots - only show on large screens */}
          <div className="custom-pagination hidden md:flex gap-2 justify-center mt-4"></div>
        </div>

      </div>
    </div>
  );
};

export default LatestNews;
