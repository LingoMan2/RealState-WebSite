'use client'
import Image from 'next/image'
import React from 'react'
import '../Login/Login.css'
import { useEffect } from 'react'


import PhoneIcon from '../../icons/PhoneBlack.svg'
import LockIcon from '../../icons/Lock.svg'
import EyeOpenIcon from '../../icons/Eye.svg'
import EyeCloseIcon from '../../icons/Eye Closed.svg'


function Login() {
  const [ShowingPassword, ToggleShowingPassword] = React.useState(false)

  const ToggleShowingPasswordFunction = () => {
    ToggleShowingPassword(!ShowingPassword)
  }


  useEffect(() => {
    const LoginPhoneNumberInput = document.getElementById("login-phone-number-input") as HTMLInputElement
    const LoginPhoneNumberText = document.getElementById("login-phone-number-text") as HTMLDivElement

    const LoginPasswordInput = document.getElementById("login-password-input") as HTMLInputElement
    const LoginPasswordText = document.getElementById("login-password-text") as HTMLDivElement


    LoginPhoneNumberInput?.addEventListener("focus", () => {
      if (LoginPhoneNumberInput.value.length > 0 || LoginPhoneNumberInput.value.length <= 0) {
        if (LoginPhoneNumberText) {
          LoginPhoneNumberText.style.transform = "translateY(-25px)"
          LoginPhoneNumberText.style.fontSize = "13px"
          LoginPhoneNumberText.style.color = "white"
        }
      }
    })
    LoginPhoneNumberInput?.addEventListener("focusout", () => {
      if (LoginPhoneNumberInput.value.length <= 0) {
        if (LoginPhoneNumberText) {
          LoginPhoneNumberText.style.transform = "translateY(0px)"
          LoginPhoneNumberText.style.fontSize = "15px"
          LoginPhoneNumberText.style.color = "black"
        }
      }
    })


    LoginPasswordInput?.addEventListener("focus", () => {
      if (LoginPasswordInput.value.length > 0 || LoginPasswordInput.value.length <= 0) {
        if (LoginPasswordText) {
          LoginPasswordText.style.transform = "translateY(-25px)"
          LoginPasswordText.style.fontSize = "13px"
          LoginPasswordText.style.color = "white"
        }
      }
    })
    LoginPasswordInput?.addEventListener("focusout", () => {
      if (LoginPasswordInput.value.length <= 0) {
        if (LoginPasswordText) {
          LoginPasswordText.style.transform = "translateY(0px)"
          LoginPasswordText.style.fontSize = "15px"
          LoginPasswordText.style.color = "black"
        }
      }
    })




  }, [])

  return (
    <form className='login-container'>
        <div className='title'>ورود</div>
        <div className='description'>با استفاده از شماره موبایل و رمز عبور خود وارد حساب کاربریتان شوید.</div>
        <div className='login-inputs'>
            <div className='login-phone-number-input-container'>
                <Image src={PhoneIcon} alt='phone-icon'/>
                <input className='login-phone-number-input' id='login-phone-number-input' name='login_phone_number_input'/>
                <div className='text' id='login-phone-number-text'>شماره موبایل</div>
            </div>
            <div className='login-password-input-container'>
                <Image src={LockIcon} alt='password-icon' className='password-icon'/>
                <div className='toggle-show-password-container' onClick={() => {ToggleShowingPasswordFunction()}}>
                  <Image src={ShowingPassword ? EyeOpenIcon : EyeCloseIcon} alt='eye-icon' className='eye-icon'/>
                </div>
                <input type={ShowingPassword? "text": "password"} className='login-password-input' id='login-password-input' name='login_password_input'/>
                <div className='text' id='login-password-text'>رمز عبور</div>
            </div>
        </div>
        <button type='submit' className='login-button'>ورود</button>
        <div className='switch-to-signup-text'>حساب کاربری ندارید؟ <div className='switch-to-signup-button'>ثبت نام</div></div>
    </form>
  )
}

export default Login