'use client'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React, { useState } from 'react'
import './house_page.css'
import Image from 'next/image'
import CalenderIcon from '../../../icons/Calender.svg'
import AddressIcon from '../../../icons/Map.svg'
import MeterageIcon from '../../../icons/Ruler Angular.svg'
import ParkingIcon from '../../../icons/car.svg'
import WareHouseIcon from '../../../icons/warehouse.svg'
import DocumentIcon from '../../../icons/document.svg'
import PaintIcon from '../../../icons/Paint Roller.svg'
import Comment_Com from '@/components/Comment_Com/Comment_Com'
import SendIcon from '../../../icons/send.svg'
import CommentIcon from '../../../icons/comment.svg'
import Houses from '../../../helpers/Houses'

function page({ params }: { params: { house_page: String } }) {
    const [Section, SetSection] = useState("Pictures")
    return (
        <>
            <Header />
            <main>
                <div className='background-image'>
                    <div className='house-detail-contianer'>
                        <div className='house-detail'>
                            <div className='head-section'>
                                <div className='section1'>
                                    <div className='house-main-picture'>
                                        {Houses[0].Sold? <div className='house-sold'>
                                            <div className='text'>فروخته شد</div>
                                        </div> : null}
                                    </div>
                                    <div className='house-name-and-details'>
                                        <div className='name-container'>
                                            <div className='name'>{Houses? Houses[0].Title : "N/A"}</div>
                                            {Houses[0].Sold ? <div className='house-sold'>
                                                <div className='text'>فروخته شد</div>
                                            </div> : null}
                                        </div>
                                        <div className='details'>
                                            <div className='added-date-container'>
                                                <Image src={CalenderIcon} alt='calender-icon' />
                                                <div className='text'>تاریخ افزودن آگهی: {Houses? Houses[0].Added_Date : "N/A"}</div>
                                            </div>
                                            <div className='address-container'>
                                                <Image src={AddressIcon} alt='map-icon' />
                                                <div className='text'>آدرس: {Houses? Houses[0].Address : "N/A"}</div>
                                            </div>
                                            <div className='meterage-container'>
                                                <Image src={MeterageIcon} alt='meterage-icon' />
                                                <div className='text'>متراژ: {Houses? Houses[0].Meterage : "N/A"}متر</div>
                                            </div>
                                            <div className='has-parking-container'>
                                                <Image src={ParkingIcon} alt='car-icon' />
                                                <div className='text'>دارای پارکینگ؟ {Houses? Houses[0].Has_Parking? "دارد": "ندارد" : "N/A"}</div>
                                            </div>
                                            <div className='has-warehouse-container'>
                                                <Image src={WareHouseIcon} alt='warehouse-icon' />
                                                <div className='text'>دارای انباری؟ {Houses? Houses[0].Has_WareHouse? "دارد": "ندارد" : "N/A"}</div>
                                            </div>
                                            <div className='sanad-tak-barg-container'>
                                                <Image src={DocumentIcon} alt='document-icon' />
                                                <div className='text'>دارای سند تک برگ؟ {Houses? Houses[0].Sanad_Tak_Barg? "دارد": "ندارد" : "N/A"}</div>
                                            </div>
                                            <div className='year-of-construction-container'>
                                                <Image src={PaintIcon} alt='paint-icon' />
                                                <div className='text'>سال ساخت: {Houses? Houses[0].ConstructionYear : "N/A"}سال</div>
                                            </div>
                                            <div className='price-container'>
                                                <div className='price-text'>قیمت نهایی: {Houses? Houses[0].Price : "N/A"} تومان</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section2'>
                                    <div className={Section === "Comments" ? "buttons-select" : "buttons-non-select"} onClick={() => {SetSection("Comments")}}>نظرات</div>
                                    <div className={Section === "Description" ? "buttons-select" : "buttons-non-select"} onClick={() => {SetSection("Description")}}>توضیحات</div>
                                    <div className={Section === "Pictures" ? "buttons-select" : "buttons-non-select"} onClick={() => {SetSection("Pictures")}}>عکس ها</div>
                                </div>
                            </div>
                            <div className='section3'>
                                {Section === "Pictures" ? <div className='pictures-container'>
                                    <div className='title'>عکس ها</div>
                                    <div className='pictures'>
                                        <div className='picture-card'></div>
                                        <div className='picture-card'></div>
                                        <div className='picture-card'></div>
                                        <div className='picture-card'></div>
                                        <div className='picture-card'></div>
                                        <div className='picture-card'></div>
                                        <div className='picture-card'></div>
                                    </div>
                                </div> : Section === "Description" ? <div className='description-container'>
                                    <div className='title'>توضیحات</div>
                                    <div className='description'>{Houses? Houses[0].Description : "N/A"}</div>
                                </div> : Section === "Comments" ? <div className='comments-container'>
                                    <div className='title'>نظرات</div>
                                    <div className='send-comment-container'>
                                        <div className='send-button'>
                                            <Image src={SendIcon} alt='send-icon' className='send-img'/>
                                        </div>
                                        <input type='text' placeholder='نظر...'/>
                                        <Image src={CommentIcon} alt='comment-icon' className='comment-img'/>
                                    </div>
                                    <div className='comments'>
                                        {Houses[0].Comments.map((Item, Key) => {
                                            return <Comment_Com Data={Item} key={Key}/>
                                        })}
                                    </div>
                                </div> : null}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default page