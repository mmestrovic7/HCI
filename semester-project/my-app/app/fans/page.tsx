import Image from 'next/image'
import Link from 'next/link'
import CustomButton from '../components/CustomButton/CustomButton';
import Footer from '../components/Footer/Footer';
function Home() {
  return (
    <main>
      <h1>FAN ACTIVITIES</h1>
        <ul className='subpageElements'>
        <CustomButton text="EXPERIENCES" href="/fans/experiences" />
      <CustomButton text="PROJECTS" href="/fans/projects" />
        </ul>
    </main>
  )
}

export default Home;