import React from 'react'
import '../Around_You_Houses/Around_You_Houses_Card_Com.css'
import Image from 'next/image'

import CalenderIcon from '../../icons/Calender.svg'
import LocationIcon from '../../icons/Map.svg'
import RulerIcon from '../../icons/Ruler Angular.svg'
import Link from 'next/link'


function Around_You_Houses_Card_Com({ Data }: { Data: any }) {
  return (
    <Link href={""} className='near-house-card'>
        <div className='house-image'>
            <Image src={require(`../../helpers/Houses-Images/${Data.Picture}`)} alt='house-image' className='house-image-img'/>
        </div>
        <div className='house-title'>{Data? Data.Title : null}</div>
        <div className='house-details'>
            <div className='house-added-date-container'>
                <Image src={CalenderIcon} alt='calender-image'></Image>
                <div className='text'>تاریخ آگهی: {Data? Data.Added_Date : null}</div>
            </div>
            <div className='house-location-container'>
                <Image src={LocationIcon} alt='location-icon'></Image>
                <div className='text'>آدرس: {Data? Data.Address : null}</div>
            </div>
            <div className='house-Meterage-container'>
                <Image src={RulerIcon} alt='meterage-icon'></Image>
                <div className='text'>متراژ: {Data? Data.Meterage : null}متر</div>
            </div>
        </div>
        <div className='house-description'>{Data? Data.Description.length > 140? Data.Description.slice(0, 140) + "..." : Data.Description : null}</div>
        <div className='house-bottom-section'>
            <div className='house-price-container'>
                <div className="icony icony-toman tuman-icon">تومان</div>
                <div className='text'>{Data? Data.Price : null}</div>
            </div>
            <div className='house-see-other-details-container'>مشاهده جزئیات</div>
        </div>
    </Link>
  )
}

export default Around_You_Houses_Card_Com