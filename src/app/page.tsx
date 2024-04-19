import Image from 'next/image'
import Header_Com from '../components/Header/Header'
import Footer_Com from '../components/Footer/Footer'
import Main_Blog_Slider from '@/components/Main Blog Slider/Main_Blog_Slider'
import '../app/main.css'
import Around_You_Houses_Com from '@/components/Around_You_Houses/Around_You_Houses_Com'
import Houses from '../helpers/Houses'
import Main_Question_Com from '@/components/Main_Question_Com/Main_Question_Com'
import Register_Ad_Com from '@/components/Register-Ad_Com/Register_Ad_Com'
import Customer_Comments_Section from '@/components/Customers_Comments_Com/Customer_Comments_Section'
import Around_You_Stores_Com from '@/components/Around_You_Stores/Around_You_Stores_Com'
import Landing_Com from '@/components/Landing_Component/Landing_Com'

export default function Home() {
  return (
    <>
      {/* <Around_You_Houses_Com />
    <Main_Blog_Slider /> */}
      <Header_Com />
      <main>
        <div>
          <Landing_Com />
          <Around_You_Houses_Com />
          <Around_You_Stores_Com />
          <Customer_Comments_Section />
          <Main_Blog_Slider />
          <Main_Question_Com />
          <Register_Ad_Com/>
        </div>
      </main>
      <Footer_Com />
    </>
  )
}
