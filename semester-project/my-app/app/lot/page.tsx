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
      <h1 className='lot'>LOVE ON TOUR</h1>
      <div className='content-box'>
        <ul className='lotElements'>
        {Object.entries(pages).map(([name, path]) => (
              <li key={name}>
                <Link href={path}>{name.toUpperCase()}</Link>
              </li>
            ))}
        </ul>
      </div>
    </main>
  )
}

export default Home;