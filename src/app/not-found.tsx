'use client'
import React from 'react'
import './not-found.css'

import NotFoundImage from '../illusturation/404 Error with a cute animal-amico.svg'
import ArrowIcon from '../icons/arrow-left.svg'
import Image from 'next/image'
import Link from 'next/link'

function not_found() {
  return (
    <div className='not-found-container'>
        <Image src={NotFoundImage} alt='not-found-image' className='not-found-image'/>
        <div className='description'>صفحه مورد نظر یافت نشد</div>
        <div onClick={(e) => {history.back()}} className='back-button-container'>
            <Image src={ArrowIcon} alt='arrow-icon'/>
            <div className='text'>بازگشت به صفحه قبل</div>
        </div>
    </div>
  )
}

export default not_found