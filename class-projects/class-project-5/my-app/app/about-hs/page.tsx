import Image from 'next/image'
import Link from 'next/link'
import '../globals.css'
function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-14">
      <h1 className='p-14'>ABOUT HARRY STYLES</h1>
      <nav className='content-box p-14'>
        <ul className='flex flex-col justify-center items-center text-2xl gap-8'>
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