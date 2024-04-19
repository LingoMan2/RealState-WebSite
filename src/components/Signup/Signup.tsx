'use client'
import React from 'react'
import '../Signup/Signup.css'
import Image from 'next/image'
import { useEffect } from 'react'


import PhoneIcon from '../../icons/PhoneBlack.svg'
import LockIcon from '../../icons/Lock.svg'
import EyeOpenIcon from '../../icons/Eye.svg'
import EyeCloseIcon from '../../icons/Eye Closed.svg'


function Signup() {
    const [ShowingPassword, ToggleShowingPassword] = React.useState(false)

    const ToggleShowingPasswordFunction = () => {
        ToggleShowingPassword(!ShowingPassword)
    }


    useEffect(() => {
        const SignupUserNameInput = document.getElementById("signup-username-input") as HTMLInputElement
        const SignupUserNameText = document.getElementById("signup-username-text") as HTMLDivElement

        const SignupPhoneNumberInput = document.getElementById("signup-phone-number-input") as HTMLInputElement
        const SignupPhoneNumberText = document.getElementById("signup-phone-number-text") as HTMLDivElement

        const SignupPasswordInput = document.getElementById("signup-password-input") as HTMLInputElement
        const SignupasswordText = document.getElementById("signup-password-text") as HTMLDivElement

        SignupUserNameInput?.addEventListener("focus", () => {
            if (SignupUserNameInput.value.length > 0 || SignupUserNameInput.value.length <= 0) {
                if (SignupUserNameText) {
                    SignupUserNameText.style.transform = "translateY(-25px)"
                    SignupUserNameText.style.fontSize = "13px"
                    SignupUserNameText.style.color = "white"
                }
            }
        })
        SignupUserNameInput?.addEventListener("focusout", () => {
            if (SignupUserNameInput.value.length <= 0) {
                if (SignupUserNameText) {
                    SignupUserNameText.style.transform = "translateY(0px)"
                    SignupUserNameText.style.fontSize = "15px"
                    SignupUserNameText.style.color = "black"
                }
            }
        })

        SignupPhoneNumberInput?.addEventListener("focus", () => {
            if (SignupPhoneNumberInput.value.length > 0 || SignupPhoneNumberInput.value.length <= 0) {
                if (SignupPhoneNumberText) {
                    SignupPhoneNumberText.style.transform = "translateY(-25px)"
                    SignupPhoneNumberText.style.fontSize = "13px"
                    SignupPhoneNumberText.style.color = "white"
                }
            }
        })
        SignupPhoneNumberInput?.addEventListener("focusout", () => {
            if (SignupPhoneNumberInput.value.length <= 0) {
                if (SignupPhoneNumberText) {
                    SignupPhoneNumberText.style.transform = "translateY(0px)"
                    SignupPhoneNumberText.style.fontSize = "15px"
                    SignupPhoneNumberText.style.color = "black"
                }
            }
        })

        SignupPasswordInput?.addEventListener("focus", () => {
            if (SignupPasswordInput.value.length > 0 || SignupPasswordInput.value.length <= 0) {
                if (SignupasswordText) {
                    SignupasswordText.style.transform = "translateY(-25px)"
                    SignupasswordText.style.fontSize = "13px"
                    SignupasswordText.style.color = "white"
                }
            }
        })
        SignupPasswordInput?.addEventListener("focusout", () => {
            if (SignupPasswordInput.value.length <= 0) {
                if (SignupasswordText) {
                    SignupasswordText.style.transform = "translateY(0px)"
                    SignupasswordText.style.fontSize = "15px"
                    SignupasswordText.style.color = "black"
                }
            }
        })
    }, [])

    return (
        <form className='signup-container'>
            <div className='title'>ثبت نام</div>
            <div className='description'>با استفاده از شماره موبایل خود یک حساب کاربری در وب سایت املاک برتر ایجاد کنید.</div>
            <div className='signup-inputs'>
                <div className='signup-username-input-container'>
                    <Image src={PhoneIcon} alt='phone-icon' />
                    <input className='signup-username-input' id='signup-username-input' name='signup_username_input' />
                    <div className='text' id='signup-username-text'>نام کاربری</div>
                </div>
                <div className='signup-phone-number-input-container'>
                    <Image src={PhoneIcon} alt='phone-icon' />
                    <input className='signup-phone-number-input' id='signup-phone-number-input' name='signup_phone_number_input' />
                    <div className='text' id='signup-phone-number-text'>شماره موبایل</div>
                </div>
                <div className='signup-password-input-container'>
                    <Image src={LockIcon} alt='password-icon' className='password-icon' />
                    <div className='toggle-show-password-container' onClick={() => {ToggleShowingPasswordFunction()}}>
                        <Image src={ShowingPassword? EyeOpenIcon: EyeCloseIcon} alt='eye-icon' className='eye-icon' />
                    </div>
                    <input type={ShowingPassword? 'text' : 'password'} className='signup-password-input' id='signup-password-input' name='signup_password_input' />
                    <div className='text' id='signup-password-text'>رمز عبور</div>
                </div>
            </div>
            <button type='submit' className='signup-button'>ثبت نام</button>
            <div className='switch-to-login-text'>حساب کاربری دارید؟ <div className='switch-to-login-button'>ورود</div></div>
        </form>
    )
}

export default Signup