import Link from "next/link";
import "./solo.css";
import Image from "next/image";

function Home() {
  return (
    <main>
      <h1 className="solo-title">SOLO CAREER</h1>
      <p className="solo-text">
        After One Direction broke off in 2016., Harry Styles has gone on to
        release three incredible albums. <br/><br/>For these albums and songs he got
        multiple Grammy and BRIT Award wins.
      </p>
      <div className="solocareer-container">
        <div className="album-container">
          <div className="basic-info">
            <h1 className="album-title">HARRY STYLES</h1>
            <p className="album-year">2017.</p>
            <div className="albumPhoto">
              <Image
                src="harrystyles_cover.svg"
                alt="imageHScover"
                width={50}
                height={50}
                priority
              />
            </div>
          </div>
          <ul className="album-songs">
            <li>1. Meet Me in the Hallway</li>
            <li>2. Sign of the Times</li>
            <li>3. Carolina</li>
            <li>4. Two Ghosts</li>
            <li>5. Sweet Creature</li>
            <li>6. Only Angel</li>
            <li>7. Kiwi</li>
            <li>8. Ever Since New York</li>
            <li>9. Woman</li>
            <li>10. From the Dining Table</li>
          </ul>
        </div>

        <div className="album-container">
          <div className="basic-info">
            <h1 className="album-title">FINE LINE</h1>
            <p className="album-year">2019.</p>
            <div className="albumPhoto">
            <Image
              src="fineline_cover.svg"
              alt="imageFineline"
              width={50}
              height={50}
              priority
            />
            </div>
          </div>
          <ul className="album-songs">
            <li>1. Golden</li>
            <li>2. Watermelon Sugar</li>
            <li>3. Adore You</li>
            <li>4. Lights Up</li>
            <li>5. Cherry</li>
            <li>6. Falling</li>
            <li>7. To Be So Lonely</li>
            <li>8. She</li>
            <li>9. Sunflower, Vol. 6</li>
            <li>10. Canyon Moon</li>
            <li>11. Treat People With Kindness</li>
            <li>12. Fine Line</li>
          </ul>
        </div>

        <div className="album-container">
          <div className="basic-info">
            <h1 className="album-title">HARRY'S HOUSE</h1>
            <p className="album-year">2022.</p>
            <div className="albumPhoto">
            <Image
              src="/about-hs/harryshouse_cover.svg"
              alt="imageHarryshouse"
              width={50}
              height={50}
              priority
            />
            </div>
          </div>

          <ul className="album-songs">
            <li>1. Music for a Sushi Restaurant</li>
            <li>2. Late Night Talking</li>
            <li>3. Grapejuice</li>
            <li>4. As It Was</li>
            <li>5. Daylight</li>
            <li>6. Little Freak</li>
            <li>7. Matilda</li>
            <li>8. Cinema</li>
            <li>9. Daydreaming</li>
            <li>10. Keep Driving</li>
            <li>11. Satellite</li>
            <li>12. Boyfriends</li>
            <li>13. Love of My Life</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Home;