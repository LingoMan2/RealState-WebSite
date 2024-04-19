'use client'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
import './blog_page.css'
import Image from 'next/image'
import CalenderIcon from '../../../icons/Calender.svg'
import PenIcon from '../../../icons/Pencil.svg'
import LikeIcon from '../../../icons/like.svg'
import disLikeIcon from '../../../icons/dislike.svg'
import ThreeDotsIcon from '../../../icons/MenuDots.svg'
import SendIcon from '../../../icons/send.svg'
import CommentIcon from '../../../icons/comment.svg'
import Comment_Com from '@/components/Comment_Com/Comment_Com'
import ViewEyeIcon from '../../../icons/vieweye.svg'

function page({ params }: { params: { blog_page: String } }) {
    const [blog, setblog] = React.useState({
        Title: "برای خرید خانه به چه نکاتی باید توجه کرد؟",
        Picture: "8-tips-for-renting-out-a-house-for-the-first-time-min.jpg",
        Added_Date: "1398/1/1",
        Writer: "علیرضا شیرمحمدی",
        LikeCount: 350,
        DisLikeCount: 5,
        ViewCount: 3000,
        Main_Description: "هنگام خرید خانه شما باید به چند موارد دقت کنید تا یک خونه عالی و بسیار خوب گیرتون بیاد و پولتون رو هدر نداده باشید.",
        Sections: [
            {
                Color_Of_Title: "red",
                Title: "",
                Description: ""
            },
            {
                Color_Of_Title: "white",
                Title: "نکات مهم در هنگام بازدید ملک",
                Description: "مواردی که باید درهنگام خرید خانه به آن دقت داشته باشید و آنها را مورد بررسی قرار دهید. برای مثال اگر قصد خرید آپارتمان در نیاوران یا هر جای دیگر تهران را دارید، بهتر بوده که این مقاله را تا آخر دنبال کنید.\n\nبرای خرید خانه باید 3 موارد را مورد برسی قرار داد:\n\n1- برسی محله\n2- برسی موارد ضاهری ساختمان\n3- برسی موارد داخلی خانه"
            },
            {
                Color_Of_Title: "white",
                Title: "انتخاب درست محله",
                Description: "شما بعد از جست و جو تحقیقات، خانه مورد نظر خود را پیدا می‌کنید. حتما یادتان باشد تا محله‌ خود را مورد بررسی قرار دهید. برای اینکه بتوانید محله‌ی مورد نظر خود را به درستی انتخاب کنید، برای بررسی محله به موارد زیر توجه کنید:\n\n1- عرض کوچه برای پارک کردن خودرو\n2- بن بست بودن یا دسترسی به خیابان های دیگر\n3- همسایه ها\n4- وجود ساختمان تجاری و اداری در نزدیکی شما\n5- امنیت محله\n6- دسترسی به حمل و نقل عمومی"
            },
            {
                Color_Of_Title: "white",
                Title: "بررسی موارد ظاهری",
                Description: "بررسی موارد ظاهری یکی دیگر از نکات مهمی بوده که برای خرید خانه باید به آن توجه کنید. منظور از بررسی موارد ظاهری مواردی مانند:\n\n1- پارکینگ\n2- مجزا بودن کنتر اب، برق و گاز\n3- مقدار شارژ ماهیانه\n5- انباری\n6- سیستم لوله کشی\n7- مشاعات\n8- استحکام بنا\n\nمی‌باشد. این موارد را، در قسمت موارد ظاهری، می‌توان مهم ترین مواردی دانست که باید در هنگام خرید خانه به آن توجه کنید."
            },
            {
                Color_Of_Title: "white",
                Title: "بررسی موارد داخل خانه",
                Description: "بعد از بررسی موارد ظاهری و بیرونی خانه،  بررسی محله و کوچه‌ای که قرار است در آن زندگی کنید، حال نوبت بررسی موارد داخل خانه می‌باشد. برای بررسی موارد داخل خانه قصد داریم به مهم ترین آنها اشاره کنیم:\n\n1- مهم ترین نکته استفاده بهینه از متراژ خانه می باشد\n2- حتما به نورگیر خانه توجه کنید\n3- ایا خانه بالکن دارد؟\n4- ایا متراژ پذیرایی با وسایل شما همخوانی دارد؟\n5- تعداد اتاق ها، متراژ و کمد های آن\n6- اشپزخانه همیشه قلب خانه میباشد. به ان خیلی توجه کنید، امکاناتی مانند هود، گاز، جای یخچال و... .\n7- سرویس بهداشتی و حمام را کامل برسی کنید."
            },
            {
                Color_Of_Title: "white",
                Title: "در انتها...",
                Description: "در زمان انتخاب ملک حتما از قبل بودجه‌ی خود را مشخص کنید.،سپس به دنبال خانه باشید به هبچ عنوان بررسی‌ها را فراموش نکنید به یاد داشته باشید که هزینه‌ی جا به جایی هزینه‌ی انتقال و هزینه‌ی سند هم در انتظار شماست.\n\nحتما خواسته‌های خود را از یک خانه مشخص کنید. شما قبل از اینکه به سراغ بازدید خانه بروید، باید بدانید که چه خواسته‌هایی از یک خانه دارید. باید بدانید که برای خرید یک خانه چه اولویت‌هایی دارید؟ برای مثال تعداد اتاق خواب، منطقه، بالکن، مشاعات و … .\n\nالبته تمام این مسائل یک طرف، انتخاب یک املاک خوب که بتواند به شما بهترین کمک و خدمات را ارائه کند، از اهمیت بالایی برخودار بوده است. برای مثال اگر قصد خرید آپارتمان در نیاوران را دارید، باید یک به دنبال یک املاک در نیاوران باشید که بهترین آشنایی را با این محله دارد. املاک برتر از سال 1395 به صورت تخصصی در منطقه 1 تهران در حال فعالیت بوده و با داشتن مشاورین حرفه‌ای، می‌تواند بهترین راهنمای شما برای خرید آپارتمان در نیاوران باشد."
            },
        ],
        Comments: [
            {
                User_Id: "312cdawcdnm12cdawd-damwokcda",
                UserName: "علیرضا شیرمحمدی",
                Comment_Date: "1402/2/2",
                Comment: "عاقا عالی",
                LikeCount: 10,
                DisLikeCount: 0
            },
            {
                User_Id: "312cdawcdnm12cdawd-damwokcda",
                UserName: "علیرضا محمدی",
                Comment_Date: "1399/12/25",
                Comment: "از نظر من که این بلاگ خیلی حرف های قشنگی میزد و به شدت از این بلاگ خوشم اومد. اما از نظر من این خونه ها خیلی گرونن نسبت به چیزهایی که دارد نه؟",
                LikeCount: 100,
                DisLikeCount: 5
            },
            {
                User_Id: "312cdawcdnm12cdawd-damwokcda",
                UserName: "شکور آقایی",
                Comment_Date: "1401/5/10",
                Comment: "از نظر من که بلاگ خوبی بود اما یه مشکل اصلی وجود داشت که من تو تیکت گفتم :)",
                LikeCount: 3,
                DisLikeCount: 2
            }
        ]
    })
    return (
        <>
            <Header />
            <main>
                <div className='blog-container'>
                    <div className='blog-info-container'>
                        <div className='topic-text'>موضوع:</div>
                        <div className='blog-title'>{blog.Title}</div>
                        <div className='blog-information-container'>
                            <div className='added-date-container'>
                                <Image src={CalenderIcon} alt='calender-icon' />
                                <div className='added-date-text'>تاریخ بلاگ: {blog.Added_Date}</div>
                            </div>
                            <div className='writer-container'>
                                <Image src={PenIcon} alt='writer-icon' />
                                <div className='writer-text'>نویسنده: {blog.Writer}</div>
                            </div>
                            <div className='viewcount-container'>
                                <Image src={ViewEyeIcon} alt='viewcount-icon' />
                                <div className='viewcount-text'>{blog.ViewCount}</div>
                            </div>
                            <div className='like-container'>
                                <div className='like-button'>
                                    <Image src={LikeIcon} alt='like-icon' />
                                </div>
                                <div className='like-count'>{blog.LikeCount}</div>
                            </div>
                            <div className='dislike-container'>
                                <div className='dislike-button'>
                                    <Image src={disLikeIcon} alt='dislike-icon' />
                                </div>
                                <div className='dislike-count'>{blog.DisLikeCount}</div>
                            </div>
                            <div className='three-dots-container'>
                                <Image src={ThreeDotsIcon} alt='three-dots' />
                            </div>
                        </div>
                    </div>
                    <Image src={require(`../../../helpers/Blogs-Images/${blog.Picture}`)} alt='blog-image' className='blog-image'></Image>
                    <div className='blog-main-description'>{blog.Main_Description}</div>
                    {blog.Sections.map((Items, key) => {
                        return <div className='blog-section' key={key}>
                            <div className='title' style={{ color: `${Items.Color_Of_Title}` }}>{Items.Title}</div>
                            <div className='blog-section-description'>{Items.Description}</div>
                        </div>
                    })}
                    <div className='comment-section-container'>
                        <div className='title'>نظرات ({blog.Comments.length})</div>
                        <div className='send-comment-container'>
                            <div className='send-button'>
                                <Image src={SendIcon} alt='send-icon' className='send-img' />
                            </div>
                            <input type='text' placeholder='نظر...' />
                            <Image src={CommentIcon} alt='comment-icon' className='comment-img' />
                        </div>
                        {blog.Comments.map((Items, Key) => {
                            return <Comment_Com Data={Items} />
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default page