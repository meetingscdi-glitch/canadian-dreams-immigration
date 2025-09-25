import React from 'react'
import Navbar from '../components/Navbar'
import SectionWithImage from '../components/SectionWithImage'
import Blogcart from '../components/Blogcart'
import Footer from '../components/Footer'
import FadeInOnScroll from './FadeInOnScroll'

const Blog = () => {
  return (
    <div>
      <FadeInOnScroll>
        <SectionWithImage />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <Blogcart />
      </FadeInOnScroll>
    </div>
  )
}

export default Blog
