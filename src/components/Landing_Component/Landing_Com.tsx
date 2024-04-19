'use client'
import React from 'react'
import './Landing_Com.css'
import Image from 'next/image'
import BackGroundImage from '../../logos/110.jpg'
import CountUp from 'react-countup'

function Landing_Com() {
    return (
        <div className='landing-container'>
            <Image src={BackGroundImage} alt='background-image' />
            <div className='texts-container'>
                <div className='website-name'>املاک برتر</div>
                <p className='description'><CountUp start={0} end={1000} delay={0} duration={4} className='count-up' /> خانه و ملک ثبت شده در املاک برتر، بهترین و مطمئن ترین سایت مشاور املاک کشور</p>
            </div>
            <div className='button-container'>
                <div className='text'>دنبال خونه میگردی؟ پس روی دکمه زیر کلیک کن 😉</div>
                <button className='explore-houses-button'>شروع جست و جو</button>
            </div>
        </div>
    )
}

export default Landing_Com