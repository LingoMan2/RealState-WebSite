'use client'
import React from 'react'
import '../Around_You_Houses/Around_You_Houses.css'
import Around_You_Houses_Card_Com from './Around_You_Houses_Card_Com'
import Image from 'next/image'
import Houses from '@/helpers/Houses'


import ArrowLeftIcon from '../../icons/chevron-left-arrow.svg'
import ArrowRightIcon from '../../icons/chevron-right-arrow.svg'


function Around_You_Houses_Com() {
    return (
        <div className='near-houses-container'>
            <div className='title'>خانه های اطراف شما</div>
            <div className='near-houses-slider-container'>
                {/* <div className='near-houses-slider-arrow-left'>
                <Image src={ArrowLeftIcon} alt='arrow-left'/>
            </div> */}
                <div className='near-houses-slider'>
                    {Houses.map((Item, Key) => {
                        return <Around_You_Houses_Card_Com Data={Item} key={Key}/>
                    })}
                </div>
                <div className='near-houses-slider-arrow-right'>
                    <Image src={ArrowRightIcon} alt='arrow-right' />
                </div>
            </div>
        </div>
    )
}

export default Around_You_Houses_Com