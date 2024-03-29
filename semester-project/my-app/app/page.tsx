import CustomButton from "./components/CustomButton/CustomButton";
import HomePagePhoto from "./components/HomePagePhoto/HomePagePhoto";
import Carousel from "./components/Carousel/Carousel";
import { getGalleryEntriesFromContentful,GalleryEntry } from "./content";

async function Home() {
  const galleryEntries: GalleryEntry[] = await getGalleryEntriesFromContentful();
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
          <div className="homePagePhotos ">
            <HomePagePhoto />
          </div>
        </div>
        <CustomButton text="ABOUT HS" href="/about-hs" />
      </div>
      <div className="finalHeroSection2">
        <h2>LOVE ON TOUR</h2>
        <div className="heroSection2Photos">
          <Carousel galleryEntries={galleryEntries} />
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
            <img src="heartBaloon.svg" alt="house" height={100} width={150} />
          </div>
        </div>
        <CustomButton text="START CONNECTING" href="/fans" />
      </div>
    </main>
  );
}

export default Home;
