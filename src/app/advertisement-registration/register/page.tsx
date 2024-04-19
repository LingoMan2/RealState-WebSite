import React from 'react'
import './Register.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

import PenIcon from '../../../icons/pen-tool.svg'
import TextIcon from '../../../icons/type.svg'
import MeterageIcon from '../../../icons/OrangeRuler.svg'
import MapIcon from '../../../icons/OrangeMap.svg'
import PriceIcon from '../../../icons/money.svg'
import PaintRollerIcon from '../../../icons/Orange Paint Roller.svg'
import ImageIcon from '../../../icons/image.svg'
import Image from 'next/image'


function page() {
    return (
        <>
            <Header />
            <main>
                <div className='register-advertisment-container'>
                    <div className='title'>ثبت آگهی</div>
                    <div className='section1'>
                        <div className='description'>مشخصات آگهیت رو بنویس و منتظر تایید کارشناسان ما باش</div>
                        <div className='ad-title-container'>
                            <div className='title'>عنوان آگهی</div>
                            <input type='text' placeholder='عنوان آگهی' />
                            <Image src={PenIcon} alt='title-icon' />
                        </div>
                    </div>
                    <div className='section2'>
                        <div className='ad-price-container'>
                            <div className='title'>قیمت نهایی</div>
                            <input type='text' placeholder='قیمت نهایی (به تومان)' />
                            <Image src={PriceIcon} alt='price-icon' />
                        </div>
                        <div className='ad-meterage-container'>
                            <div className='title'>متراژ</div>
                            <input type='text' placeholder='متراژ (به متر)' />
                            <Image src={MeterageIcon} alt='meterage-icon' />
                        </div>
                        <div className='ad-address-container'>
                            <div className='title'>آدرس</div>
                            <input type='text' placeholder='آدرس ملک' />
                            <Image src={MapIcon} alt='address-icon' />
                        </div>
                        <div className='ad-construction-year-container'>
                            <div className='title'>سال ساخت</div>
                            <input type='text' placeholder='سال ساخت' />
                            <Image src={PaintRollerIcon} alt='construction-year-icon' />
                        </div>
                    </div>
                    <div className='section3'>
                        <div className='checkboxes-container'>
                            <div className='checkbox-container'>
                                <input type="checkbox" name="" id="" />
                                <div className='text'>دارای انباری؟</div>
                            </div>
                            <div className='checkbox-container'>
                                <input type="checkbox" name="" id="" />
                                <div className='text'>دارای پارکینگ؟</div>
                            </div>
                        </div>
                        <div className='ad-description-container'>
                            <div className='title'>توضیحات آگهی</div>
                            <textarea className='ad-description' placeholder='توضیحات آگهی...'></textarea>
                        </div>
                        <div className='ad-pictures-container'>
                            <div className='title'>عکس های آگهی</div>
                            <div className='pictures-input-container'>
                                <div className='texts-container'>
                                    <Image src={ImageIcon} alt='image-image'/>
                                    <div className='wrapper'></div>
                                    <div className='text'>بر روی اینجا کلیک کنید یا عکس های خود را اینجا بکشید</div>
                                </div>
                                <input type="file" name="" id=""/>
                            </div>
                        </div>
                    </div>
                    <button className='submit-ad'>ثبت آگهی</button>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default page