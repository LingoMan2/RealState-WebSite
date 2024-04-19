import React from 'react'
import './AdvertisementRegistration.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image'
import HouseImage from '../../illusturation/House searching-bro (1).svg'
import Link from 'next/link'

const Information = {
    Info: "خب حالا بیا زمین یا ملکت رو تو املاک برتر ثبت آگهی کن تا مشتری بیشتری بتونی پیدا بکنی و به راحتی و بدون کلاهبرداری و با قیمت روز خونه یا ملکت رو بفروشی.\n\n\nابتدا قوانین ثبت آگهی رو داخل املاک برتر بخون تا مشکلی برات در ثبت آگهی پیش نیاد:\n\n1- زمین یا ملک یا مغازه ای که داری ثبت میکنی حتما باید دارای سند مالکیت باشه\n2- چندتا عکس برای معرفی بهتر ملکت باید بگیری تا خریدار بتونه قبل از تماس و گذاشتن قرار برای دیدن خونه یا زمین یا ملکت، اون رو بهتر بشناسه\n3- تمامی مشخصات زمین یا ملک یا خونت رو باید دقیق به املاک برتر بگی تا آگهی تو هم سریع تر ثبت بشه و هم مشتری های بیشتری آگهیت رو میبینن. اگر مشخصات دقیق نگی آگهیت توسط کارشناسان املاک برتر رد میشه\n\nروش و مراحل انجام ثبت آگهی:\n\n1- در مرحله اول بعد از زدن دکمه ثبت آگهی در پایین صفحه باید عنوان آگهیت رو مشخص کنی\n2- در مرحله دوم باید توضیحات خوبی درباره ی آگهیت بدی تا مشتری رو سمت آگهی جذب کنه\n3- در مرحله سوم جزئیات آگهیت رو مثل (قیمت، سال ساخت، آدرس دقیق و ...) رو باید مشخص کنی\n4- در مرحله آخر هم باید عکس های ملکت رو در سایت آپلود کنی تا آگهی بسیار زیبایی داشته باشی\n\nتوضیحات تکمیلی در بخش سوالات متداول > نحوه ثبت آگهی\n\nپس اگه مشکلی نداری و میخوای آگهیت رو ثبت کنی بر روی دکمه زیر بزن"
}


function page() {
    return (
        <>
            <Header />
                <main>
                    <div className='advertisement-registration-container'>
                        <div className='title'>ثبت آگهی</div>
                        <div className='section1'>
                            <p className='information'>با ثبت خونه یا زمینت تو املاک برتر به راحتی و بدون درد سر ملکت رو با بهترین قیمت بفروش. ملک یا زمینت رو اینجا ثبت کن و پس از تایید کارشناسان ما و تایید قیمت نهایی، آگهیت در املاک برتر ثبت میشه و به راحتی میتونی ملکت رو بدون خروج از خونت بفروشی</p>
                            <Image src={HouseImage} alt='house-image'/>
                        </div>
                        <p className='information'>{Information.Info}</p>
                        <Link href={"/advertisement-registration/register"} className='go-to-submit-advertisment'>بزن بریم</Link>
                    </div>
                </main>
            <Footer />
        </>
    )
}

export default page