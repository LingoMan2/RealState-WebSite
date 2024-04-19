import React from 'react'
import '../Footer/Footer.css'
import Image from 'next/image'
import Logo from '../../logos/Logo.png'

import MapIcon from '../../icons/Map.svg'
import PhoneIcon from '../../icons/Phone.svg'
import UserSpokenIcon from '../../icons/User Speak.svg'
import InstagramIcon from '../../icons/instagram.svg'

import EnamadLogo from '../../logos/enamad-logo.png'
import SamandehiLogo from '../../logos/Samandehi.png'
import Link from 'next/link'


function Footer() {
  return (
    <footer>
      <div className='footer-elements'>
        <Image src={Logo} alt='logo' className='logo' />
        <div className='section-container'>
          <div className='contact-us-container'>
            <div className='title'>ارتباط با ما</div>
            <div className='texts-container'>
              <div className='main-branch-address'>
                <Image src={MapIcon} alt='map-icon' />
                <div className='text'>ادرس شعبه اصلی: فلان جا</div>
              </div>
              <div className='phone-number-container'>
                <Image src={PhoneIcon} alt='phone-icon' />
                <div className='text'>شماره تماس: 09110000000</div>
              </div>
              <div className='consultant-number-container'>
                <Image src={UserSpokenIcon} alt='user-icon' />
                <div className='text'>مشاوره: 09110000000</div>
              </div>
            </div>
            <div className='social-media-container'>
              <div className='title'>فضای مجازی ما</div>
              <div className='social-media-list'>
                <Link href={""} className='instagram-a'>
                  <Image src={InstagramIcon} alt='instagram-logo' className='instagram-logo' />
                </Link>
              </div>
            </div>
          </div>
          <div className='shortcuts-container'>
            <div className='title'>دسترسی سریع</div>
            <div className='links-container'>
              <Link href={""}>مشاوره</Link>
              <Link href={""}>شعبه ها</Link>
              <Link href={""}>ثبت اگهی</Link>
              <Link href={""}>نحوه ثبت اگهی</Link>
              <Link href={"/blogs"}>وبلاگ املاک برتر</Link>
            </div>
          </div>
          <div className='permissions-container'>
            <div className='title'>مجوز ها</div>
            <div className='permissions-list'>
              <Image src={EnamadLogo} alt='enamad-logo'/>
              <Image src={SamandehiLogo} alt='samandehi-logo'/>
            </div>
          </div>
        </div>
        <div className='copy-right'>&copy; amlakbartar.ir | سایت املاک برتر دارای حق کپی رایت هستش و هر گونه کپی برداری پیگرد قانونی دارد</div>
      </div>
    </footer>
  )
}

export default Footer