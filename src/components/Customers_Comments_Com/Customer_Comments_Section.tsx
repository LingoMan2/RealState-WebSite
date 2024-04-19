'use client'
import React from 'react'
import './Customer_Comments_Section.css'
import Image from 'next/image'
import Comments from '../../helpers/Comments'
import Arrow_Icon from '../../icons/chevron-left-arrow.svg'
import Wave from '../../illusturation/wave (1).png'
import Wave_UpsiteDown from '../../illusturation/wave UpsiteDown.png'

// require(`../../helpers/UserProfiles/${""}`)

function Customer_Comments_Section() {
    return (
        <div className='customer-comments-container'>
            <Image src={Wave} alt='wave' className='wave' />
            <div className='title'>نظرات مشتریان</div>
            <div className='comments-slider-container-background'>
                <div className='comments-slider-container'>
                    {Comments.length >= 4 ? <div className='transparent-arrow-container'>
                        <Image src={Arrow_Icon} alt='arrow-left' />
                    </div> : null}
                    <div className='comments-slider'>
                        {Comments.map((Items, Key) => {
                            return <div className='comment-card'>
                                <div className='user-section'>
                                    <div className='user-prof-container'>
                                        <Image src={require(`../../helpers/UserProfiles/${Items.UserProfile}`)} alt='user-prof' />
                                    </div>
                                    <div className='user-name'>{Items ? Items.UserName : "N/A"}</div>
                                </div>
                                <div className='comment'>{Items ? Items.Comment.length > 600 ? Items.Comment.slice(0, 600) + "..." : Items.Comment : "N/A"}</div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <Image src={Wave_UpsiteDown} alt='wave-upsite' className='wave-upsite' />
        </div>
    )
}

export default Customer_Comments_Section