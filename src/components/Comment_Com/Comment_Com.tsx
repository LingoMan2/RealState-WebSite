import React from 'react'
import './Comment_Style.css'
import Image from 'next/image'

import LikeIcon from '../../icons/Like.svg'
import DisLikeIcon from '../../icons/Dislike.svg'
import LikedIcon from '../../icons/liked.svg'
import DisLikedIcon from '../../icons/disliked.svg'
import ReplyIcon from '../../icons/Reply.svg'
import ThreeDotsIcon from '../../icons/MenuDots.svg'


function Comment_Com({Data}: {Data: any}) {
    return (
        <div className='comment'>
            <div className='account-info'>
                <div className='account-profile-picture'></div>
                <div className='account-name-and-date-container'>
                    <div className='account-name'>{Data? Data.UserName : "N/A"}</div>
                    <div className='comment-added-date'>{Data? Data.Comment_Date : "N/A"}</div>
                </div>
            </div>
            <div className='comment-content'>{Data? Data.Comment : "N/A"}</div>
            <div className='comment-modify-container'>
                <div className='reply-button'>
                    <Image src={ReplyIcon} alt='reply-icon'/>
                </div>
                <div className='like-button'>
                    <Image src={Data? Data.UserLikedIt ? LikedIcon : LikeIcon : LikeIcon} alt='like-icon'/>
                    <div className='like-count'>{Data? Data.LikeCount : "N/A"}</div>
                </div>
                <div className='dislike-button'>
                    <Image src={Data? Data.UserDislikedIt ? DisLikedIcon : DisLikeIcon : DisLikeIcon} alt='dislike-icon'/>
                    <div className='dislike-count'>{Data? Data.DisLikeCount : "N/A"}</div>
                </div>
                <div className='three-dots'>
                    <Image src={ThreeDotsIcon} alt='threedots-icon'/>
                </div>
            </div>
            <div className='replies-container'>

            </div>
        </div>
    )
}

export default Comment_Com