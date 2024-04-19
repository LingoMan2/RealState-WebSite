'use client'
import React, { useEffect, useRef, useState } from 'react'
import Logo from '../../logos/Logo.png'
import '../Header/Header.css'
import Image from 'next/image'
import HamburgerMenuNormalIcon from '../../icons/Hamburger Menu Normal.svg'
import HamburgerMenuOrangeIcon from '../../icons/Hamburger Menu Orange.svg'

import ArrowLeftNormalIcon from '../../icons/ArrowLeft Normal.svg'
import ArrowLeftOrangeIcon from '../../icons/ArrowLeft Orange.svg'

import UserCicleIcon from '../../icons/UserCircle.svg'
import Link from 'next/link'

import UserIcon from '../../icons/user.png'


function Header() {
  const [MenuOpened, ToggleMenu] = useState(false)

  // useEffect(() => {
  //   const HeaderElement = document.getElementById("header") as HTMLDivElement
  //   const MainElement = document.querySelector("main") as HTMLDivElement
  //   window.addEventListener("scroll", () => {
  //     let Distance_Between_Header_And_Scroll = window.scrollY - HeaderElement?.scrollHeight
  //     if (Distance_Between_Header_And_Scroll >= -1 && Distance_Between_Header_And_Scroll <= 2) {
  //       HeaderElement.style.position = "fixed"
  //       HeaderElement.style.top = "0px"
  //       MainElement.style.marginTop = HeaderElement.offsetHeight + "px"

  //     }
  //   })
  // }, [])

  const ToggleResponsiveMenu = () => {
    const NavigationMenu = document.getElementById("navigation-list-non-respansive") as HTMLDivElement
    if (!MenuOpened) {
      ToggleMenu(true)
      NavigationMenu.style.display = "flex"
      setTimeout(() => {
        NavigationMenu.style.height = "400px"
      }, 50);
    } else {
      ToggleMenu(false)
      NavigationMenu.style.height = "0px"
      setTimeout(() => {
        NavigationMenu.style.display = "none"
      }, 400);
    }
  }


  const ToggleNonResponsiveMenu = () => {
    const NavigationMenu = document.getElementById("navigation-list-respansive") as HTMLDivElement
    if (!MenuOpened) {
      ToggleMenu(true)
      NavigationMenu.style.display = "flex"
      setTimeout(() => {
        NavigationMenu.style.width = "200px"
      }, 50);
    } else {
      ToggleMenu(false)
      NavigationMenu.style.width = "0px"
      setTimeout(() => {
        NavigationMenu.style.display = "none"
      }, 400);
    }
  }


  const [SellingMenu, ToggleSellingMenu] = useState(false)

  const ToggleResponsiveSellingSection = () => {
    const SellingContainer = document.getElementById("selling-menu") as HTMLDivElement
    const SellingContainerArrow = document.getElementById("selling-menu-arrow") as HTMLImageElement
    if (!SellingMenu) {
      ToggleSellingMenu(true)
      SellingContainer.style.height = "150px"
      SellingContainerArrow.style.transform = "rotate(-90deg)"
    } else {
      ToggleSellingMenu(false)
      SellingContainer.style.height = "30px"
      SellingContainerArrow.style.transform = "rotate(0deg)"
    }
  }


  const [EjareMenu, ToggleEjareMenu] = useState(false)

  const ToggleResponsiveEjareSection = () => {
    const EjareContainer = document.getElementById("ejare-menu") as HTMLDivElement
    const EjareContainerArrow = document.getElementById("ejare-menu-arrow") as HTMLImageElement
    if (!EjareMenu) {
      ToggleEjareMenu(true)
      EjareContainer.style.height = "150px"
      EjareContainerArrow.style.transform = "rotate(-90deg)"
    } else {
      ToggleEjareMenu(false)
      EjareContainer.style.height = "30px"
      EjareContainerArrow.style.transform = "rotate(0deg)"
    }
  }


  const [OtherMenu, ToggleOtherMenu] = useState(false)

  const ToggleResponsiveOtherSection = () => {
    const OtherContainer = document.getElementById("Other-menu") as HTMLDivElement
    const OtherContainerArrow = document.getElementById("Other-menu-arrow") as HTMLImageElement
    if (!OtherMenu) {
      ToggleOtherMenu(true)
      OtherContainer.style.height = "150px"
      OtherContainerArrow.style.transform = "rotate(-90deg)"
    } else {
      ToggleOtherMenu(false)
      OtherContainer.style.height = "30px"
      OtherContainerArrow.style.transform = "rotate(0deg)"
    }
  }

  return (
    <header id='header'>
      <div className='navigation-list-non-respansive' id='navigation-list-non-respansive'>
        <div className='selling-section'>
          <div className='title'>خرید</div>
          <div className='links'>
            <Link href={""}>خانه</Link>
            <Link href={""}>زمین</Link>
            <Link href={""}>مغازه</Link>
          </div>
        </div>
        <div className='rahn-ejare-section'>
          <div className='title'>رهن و اجاره</div>
          <div className='links'>
            <Link href={""}>خانه</Link>
            <Link href={""}>زمین</Link>
            <Link href={""}>مغازه</Link>
          </div>
        </div>
        <div className='other-section'>
          <div className='title'>متفرقه</div>
          <div className='links'>
            <Link href={""}>مشاوره</Link>
            <Link href={""}>ثبت اگهی</Link>
            <Link href={""}>شعبه ها</Link>
          </div>
        </div>
      </div>

      <div className='navigation-list-respansive' id='navigation-list-respansive'>
        <div className='selling-section' id='selling-menu'>
          <div className='title-section' onClick={() => { ToggleResponsiveSellingSection() }}>
            <Image src={SellingMenu ? ArrowLeftOrangeIcon : ArrowLeftNormalIcon} alt='arrow-icon' id='selling-menu-arrow' />
            <div className='title'>خرید</div>
          </div>
          <div className='links'>
            <Link href={""}>خانه</Link>
            <Link href={""}>زمین</Link>
            <Link href={""}>مغازه</Link>
          </div>
        </div>
        <div className='rahn-ejare-section' id='ejare-menu'>
          <div className='title-section' onClick={() => { ToggleResponsiveEjareSection() }}>
            <Image src={EjareMenu ? ArrowLeftOrangeIcon : ArrowLeftNormalIcon} alt='arrow-icon' id='ejare-menu-arrow' />
            <div className='title'>رهن و اجاره</div>
          </div>
          <div className='links'>
            <Link href={""}>خانه</Link>
            <Link href={""}>زمین</Link>
            <Link href={""}>مغازه</Link>
          </div>
        </div>
        <div className='other-section' id='Other-menu'>
          <div className='title-section' onClick={() => { ToggleResponsiveOtherSection() }}>
            <Image src={OtherMenu ? ArrowLeftOrangeIcon : ArrowLeftNormalIcon} alt='arrow-icon' id='Other-menu-arrow' />
            <div className='title'>متفرقه</div>
          </div>
          <div className='links'>
            <Link href={""}>مشاوره</Link>
            <Link href={""}>ثبت اگهی</Link>
            <Link href={""}>شعبه ها</Link>
          </div>
        </div>
      </div>
      <div className='header-elements'>
        <Link href={"/login"} className='user-button-container'>
          <Image src={UserCicleIcon} alt='user-icon' />
        </Link>
        {/* <div className='user-profile-picture'>
          <Image src={UserIcon} alt='user-icon'/>
        </div> */}
        <Image src={Logo} alt='logo' className='header-logo' />
        <div className='navigation-menu-button-non-responsive' onClick={() => { ToggleResponsiveMenu() }}>
          <Image src={MenuOpened ? HamburgerMenuOrangeIcon : HamburgerMenuNormalIcon} alt='hamburger-menu' />
        </div>
        <div className='navigation-menu-button-responsive' onClick={() => { ToggleNonResponsiveMenu() }}>
          <Image src={MenuOpened ? HamburgerMenuOrangeIcon : HamburgerMenuNormalIcon} alt='hamburger-menu' />
        </div>
      </div>
    </header>
  )
}

export default Header