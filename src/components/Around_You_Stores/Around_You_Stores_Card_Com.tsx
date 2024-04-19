import React from 'react'
import '../Around_You_Stores/Around_You_Store_Card_Com.css'
import Image from 'next/image'

import CalenderIcon from '../../icons/Calender.svg'
import LocationIcon from '../../icons/Map.svg'
import RulerIcon from '../../icons/Ruler Angular.svg'
import Link from 'next/link'


function Around_You_Stores_Card_Com({ Data }: { Data: any }) {
  return (
    <Link href={""} className='near-store-card'>
        <div className='store-image'>
            <Image src={require(`../../helpers/Stores-Images/${Data.Picture}`)} alt='store-image' className='store-image-img'/>
        </div>
        <div className='store-title'>{Data? Data.Title : null}</div>
        <div className='store-details'>
            <div className='store-added-date-container'>
                <Image src={CalenderIcon} alt='calender-image'></Image>
                <div className='text'>تاریخ آگهی: {Data? Data.Added_Date : null}</div>
            </div>
            <div className='store-location-container'>
                <Image src={LocationIcon} alt='location-icon'></Image>
                <div className='text'>آدرس: {Data? Data.Address : null}</div>
            </div>
            <div className='store-Meterage-container'>
                <Image src={RulerIcon} alt='meterage-icon'></Image>
                <div className='text'>متراژ: {Data? Data.Meterage : null}متر</div>
            </div>
        </div>
        <div className='store-description'>{Data? Data.Description.length > 140? Data.Description.slice(0, 140) + "..." : Data.Description : null}</div>
        <div className='store-bottom-section'>
            <div className='store-price-container'>
                <div className="icony icony-toman tuman-icon">تومان</div>
                <div className='text'>{Data? Data.Price : null}</div>
            </div>
            <div className='store-see-other-details-container'>مشاهده جزئیات</div>
        </div>
    </Link>
  )
}

export default Around_You_Stores_Card_Com