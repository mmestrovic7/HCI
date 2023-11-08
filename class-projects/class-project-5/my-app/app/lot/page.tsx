import Image from 'next/image'
import Link from 'next/link'
import '../globals.css'
const pages={
  gallery:"/lot/gallery",
  highlights:"/lot/highlights",
  set:"/lot/set"
}
function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-14">
      <h1 className='p-14'>LOVE ON TOUR</h1>
      <nav className='content-box p-14'>
        <ul className='flex flex-col justify-center items-center text-2xl gap-8'>
        {Object.entries(pages).map(([name, path]) => (
              <li key={name}>
                <Link href={path}>{name.toUpperCase()}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </main>
  )
}

export default Home;