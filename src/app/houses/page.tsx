'use client'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Image from 'next/image'
import React from 'react'
import './houses.css'
import SearchIcon from '../../icons/search.svg'
import DateIcon from '../../icons/OrangeCalender.svg'
import LocationIcon from '../../icons/OrangeMap.svg'
import MeterageIcon from '../../icons/OrangeRuler.svg'
import House_Component from '../../components/Houses_List_House_Component/Houses_List_House_Component'
import axios from 'axios'
import Houses from '../../helpers/Houses'


function page() {
    return (
        <>
            <Header />
            <main>
                <div className='houe-list-container'>
                    <div className='house-list'>
                        {Houses.map((item, key) => {
                            return <House_Component Data={item} key={key} />
                        })}
                    </div>

                    <div className='search-settings-container'>
                        <div className='search-by-name'>
                            <div className='title'>جست و جو</div>
                            <div className='search-input-container'>
                                <Image src={SearchIcon} alt='search-icon' />
                                <input type='search' placeholder='جست و جو' name='search_by_name_input' id='search_by_name_input' />
                            </div>
                        </div>
                        <div className='spilter'>
                            <div className='spliter-title'>فیلتر کردن</div>
                        </div>
                        <div className='filter-by-date-container'>
                            <div className='title'>تاریخ آگهی</div>
                            <div className='filter-by-date-input-container'>
                                <Image src={DateIcon} alt='date-icon' />
                                <input type='text' placeholder='1402/1/1' name='filter_by_date_input' id='filter_by_date_input' />
                            </div>
                        </div>
                        <div className='filter-by-location-container'>
                            <div className='title'>ادرس</div>
                            <div className='filter-by-location-input-container'>
                                <Image src={LocationIcon} alt='location-icon' />
                                <input type='text' placeholder='تهران، اکباتان' name='filter_by_location_input' id='filter_by_location_input' />
                            </div>
                        </div>
                        <div className='filter-by-meterage-contianer'>
                            <div className='title'>فیلتر بر اساس متراژ</div>
                            <div className='filter-by-meterage-input-container'>
                                <Image src={MeterageIcon} alt='meterage-icon' />
                                <input type='text' placeholder='متراژ' name='filter_by_meterage' id='filter_by_meterage' />
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