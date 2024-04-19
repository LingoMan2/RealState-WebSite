'use client'
import React from 'react'
import '../Main Blog Slider/Main_Blog_Slider.css'
import Main_Blog_Component from './Main_Blog_Component'
import Blogs from '../../helpers/Blogs'

function Main_Blog_Slider() {
  return (
    <div className='blogs-slider-container'>
      <div className='title'>وبلاگ املاک برتر</div>
      <div className='blog-slider-container'>
        <div className='blog-slider'>
          <Main_Blog_Component Data={Blogs[0]}/>
          <Main_Blog_Component Data={Blogs[1]}/>
          <Main_Blog_Component Data={Blogs[2]}/>
        </div>
      </div>
      <div className='read-more-button'>مطالب بیشتر</div>
    </div>
  )
}

export default Main_Blog_Slider