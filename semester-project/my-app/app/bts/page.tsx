import Image from 'next/image'
import Link from 'next/link'
const pages = {
  band: "/bts/band",
  gueststars: "/bts/guests",
  merch: "/bts/merch"
};
function Home() {
  return (
    <main>
      <h1>BEHIND THE SCENES</h1>
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