'use client'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
import './Blogs.css'
import Main_Blog_Component from '@/components/Main Blog Slider/Main_Blog_Component'
import Blogs from '../../helpers/Blogs'

function page() {
    return (
        <>
            <Header />
            <main>
                <div className='blogs-list-container'>
                    <div className='blogs-list'>
                        {Blogs.map((Items, Key) => {
                            return <Main_Blog_Component Data={Items} key={Key} />
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default page