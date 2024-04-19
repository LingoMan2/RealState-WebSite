import React from 'react'
import './Register_Ad_Com.css'
import Image from 'next/image'

import House_Find_Picture from '../../illusturation/Select house-amico.svg'
import Link from 'next/link'

const Description = "دوست داری خونت رو به صورت آنلاین بفروشی؟ پس جای درستی اومدی!\n\nبا ثبت آگهی در سایت املاک برتر خونه یا ملکت رو به راحتی و بدون دردسر و در کمترین زمان ممکن بفروش\nبا مراجعه به بخش ثبت آگهی و خواندن قوانین ثبت آگهی و با مشورت با کارشناسان سایت املاک برتر خونت رو بفروش."


function Register_Ad_Com() {
  return (
    <div className='register-ad-container'>
      <div className='picture-container'>
        <Image src={House_Find_Picture} alt='image' />
      </div>
      <div className='texts-container'>
        <div className='title'>فروش آنلاین خانه</div>
        <div className='description'>{Description}</div>
      </div>
      <Link href={"/advertisement-registration/"} className='register-ad-button'>بزن بریم</Link>
    </div>
  )
}

export default Register_Ad_Com