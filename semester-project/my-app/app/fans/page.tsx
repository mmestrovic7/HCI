import Image from 'next/image'
import Link from 'next/link'
import CustomButton from '../components/CustomButton/CustomButton';
import '../about-hs/abouths.css'
import "./fans.css"
function Home() {
  return (
    <main>
      <h1 className='abouths-title'>FAN ACTIVITIES</h1>
        <div className='subpageElements'>
          <ul className = 'experiences-text'>
            <p>Read fan stories! Click 'Experiences' to explore Love on Tour through fans' eyes. 🌟
            Dive into shared experiences and enjoy the journey with us. 🌈</p>

            <CustomButton text="EXPERIENCES" href="/fans/experiences" />
            
          </ul>

          <ul className='projects-text'>
            <p>Discover cute fan projects! Click 'Projects' to explore the sweetest creations by Love on Tour fans. 
              Enjoy the charm and creativity in every project. 🌸✨</p>
            <CustomButton text="PROJECTS" href="/fans/projects" />
          </ul>
          
          </div>
        
      
        
    </main>
  )
}

export default Home;