import Image from "next/image";
import Link from "next/link";
import PhotoFrame from "./components/PhotoFrame/PhotoFrame";
import CustomButton from "./components/CustomButton/CustomButton";
function Home() {
  return (
    <main>
      <div className="finalHeroSection">
        <div className="heroSection">
          <div className="homePageFullText">
            <h1 className="h1homePage">HARRY STYLES</h1>
            <h2 className="h2homePage">THE BIGGEST POPSTAR OF TODAY</h2>
            <p>
              Harry Styles, formerly a member of the world-famous band One
              Direction, has since evolved into a charismatic solo artist
              celebrated for his unique sound. His success transitioning from
              boy band fame to the solo career is best showcased in his
              worldwide tour called Love On Tour.
            </p>
          </div>
          <div className="homePagePhotos">
            <img
              src="harryHERO.svg"
              alt="image1"
              width={554}
              height={911.413}
            />
          </div>
        </div>
        <CustomButton text="ABOUT HS" href="/about-hs" />      
      </div>
      <div className="finalHeroSection2">
        <h2>LOVE ON TOUR</h2>
        <div className="heroSection2Photos">
          <div className="hideOnPhone heroSection2Photos">
        <PhotoFrame
            location="Slane Castle"
            date="June 2023"
            imageSrc="Rectangle 14.svg"
          />       
          <PhotoFrame
            location="Regio Emilia"
            date="July 2023"
            imageSrc="Rectangle 13.svg"
          />  </div>
          <PhotoFrame
            location="New York City"
            date="XV. September 2023"
            imageSrc="Rectangle 15.svg"
          />
        </div>
        <CustomButton text="TOUR GALLERY" href="/lot" />
      </div>
      <div className="finalHeroSection3">
        <h2>FAN EXPERIENCES</h2>
        <div className="heroSection3">
          <p className="fanExperiencesText">
            Have you been to a Harry concert? Or do you want to hear impressions
            and learn more about fan projects? Connect with fans and feel a
            piece of the atmosphere from many “Love on Tour” shows.
          </p>
          <div className="fanExperiencePhoto">
            <img src="harryHouse.svg" alt="house" height={154} width={336} />
          </div>
        </div>
        <CustomButton text="START CONNECTING" href="/fans" />
      </div>
    </main>
  );
}

export default Home;
