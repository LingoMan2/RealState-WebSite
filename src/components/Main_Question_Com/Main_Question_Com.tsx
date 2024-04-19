import React from 'react'
import QuestionIllusturation from '../../illusturation/Questions-bro.svg'
import './Main_Question_Com.css'
import Image from 'next/image'
import Link from 'next/link'
import Main_Question_Card_Com from './Main_Question_Card_Com'
import Questions from '../../helpers/Questions'

function Main_Question_Com() {
    return (
        <div className='main-questions-list-container'>
            <Image src={QuestionIllusturation} alt='question-illusturation' />
            <div className='questions-list-container'>
                <div className='title'>سوالات متداول</div>
                <div className='question-list'>
                    <Main_Question_Card_Com Data={Questions[0]} />
                    <Main_Question_Card_Com Data={Questions[1]} />
                    <Main_Question_Card_Com Data={Questions[2]} />
                    <Main_Question_Card_Com Data={Questions[3]} />
                    <Main_Question_Card_Com Data={Questions[4]} />
                </div>
                <div className='other-questions-button'>سوالات بیشتر</div>
            </div>
        </div>
    )
}

export default Main_Question_Com