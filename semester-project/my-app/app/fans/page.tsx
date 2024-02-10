import CustomButton from '../components/CustomButton/CustomButton';
import '../about-hs/abouths.css'
import "./fans.css"
import Image from'next/image'
function Home() {
  return (
    <main>    
      <div className="fpPage">
        <Image src="/couch.png" alt="couch" width={450} height={450} className='couch'/>
      <h1 className='abouths-title'>WELCOME TO HARRY'S HOUSE!</h1>
        <div className='fpSubpageElements'>
          <ul className = 'experiences-text' style={{ backgroundImage: `url(photoFrame.png)` }}>
            <p className='text'>Read fan stories! Click 'Experiences' to explore Love on Tour through fans' eyes. 
            Dive into shared experiences and enjoy the journey with us. </p>

            <p className='button'><CustomButton text="EXPERIENCES" href="/fans/experiences" /></p>
            
          </ul>

          <ul className='projects-text' style={{ backgroundImage: `url(photoFrame.png)` }}>
            <p className='text'>Discover cute fan projects! Click 'Projects' to explore the sweetest creations by Love on Tour fans. 
              Enjoy the charm and creativity in every project.</p>
            <p className='button'><CustomButton text="PROJECTS" href="/fans/projects" /></p>
          </ul>
          
          </div>
           <Image src="/image 42.png" alt="lamp" width={300} height={100} className='lamp'/>
      </div> 
    </main>
  )
}

export default Home;