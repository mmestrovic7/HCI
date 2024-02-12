import CustomButton from '../components/CustomButton/CustomButton';
import '../about-hs/abouths.css'
import "./fans.css"
import Image from'next/image'
function Home() {
  return (
    <main>    
      <div className="fpPage">
        <Image src="/newCouch2.png" alt="couch" width={530} height={450} className='couch'/>
      <h1 className='abouths-title'>WELCOME TO HARRY'S HOUSE!</h1>
        <div className='fpSubpageElements'>
          <ul className = 'experiences-text' style={{ backgroundImage: `url(photoFrame.png)` }}>
            <p className='text'>Read fan stories!  </p>

            <p className='button'><CustomButton text="EXPERIENCES" href="/fans/experiences" /></p>
            
          </ul>

          <ul className='projects-text' style={{ backgroundImage: `url(photoFrame.png)` }}>
            <p className='text'>Discover cute <br />fan projects! </p>
            <p className='button'><CustomButton text="PROJECTS" href="/fans/projects" /></p>
          </ul>
          
          </div>
           <Image src="/lampa2.png" alt="lamp" width={530} height={100} className='lamp'/>
      </div> 
    </main>
  )
}

export default Home;