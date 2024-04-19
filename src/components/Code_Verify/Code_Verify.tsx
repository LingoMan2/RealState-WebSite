'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import '../Code_Verify/Code_Verify.css'
import axios from 'axios'
import ArrowIcon from '../../icons/arrow-left.svg'
import Image from 'next/image'


function Code_Verify({ MobileNumber }: { MobileNumber: String }) {
  const [ErrorMessage, SetErrorMessage] = useState(String)
  const [CodeError, SetCodeError] = useState(false)
  const [Loading, SetLoading] = useState(false)
  const [Code1, SetCode1] = useState(String)
  const [Code2, SetCode2] = useState(String)
  const [Code3, SetCode3] = useState(String)
  const [Code4, SetCode4] = useState(String)
  const [Code5, SetCode5] = useState(String)
  const [Code6, SetCode6] = useState(String)
  const Verify_Code = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const VerifyCode = String(Code1 + Code2 + Code3 + Code4 + Code5 + Code6)
    if (!VerifyCode || VerifyCode.length < 6) {
      SetCodeError(true)
      SetErrorMessage("لطفا کد صحیح وارد کنید!")
      return
    }
    SetCodeError(false)
    SetErrorMessage("")
    SetLoading(true)
  }


  return (
    <form className='code-verify' onSubmit={(e) => { Verify_Code(e) }}>
      <div className='title'>تایید شماره موبایل</div>
      <div className='description'>با وارد کردن کد 6 رقمی که به شماره {MobileNumber} ارسال شده است حساب کاربریتان را تایید کنید</div>
      <div className='inputs-container'>
        <input type='tel' className={CodeError? "input-code-error": "input-code"} name='code1' id='code1' onChange={(e) => { SetCode1(e.target.value) }} />
        <input type='tel' className={CodeError? "input-code-error": "input-code"} name='code2' id='code2' onChange={(e) => { SetCode2(e.target.value) }} />
        <input type='tel' className={CodeError? "input-code-error": "input-code"} name='code3' id='code3' onChange={(e) => { SetCode3(e.target.value) }} />
        <input type='tel' className={CodeError? "input-code-error": "input-code"} name='code4' id='code4' onChange={(e) => { SetCode4(e.target.value) }} />
        <input type='tel' className={CodeError? "input-code-error": "input-code"} name='code5' id='code5' onChange={(e) => { SetCode5(e.target.value) }} />
        <input type='tel' className={CodeError? "input-code-error": "input-code"} name='code6' id='code6' onChange={(e) => { SetCode6(e.target.value) }} />
      </div>
      <button type="submit" disabled={Loading} className='verify-code-button'>
        {Loading? <div className="lds-ring"><div></div><div></div><div></div><div></div></div> : <div className='text'>تایید</div>}
      </button>
      <div className='back-button' id='back-button'>
        <Image src={ArrowIcon} alt='arrow-icon' id='arrow-icon'/>
        <div className='back-text'>بازگشت</div>
      </div>
      <div className='error-message'>{ErrorMessage}</div>
    </form>
  )
}

export default Code_Verify