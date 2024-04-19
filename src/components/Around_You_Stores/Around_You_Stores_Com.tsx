'use client'
import React from 'react'
import '../Around_You_Stores/Around_You_Store.css'
import Around_You_stores_Card_Com from './Around_You_Stores_Card_Com'
import Image from 'next/image'
import stores from '@/helpers/Stores'


import ArrowLeftIcon from '../../icons/chevron-left-arrow.svg'
import ArrowRightIcon from '../../icons/chevron-right-arrow.svg'


function Around_You_Stores_Com() {
    return (
        <div className='near-stores-container'>
            <div className='title'>مغازه های اطراف شما</div>
            <div className='near-stores-slider-container'>
                {/* <div className='near-stores-slider-arrow-left'>
                <Image src={ArrowLeftIcon} alt='arrow-left'/>
            </div> */}
                <div className='near-stores-slider'>
                    {stores.map((Item, Key) => {
                        return <Around_You_stores_Card_Com Data={Item} key={Key}/>
                    })}
                </div>
                <div className='near-stores-slider-arrow-right'>
                    <Image src={ArrowRightIcon} alt='arrow-right' />
                </div>
            </div>
        </div>
    )
}

export default Around_You_Stores_Com