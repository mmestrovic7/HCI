import "../composition.css";
import Image from "next/image";
import Album from "../../components/Album/Album";

function Home() {
  return (
    <main>
      <div className="intro">
        <h1 className="mainTitle">SOLO CAREER</h1>
        <p className="description">
          After One Direction broke off in 2016., Harry Styles has gone on to
          release three incredible albums. <br />
          <br />
          For these albums and songs he got multiple Grammy and BRIT Award wins.
          <br />
        </p>
        <p className="clickToListen">
          (YOU CAN CLICK ON ALBUM COVERS TO LISTEN TO HIS ALBUMS)
        </p>
      </div>
      <div className="mainContainer">
        <div className="container">
          <Album
            title="HARRY STYLES"
            playlistLink="https://www.youtube.com/playlist?list=OLAK5uy_k684NFAsh5fX2ksemLQoP4Uy8IEc_PThg"
            imageSrc="/harrystyles_cover.svg"
            imageAlt="imageHScover"
            year="2017."
          />
          <ul className="content">
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

        <div className="container">
          <Album
            title="FINE LINE"
            playlistLink="https://www.youtube.com/playlist?list=OLAK5uy_l-oeXy89ZqIF0Dw3adjIVcpTKpj_diYNY"
            imageSrc="/fineline_cover.svg"
            imageAlt="imageFineLine"
            year="2019."
          />
          <ul className="content">
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

        <div className="container">
          <Album
            title="HARRY'S HOUSE"
            playlistLink="https://www.youtube.com/playlist?list=OLAK5uy_mlz0XdHjgFO8gVxdQD94aCHsEfpUlgJJ0"
            imageSrc="/harryshouse_cover.svg"
            imageAlt="imageHarryshouse"
            year="2022."
          />

          <ul className="content">
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
