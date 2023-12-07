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
            <img src="harry1.svg" alt="image1" height={160} width={160} />
            <img src="harry2.svg" alt="image1" height={160} width={160} />
            <img src="harry3.svg" alt="image1" height={160} width={160} />
            <img src="harry4.svg" alt="image1" height={160} width={160} />
          </div>
        </div>
        <button type="button" className="aboutHSButton">
        <Link href="/about-hs">ABOUT HS</Link>
        </button>
      </div>
    </main>
  );
}

export default Home;
