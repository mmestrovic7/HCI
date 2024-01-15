import Image from 'next/image'
import Link from 'next/link'
const pages={
  experiences:"/fans/experiences",
  projects:"/fans/projects",
 
}
function Home() {
  return (
    <main>
      <h1>FAN ACTIVITIES</h1>
      <nav className='content-box p-14'>
        <ul className='subpageElements'>
         {Object.entries(pages).map(([name,path])=>(
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