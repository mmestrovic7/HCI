import Image from "next/image";
import Link from "next/link";
function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-14">
      <div className="finalHeroSection">
        <div className="heroSection">
          <div className="homePageFullText">
            <h1 className="h1homePage">HARRY STYLES</h1>
            <h2 className="h2homePage">THE BIGGEST POPSTAR OF TODAY</h2>
            <p className="homePageText">
              Harry Styles, formerly a member of the world-famous band One
              Direction, has since evolved into a charismatic solo artist
              celebrated for his unique sound. His success transitioning from
              boy band fame to the solo career is best showcased in his
              worldwide tour called Love On Tour.
            </p>
          </div>
          <div className="homePagePhotos">
            <img src="harryHERO.svg" alt="image1" height={160} width={160} />
       
          </div>
        </div>
        <button type="button" className="aboutHSButton">
          <Link href="/about-hs">ABOUT HS</Link>
        </button>
      </div>
      <div className="finalHeroSection2">
        <h1 className="fanExperiencesTitle">LOVE ON TOUR</h1>
        <div className="heroSection2Photos">
          <div className="slaneCastle">
            <p className="slaneCastleText">
              Slane Castle, <br />
              June 2023
            </p>
            <img
              src="Rectangle 14.svg"
              alt="image21"
              height={363}
              width={244}
            />
          </div>

          <div className="regioEmilia">
            <p className="regioEmiliaText">
              Regio Emilia, <br />
              July 2023
            </p>
            <img
              src="Rectangle 13.svg"
              alt="image22"
              height={363}
              width={244}
            />
          </div>

          <div className="newYork">
            <p className="newYorkText">
              New York City, <br />
              XV. September, 2023
            </p>
            <img
              src="Rectangle 15.svg"
              alt="image23"
              height={363}
              width={244}
            />
          </div>
        </div>
        <button type="button" className="tourGalleryButton">
          <Link href="/lot/gallery">TOUR GALLERY</Link>
        </button>
      </div>
      <div className="finalHeroSection3">
        <h1 className="fanExperiencesTitle">FAN EXPERIENCES</h1>
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
        <button type="button" className="fanExperiencesButton">
          <Link href="/fans">START CONNECTING</Link>
        </button>
      </div>
    </main>
  );
}

export default Home;
