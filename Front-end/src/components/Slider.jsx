import React, { useState, useEffect } from 'react'
import Img1 from '../assets/smallimages/Passport.png'
import Img2 from '../assets/smallimages/Lady.png'
import { IoMdArrowRoundForward } from "react-icons/io"
import { IoArrowBack } from "react-icons/io5"

const Slider = () => {
  const slideData = [
    { img: Img1 },
    { img: Img2 },
    { img: Img1 },
    { img: Img2 },
    { img: Img1 },
    { img: Img2 }
  ]

  const [current, setCurrent] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  // Responsive logic
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth
      if (width < 768) setVisibleCount(1)        // Mobile
      else if (width < 1024) setVisibleCount(2)  // Medium screens
      else setVisibleCount(3)                    // Desktop
    }

    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const previousSlide = () => {
    setCurrent(prev =>
      prev === 0 ? slideData.length - visibleCount : prev - 1
    )
  }

  const nextSlide = () => {
    setCurrent(prev =>
      prev + visibleCount >= slideData.length ? 0 : prev + 1
    )
  }

  // Wrap-around logic for visible slides
  const visibleSlides = []
  for (let i = 0; i < visibleCount; i++) {
    const index = (current + i) % slideData.length
    visibleSlides.push(slideData[index])
  }

  return (
    <div className="container max-w-7xl bg-red-600 mx-auto mt-20 relative  overflow-hidden px-4 py-12">
      {/* Slide Group */}
      <div className="flex">
        {visibleSlides.map((e, index) => (
          <div key={index} className="bg-white md:ml-6  w-full max-w-sm shadow-md transition-transform duration-[1200ms] ease-in-out">
            <img src={e.img} alt={`Slide ${index}`} className="w-full h-56 object-cover" />
            <p className="text-gray-700 text-sm p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati alias ratione assumenda animi, vitae esse ea sed, distinctio rerum aspernatur dolor vero laboriosam quam delectus iste. Eius, omnis quasi!
            </p>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute w-full left-0 flex justify-between top-1/2  transform -translate-y-1/2">
        <IoArrowBack
          onClick={previousSlide}
          className="text-white text-3xl cursor-pointer hover:scale-110 transition"
        />
        <IoMdArrowRoundForward
          onClick={nextSlide}
          className="text-white text-3xl cursor-pointer hover:scale-110 transition"
        />
      </div>
    </div>
  )
}

export default Slider
