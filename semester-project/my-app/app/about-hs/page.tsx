import Image from 'next/image'
import Link from 'next/link'
import '../globals.css'

function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-14">
      <h1 className='aboutHS'>ABOUT HARRY STYLES</h1>
      <nav className='content-box p-14'>
        <ul className='aboutHSElements'>
          <li>
            <Link href="about-hs/1d" className="oneD">1D</Link>
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