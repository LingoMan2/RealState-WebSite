import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import './Houses_List_House_Component.css'

import CalenderIcon from '../../icons/Calender.svg'
import LocationIcon from '../../icons/Map.svg'
import RulerIcon from '../../icons/Ruler Angular.svg'
import CarIcon from '../../icons/car.svg'
import WareHouseIcon from '../../icons/warehouse.svg'
import SanadIcon from '../../icons/document.svg'

function Houses_List_House_Component({ Data }: { Data: any }) {
    return (
        <Link href={"/houses/" + Data.Title} className='house-card'>
            <div className='house-image'>
                <Image src={require(`../../helpers/Houses-Images/${Data.Picture}`)} alt='house-image' className='house-image-img'/>
                {Data.Sold ? <div className='house-sold'>
                    <div className='text'>فروخته شد</div>
                </div> : null}
            </div>
            <div className='house-title'>{Data ? Data.Title : "N/A"}</div>
            <div className='house-details'>
                <div className='house-added-date-container'>
                    <Image src={CalenderIcon} alt='calender-image'></Image>
                    <div className='text'>تاریخ آگهی: {Data ? Data.Added_Date : "N/A"}</div>
                </div>
                <div className='house-location-container'>
                    <Image src={LocationIcon} alt='location-icon'></Image>
                    <div className='text'>آدرس: {Data ? Data.Address : "N/A"}</div>
                </div>
                <div className='house-Meterage-container'>
                    <Image src={RulerIcon} alt='meterage-icon'></Image>
                    <div className='text'>متراژ: {Data ? Data.Meterage : "N/A"}متر</div>
                </div>
                <div className='has-parking-container'>
                    <Image src={CarIcon} alt='parking-icon' />
                    <div className='text'>دارای پارکینگ؟ {Data ? Data.Has_Parking ? "دارد" : "ندارد" : "N/A"}</div>
                </div>
                <div className='has-storage-container'>
                    <Image src={WareHouseIcon} alt='storage-icon' />
                    <div className='text'>دارای انباری؟ {Data ? Data.Has_WareHouse ? "دارد" : "ندارد" : "N/A"}</div>
                </div>
                <div className='tak-barg-sanad-container'>
                    <Image src={SanadIcon} alt='sanad-icon' />
                    <div className='text'>سند تک برگ؟ {Data ? Data.Sanad_Tak_Barg ? "دارد" : "ندارد" : "N/A"}</div>
                </div>
            </div>
            <div className='house-description'>{Data ? Data.Description.length > 200 ? Data.Description.slice(0, 200) + "..." : Data.Description : "N/A"}</div>
            <div className='house-bottom-section'>
                {Data? Data.Sold? <div className='house-old-price-container'>
                    <div className='tuman-icon'>تومان</div>
                    <div className='old-price'>{Data.Price ? Data.Price : "N/A"}</div>
                    <div className='sold-text'>فروخته شد</div>
                </div> : <div className='house-price-container'>
                    <div className='tuman-icon'>تومان</div>
                    <div className='price'>{Data.Price ? Data.Price : "N/A"}</div>
                </div> : "N/A"}
                <div className='house-see-other-details-container'>مشاهده جزئیات</div>
            </div>
        </Link >
    )
}

export default Houses_List_House_Component