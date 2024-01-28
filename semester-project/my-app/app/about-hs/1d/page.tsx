import Image from "next/image";
import Link from "next/link";
import "../composition.css";
function Home() {
  return (
    <main>
      <div className="intro">
      <h1 className="mainTitle">ONE DIRECTION</h1>
      <p className="description">
        One Direction, formed on the British television show "The X Factor" in
        2010, swiftly became a global phenomenon with their infectious pop
        sound. <br />
        <br />
        The band's meteoric rise led to widespread acclaim and numerous awards,
        including Grammys and BRITs, solidifying their status as one of the most
        successful boy bands.
      </p>
      <p className="clickToListen">
        (YOU CAN CLICK ON ALBUM COVERS TO LISTEN TO THEIR ALBUMS)
      </p>
      </div>
      <div className="mainContainer">
        <div className="container">
          <div className="basic-info">
            <h1 className="subTitle">UP ALL NIGHT</h1>
            <div className="photo">
              <a
                href="https://www.youtube.com/playlist?list=OLAK5uy_kPecePAIWHnM9rT-phtHGAXE1rkyPO8K0"
                target="_blank"
              >
                <Image
                  src="/upAllNight.svg"
                  alt="imageUpAllNight"
                  width={220}
                  height={220}
                  priority
                />
              </a>
            </div>
            <p className="year">2011.</p>
          </div>
          <ul className="content">
            <li>1. What Makes You Beautiful</li>
            <li>2. Gotta Be You</li>
            <li>3. One Thing</li>
            <li>4. More Than This</li>
            <li>5. Up All Night</li>
            <li>6. I Wish</li>
            <li>7. Tell Me A Lie</li>
            <li>8. Taken</li>
            <li>9. I Want</li>
            <li>10. Everything About You</li>
            <li>11. Same Mistakes</li>
            <li>12. Save You Tonight</li>
            <li>13. Stole My Heart</li>
            <li>14. Stand Up</li>
            <li>15. Moments</li>
          </ul>
        </div>

        <div className="container">
          <div className="basic-info">
            <h1 className="subTitle">TAKE ME HOME</h1>
            <div className="photo">
              <a
                href="https://www.youtube.com/playlist?list=OLAK5uy_nQz3HzBO4sNwnQEi91RTS9iB4eketqrPs"
                target="_blank"
              >
                <Image
                  src="/takeMeHome.svg"
                  alt="imageTakeMeHome"
                  width={220}
                  height={220}
                  priority
                />
              </a>
            </div>
            <p className="year">2012.</p>
          </div>
          <ul className="content">
            <li>1. Live While We're Young</li>
            <li>2. Kiss You</li>
            <li>3. Little Things</li>
            <li>4. C'mon C'mon</li>
            <li>5. Last First Kiss</li>
            <li>6. Heart Attack</li>
            <li>7. Rock Me</li>
            <li>8. Change My Mind</li>
            <li>9. I Would</li>
            <li>10. Over Again</li>
            <li>11. Back For You</li>
            <li>12. They Don't Know About Us</li>
            <li>13. Summer Love</li>
          </ul>
        </div>

        <div className="container">
          <div className="basic-info">
            <h1 className="subTitle">MIDNIGHT MEMORIES</h1>
            <div className="photo">
              <a
                href="https://www.youtube.com/playlist?list=OLAK5uy_k-fR8UG9108cSGptPFWTQpRabw7Kyzc5c"
                target="blank"
              >
                <Image
                  src="/midnightMemories.svg"
                  alt="imageMidnightMmeories"
                  width={220}
                  height={220}
                  priority
                />
              </a>
            </div>
            <p className="year">2013.</p>
          </div>

          <ul className="content">
            <li>1.Best Song Ever</li>
            <li>2. Story Of My Life</li>
            <li>3. Diana</li>
            <li>4. Midnight Memories</li>
            <li>5. You And I</li>
            <li>6. Don't Forget Where You Belong</li>
            <li>7. Strong</li>
            <li>8. Happily</li>
            <li>9. Right Now</li>
            <li>10. Little Black Dress</li>
            <li>11. Through The Dark</li>
            <li>12. Something Great</li>
            <li>13. Little White Lies</li>
            <li>14. Better Than Words</li>
          </ul>
        </div>

        <div className="container">
          <div className="basic-info">
            <h1 className="subTitle">FOUR</h1>
            <div className="photo">
              <a
                href="https://www.youtube.com/playlist?list=OLAK5uy_k4LFwctseSNnXT0MyeNB1j9boPLFjO-ZI"
                target="blank"
              >
                <Image
                  src="/four.svg"
                  alt="imageFour"
                  width={220}
                  height={220}
                  priority
                />
              </a>
            </div>
            <p className="year">2014.</p>
          </div>

          <ul className="content">
            <li>1. Steal My Girl</li>
            <li>2. Ready To Run</li>
            <li>3. Where Do Broken Hearts Go</li>
            <li>4. 18</li>
            <li>5. Girl Almighty</li>
            <li>6. Fool's Gold</li>
            <li>7. Night Changes</li>
            <li>8. No Control</li>
            <li>9. Fireproof</li>
            <li>10. Spaces</li>
            <li>11. Stockholm Syndrome</li>
            <li>12. Clouds</li>
            <li>13. Change Your Ticket</li>
            <li>14. Illusion</li>
            <li>15. Once in a Lifetime</li>
            <li>16. Act My Age</li>
          </ul>
        </div>

        <div className="container">
          <div className="basic-info">
            <h1 className="subTitle">MADE IN THE A.M.</h1>
            <div className="photo">
              <a
                href="https://www.youtube.com/playlist?list=OLAK5uy_kng4OEgFEJ1lxWRj7wjxewLbSAu6vmzzE"
                target="blank"
              >
                <Image
                  src="/madeInTheAm.svg"
                  alt="imagemadeInTheAm"
                  width={220}
                  height={220}
                  priority
                />
              </a>
            </div>
            <p className="year">2015.</p>
          </div>

          <ul className="content">
            <li>1. Hey Angel</li>
            <li>2. Drag Me Down</li>
            <li>3. Perfect</li>
            <li>4. Infinity</li>
            <li>5. End Of The Day</li>
            <li>6. If I Could Fly</li>
            <li>7. Long Way Down</li>
            <li>8. Never Enough</li>
            <li>9. Olivia</li>
            <li>10. What A Feeling</li>
            <li>11. Love You Goodbye</li>
            <li>12. I Want To Write You A Song</li>
            <li>13. History</li>
            <li>14. Temporary Fix</li>
            <li>15. Walking In The Wind</li>
            <li>16. Wolves</li>
            <li>17. A.M.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Home;
