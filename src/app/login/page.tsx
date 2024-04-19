'use client'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
import '../login/login.css'
import Login from '@/components/Login/Login'
import Signup from '@/components/Signup/Signup'
import Code_Verify from '@/components/Code_Verify/Code_Verify'
import { useState } from 'react'

export default function page() {
  const [Section, SetSection] = useState("codeverify")
  return (
    <>
      <Header />
      <main>
        <div className='login-signup-container'>
          {Section === "login"? <Login /> : Section === "signup"? <Signup />: Section === "codeverify"? <Code_Verify MobileNumber={"0911000000"} />: null}
        </div>
      </main>
      <Footer />
    </>
  )
}
