import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import CustomButton from "../components/CustomButton/CustomButton";
import "./abouths.css";

function Home() {
  return (
    <main>
      <h1 className="abouths-title">CHOOSE YOUR HARRY:</h1>

      <div className="abouths-container">
        
        <div className="landing1D-text">
          <img
            src="fetus_harry.png"
            alt="imageFetus"
            width={225}
            height={400}
          />
          <div className="overlay">
            <h2 className="abouths-subtitle">
              Discover more about Harry's time in One Direction, one of the
              biggest boybands in the world!
            </h2>
            <ul className="subpageElements">
              <CustomButton text="1D" href="/about-hs/1d" />
            </ul>
          </div>
        </div>

        <div className="landing1D-text">
          <img
            src="harry_grammy.png"
            alt="imageGrammy"
            width={225}
            height={400}
          />
          <div className="overlay">
            <h2 className="abouths-subtitle">Explore Harry's solo carrer!</h2>
            <ul className="subpageElements">
              <CustomButton text="SOLO" href="/about-hs/solo" />
            </ul>
          </div>
        </div>
        <div className="landing1D-text">
          <img
            src="dunkirk.png"
            alt="imageDunkirk"
            width={225}
            height={400}
          />
          <div className="overlay">
            <h2 className="abouths-subtitle">Harry even has a film career! If you're curious check it out</h2>
            <ul className="subpageElements">
              <CustomButton text="FILM" href="/about-hs/film" />
            </ul>
          </div>
        </div>  

      </div>
    </main>
  );
}

export default Home;
