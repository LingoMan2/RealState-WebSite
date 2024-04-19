import React from 'react'
import './Main_Question_Card_Com.css'
import Link from 'next/link'


function Main_Question_Card_Com({Data}: {Data: any}) {
    return (
        <div className='question-card'>
            <div className='question-title'>{Data? Data.Title : "N/A"}</div>
            <div className='half-answer'>{Data? Data.Answer.length > 50? Data.Answer.slice(0, 50) + "..." : Data.Answer : "N/A"}</div>
        </div>
    )
}

export default Main_Question_Card_Com