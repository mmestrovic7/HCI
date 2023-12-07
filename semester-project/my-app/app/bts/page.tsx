import Image from 'next/image'
import Link from 'next/link'
import '../globals.css'
const pages = {
  band: "/bts/band",
  gueststars: "/bts/guests",
  merch: "/bts/merch"
};
function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-14">
      <h1 className='bts'>BEHIND THE SCENES</h1>
      <nav className='content-box p-14'>
        <ul className='btsElements'>
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