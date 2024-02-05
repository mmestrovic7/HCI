
import Image from "next/image";
import Link from "next/link";
import "../composition.css";

function Home() {
  return (
    <main>
      <div className="intro ttText">
      <h1 className="mainTitle">FILM CAREER</h1>
      <p className="description">
        Harry Styles, known initially for his music career with One Direction,
        has ventured into acting.<br /><br />
        He made his film debut in Christopher Nolan's
        "Dunkirk" (2017), receiving praise for his performance. Following this
        success, Styles has continued to pursue acting, securing roles in
        projects like "Dunkerque" (2021) and "Don't Worry Darling" (2022).<br /><br />
        His film career shows a successful transition from music to acting, earning
        recognition for his talents in both domains.
      </p>
      <p className="clickToListen">
        (YOU CAN CLICK ON FILM POSTERS TO CHECK THEIR RATINGS ON IMDb)
      </p>
      </div>
      <div className="mainContainer">

        <div className="container">
          <div className="basic-info">
            <h1 className="subTitle">DUNKIRK</h1>
            <div className="photo">
              <a
                href="https://www.imdb.com/title/tt5013056/"
                target="_blank"
              >
                <Image
                  src="/dunkirk_poster.svg"
                  alt="imageDunkirk"
                  width={204}
                  height={300}
                  priority
                />
              </a>
            </div>
            <p className="year">2017.</p>
          </div>
          <div className="content lite">
            <p className="movie-role">
              <strong>HARRY'S ROLE:</strong> Alex
            </p>
            <p className="movie-description">
              <strong>DESCRIPTION:</strong> Allied soldiers from Belgium, the British Commonwealth and Empire, 
              and France are surrounded by the German Army and evacuated during a fierce battle in World War II.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="basic-info">
            <h1 className="subTitle">MY POLICEMAN</h1>
            <div className="photo">
              <a
                href="https://www.imdb.com/title/tt13139228/"
                target="_blank"
              >
                <Image
                  src="/myPoliceman_poster.png"
                  alt="imageMyPoliceman"
                  width={204}
                  height={300}
                  priority
                />
              </a>
            </div>
            <p className="year">2022.</p>
          </div>
          <div className="content lite">
            <p className="movie-role">
              <strong>HARRY'S ROLE:</strong> Younger Tom
            </p>
            <p className="movie-description">
              <strong>DESCRIPTION:</strong> The arrival of Patrick into Marion and Tom's home 
              triggers the exploration of seismic events from 40 years previously.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="basic-info">
            <h1 className="subTitle">DON'T WORRY DARLING</h1>
            <div className="photo">
              <a
                href="https://www.imdb.com/title/tt10731256/?ref_=nv_sr_srsg_0_tt_5_nm_1_q_dont%2520worry%2520dar"
                target="_blank"
              >
                <Image
                  src="/dwd_poster.svg"
                  alt="imageDwd"
                  width={204}
                  height={300}
                  priority
                />
              </a>
            </div>
            <p className="year">2022.</p>
          </div>
          <div className="content lite">
            <p className="movie-role">
              <strong>HARRY'S ROLE:</strong> Jack
            </p>
            <p className="movie-description">
              <strong>DESCRIPTION: </strong>While her husband leaves home everyday to work in a top secret facility, 
              a young 1950s housewife begins to question her life when she notices strange behavior from the other wives in the neighborhood.
            </p>
          </div>
        </div>

        
      </div>
    </main>
  );
}

export default Home;
