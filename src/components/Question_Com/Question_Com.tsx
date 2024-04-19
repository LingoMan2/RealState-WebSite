'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import './Question_Com.css'

import LeftArrowNormalIcon from '../../icons/Alt Arrow Left.svg'
import LeftArrowOrangeIcon from '../../icons/Orange Alt Arrow Left.svg'

function Question_Com({ Data }: { Data: any }) {
    const [MenuOpened, ToggleMenuOpened] = useState(false)
    // React.useEffect(() => {
    //     const QuestionCard = document.getElementById("question-card-container") as HTMLDivElement
    //     const ArrowIcon = document.getElementById("arrow-icon") as HTMLImageElement
    //     const QuestionTitle = document.getElementById("question-card-title") as HTMLDivElement
    //     let MenuOpened = false

    //     QuestionTitle.addEventListener("click", () => {
    //         if (MenuOpened) {
    //             QuestionCard.style.height = "70px"
    //             ArrowIcon.style.transform = "rotate(0deg)"
    //             MenuOpened = false
    //             ToggleMenuOpened(false)
    //         } else {
    //             QuestionCard.style.height = "300px"
    //             ArrowIcon.style.transform = "rotate(-90deg)"
    //             MenuOpened = true
    //             ToggleMenuOpened(true)
    //         }
    //     })
    // }, [])
    return (
        <div className='question-card-container' style={MenuOpened ? { height: Data ? Data.Height + "px" : "300px" } : { height: "70px" }} id='question-card-container'>
            <div className='question-card-title' id='question-card-title' onClick={() => { ToggleMenuOpened(!MenuOpened) }}>
                <Image src={MenuOpened ? LeftArrowOrangeIcon : LeftArrowNormalIcon} alt='arrow-icon' id='arrow-icon' style={MenuOpened ? { transform: "rotate(-90deg)" } : { transform: "rotate(0deg)" }} />
                <div className='title'>{Data ? Data.Title : "N/A"}</div>
            </div>
            <div className='question-card-main-section'>
                <div className='question-answer'>{Data ? Data.Answer : "N/A"}</div>

                {Data ? Data.Sections.map((Items, Key) => {
                    return <div className='section-container' key={Key}>
                        <div className='title'>{Items? Items.Title : "N/A"}</div>
                        <div className='description'>{Items? Items.Description : "N/A"}</div>
                        {Items.Picture? <Image src={require(`../../helpers/Questions-Images/${Items.Picture}`)} alt='question-image' className='question-image' /> : null}
                    </div>
                }) : null}
            </div>
        </div>
    )
}

export default Question_Com