import Image from 'next/image'
import Link from 'next/link'
import '../globals.css'

function Home() {
  return (
    <main>
      <h1>ABOUT HARRY STYLES</h1>
      <nav className='content-box p-14'>
        <ul className='subpageElements'>
          <li>
            <Link href="about-hs/1d">1D</Link>
          </li>
          <li>
            <Link href="about-hs/solo">SOLO</Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}

export default Home;