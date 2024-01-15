import Image from 'next/image'
import Link from 'next/link'
import '../globals.css'
import CustomButton from '../components/CustomButton/CustomButton'
import Footer from '../components/Footer/Footer'
function Home() {
  return (
    <main>
      <h1>ABOUT HARRY STYLES</h1>

        <ul className='subpageElements'>
          <CustomButton text="1D" href="/about-hs/1d" />
          <CustomButton text="SOLO" href="/about-hs/solo" />
        </ul>
        <Footer />
    </main>
  )
}

export default Home;