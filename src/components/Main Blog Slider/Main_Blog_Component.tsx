'use client'
import React from 'react'
import '../Main Blog Slider/Main_Blog_Component.css'
import Logo from '../../helpers/Blogs-Images/b2a50e.jpg'
import CalenderIcon from '../../icons/Calender.svg'
import PencilIcon from '../../icons/Pencil.svg'
import Image from 'next/image'
import Link from 'next/link'

function Main_Blog_Component({ Data }: { Data: any }) {
    return (
        <Link href={"blogs/" + Data? Data.Title : null} className='blog-card'>
            <div className='blog-image'>
                <Image src={require(`../../helpers/Blogs-Images/${Data.Picture}`)} alt='blog-image'/>
            </div>
            <div className='blog-details'>
                <div className='blog-added-date-container'>
                    <Image src={CalenderIcon} alt='calender-icon' />
                    <div className='text'>تاریخ: {Data ? Data.Added_Date : "N/A"}</div>
                </div>
                <div className='blog-writer-container'>
                    <Image src={PencilIcon} alt='calender-icon' />
                    <div className='text'>نویسنده: {Data ? Data.Writer : "N/A"}</div>
                </div>
            </div>
            <div className='blog-title'>{Data ? Data.Title : "N/A"}</div>
            <div className='blog-half-description'>{Data ? Data.Main_Description.length > 260 ? Data.Main_Description.slice(0, 260) + "..." : Data.Main_Description : "N/A"}</div>
            <div className='read-more-button'>ادامه مطلب</div>
        </Link>
    )
}

export default Main_Blog_Component