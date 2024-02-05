import Footer from "@/app/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";
import "../../about-hs/composition.css";
import React from "react";
import TikTok from "@/app/components/TikTok/TikTok";
function Home() {
  const tikTokVideopath1 = "/TT_RAINBOW.mp4";
  const tikTokVideopath2 = "/TT_BALOON.mp4";
  const tikTokVideopath3 = "/TT_OUTFITS.mp4";
  return (
    <main>
      <div className="intro tt">
        <h1 className="mainTitle">FAN PROJECTS</h1>
        <p className="description">
          Welcome to the world of fan projects where fans come together to
          create unforgettable moments!🌟 <br/>From colorful displays to spontaneous
          surprises, each project adds a special touch to the concert
          experience. Join in the excitement, discover the stories behind these
          projects, and watch some fun videos to get a taste of the magic ✨🎉🎶
        </p>
      </div>

      <div className="mainContainer">
        <div className="container project">
          <div className="basic-info">
            <TikTok src={tikTokVideopath1} />
          </div>
          <div className="content lite">
            <h1 className="subTitle">RAINBOW LIGHTS</h1>
            <p className="ttText">
              It became a Love on Tour tradition to make a sea of rainbow
              lights. Its a fan organised project where people give out stickers
              to put on the flasghlights. The color of the sticker is different
              for each sector 🌈✨
            </p>
          </div>
        </div>

        <div className="container project">
          <div className="basic-info">
            <TikTok src={tikTokVideopath2} />
          </div>
          <div className="content lite">
            <h1 className="subTitle">HEART BALLOON</h1>
            <p className="ttText">
              Once a fan let go of the heart balloon during the concert. Harry
              posted the picture of the baloon to his Instagram story making it
              an iconic tour moment. It also became a trend for future concerts
              to bring these balloons ❤️🎈
            </p>
          </div>
        </div>

        <div className="container project">
          <div className="basic-info">
            <TikTok src={tikTokVideopath3} />
          </div>
          <div className="content lite">
            <h1 className="subTitle">CONCERT FASHION</h1>
            <p className="ttText">
              Finding the path to the concert is quite easy, just follow the
              feathers! Feather boas, cowboy hats, sparkles, pink, and other
              campy fashion choices are part of your classic Love On Tour
              outfit 🕺🎉
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
