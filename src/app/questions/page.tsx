import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
import './questions.css'
import Image from 'next/image'
import Question_Com from '@/components/Question_Com/Question_Com'
import Questions from '../../helpers/Questions'


function page() {
    return (
        <>
            <Header />
            <main>
                <div className='questions-list-container'>
                    <div className='title'>سوالات متداول</div>
                    <div className='question-list'>
                        {Questions.map((Items, Key) => {
                            return <Question_Com Data={Items} key={Key}/>
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default page